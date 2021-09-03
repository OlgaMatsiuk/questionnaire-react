import React from 'react'
import styles from './FinishedQuiz.module.css'
import Button from '../ui/Button/Button'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={styles.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        styles[props.results[quizItem.id]]
                    ]

                    // debugger

                    return (
                        <li key={index}
                        >
                            <strong> {index+1} </strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                            </li>
                    )
                }) }
                {/* <li>
                    <strong>1.</strong>
                    How are you
                    <i className={'fa fa-times' + styles.error} />
                </li>

                <li>
                    <strong>1.</strong>
                    How are you
                    <i className={'fa fa-check' + styles.success} />
                </li> */}
            </ul>
            <p>
                правильно {successCount} из {props.quiz.length}
            </p>
            <div>
                {/* <button onClick = {props.onRetry}>Повторить</button> */}
        <Button onClick={props.onRetry} type='primary'>Повторить</Button>
        <Button type='success'>Перейти в список тестов</Button>

            </div>
        </div>
    )
}

export default FinishedQuiz