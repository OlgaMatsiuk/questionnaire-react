import React from 'react'
import styles from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return (
        <div className={styles.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    How are you
                    <i className={'fa fa-times' + styles.error} />
                </li>

                <li>
                    <strong>1.</strong>
                    How are you
                    <i className={'fa fa-check' + styles.success} />
                </li>
            </ul>
            <p>
                правильно 4 из 10
            </p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz