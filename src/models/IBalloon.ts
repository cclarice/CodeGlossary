export default interface IBalloon {
    id: number
    head: string | null
    body: string | null
    type: IBalloonType
    autoRemoveTimeout: number | null // if null || 0 autoRemoveDisabled
}

type IBalloonType = 'info' | 'success' | 'warning' | 'error' | string | null
