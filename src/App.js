import React, { Component } from "react";
import Button from "./Button";
import Square from "./Square";
import Timer from "./Timer";
import ButtonPropTypes from "./ButtonPropTypes";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      color: "green",
      showTimer: true,
      time: 0
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <Square color={this.state.color} />
        <br />
        {[
          "red",
          "green",
          "pink",
          "blue",
          "yellow",
          "gray",
          "purple",
          "black",
          "red"
        ].map((color, index) => (
          <Button
            key={index}
            handleClick={() =>
              this.setState({
                ...this.state,
                color: color
              })
            }
          >
            {color}
          </Button>
        ))}
        <br />
        <br />
        <Timer time={this.state.time} />
        <br />
        <Button
          handleClick={() => {
            this.setState({
              ...this.state,
              showTimer: !this.state.showTimer
            });
          }}
        >
          Show / hide timer
        </Button>
        <Button
          handleClick={() => {
            this.setState({
              ...this.state,
              time: this.state.time + 10
            });
          }}
        >
          Change props
        </Button>
        <hr />
        My App - Proptypes
        <br />
        <ButtonPropTypes handleClick={() => console.log("Cliquei aqui")}>
          Clique em mim
        </ButtonPropTypes>
        <ButtonPropTypes handleClick={() => console.log("Cliquei again")}>
          Cligou again
        </ButtonPropTypes>
      </div>
    );
  }
}

export default App;
