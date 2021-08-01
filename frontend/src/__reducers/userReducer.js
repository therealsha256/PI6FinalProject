export const initialState = null;

export const reducer = (state, action) => {
    window.localStorage.setItem("user", state)
    if(action.type === "USER"){
        return action.payload
    }
    return state
}