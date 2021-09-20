import React from 'react'
import styles from './input.module.css'

function isInvalid({valid, touched, shouldValidate}) { //проверяем на валидность
return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [styles.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    // if (true) {
    //     cls.push (styles.invalid)
    // }
    if (isInvalid(props)) {
        cls.push(styles.invalid)
    }

    return (
        <div className={cls.join(' ')}>
        <label htmlFor={htmlFor}> {props.label} </label>
             <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                >  
             </input>

             {isInvalid(props)
             ? <span>{props.errorMessage || 'Введите верное значение' }</span>
             : null 
            }

             

        </div>
    )
}

export default Input