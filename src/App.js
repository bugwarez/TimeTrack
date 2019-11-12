import React, {Component} from 'react';
import './App.css';

import Timer from "./components/Timer";

class App extends Component{
  constructor(props) {
    super(props);
  }

render() {
  return (
    <div className="App d-flex flex-column container">
     <div className = "Header">
       <h1>TTracker</h1>
    </div>
    <div className = "d-flex flex-fill justify-content-center flex-column">
      <div className = "row">
        <div className = "col-md-6 offset-md-3">
          <Timer />
          
         </div>
        </div>
      </div>
      <div className = "d flex flex-grow-1"></div>
    </div>
    
  );
}
}

export default App;

