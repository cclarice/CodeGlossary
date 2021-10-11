import { ActionTree, GetterTree, MutationTree } from 'vuex'
import IBalloonsState from "@/models/IBalloonsState"
import IBalloon from "@/models/IBalloon"

const initialState = {
    balloons: []
}

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
}

const mutations = <MutationTree<IBalloonsState>> {
    addBalloon (state: IBalloonsState, data: IBalloon) {
        state.balloons.push(data)
        if (data.autoRemoveTimeout === undefined) {
            data.autoRemoveTimeout = 5000
        }
        if (data.autoRemoveTimeout) {
            setTimeout(() => {
                state.balloons = state.balloons.filter(n => n.id !== data.id)
            }, data.autoRemoveTimeout)
        }
    },
    removeBalloon (state: IBalloonsState, id: number) {
        state.balloons = state.balloons.filter(n => n.id !== id)
    }
}

const actions = <ActionTree<any, any>> {
    addBalloon (context, data: any) {
        if (data.autoClose !== false) {
            data.autoClose = true
        }
        if (data.id === null || data.id === undefined) {
            data.id = Date.now()
            if (context.getters.getBalloon(data.id)) {
                data.id = data.id + getRandomInt(Date.now())
            }
        }
        context.commit('addBalloon', data)
    },
    removeBalloon (context, id: number) {
        context.commit('removeBalloon', id)
    }
}

const getters = <GetterTree<any, any>> {
    getBalloons (state: IBalloonsState): IBalloon[] {
        return state.balloons
    },
    getBalloon: (state: IBalloonsState) => (id: number): IBalloon | undefined => {
        return state.balloons.find(n => n.id === id)
    }
/*  getBalloonsMessages (state: IBalloonsState): string[] {
        return state.balloons.map(d => d.body)
    }  */
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    actions,
    getters
}