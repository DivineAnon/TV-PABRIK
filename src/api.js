import axios from 'axios';

const URL = 'localhost:8090/api/orders';

const fetchApi = async() => {
    const {data} = await axios.get(URL, {
        params:{
            
        }
    })
}