export const state = () => ({
    type: null,
    date: null,
    instrument: null,
    style: null,
    location: null,
    sort: null
})

export const mutations = {
  ADD (state: any, info: any) {
    state[info.type] = info
  },
  REMOVE (state: any, info: any) {
    state[info.type] = null
  }
}

export const actions = {
  add ({ commit }: any, info: any) {
    commit('ADD', info)
  },

  remove ({ commit }: any, info: any) {
    commit('REMOVE', info)
  }
}
