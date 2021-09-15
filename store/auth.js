export const state = () =>({
    user:null
})

export const mutations= {
    setUser(state,pay){
        state.user = pay
    }
}

export const actions = {
    fetchUser({commit},data){
        commit('setUser',data)
    }
}

export const getters = {
    user:s=>s.user
}