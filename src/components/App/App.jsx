import { useState } from 'react';
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import { useEffect } from 'react';
import css from './App.module.css'


export default function App () {
    
    const [feedback, setFeedback] = useState(() => {
        const localStorageData = localStorage.getItem('feedback')
        if (localStorageData !== null) {
            return JSON.parse(localStorageData)
        }
        return ({
        good: 0,
        neutral: 0,
        bad: 0
        })
    });

    const updateFeedback = (feedbackType) => {
        setFeedback((feedback) => ({
            ...feedback, [feedbackType]: feedback[feedbackType] + 1
        }))
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const handleReset = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback))
        }, [feedback]);

    return (
        <div className={css.container}>
            <Description />
            <Options updateFeedback={updateFeedback} feedback={feedback} setFeedback={setFeedback} totalFeedback={totalFeedback} handleReset={handleReset}  />
            {totalFeedback !== 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />  : <Notification />}
        </div>
    );
}