import React, {Component} from 'react'
import styles from './Quiz.module.css'
import ActiveQuize from '../../components/ActiveQuiz/ActiveQuiz'


class Quiz extends Component {
    state={ 
        activeQuestion: 0,
        answerState: null, //текущий клик пользователя-правильно или нет {[id]: 'success' 'error'}
        quiz: [
        {
            rightAnswerId: 3,
            id: 1,
            question: 'Какого цвета небо?',
            answers: [
                {text: 'Черное', id: 1},
                {text: 'Красное', id: 2},
                {text: 'Голубое', id: 3},
                {text: 'Желтое', id: 4}
            ]},
            {
                rightAnswerId: 3,
                id: 2,
                question: 'В каком году основали Санкт-Петербург?',
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]}
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ',answerId)
        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    }) 
                }
                window.clearTimeout(timeout)
            }, 1000)

        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
        
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuize 
                        // answers={this.state.quiz[0].answers}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion+1}
                        state={this.state.answerState}
                        />
                </div>
            </div>
        )
    }
}
export default Quiz