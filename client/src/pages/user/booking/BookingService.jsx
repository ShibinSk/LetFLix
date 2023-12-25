import axios from 'axios'
import { getStandardResponse } from '../../../common/StandardResponse'

export default{
    test: () => getStandardResponse(axios.get('/')),
    
    key: () => getStandardResponse(axios.get('/getkey')),

    checkout: (data) => getStandardResponse(axios.post('/payment',{data})),

    Book: (data) => getStandardResponse(axios.post('/bookNow',{data})),



    Checksum: () => getStandardResponse(axios.post('/generateChecksum')),
}