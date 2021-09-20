import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './QuizList.module.css'
import Loader from '../../components/ui/Loader/Loader'
import axios from '../../axios/axios-quiz'

class QuizList extends Component {

    state = {
        quizes: [],
        loading: true

    }

    renderQuizes() {
        // return [1, 2, 3].map((quiz, index) => {
            return this.state.quizes.map((quiz) => { 
            return (
                <li 
                    // key={index}
                    key={quiz.id }
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                     {quiz.name}
                    </NavLink>
                </li>
            )
        })

    }
    //если есть бекент то работаем через componentDidMount. если это не стрелочная ф-я то асинк пишем вначале, если стрелочная-то перед ()

   async componentDidMount() {
    try {
        const response = await axios.get('/quizes.json')
        // console.log(response.data)
        const quizes = []
        Object.keys(response.data).forEach((key,index) => {
            quizes.push({
                id: key,
                name: `Тест -${index + 1}`
            })
        })
        this.setState({
            quizes,
            loading: false
        })

    }catch (e) {
        console.log(e)
    }
    }

    // componentDidMount() { //ниже мы делаем гет запрос на firebaseio и добавляем в конце quiz.json
    //     axios.get('https://react-quiz-40254-default-rtdb.firebaseio.com/quiz.json').then(response => {
    //         console.log(response)
    //     })
    // }


    render() {
        return (
            <div className={styles.QuizList}>
                <h1> Список тестов </h1>

                {
                    this.state.loading
                    ? <Loader />
                    : <ul>
                        { this.renderQuizes() }
                     </ul>
                }

            </div>
        )
    }
}

export default QuizList