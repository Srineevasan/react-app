import * as types from "./actionType";
const initialState={
    users:[],
    user:{},
    loading:true
}

const usersReducers  =(state:any = initialState,actions:any)=>{
    switch(actions.type){
        case types.GET_USERS:
            return{
                ...state,
                users:actions.payload,
                loading:false,
            };
        case types.DEL_USERS:
        case types.NEW_USERS:
            return{
                ...state,
                loading:false,
            };
        case types.EDIT_USERS:
            return{
                ...state,
                users:actions.payload,
                loading:false,
            };
        default:
            return state;
            
    }
};

export default usersReducers;
