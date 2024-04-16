import { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

import { StyledMainTitle } from './App.styled';
import Notification from 'components/Notification';

const settings = {
  step: 1,
  initialState: { good: 0, neutral: 0, bad: 0 },
};

export default function App() {
  const [state, setState] = useState(settings.initialState);

  const onLeaveFeedback = text => {
    setState(prev => {
      return { ...prev, [text]: prev[text] + settings.step };
    });
  };
  const { good, neutral, bad } = state;

  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good / total) * 100);

  return (
    <>
      <StyledMainTitle>Cafe Expresso</StyledMainTitle>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            {...state}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
