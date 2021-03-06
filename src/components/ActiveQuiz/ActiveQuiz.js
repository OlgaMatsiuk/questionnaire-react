import React from 'react'
import styles from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuize = props => (
    <div className={styles.ActiveQuiz}>
        <p className={styles.Question}>
            <span>
                <strong>{props.answerNumber}.</strong> &nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength} </small>

            
        </p>

     <AnswersList 
     ansState={props.ansState}
     answers={props.answers}
     onAnswerClick={props.onAnswerClick}
    //  state={props.state}
     />
    </div>
)
export default ActiveQuize