import { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

import { StyledMainTitle } from './App.styled';
import Notification from 'components/Notification';

const settings = {
  step: 1,
  initialValue: 0,
  options: ['good', 'neutral', 'bad'],
};

export default function App() {
  const [good, setGood] = useState(settings.initialValue);
  const [neutral, setNeutral] = useState(settings.initialValue);
  const [bad, setBad] = useState(settings.initialValue);

  const onLeaveFeedback = text => {
    switch (text) {
      case settings.options[0]:
        setGood(good + settings.step);
        break;
      case settings.options[1]:
        setNeutral(neutral + settings.step);
        break;
      case settings.options[2]:
        setBad(bad + settings.step);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good / total) * 100);

  return (
    <>
      <StyledMainTitle>Cafe Expresso</StyledMainTitle>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={settings.options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
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
