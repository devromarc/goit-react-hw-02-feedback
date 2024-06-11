import { Component } from 'react';

export class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleOnClick = kind => {
    console.log(kind);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
        <div>
          {options.map(option => (
            <button
              key={option}
              onClick={() => {
                this.handleOnClick(option);
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <div>
          <p>
            Good <span>{good}</span>
          </p>
          <p>
            Neutral <span>{neutral}</span>
          </p>
          <p>
            Bad <span>{bad}</span>
          </p>
          <p>Total:{this.countTotalFeedback()}</p>
        </div>
      </>
    );
  }
}

// export const App = () => {
//
// };
