import React,{Component} from 'react';


export default class Stopwatch extends Component {
    state = {
        isRunning: false
    }
    render(){

        return(
            <div classNam="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button>Start</button>
                <button>Reset</button>
            </div>
        );
    }
}
