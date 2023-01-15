import { ADD_VISITOR } from "../constants/actionTypes";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_VISITOR:
            if(!!action.payload && !!action.payload.data && action.payload.status === 200){
                localStorage.setItem('visitor', JSON.stringify({...action.payload.data}));        
            }
            return state;
    
        default:
            return state;
    }
}

export default reducer;