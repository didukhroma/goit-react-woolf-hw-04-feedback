import Button from 'components/Button';
import { useGlobalContext } from 'context/GlobalProvider/GlobalProvider';

function FeedbackOptions() {
  const { state, onLeaveFeedback } = useGlobalContext();
  const keys = Object.keys(state);
  return (
    <div>
      {keys.map(el => (
        <Button key={el} text={el} cbOnClick={onLeaveFeedback} />
      ))}
    </div>
  );
}

export default FeedbackOptions;
