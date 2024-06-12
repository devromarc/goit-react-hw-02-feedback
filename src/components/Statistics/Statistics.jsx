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
        Good <span>{good}</span>
      </p>
      <p>
        Neutral <span>{neutral}</span>
      </p>
      <p>
        Bad <span>{bad}</span>
      </p>
      <p>Total:{countTotalFeedback}</p>
      <p>Positive Feedback: {positivePercentage}% </p>
    </div>
  );
};
