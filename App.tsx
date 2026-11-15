import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  Volume2,
  Languages,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Award,
  Table2,
  BookOpen,
  ClipboardCheck,
  Eye,
  EyeOff,
  Play,
  Pause,
} from 'lucide-react';
import { OptionKey } from './examTypes';
import { TEST_1_QUESTIONS } from './examDataPart1';
import { TEST_2_QUESTIONS } from './examDataPart2';

type ExamChoice = 'test1' | 'test2' | 'all';
type ViewTab = 'exam' | 'key' | 'results';
type ReviewFilter = 'all' | 'wrong' | 'correct' | 'unanswered';

interface AnswerRecord {
  selectedKey: OptionKey;
  isCorrect: boolean;
}

function getUniqueKey(examId: 'test1' | 'test2', qId: number): string {
  return `${examId}-${qId}`;
}

function formatTimer(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function estimateCefrLevel(correct: number, total: number): { level: string; titleHy: string; descHy: string } {
  const ratio = total > 0 ? correct / total : 0;
  if (ratio >= 0.9) {
    return {
      level: 'C1',
      titleHy: 'Առաջադեմ մակարդակ (Dominio operativo eficaz)',
      descHy:
        'Դուք վարժ տիրապետում եք թե՛ առօրյա, թե՛ աշխատանքային բարդ իրավիճակներին, Subjuntivo-ի բոլոր ժամանակաձևերին և պաշտոնական ոճին։',
    };
  }
  if (ratio >= 0.75) {
    return {
      level: 'B2',
      titleHy: 'Բարձր միջին մակարդակ (Avanzado)',
      descHy:
        'Դուք վստահորեն հասկանում եք աշխատանքային փաստաթղթերը, պայմանագրերը և կարողանում եք գրագետ արտահայտվել պաշտոնական միջավայրում։',
    };
  }
  if (ratio >= 0.55) {
    return {
      level: 'B1',
      titleHy: 'Միջին մակարդակ (Umbral)',
      descHy:
        'Դուք լավ եք կողմնորոշվում առօրյա և աշխատանքային ստանդարտ իրավիճակներում, սակայն արժե ամրապնդել Subjuntivo-ն և բարդ կառույցները։',
    };
  }
  if (ratio >= 0.35) {
    return {
      level: 'A2',
      titleHy: 'Հիմնական մակարդակ (Plataforma)',
      descHy:
        'Դուք ունեք բազային գիտելիքներ և կարողանում եք հաղորդակցվել պարզ թեմաներով․ խորհուրդ է տրվում կրկնել անցյալ ժամանակներն ու բառապաշարը։',
    };
  }
  return {
    level: 'A1',
    titleHy: 'Սկզբնական մակարդակ (Acceso)',
    descHy:
      'Դուք սկսում եք ծանոթանալ իսպաներենի հիմունքներին։ Սեղմե՛ք իսպաներեն տեքստերի վրա՝ հայերեն թարգմանությունը և բացատրությունները ուսումնասիրելու համար։',
  };
}

export default function App() {
  const [activeExam, setActiveExam] = useState<ExamChoice>('test1');
  const [activeView, setActiveView] = useState<ViewTab>('exam');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [answers, setAnswers] = useState<Record<string, AnswerRecord>>({});
  const [openPromptTranslations, setOpenPromptTranslations] = useState<Record<string, boolean>>({});
  const [openExampleTranslations, setOpenExampleTranslations] = useState<Record<string, boolean>>({});
  const [openOptionTranslations, setOpenOptionTranslations] = useState<Record<string, boolean>>({});
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);

  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const activeItems = useMemo(() => {
    if (activeExam === 'test1') {
      return TEST_1_QUESTIONS.map((q) => ({ examId: 'test1' as const, question: q }));
    }
    if (activeExam === 'test2') {
      return TEST_2_QUESTIONS.map((q) => ({ examId: 'test2' as const, question: q }));
    }
    return [
      ...TEST_1_QUESTIONS.map((q) => ({ examId: 'test1' as const, question: q })),
      ...TEST_2_QUESTIONS.map((q) => ({ examId: 'test2' as const, question: q })),
    ];
  }, [activeExam]);

  const currentItem = activeItems[currentIndex] || activeItems[0];
  const currentKey = getUniqueKey(currentItem.examId, currentItem.question.id);
  const currentAnswer = answers[currentKey];

  useEffect(() => {
    if (!timerActive || activeView !== 'exam') return;
    const interval = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [timerActive, activeView]);

  const stats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    let wrong = 0;

    const partStats: Record<number, { total: number; correct: number; answered: number }> = {
      1: { total: 0, correct: 0, answered: 0 },
      2: { total: 0, correct: 0, answered: 0 },
      3: { total: 0, correct: 0, answered: 0 },
      4: { total: 0, correct: 0, answered: 0 },
    };

    for (const item of activeItems) {
      const k = getUniqueKey(item.examId, item.question.id);
      const ans = answers[k];
      partStats[item.question.part].total += 1;
      if (ans) {
        answered += 1;
        partStats[item.question.part].answered += 1;
        if (ans.isCorrect) {
          correct += 1;
          partStats[item.question.part].correct += 1;
        } else {
          wrong += 1;
        }
      }
    }

    const total = activeItems.length;
    const overallPct = total > 0 ? Math.round((correct / total) * 100) : 0;

    return { total, answered, correct, wrong, overallPct, partStats };
  }, [activeItems, answers]);

  const handleSelectExam = (choice: ExamChoice) => {
    setActiveExam(choice);
    setCurrentIndex(0);
    setActiveView('exam');
  };

  const handleSelectOption = (optionKey: OptionKey) => {
    const q = currentItem.question;
    const isCorrect = optionKey === q.correctKey;
    setAnswers((prev) => ({
      ...prev,
      [currentKey]: {
        selectedKey: optionKey,
        isCorrect,
      },
    }));
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setTimerActive(true);
    setActiveView('exam');
  };

  const handleResetExam = () => {
    if (activeExam === 'all') {
      setAnswers({});
    } else {
      setAnswers((prev) => {
        const next = { ...prev };
        for (const item of activeItems) {
          delete next[getUniqueKey(item.examId, item.question.id)];
        }
        return next;
      });
    }
    setCurrentIndex(0);
    setElapsedSeconds(0);
    setExamStarted(false);
    setTimerActive(false);
    setActiveView('exam');
  };

  const togglePromptTranslation = (key: string) => {
    setOpenPromptTranslations((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExampleTranslation = (key: string) => {
    setOpenExampleTranslations((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleOptionTranslation = (e: React.MouseEvent, optionUniqueKey: string) => {
    e.stopPropagation();
    setOpenOptionTranslations((prev) => ({
      ...prev,
      [optionUniqueKey]: !prev[optionUniqueKey],
    }));
  };

  const speakSpanish = (e: React.MouseEvent, text: string, id: string) => {
    e.stopPropagation();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleaned = text.replace(/___/g, '...');
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = 'es-ES';
    utterance.rate = 0.92;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (activeView !== 'exam') return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        setCurrentIndex((i) => Math.min(activeItems.length - 1, i + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((i) => Math.max(0, i - 1));
      } else if (e.key === '1' || e.key.toLowerCase() === 'a') {
        handleSelectOption('A');
      } else if (e.key === '2' || e.key.toLowerCase() === 'b') {
        handleSelectOption('B');
      } else if (e.key === '3' || e.key.toLowerCase() === 'c') {
        handleSelectOption('C');
      } else if (e.key === '4' || e.key.toLowerCase() === 'd') {
        handleSelectOption('D');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const isPromptTranslated = showAllTranslations || !!openPromptTranslations[currentKey];
  const isExampleTranslated = showAllTranslations || !!openExampleTranslations[currentKey];

  const selectedOptionObj = currentAnswer
    ? currentItem.question.options.find((o) => o.key === currentAnswer.selectedKey)
    : undefined;
  const correctOptionObj = currentItem.question.options.find(
    (o) => o.key === currentItem.question.correctKey
  );

  const cefrSummary = estimateCefrLevel(stats.correct, stats.total);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EB] text-slate-900">
      {/* Top Bar Contract: Deep Saturated Burgundy Header with Golden & Orange Accents */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-[#6B0F26] via-[#881337] to-[#9A3412] text-white border-b-2 border-amber-400 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => setActiveView('exam')}
            className="text-xl sm:text-2xl font-bold tracking-tight text-amber-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-300 rounded"
          >
            Español · Հայերեն
          </button>

          {/* Zone 2: Concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm xl:text-base font-medium text-amber-50/90">
            <button
              type="button"
              onClick={() => handleSelectExam('test1')}
              className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer ${
                activeView === 'exam' && activeExam === 'test1'
                  ? 'border-amber-300 text-amber-300 font-bold'
                  : 'border-transparent hover:text-amber-200'
              }`}
            >
              Թեստ 1 (1–40)
            </button>
            <button
              type="button"
              onClick={() => handleSelectExam('test2')}
              className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer ${
                activeView === 'exam' && activeExam === 'test2'
                  ? 'border-amber-300 text-amber-300 font-bold'
                  : 'border-transparent hover:text-amber-200'
              }`}
            >
              Թեստ 2 (1–40)
            </button>
            <button
              type="button"
              onClick={() => handleSelectExam('all')}
              className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer ${
                activeView === 'exam' && activeExam === 'all'
                  ? 'border-amber-300 text-amber-300 font-bold'
                  : 'border-transparent hover:text-amber-200'
              }`}
            >
              Ամբողջը (80 հարց)
            </button>
            <button
              type="button"
              onClick={() => setActiveView('key')}
              className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer ${
                activeView === 'key'
                  ? 'border-amber-300 text-amber-300 font-bold'
                  : 'border-transparent hover:text-amber-200'
              }`}
            >
              Պատասխանների աղյուսակ
            </button>
            <button
              type="button"
              onClick={() => {
                setTimerActive(false);
                setActiveView('results');
              }}
              className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer ${
                activeView === 'results'
                  ? 'border-amber-300 text-amber-300 font-bold'
                  : 'border-transparent hover:text-amber-200'
              }`}
            >
              Արդյունքներ
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => {
                if (activeView === 'exam') {
                  if (!examStarted) {
                    handleStartExam();
                  } else {
                    setTimerActive(false);
                    setActiveView('results');
                  }
                } else {
                  setActiveView('exam');
                }
              }}
              className="px-4 py-2.5 text-sm sm:text-base font-bold text-[#450A19] bg-gradient-to-r from-amber-300 to-orange-400 rounded-lg hover:from-amber-200 hover:to-orange-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              {activeView === 'exam'
                ? !examStarted
                  ? 'Սկսել քննությունը'
                  : 'Ավարտել քննությունը'
                : 'Վերադառնալ քննությանը'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Secondary Nav */}
      <div className="lg:hidden bg-[#7F1D1D] border-b border-amber-400/50 px-4 py-2.5 flex items-center gap-2 overflow-x-auto">
        <button
          type="button"
          onClick={() => handleSelectExam('test1')}
          className={`px-3.5 py-1.5 text-sm font-semibold rounded-md whitespace-nowrap shrink-0 ${
            activeView === 'exam' && activeExam === 'test1'
              ? 'bg-amber-400 text-[#450A19]'
              : 'bg-[#6B0F26] text-amber-50'
          }`}
        >
          Թեստ 1
        </button>
        <button
          type="button"
          onClick={() => handleSelectExam('test2')}
          className={`px-3.5 py-1.5 text-sm font-semibold rounded-md whitespace-nowrap shrink-0 ${
            activeView === 'exam' && activeExam === 'test2'
              ? 'bg-amber-400 text-[#450A19]'
              : 'bg-[#6B0F26] text-amber-50'
          }`}
        >
          Թեստ 2
        </button>
        <button
          type="button"
          onClick={() => handleSelectExam('all')}
          className={`px-3.5 py-1.5 text-sm font-semibold rounded-md whitespace-nowrap shrink-0 ${
            activeView === 'exam' && activeExam === 'all'
              ? 'bg-amber-400 text-[#450A19]'
              : 'bg-[#6B0F26] text-amber-50'
          }`}
        >
          80 հարց
        </button>
        <button
          type="button"
          onClick={() => setActiveView('key')}
          className={`px-3.5 py-1.5 text-sm font-semibold rounded-md whitespace-nowrap shrink-0 ${
            activeView === 'key' ? 'bg-amber-400 text-[#450A19]' : 'bg-[#6B0F26] text-amber-50'
          }`}
        >
          Աղյուսակ
        </button>
        <button
          type="button"
          onClick={() => {
            setTimerActive(false);
            setActiveView('results');
          }}
          className={`px-3.5 py-1.5 text-sm font-semibold rounded-md whitespace-nowrap shrink-0 ${
            activeView === 'results' ? 'bg-amber-400 text-[#450A19]' : 'bg-[#6B0F26] text-amber-50'
          }`}
        >
          Արդյունքներ
        </button>
      </div>

      {/* Sub-header / Workspace Toolbar */}
      <section className="bg-gradient-to-r from-amber-100/90 via-orange-50 to-rose-50/90 border-b border-orange-200">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#6B0F26] tracking-tight text-balance">
              {activeExam === 'test1' && 'Test de nivel de español — 40 preguntas (A1–C1)'}
              {activeExam === 'test2' && 'Test de español — 40 preguntas nuevas (A1–C1)'}
              {activeExam === 'all' && 'Ամբողջական քննություն — 80 հարց (Թեստ 1 + Թեստ 2 · A1–C1)'}
            </h1>
            <p className="text-sm sm:text-base text-[#7C2D12] mt-1 font-medium">
              Իսպաներենի մակարդակի ինտերակտիվ քննություն · Սեղմի՛ր իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը բացելու համար
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {!examStarted ? (
              <button
                type="button"
                onClick={handleStartExam}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-bold rounded-lg bg-gradient-to-r from-[#881337] to-orange-600 text-amber-100 hover:from-[#6B0F26] hover:to-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Սկսել</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setTimerActive((prev) => !prev)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  timerActive
                    ? 'bg-amber-200/90 border-orange-400 text-[#6B0F26] hover:bg-amber-300'
                    : 'bg-orange-600 border-orange-700 text-white hover:bg-orange-700'
                }`}
              >
                {timerActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{timerActive ? 'Դադարեցնել ժամանակը' : 'Շարունակել ժամանակը'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setShowAllTranslations((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                showAllTranslations
                  ? 'bg-orange-600 border-orange-700 text-white shadow-sm'
                  : 'bg-white border-orange-300 text-[#7C2D12] hover:bg-amber-50'
              }`}
            >
              {showAllTranslations ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              <span>
                {showAllTranslations ? 'Թարգմանությունները բաց են' : 'Թարգմանություն՝ սեղմելով'}
              </span>
            </button>

            <button
              type="button"
              onClick={handleResetExam}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg border border-rose-300 bg-white text-[#881337] hover:bg-rose-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Սկսել նորից</span>
            </button>
          </div>
        </div>

        {/* Live Tabular Metrics Strip */}
        <div className="border-t border-amber-300/80 bg-[#FEF3C7]/90">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-sm text-[#7C2D12]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <span>
                Հարց՝{' '}
                <strong className="font-mono-tabular text-[#6B0F26] text-base">
                  {currentIndex + 1} / {stats.total}
                </strong>
              </span>
              <span aria-hidden="true" className="text-orange-400">·</span>
              <span>
                Պատասխանված՝{' '}
                <strong className="font-mono-tabular text-[#6B0F26] text-base">
                  {stats.answered} / {stats.total}
                </strong>
              </span>
              <span aria-hidden="true" className="text-orange-400">·</span>
              <span className="text-emerald-800 font-medium">
                Ճիշտ՝ <strong className="font-mono-tabular text-base">{stats.correct}</strong>
              </span>
              <span aria-hidden="true" className="text-orange-400">·</span>
              <span className="text-[#9F1239] font-medium">
                Սխալ՝ <strong className="font-mono-tabular text-base">{stats.wrong}</strong>
              </span>
              <span aria-hidden="true" className="text-orange-400">·</span>
              <span>
                Արդյունք՝ <strong className="font-mono-tabular text-[#6B0F26] text-base">{stats.overallPct}%</strong>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span>
                Մակարդակ՝{' '}
                <strong className="font-mono-tabular text-[#881337] text-base">{cefrSummary.level}</strong>
              </span>
              <span aria-hidden="true" className="text-orange-400">·</span>
              <span>
                Ժամանակ՝{' '}
                <strong className="font-mono-tabular text-[#6B0F26] text-base">{formatTimer(elapsedSeconds)}</strong>
                {!examStarted && (
                  <span className="ml-1.5 text-xs font-semibold text-[#9A3412]">(Սեղմի՛ր «Սկսել»)</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-[1320px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeView === 'exam' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            {/* Left / Main Zone: Interactive Question Stage */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                {/* Unboxed Typographic Question Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-orange-100">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-[#7C2D12]">
                    <span className="font-bold text-[#881337]">
                      {currentItem.examId === 'test1' ? 'Թեստ 1' : 'Թեստ 2'}
                    </span>
                    <span aria-hidden="true" className="text-orange-400">·</span>
                    <span className="font-medium">{currentItem.question.partTitleHy}</span>
                    <span aria-hidden="true" className="text-orange-400">·</span>
                    <span className="font-semibold text-orange-700">
                      Մակարդակ {currentItem.question.levelLabel}
                    </span>
                  </div>
                  <span className="font-mono-tabular text-sm font-bold text-[#881337]">
                    Հարց #{currentItem.question.id}
                  </span>
                </div>

                {/* Clickable Spanish Question Prompt */}
                <div className="mt-6">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => togglePromptTranslation(currentKey)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        togglePromptTranslation(currentKey);
                      }
                    }}
                    className="group w-full text-left rounded-xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-orange-50/75 to-yellow-50 hover:from-amber-100/90 hover:to-orange-100/70 hover:border-orange-500 transition-colors p-5 sm:p-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-600"
                    title="Սեղմի՛ր իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը բացելու համար"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#450A19] leading-relaxed">
                        {currentItem.question.promptEs}
                      </h2>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={(e) =>
                            speakSpanish(e, currentItem.question.promptEs, `prompt-${currentKey}`)
                          }
                          aria-label="Լսել իսպաներեն արտասանությունը"
                          className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                            speakingId === `prompt-${currentKey}`
                              ? 'bg-[#881337] text-amber-200 border-[#6B0F26]'
                              : 'bg-white text-orange-700 border-orange-300 hover:bg-orange-600 hover:text-white'
                          }`}
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-3.5 flex items-center gap-2 text-sm font-bold text-[#C2410C]">
                      <Languages className="w-4 h-4 shrink-0" />
                      <span>
                        {isPromptTranslated
                          ? 'Թաքցնել հայերեն թարգմանությունը'
                          : 'Սեղմի՛ր իսպաներենի վրա՝ հայերեն թարգմանությունը բացելու համար'}
                      </span>
                    </div>

                    {isPromptTranslated && (
                      <div className="mt-4 pt-4 border-t border-amber-300/80 text-base sm:text-lg font-medium text-[#450A19] leading-relaxed">
                        {currentItem.question.promptHy}
                      </div>
                    )}
                  </div>
                </div>

                {/* Options A, B, C, D */}
                <div className="mt-6 space-y-3.5" role="radiogroup" aria-label="Պատասխանի տարբերակներ">
                  {currentItem.question.options.map((opt) => {
                    const isSelected = currentAnswer?.selectedKey === opt.key;
                    const isCorrectOption = opt.key === currentItem.question.correctKey;
                    const hasAnswered = !!currentAnswer;
                    const optTransKey = `${currentKey}-${opt.key}`;
                    const showOptTranslation =
                      !opt.isArmenianOnly &&
                      (showAllTranslations || !!openOptionTranslations[optTransKey]);

                    let containerStyle =
                      'border-amber-200 bg-white hover:border-orange-500 hover:bg-amber-50/50';
                    let badgeStyle = 'bg-amber-100 text-[#6B0F26] border-amber-300';

                    if (hasAnswered) {
                      if (isCorrectOption) {
                        containerStyle = 'border-emerald-500 bg-emerald-50/80';
                        badgeStyle = 'bg-emerald-700 text-white border-emerald-700';
                      } else if (isSelected && !isCorrectOption) {
                        containerStyle = 'border-[#9F1239] bg-rose-50/90';
                        badgeStyle = 'bg-[#881337] text-white border-[#881337]';
                      } else {
                        containerStyle = 'border-amber-200/70 bg-white opacity-80';
                      }
                    }

                    return (
                      <div
                        key={opt.key}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSelectOption(opt.key)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelectOption(opt.key);
                          }
                        }}
                        className={`w-full text-left rounded-xl border-2 p-4 sm:p-5 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-600 ${containerStyle}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-4 min-w-0 flex-1">
                            <span
                              className={`font-mono-tabular w-9 h-9 rounded-lg border text-sm sm:text-base font-bold flex items-center justify-center shrink-0 mt-0.5 ${badgeStyle}`}
                            >
                              {opt.key}
                            </span>

                            <div className="min-w-0 flex-1">
                              <div className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                                {opt.es}
                              </div>

                              {showOptTranslation && (
                                <div className="mt-2 text-sm sm:text-base text-[#7C2D12] font-medium leading-snug">
                                  {opt.hy}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {!opt.isArmenianOnly && (
                              <button
                                type="button"
                                onClick={(e) => toggleOptionTranslation(e, optTransKey)}
                                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg border border-amber-300 bg-amber-100/80 text-[#7C2D12] hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                                title="Բացել հայերեն թարգմանությունը"
                              >
                                <Languages className="w-4 h-4" />
                                <span>{openOptionTranslations[optTransKey] ? 'Փակել' : 'Հայերեն'}</span>
                              </button>
                            )}

                            {!opt.isArmenianOnly && (
                              <button
                                type="button"
                                onClick={(e) => speakSpanish(e, opt.es, `opt-${optTransKey}`)}
                                aria-label={`Լսել ${opt.key} տարբերակը`}
                                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                                  speakingId === `opt-${optTransKey}`
                                    ? 'bg-[#881337] text-amber-200 border-[#6B0F26]'
                                    : 'bg-white text-orange-700 border-orange-200 hover:bg-orange-50'
                                }`}
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            )}

                            {hasAnswered && isCorrectOption && (
                              <CheckCircle2
                                className="w-6 h-6 text-emerald-700 shrink-0"
                                aria-label="Ճիշտ պատասխան"
                              />
                            )}
                            {hasAnswered && isSelected && !isCorrectOption && (
                              <XCircle
                                className="w-6 h-6 text-[#9F1239] shrink-0"
                                aria-label="Սխալ պատասխան"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Immediate Diagnostic Explanation Box (Correct OR Incorrect) */}
                {currentAnswer && (
                  <div
                    className={`mt-6 rounded-xl border-2 p-5 sm:p-6 ${
                      currentAnswer.isCorrect
                        ? 'bg-emerald-50/80 border-emerald-400'
                        : 'bg-rose-50/90 border-[#9F1239]'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {currentAnswer.isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-[#881337] shrink-0 mt-0.5" />
                      )}

                      <div className="space-y-3.5 flex-1 min-w-0">
                        <div>
                          <div
                            className={`text-lg sm:text-xl font-bold ${
                              currentAnswer.isCorrect ? 'text-emerald-900' : 'text-[#6B0F26]'
                            }`}
                          >
                            {currentAnswer.isCorrect
                              ? 'Ճիշտ է։ Գերազանց պատասխան'
                              : `Սխալ է։ Դուք ընտրեցիք ${currentAnswer.selectedKey} տարբերակը`}
                          </div>
                          {!currentAnswer.isCorrect && correctOptionObj && (
                            <p className="text-base sm:text-lg font-bold text-emerald-800 mt-1.5">
                              Ճիշտ պատասխանն է՝ {correctOptionObj.key}) {correctOptionObj.es}
                            </p>
                          )}
                        </div>

                        {!currentAnswer.isCorrect && selectedOptionObj?.wrongReasonHy && (
                          <div className="rounded-lg bg-white border border-rose-300 p-4 text-base text-slate-900 leading-relaxed">
                            <span className="font-bold text-[#881337]">
                              Ինչո՞ւ է {selectedOptionObj.key} տարբերակը սխալ․{' '}
                            </span>
                            {selectedOptionObj.wrongReasonHy}
                          </div>
                        )}

                        <div className="rounded-lg bg-white border border-amber-300 p-4 text-base text-slate-900 leading-relaxed">
                          <span className="font-bold text-emerald-800">
                            Ինչո՞ւ է {currentItem.question.correctKey} տարբերակը ճիշտ․{' '}
                          </span>
                          {currentItem.question.whyCorrectHy}
                          {currentItem.question.grammarNoteHy && (
                            <p className="mt-2.5 pt-2.5 border-t border-amber-200 text-sm sm:text-base font-semibold text-[#9A3412]">
                              {currentItem.question.grammarNoteHy}
                            </p>
                          )}
                        </div>

                        {currentItem.question.exampleEs && currentItem.question.exampleHy && (
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleExampleTranslation(currentKey)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleExampleTranslation(currentKey);
                              }
                            }}
                            className="rounded-lg bg-amber-50 border border-amber-300 p-4 cursor-pointer hover:border-orange-500 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-base sm:text-lg font-bold text-[#450A19]">
                                {currentItem.question.exampleEs}
                              </div>
                              <button
                                type="button"
                                onClick={(e) =>
                                  speakSpanish(
                                    e,
                                    currentItem.question.exampleEs || '',
                                    `ex-${currentKey}`
                                  )
                                }
                                aria-label="Լսել ամբողջական նախադասությունը"
                                className="p-2 rounded-lg border border-orange-300 bg-white text-orange-700 hover:bg-orange-600 hover:text-white cursor-pointer"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="mt-2 flex items-center gap-1.5 text-sm sm:text-base text-[#9A3412] font-semibold">
                              <Languages className="w-4 h-4 shrink-0" />
                              <span>
                                {isExampleTranslated
                                  ? currentItem.question.exampleHy
                                  : 'Սեղմի՛ր՝ ամբողջական նախադասության հայերեն թարգմանությունը տեսնելու համար'}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Stage Footer Navigation */}
                <div className="mt-7 pt-5 border-t border-orange-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-semibold rounded-lg border border-orange-300 bg-amber-50 text-[#6B0F26] hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Նախորդը</span>
                  </button>

                  <div className="hidden sm:block text-xs sm:text-sm text-[#7C2D12] font-medium">
                    Ստեղներ՝ A/B/C/D կամ 1–4 · ← / →
                  </div>

                  {currentIndex < activeItems.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentIndex((i) => Math.min(activeItems.length - 1, i + 1))}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-bold rounded-lg bg-[#881337] text-amber-100 hover:bg-[#6B0F26] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
                    >
                      <span>Հաջորդը</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setTimerActive(false);
                        setActiveView('results');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-bold rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
                    >
                      <Award className="w-5 h-5" />
                      <span>Տեսնել արդյունքները</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Zone: Question Navigator & Part Breakdown */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white border-2 border-orange-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-orange-100">
                  <h3 className="text-base sm:text-lg font-bold text-[#6B0F26]">Հարցերի քարտեզ</h3>
                  <span className="font-mono-tabular text-sm font-bold text-[#9A3412]">
                    {stats.answered} / {stats.total}
                  </span>
                </div>

                {/* Saturated Gradient Progress Bar */}
                <div className="mt-3.5 w-full h-2.5 bg-amber-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 via-orange-600 to-[#881337] transition-all duration-200"
                    style={{ width: `${(stats.answered / stats.total) * 100}%` }}
                  />
                </div>

                {/* Number Grid */}
                <div className="mt-4 grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2">
                  {activeItems.map((item, idx) => {
                    const k = getUniqueKey(item.examId, item.question.id);
                    const ans = answers[k];
                    const isCurrent = idx === currentIndex;

                    let btnClass =
                      'bg-amber-50/70 text-[#6B0F26] border-amber-200 hover:border-orange-500 hover:bg-amber-100';
                    let indicator = '';

                    if (ans?.isCorrect) {
                      btnClass = 'bg-emerald-100 text-emerald-900 border-emerald-400';
                      indicator = '✓';
                    } else if (ans && !ans.isCorrect) {
                      btnClass = 'bg-rose-100 text-[#881337] border-[#9F1239]';
                      indicator = '✕';
                    }

                    if (isCurrent) {
                      btnClass += ' ring-2 ring-orange-600 ring-offset-1 font-bold';
                    }

                    return (
                      <button
                        key={k}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`font-mono-tabular h-10 rounded-lg border text-sm flex items-center justify-center gap-0.5 transition-all cursor-pointer ${btnClass}`}
                        title={`${item.examId === 'test1' ? 'Թեստ 1' : 'Թեստ 2'} · Հարց ${item.question.id}`}
                      >
                        <span>
                          {activeExam === 'all'
                            ? `${item.examId === 'test1' ? '1.' : '2.'}${item.question.id}`
                            : item.question.id}
                        </span>
                        {indicator && <span className="text-xs">{indicator}</span>}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-orange-100 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm font-medium text-[#7C2D12]">
                  <span className="text-emerald-800">✓ Ճիշտ ({stats.correct})</span>
                  <span className="text-[#881337]">✕ Սխալ ({stats.wrong})</span>
                  <span>○ Մնացած ({stats.total - stats.answered})</span>
                </div>
              </div>

              {/* Part-by-Part Level Breakdown */}
              <div className="bg-white border-2 border-orange-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-[#6B0F26] pb-3 border-b border-orange-100">
                  Մասերի վիճակագրություն
                </h3>
                <div className="mt-4 space-y-3.5">
                  {([1, 2, 3, 4] as const).map((partNum) => {
                    const p = stats.partStats[partNum];
                    const labels: Record<number, string> = {
                      1: 'Մաս 1 · A1–A2',
                      2: 'Մաս 2 · A2–B1',
                      3: 'Մաս 3 · B1–B2',
                      4: 'Մաս 4 · B2–C1',
                    };
                    const pct = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
                    return (
                      <div key={partNum} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-semibold text-[#450A19]">{labels[partNum]}</span>
                          <span className="font-mono-tabular font-bold text-[#9A3412]">
                            {p.correct}/{p.total} ({pct}%)
                          </span>
                        </div>
                        <div className="w-full h-2 bg-amber-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-[#881337] transition-all duration-200"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Answer Key Table View (Clave de respuestas) */}
        {activeView === 'key' && (
          <div className="space-y-8">
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-orange-200">
                <div>
                  <h2 className="text-2xl font-bold text-[#6B0F26]">
                    Clave de respuestas — Ճիշտ պատասխանների աղյուսակ
                  </h2>
                  <p className="text-base text-[#7C2D12] mt-1">
                    Սեղմի՛ր ցանկացած տողի վրա՝ տվյալ հարցին և դրա մանրամասն բացատրությանը անցնելու համար։
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#881337]">
                  <Table2 className="w-5 h-5" />
                  <span className="text-base font-bold">80 հարց (Թեստ 1 + Թեստ 2)</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Test 1 Table */}
                <div>
                  <h3 className="text-lg font-bold text-[#881337] mb-3">
                    Թեստ 1 — Test de nivel de español (1–40)
                  </h3>
                  <div className="overflow-x-auto border-2 border-amber-300 rounded-xl">
                    <table className="w-full text-base text-left">
                      <thead className="bg-amber-100 border-b border-amber-300 text-sm text-[#6B0F26]">
                        <tr>
                          <th className="py-3 px-4 font-bold">Pregunta</th>
                          <th className="py-3 px-4 font-bold">Respuesta</th>
                          <th className="py-3 px-4 font-bold border-l border-amber-300">Pregunta</th>
                          <th className="py-3 px-4 font-bold">Respuesta</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100">
                        {Array.from({ length: 20 }, (_, i) => {
                          const leftQ = TEST_1_QUESTIONS[i];
                          const rightQ = TEST_1_QUESTIONS[i + 20];
                          const leftAns = answers[getUniqueKey('test1', leftQ.id)];
                          const rightAns = answers[getUniqueKey('test1', rightQ.id)];
                          return (
                            <tr key={i} className="hover:bg-amber-50/70">
                              <td className="py-2.5 px-4 font-mono-tabular">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveExam('test1');
                                    setCurrentIndex(i);
                                    setActiveView('exam');
                                  }}
                                  className="text-orange-700 hover:underline font-bold cursor-pointer"
                                >
                                  {leftQ.id}
                                </button>
                              </td>
                              <td className="py-2.5 px-4 font-mono-tabular font-bold text-[#450A19]">
                                {leftQ.correctKey}
                                {leftAns && (
                                  <span
                                    className={`ml-2 text-sm ${
                                      leftAns.isCorrect ? 'text-emerald-700' : 'text-[#9F1239]'
                                    }`}
                                  >
                                    {leftAns.isCorrect ? '✓' : `✕ (${leftAns.selectedKey})`}
                                  </span>
                                )}
                              </td>
                              <td className="py-2.5 px-4 font-mono-tabular border-l border-amber-200">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveExam('test1');
                                    setCurrentIndex(i + 20);
                                    setActiveView('exam');
                                  }}
                                  className="text-orange-700 hover:underline font-bold cursor-pointer"
                                >
                                  {rightQ.id}
                                </button>
                              </td>
                              <td className="py-2.5 px-4 font-mono-tabular font-bold text-[#450A19]">
                                {rightQ.correctKey}
                                {rightAns && (
                                  <span
                                    className={`ml-2 text-sm ${
                                      rightAns.isCorrect ? 'text-emerald-700' : 'text-[#9F1239]'
                                    }`}
                                  >
                                    {rightAns.isCorrect ? '✓' : `✕ (${rightAns.selectedKey})`}
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Test 2 Table */}
                <div>
                  <h3 className="text-lg font-bold text-[#881337] mb-3">
                    Թեստ 2 — Test de español (40 preguntas nuevas, 1–40)
                  </h3>
                  <div className="overflow-x-auto border-2 border-amber-300 rounded-xl">
                    <table className="w-full text-base text-left">
                      <thead className="bg-amber-100 border-b border-amber-300 text-sm text-[#6B0F26]">
                        <tr>
                          <th className="py-3 px-4 font-bold">Pregunta</th>
                          <th className="py-3 px-4 font-bold">Respuesta</th>
                          <th className="py-3 px-4 font-bold border-l border-amber-300">Pregunta</th>
                          <th className="py-3 px-4 font-bold">Respuesta</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100">
                        {Array.from({ length: 20 }, (_, i) => {
                          const leftQ = TEST_2_QUESTIONS[i];
                          const rightQ = TEST_2_QUESTIONS[i + 20];
                          const leftAns = answers[getUniqueKey('test2', leftQ.id)];
                          const rightAns = answers[getUniqueKey('test2', rightQ.id)];
                          return (
                            <tr key={i} className="hover:bg-amber-50/70">
                              <td className="py-2.5 px-4 font-mono-tabular">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveExam('test2');
                                    setCurrentIndex(i);
                                    setActiveView('exam');
                                  }}
                                  className="text-orange-700 hover:underline font-bold cursor-pointer"
                                >
                                  {leftQ.id}
                                </button>
                              </td>
                              <td className="py-2.5 px-4 font-mono-tabular font-bold text-[#450A19]">
                                {leftQ.correctKey}
                                {leftAns && (
                                  <span
                                    className={`ml-2 text-sm ${
                                      leftAns.isCorrect ? 'text-emerald-700' : 'text-[#9F1239]'
                                    }`}
                                  >
                                    {leftAns.isCorrect ? '✓' : `✕ (${leftAns.selectedKey})`}
                                  </span>
                                )}
                              </td>
                              <td className="py-2.5 px-4 font-mono-tabular border-l border-amber-200">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveExam('test2');
                                    setCurrentIndex(i + 20);
                                    setActiveView('exam');
                                  }}
                                  className="text-orange-700 hover:underline font-bold cursor-pointer"
                                >
                                  {rightQ.id}
                                </button>
                              </td>
                              <td className="py-2.5 px-4 font-mono-tabular font-bold text-[#450A19]">
                                {rightQ.correctKey}
                                {rightAns && (
                                  <span
                                    className={`ml-2 text-sm ${
                                      rightAns.isCorrect ? 'text-emerald-700' : 'text-[#9F1239]'
                                    }`}
                                  >
                                    {rightAns.isCorrect ? '✓' : `✕ (${rightAns.selectedKey})`}
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results & Full Review View */}
        {activeView === 'results' && (
          <div className="space-y-6">
            {/* Saturated Burgundy-Orange Summary Hero Panel */}
            <div className="bg-gradient-to-br from-[#6B0F26] via-[#881337] to-[#C2410C] text-white border-2 border-amber-400 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-2.5">
                  <div className="text-sm font-bold text-amber-300">
                    Քննական ամփոփագիր · {activeExam === 'test1' ? 'Թեստ 1' : activeExam === 'test2' ? 'Թեստ 2' : '80 հարց'}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Ձեր մակարդակը՝ <span className="text-amber-300">{cefrSummary.level}</span> — {cefrSummary.titleHy}
                  </h2>
                  <p className="text-base sm:text-lg text-amber-50/95 leading-relaxed max-w-2xl">
                    {cefrSummary.descHy}
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3.5">
                  <div className="rounded-xl border border-amber-300/40 bg-white/15 backdrop-blur-sm p-4">
                    <div className="text-xs sm:text-sm text-amber-200 font-medium">Ճիշտ պատասխաններ</div>
                    <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-amber-300 mt-1">
                      {stats.correct} / {stats.total}
                    </div>
                  </div>
                  <div className="rounded-xl border border-amber-300/40 bg-white/15 backdrop-blur-sm p-4">
                    <div className="text-xs sm:text-sm text-amber-200 font-medium">Ընդհանուր տոկոս</div>
                    <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-white mt-1">
                      {stats.overallPct}%
                    </div>
                  </div>
                  <div className="rounded-xl border border-amber-300/40 bg-white/15 backdrop-blur-sm p-4">
                    <div className="text-xs sm:text-sm text-amber-200 font-medium">Սխալ պատասխաններ</div>
                    <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-rose-200 mt-1">
                      {stats.wrong}
                    </div>
                  </div>
                  <div className="rounded-xl border border-amber-300/40 bg-white/15 backdrop-blur-sm p-4">
                    <div className="text-xs sm:text-sm text-amber-200 font-medium">Ծախսված ժամանակ</div>
                    <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-white mt-1">
                      {formatTimer(elapsedSeconds)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filterable Full Diagnostic Review */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-orange-200">
                <div className="flex items-center gap-2.5">
                  <ClipboardCheck className="w-6 h-6 text-[#881337]" />
                  <h3 className="text-xl font-bold text-[#6B0F26]">
                    Հարցերի մանրամասն վերլուծություն
                  </h3>
                </div>

                {/* Segmented Filter */}
                <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-amber-100 rounded-xl">
                  {(
                    [
                      { id: 'all', label: `Բոլորը (${stats.total})` },
                      { id: 'wrong', label: `Սխալներ (${stats.wrong})` },
                      { id: 'correct', label: `Ճիշտ (${stats.correct})` },
                      {
                        id: 'unanswered',
                        label: `Չպատասխանած (${stats.total - stats.answered})`,
                      },
                    ] as const
                  ).map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setReviewFilter(f.id)}
                      className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        reviewFilter === f.id
                          ? 'bg-[#881337] text-amber-100 shadow-sm'
                          : 'text-[#6B0F26] hover:bg-amber-200/70'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 divide-y divide-amber-200">
                {activeItems
                  .map((item, idx) => ({ ...item, idx }))
                  .filter(({ examId, question }) => {
                    const ans = answers[getUniqueKey(examId, question.id)];
                    if (reviewFilter === 'wrong') return ans && !ans.isCorrect;
                    if (reviewFilter === 'correct') return ans?.isCorrect;
                    if (reviewFilter === 'unanswered') return !ans;
                    return true;
                  })
                  .map(({ examId, question, idx }) => {
                    const k = getUniqueKey(examId, question.id);
                    const ans = answers[k];
                    const chosenOpt = ans
                      ? question.options.find((o) => o.key === ans.selectedKey)
                      : undefined;
                    const rightOpt = question.options.find((o) => o.key === question.correctKey);

                    return (
                      <div key={k} className="py-5 first:pt-2 last:pb-2 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-sm text-[#7C2D12]">
                            <span className="font-mono-tabular font-bold text-[#6B0F26]">
                              {examId === 'test1' ? 'Թեստ 1' : 'Թեստ 2'} · #{question.id}
                            </span>
                            <span aria-hidden="true" className="text-orange-400">·</span>
                            <span className="font-medium">Մակարդակ {question.levelLabel}</span>
                            <span aria-hidden="true" className="text-orange-400">·</span>
                            {ans ? (
                              ans.isCorrect ? (
                                <span className="font-bold text-emerald-700">✓ Ճիշտ է</span>
                              ) : (
                                <span className="font-bold text-[#9F1239]">
                                  ✕ Սխալ (Ընտրվել է {ans.selectedKey})
                                </span>
                              )
                            ) : (
                              <span className="text-slate-500 font-medium">Չպատասխանած</span>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setCurrentIndex(idx);
                              setActiveView('exam');
                            }}
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-700 hover:underline cursor-pointer"
                          >
                            <BookOpen className="w-4 h-4" />
                            <span>Բացել հարցը</span>
                          </button>
                        </div>

                        <div className="text-lg sm:text-xl font-bold text-[#450A19]">{question.promptEs}</div>
                        <div className="text-base text-[#7C2D12] font-medium">{question.promptHy}</div>

                        {ans && !ans.isCorrect && chosenOpt?.wrongReasonHy && (
                          <div className="text-base text-[#6B0F26] bg-rose-50 border border-rose-300 rounded-xl p-4">
                            <strong>Ինչու է {chosenOpt.key}-ն սխալ․</strong> {chosenOpt.wrongReasonHy}
                          </div>
                        )}

                        {rightOpt && (
                          <div className="text-base text-slate-900 bg-amber-50/80 border border-amber-300 rounded-xl p-4">
                            <span className="font-bold text-emerald-800">
                              Ճիշտ պատասխան՝ {rightOpt.key}) {rightOpt.es}
                              {!rightOpt.isArmenianOnly ? ` — ${rightOpt.hy}` : ''}
                            </span>
                            <p className="mt-1.5 text-slate-800">{question.whyCorrectHy}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
