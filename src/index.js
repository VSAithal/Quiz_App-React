import React, { Component } from 'react';
import ReactDOM from "react-dom"
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import quizService from "./quizService"
import QuestionBox from "./components/QuestionBox"
import Resultant from "./components/Resultant"
class QuizBee extends Component {
    state = { 
        questionSet : [],
        scoreCount : 0,
        responses: 0
     }
     getQuestions = () => {
        quizService().then(questionItem =>{
            this.setState({questionSet : questionItem})
        }) 
    }
    computeANswers = (selected,correct) => {
        if(selected === correct){
            this.setState({scoreCount : this.state.scoreCount + 1})
        } 
        this.setState({responses: this.state.responses < 5 ? this.state.responses + 1 : 5})
    }
    playAgain = () => {
        this.getQuestions();
        this.setState({scoreCount: 0,responses:0})
    }
    componentDidMount() {
        this.getQuestions();
    }
    render() { 
        return ( 
            <div className="container">
                <div className="title">Simple Quiz </div>
                {this.state.questionSet.length > 0 && this.state.responses < 5 && this.state.questionSet.map(({question,answers,correct,questionId})=>(<QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computeANswers(answer,correct)}/>))}
        {this.state.responses === 5 ? (<Resultant score={this.state.scoreCount} playAgain={this.playAgain}/>) : null}
            </div>
         );
    }
}
 ReactDOM.render(<QuizBee />, document.getElementById("root"))
// export default QuizBee;