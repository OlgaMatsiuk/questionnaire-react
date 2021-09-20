import React, {Component} from 'react'
import styles from './Auth.module.css'
import Button from '../../components/ui/Button/Button'
import Input from '../../components/ui/input/input'
import is from 'is_js'  //подключаем библ для валидации емейла
import axios from 'axios'

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

export default class Auth extends Component {

//создадим стейт для валидации
state = {
    isFormValid: false, //для валидации всей формы, т.е чтоб при нажатии кнопки войти она сраюатывала только если  емей и пароль валид
    formControls: {
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMessage: 'введите корректный емейл',
            valid: false,
            touched: false, //если польз-ль дотронулся до инпута
            validation: {
                required: true, //требует ввести пароль 
                email: true
            }

        },
        password: {
            value: '',
            type: 'password',
            label: 'Пароль',
            errorMessage: 'введите корректный пароль',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
        }
    }
}

}

    loginHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
            try {
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBR4d88ldn_xBP8VgA9w0YnpVtCn6yi-pA', authData) 
            console.log (response.data)
            } catch (e) {
                console.log (e)
            }
    }

    registerHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
            try {
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBR4d88ldn_xBP8VgA9w0YnpVtCn6yi-pA', authData) 
            console.log (response.data)
            } catch (e) {
                console.log (e)
            }
    }

    submitHandler = event => {
        event.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid  //is из библиотеки
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }

    onChangeHandler = (event, controlName) => {
        // console.log (`${controlName}: `, event.target.value)

        const formControls = {...this.state.formControls}
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true
        Object.keys(formControls).forEach(name=>{
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid

        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
        return (
            <Input
            key={controlName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation} //!!-приводит к булиевому типу
            errorMessage={control.errorMessage}
            onChange={event => this.onChangeHandler(event, controlName)}
            />
        )
        })
    }

    render() {
        return(
            <div className={styles.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={styles.AuthForm}>
                        {/* <input type='text' />
                        <input type='text' /> */}
                        {/* // <Input label='Email'/>
                        // <Input label='Пароль'/> */}

                        { this.renderInputs() }

                        <Button 
                            type='success'
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>

                        <Button 
                            type='primary'
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}

                        >
                            Зарегистрироваться
                        </Button>

                    </form>

                </div>
            </div>
        )
    }
}