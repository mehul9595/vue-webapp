import * as types from './mutation-types'

export const mutations = {
    [types.SIGN_IN](state, payload) {
        state.user = payload
    },

    [types.SIGN_OUT](state) {
        state.user = {}; // set user to empty object
    },

    [types.SIGN_UP](state) {
        console.log(state);
    },

    [types.EVENTS_COLLECTION](state, events_payload) {
        state.events = events_payload;
    }
}