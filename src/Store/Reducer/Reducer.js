// import ActionTypes from '../Constant/Constant'

// import ActionTypes from "../Constant/Constant";

const Intitial_State = {
    current_user: [],
    postget: [],
}

export default (state = Intitial_State, action) => {
    // console.log("action............",action)
    // console.log('bfdbsfb=====',ActionTypes.SetUser)
    switch (action.type) {
        case "SETUSER":
            return ({
                ...state,
                current_user: [...state.current_user, action.payload]
                // current_user:action.payload
            })
        case "POSTGET":
            return ({
                ...state,
                postget: [...state.postget, action.payload]
                // postget:action.payload
            })
    }
    return state;
}

