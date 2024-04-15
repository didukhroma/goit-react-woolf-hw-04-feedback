import Button from 'components/Button';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(el => (
        <Button key={el} text={el} cbOnClick={onLeaveFeedback} />
      ))}
    </div>
  );
}

export default FeedbackOptions;
