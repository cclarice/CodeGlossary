import { ExtendedVue, VueConstructor } from 'vue/types/vue'

export default interface IMainLayout {
  theme: string | null,
  elems?: IMainLayoutElems | null
}

export interface IMainLayoutElems {
  stripeLeft: IMainLayoutStripe | null
  stripeRight: IMainLayoutStripe | null
  stripeBottom: IMainLayoutStripe | null
  stripes: Array<IMainLayoutStripeButton>
  navbar: IMainLayoutNavbar | null
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
type Instance = any
type Data = any
type Methods = any
type Computed = any
type Props = any

export interface IMainLayoutStripeButton {
  id:   number | null
  icon: string | null
  name: string | null
  component: any
  active: boolean
  location: string | null
  side: string | null
}