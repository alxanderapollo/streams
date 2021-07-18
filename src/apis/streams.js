//Here we create an instance of axios and import it for use
import axios from 'axios'

export default axios.create({
    baseURL:'http://localhost:3001'
});