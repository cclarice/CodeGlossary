export default interface IBalloon {
    id: number
    head: string | null
    body: string | null
    type: IBalloonType
    autoRemoveTimeout: number | null // if null || 0 autoRemoveDisabled
    closed?: boolean | undefined
    isLongText?: boolean | undefined
}

type IBalloonType = 'info' | 'success' | 'warning' | 'error' | string | null
