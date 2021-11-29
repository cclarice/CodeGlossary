import { ActionTree, GetterTree, MutationTree } from 'vuex'
import IBalloonsState from "@/models/IBalloonsState"
import IBalloon, { IBalloonType } from "@/models/IBalloon"

const initialState: IBalloonsState = {
    balloons: []
}

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
}

const mutations = <MutationTree<IBalloonsState>> {
    addBalloon (state: IBalloonsState, data: IBalloon) {
        if (data.autoRemoveTimeout === undefined) {
            data.autoRemoveTimeout = 5000
        }
        if (data.autoRemoveTimeout) {
            setTimeout(() => {
                state.balloons = state.balloons.filter(n => n.id !== data.id)
            }, data.autoRemoveTimeout)
        }
        data.isLongText = ( data.body.length >= 100 )
        data.closed = true
        state.balloons.push(data)
    },
    removeBalloon (state: IBalloonsState, id: number) {
        state.balloons = state.balloons.filter(n => n.id !== id)
    },
    toggleClosedBalloon (state: IBalloonsState, id: number) {
        const balloon = state.balloons.find(balloon => balloon.id === id)
        if (balloon) {
            balloon.closed = !balloon.closed
        }
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
};
