export default interface IMainLayout {
  theme: string | null,
  elems?: IMainLayoutElems | null
}

export interface IMainLayoutElems {
  stripeLeft: IMainLayoutStripe | null
  stripeRight: IMainLayoutStripe | null
  stripeBottom: IMainLayoutStripe | null
  navbar: IMainLayoutNavbar | null
  tools: {
    leftLeft: object | null
    leftRight: object | null
    rightLeft: object | null
    rightRight: object | null
    bottomLeft: object | null
    bottomRight: object | null
  },
  toolbarHidden: boolean | null,
  toolbarHover: boolean | null
}

export interface IMainLayoutNavbar {
  path: Array<IMainLayoutNavbarPath> | null
  toolbar: Array<any> | null
}

export interface IMainLayoutNavbarPath {
  icon: string | null,
  text: string | null,
  link: string | null
}


export interface IMainLayoutStripe {
  side: 'Left' | 'Right' | 'Bottom'
  left: Array<IMainLayoutStripeButton> | null
  right: Array<IMainLayoutStripeButton> | null
}

export interface IMainLayoutStripeButton {
  icon: string | null
  name: string | null
  tool: string | null
  active: boolean
}