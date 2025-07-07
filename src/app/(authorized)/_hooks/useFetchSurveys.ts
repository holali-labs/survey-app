import { useEffect, useState } from 'react';
import type { Survey, SummarizedSurveys } from '@/app/_types/survey';

export const useFetchSurveys = () => {
  const [surveyList, setSurveyList] = useState<SummarizedSurveys[]>([]);

  useEffect(() => {
    const fetchSurveys = () => {
      fetch('/api/surveys', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'force-cache',
        next: { tags: ['surveys'] }
      })
        .then(res => res.json())
        .then((surveys: Survey[]) =>
          setSurveyList(
            surveys
              .map(survey => ({
                id: survey.id,
                title: survey.title,
                updatedAt: survey.updatedAt,
                expiredAt: survey.expiredAt
              }))
              .sort((a, b) => (b.updatedAt > a.updatedAt ? 1 : -1))
          )
        );
    };

    fetchSurveys();
  }, []);

  return surveyList;
};
