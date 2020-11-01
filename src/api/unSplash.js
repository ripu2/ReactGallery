import Axios from 'axios'

export default Axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : `Client-ID IRY5gp2gPqurYkzr7B6Sy6Qop-swhhHvlhHx5UHOW8Q`
    }  

})