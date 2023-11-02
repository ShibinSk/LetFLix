import axios from 'axios'
import { getStandardResponse } from '../../../common/StandardResponse'

export default{
    test: () => getStandardResponse(axios.get('/')),
    
    key: () => getStandardResponse(axios.get('/getkey')),

    checkout: (amount) => getStandardResponse(axios.post('/checkOut',{amount})),
}