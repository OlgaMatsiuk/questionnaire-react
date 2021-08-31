import React from 'react'
import styles from './AnswerItem.module.css'

const AnswerItem = props => {
    const cls = [styles.AnswerItem]
    if (props.ansState) {
        cls.push(styles[props.ansState])

    }

    return (
        <li
         onClick={() => props.onAnswerClick(props.answer.id)}
        className={cls.join(' ')}>
            { props.answer.text }
        </li>
    )
}

export default AnswerItem