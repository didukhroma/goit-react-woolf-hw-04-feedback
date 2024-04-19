import { useGlobalContext } from 'context/GlobalProvider/GlobalProvider';
//Components
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
//Styles
import { StyledMainTitle } from './App.styled';

export default function App() {
  const { total } = useGlobalContext();

  return (
    <>
      <StyledMainTitle>Cafe Expresso</StyledMainTitle>
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
