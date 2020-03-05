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
    console.log('filter :: ADD :: ', info)
    state[info.type] = info
  },
  REMOVE (state: any, info: any) {
    console.log('filter :: REMOVE :: ', info.type)
    console.log('filter :: REMOVE :: ', state[info.type])
    state[info.type] = null
  }
}

export const actions = {
  add ({ commit }: any, info: any) {
    console.log('filter :: add :: ', info)
    commit('ADD', info)
  },

  remove ({ commit }: any, info: any) {
    console.log('filter :: REMOVE :: ', info)
    commit('REMOVE', info)
  }
}
