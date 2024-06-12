import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleOnClick = kind => {
    // console.log(kind);
    this.setState(prevState => ({
      // copies all properties. Ensure that it doesnt lose any existing state properties
      ...prevState,
      [kind]: prevState[kind] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const countTotalFeedback = this.countTotalFeedback();
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleOnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
          />
        </Section>
      </>
    );
  }
}

// export const App = () => {
//
// };
