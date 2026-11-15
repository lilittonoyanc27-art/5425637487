export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface ExamOption {
  key: OptionKey;
  es: string;
  hy: string;
  isArmenianOnly?: boolean;
  wrongReasonHy: string;
}

export interface ExamQuestion {
  id: number;
  part: 1 | 2 | 3 | 4;
  partTitleEs: string;
  partTitleHy: string;
  levelLabel: string;
  promptEs: string;
  promptHy: string;
  options: ExamOption[];
  correctKey: OptionKey;
  exampleEs?: string;
  exampleHy?: string;
  whyCorrectHy: string;
  grammarNoteHy?: string;
}

export interface ExamSet {
  id: 'test1' | 'test2';
  titleEs: string;
  titleHy: string;
  subtitleHy: string;
  questions: ExamQuestion[];
}
