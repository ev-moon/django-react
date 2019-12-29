import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handlingChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlingSubmit = () => {};

  render() {
    return (
      <div className="App">
        <div className="PostingSection">
          <h2>대나무 숲 글 작성하기</h2>
          <form onSubmit={}>
            <input
              name="title"
              value={this.state.title}
              onChange={this.handlingChange}
            />
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handlingChange}
            />
            <button type="submit">제출하기</button>
          </form>
        </div>
        <div className="ViewSection"></div>
      </div>
    );
  }
}

export default App;
