import React , { Component } from "react";
import "./Timer.css";

import * as EasyTimer from "easytimer.js";

class Timer extends Component {
  constructor(props) {
    super(props);

    var timer = new EasyTimer();

    this.state = {
      timer_text: timer.getTimeValues().toString(),
      timer: timer,
      timer_state: "none"
    };

    timer.addEventListener("secondsUpdated", this.onTimerUpdated.bind(this));

    timer.addEventListener("started", this.onTimerUpdated.bind(this));

    timer.addEventListener("reset", this.onTimerUpdated.bind(this));
  }
    
    onTimerUpdated(e) {
      this.setState({
        ...this.state,
        timer_text: this.state.timer.getTimeValues().toString()
      });
    }

    render() {
      return (
        <div className="Timer">
          <div className="timer-text">
            <h2>{this.state.timer_text}</h2>
          </div>
          <div className="timer-buttons text-center">
            {this.state.timer_state !== "ticking" && (
              <button onClick={this.startTimer} className="btn btn-success">
                <i className="fas fa-play" />
              </button>
            )}
  
            {this.state.timer_state === "ticking" && (
              <button onClick={this.pauseTimer} className="btn btn-warning">
                <i className="fas fa-pause" />
              </button>
            )}
  
            <button onClick={this.resetTimer} className="btn btn-info">
              <i className="fas fa-sync-alt" />
            </button>
          </div>
          <div className="log-button">
            <button
              onClick={this.logTime}
              className="btn btn-block btn-secondary"
            >
              Log Time
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default Timer;
