import shopActionTypes from './shoplist.types';

// action creator  :a function returns action
const getShoplist = ()=>{
    return{
        type:shopActionTypes.GET_LIST
    }
};


export {getShoplist};