import shopActionTypes from './shoplist.types';


const initialState = {
    shoplists:[]
};


export default (state = initialState,{type,payload})=>{
    switch(type){
        case shopActionTypes.GET_LIST+SUCCESS:
        return{
            ...state,
            shoplists:payload,
        };
        default:
            return state;
    }
};

