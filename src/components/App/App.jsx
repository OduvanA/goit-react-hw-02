import { useState } from 'react'
import { useEffect } from 'react';
import { Description } from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import css from './App.module.css'

export default function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
    }

  const getInitialState = () => {
    const savedFeedback = localStorage.getItem("saved-feedback");
    return savedFeedback !== null ?
      JSON.parse(savedFeedback) : initialState;
  }

  const [feedback, setFeedback] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const toReset = () => {
    setFeedback(initialState);
  }

   
  return ( 
 <div className={css.container}>
    <Description />
    <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        toReset={toReset}
    />
    {totalFeedback
    ? 
    <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    :
    <Notification />}
  </div>
  );
}

