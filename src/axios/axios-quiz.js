import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-40254-default-rtdb.firebaseio.com/'
})