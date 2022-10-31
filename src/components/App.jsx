import React from 'react';
import Section from "./Section/Section"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics"
import Notification from "./Notification/Notification"

class App extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrement = (event) => {
        this.setState(prevState => {

            for (let key in prevState) {
                if (event.target.textContent === key) {
                    return {
                        [key]: prevState[key] += 1,
                    };
                }
            }
        });
    };
        
    render() {
        const feedback = this.state;
        const options = Object.keys(feedback);

        const countTotalFeedback = Object.values(feedback).reduce((previousValue, number) => {
            return previousValue += number;
        }, 0);

        const countPositiveFeedbackPercentage = ((feedback.good * 100) / countTotalFeedback).toFixed(0);

        return (
            <>
                <Section title='Please leave feedback'>
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleIncrement}>
                    </FeedbackOptions>
                </Section>
                
                <Section title='Statistics'>
                    {!countTotalFeedback
                        ? < Notification message="There is no feedback"></Notification>
                        : <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}>
                        </Statistics>}
                </Section>
            </>)
    }
}
    

export default App;
