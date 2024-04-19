import StatisticsItem from 'components/StatisticsItem';
import { useGlobalContext } from 'context/GlobalProvider/GlobalProvider';

function Statistics() {
  const { state, total, positiveFeedbackPercentage } = useGlobalContext();
  const propertyObj = { ...state, total, positiveFeedbackPercentage };

  const keys = Object.keys(propertyObj);
  const text = 'positive feedback';
  const symbol = <span>&#37;</span>;
  return (
    <ul>
      {keys.map((el, idx, arr) => (
        <StatisticsItem
          key={el}
          name={arr.length - 1 !== idx ? el : text}
          value={propertyObj[el]}
          symbol={arr.length - 1 === idx && symbol}
        />
      ))}
    </ul>
  );
}

export default Statistics;
