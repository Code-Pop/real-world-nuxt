import EventService from '@/services/EventService.js'
export const state = () => ({
  events: [],
  event: {}
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}
export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then(response => {
      commit('SET_EVENTS', response.data)
    })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then(response => {
      commit('SET_EVENT', response.data)
    })
  }
}
