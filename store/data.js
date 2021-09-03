export const state = () =>({
    imgs:[]
})

export const mutations= {
    setImg(state,pay){
        state.imgs = pay
    }
}

export const actions = {
    fetchImg({commit},imgs){
        commit('setImg',imgs)
    }
}

export const getters = {
    imgs:s=>s.imgs
}