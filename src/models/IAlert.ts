export default interface IAlert {
    id: number
    title: string
    body: string
    type: string
    autoClose: boolean | null
}