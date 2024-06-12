import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <div>
      <p>
        Good: <span className={css.response}>{good}</span>
      </p>
      <p>
        Neutral: <span className={css.response}>{neutral}</span>
      </p>
      <p>
        Bad: <span className={css.response}>{bad}</span>
      </p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive Feedback: {positivePercentage}% </p>
    </div>
  );
};
