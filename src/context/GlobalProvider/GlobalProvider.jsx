import { createContext, useContext, useState } from 'react';

import { INITIAL_STATE, DEFAULT_STEP } from 'settings/settings';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
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
    <GlobalContext.Provider
      value={{ state, total, positiveFeedbackPercentage, onLeaveFeedback }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
