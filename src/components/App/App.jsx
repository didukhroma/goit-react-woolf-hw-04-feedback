import { useState } from 'react';
//Components
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
//Settings
import { DEFAULT_STEP, INITIAL_STATE } from 'settings/settings';
//Styles
import { StyledMainTitle } from './App.styled';

export default function App() {
  const [state, setState] = useState(INITIAL_STATE);

  const onLeaveFeedback = text =>
    setState(prev => ({ ...prev, [text]: prev[text] + DEFAULT_STEP }));

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
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
