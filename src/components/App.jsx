import {useState} from 'react';
import Section from "./Section/Section"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics"
import Notification from "./Notification/Notification"

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feedback = {
        good,
        neutral,
        bad,
    }

    const options = Object.keys(feedback);

    const handleIncrement = (event) => {
        if (event.target.textContent === 'good') {
            setGood(prevValue => prevValue + 1);
        } else if (event.target.textContent === 'neutral') {
            setNeutral(prevValue => prevValue + 1);
        } else if (event.target.textContent === 'bad') {
            setBad(prevValue => prevValue + 1);
        };
    }

    const countTotalFeedback = Object.values(feedback).reduce((previousValue, number) => {
        return previousValue += number;
    }, 0);

    const countPositiveFeedbackPercentage = ((feedback.good * 100) / countTotalFeedback).toFixed(0);

    return (
        <>
            <Section title='Please leave feedback'>
                <FeedbackOptions options={options} onLeaveFeedback={handleIncrement}>
                </FeedbackOptions>
            </Section>
                
            <Section title='Statistics'>
                {!countTotalFeedback
                    ? <Notification message="There is no feedback"></Notification>
                    : <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}>
                    </Statistics>}
            </Section>
        </>);
}

export default App;
