export type Survey = {
  id: string;
  title: string;
  description: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  expiredAt: Date | null;
};

export type SummarizedSurveys = Pick<Survey, 'id' | 'title' | 'updatedAt' | 'expiredAt'>;
