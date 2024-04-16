import { useState } from 'react';
//Components
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
//Styles
import { StyledMainTitle } from './App.styled';
//Settings
import { INITIAL_STATE, DEFAULT_STEP } from 'settings/settings';

export default function App() {
  const [state, setState] = useState(INITIAL_STATE);

  const onLeaveFeedback = text => {
    setState(prev => {
      return { ...prev, [text]: prev[text] + DEFAULT_STEP };
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
