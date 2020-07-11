import { createStore } from "redux";

export const sendTxtAction = (newTxt) => ( {
    type: "txt",
    payload: newTxt
});

export const appReducer = (state, action) => {
    switch (action.type) {
        case "txt":
            return {
                txt: action.payload
            };
        default:
            return state;
    }
};

export function configureStore(state = { txt: '---' }) {
    return createStore(appReducer, state);
}
