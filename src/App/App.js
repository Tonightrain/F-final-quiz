import React, { Component } from 'react';
import './App.scss';
import Group from "./components/Group";
import TraineeList from "./components/TraineeList";
import TrainerList from "./components/TrainersList";
import "antd/dist/antd.css";

class App extends Component {
    render() {
    return (
      <div data-testid="app" className="App">
        <Group />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
