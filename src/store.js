import { createStore } from 'redux';
import reducer from './reducer';


// const store = createStore(reducer);

const initialState = 'off';
 
export default createStore(
        reducer,
        initialState
    )

