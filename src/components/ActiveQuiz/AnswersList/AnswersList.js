import React from 'react'
import styles from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'


const AnswersList = props => (
    <ul className={styles.AnswersList}>
        {props.answers.map((answer,index) => {
            return (
                <AnswerItem 
                answer={answer} 
                key={index}
                onAnswerClick={props.onAnswerClick}
                ansState={props.ansState ? props.ansState[answer.id] : null} //если он не пустой
                />
            )

        }

        )}
    </ul>
)

export default AnswersList;