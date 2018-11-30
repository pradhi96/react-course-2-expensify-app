import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type:'SET',
    count
});
const resetCount = () => ({
    type:'RESET'
});

//Reducers
//1.Reducers are pure functions

const countReducder = (state = {count:0}, action)=> {
    console.log('running');
    console.log(state.count);
    switch(action.type){
        case 'INCREMENT':
            return {
                count:state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count:state.count - action.decrementBy
            }; 
        case 'RESET':
            return {
                count:0
            };
            
        case 'SET':
            return {
                count: action.count
            };
               
            default:
                return state;
       
            }
};


const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({
    type:'INCREMENT',
    incrementBy: 5
});



store.dispatch(resetCount());


store.dispatch(decrementCount({decrementBy:10}))

store.dispatch({
    type:'DECREMENT',
    decrementBy:10
});

store.dispatch({
    type:'SET',
    count:101
    
});

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(setCount({count : 101}));
