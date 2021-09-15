
export const state = () =>({
    step1:null
})

export const mutations= {
    step1(state,pay){
        state.imgs = pay
    }
}

export const actions = {
    step1({commit},pay){
        commit('step1',pay)
    }
}

export const getters = {
    step1:s=>s.step1
}