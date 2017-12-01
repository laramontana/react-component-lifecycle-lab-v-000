import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    let propsTweets = this.props.newTweets
    this.setState({
      tweets: propsTweets
    })
  }

  componentWillReceiveProps(nextProps) {
    let currentTweets = this.state.tweets
    let newTweets = nextProps.newTweets
    this.setState({
        tweets: newTweets.concat(currentTweets)
      })
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.newTweets.length >= 1
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
