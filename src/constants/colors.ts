interface IColor {
    hex: string | undefined
    rgb: string | undefined
}

const COLORS: Array<IColor> = [
    { hex: '#000000', rgb: 'rgb(0,   0,   0  )' },
    { hex: '#7D7D7D', rgb: 'rgb(125, 125, 125)' },
    { hex: '#CDCDCD', rgb: 'rgb(205, 205, 205)' },
    { hex: '#FCF84A', rgb: 'rgb(252, 248, 74 )' },
    { hex: '#FDB60D', rgb: 'rgb(253, 182, 13 )' },
    { hex: '#FC801D', rgb: 'rgb(252, 128, 29 )' },
    { hex: '#FE2857', rgb: 'rgb(254, 40,  87 )' },
    { hex: '#DD1265', rgb: 'rgb(221, 18,  101)' },
    { hex: '#FF318C', rgb: 'rgb(255, 49,  140)' },
    { hex: '#FF45ED', rgb: 'rgb(255, 69,  237)' },
    { hex: '#AF1DF5', rgb: 'rgb(175, 29,  245)' },
    { hex: '#6B57FF', rgb: 'rgb(107, 87,  255)' },
    { hex: '#087CFA', rgb: 'rgb(8,  124,  250)' },
    { hex: '#07C3F2', rgb: 'rgb(7,  195,  242)' },
    { hex: '#21D789', rgb: 'rgb(33, 215,  137)' },
    { hex: '#3DEA62', rgb: 'rgb(59, 234,  98 )' }
]
export default COLORS