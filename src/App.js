import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './container/Quiz/Quiz';
import QuizList from './container/QuizList/QuizList';
import Auth from './container/Auth/Auth';
import QuizCreator from './container/QuizCreator/QuizCreator';



import {Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
       <Layout>
          <Switch>
              <Route path='/auth' component={Auth} />
              <Route path='/quiz-creator' component={QuizCreator} />
              <Route path='/quiz/:id' component={Quiz} />
              <Route path='/' component={QuizList} />

          </Switch>

       </Layout>

    )
  }
}
export default App;