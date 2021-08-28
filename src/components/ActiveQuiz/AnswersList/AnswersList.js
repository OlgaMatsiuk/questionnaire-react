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
                state={props.state ? props.state[answer.id] : null} //если он не пустой
                />
            )

        }

        )}
    </ul>
)

export default AnswersList;