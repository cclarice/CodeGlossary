/* eslint-disable max-len, no-unused-vars */
import { ToolPlace } from '@/models/Tool'

const dropareas: { [key in ToolPlace]: string } = {
  topRight: 'polygon(0 29px, 0 50px, 50% 50px, 50% calc(29px + 20%), calc(100% - 21px) calc(29px + 20%), calc(100% - 21px) 50px, 100% 50px, 100% 29px)',
  topLeft:  'polygon(0 29px, 0 50px, 21px 50px, 21px calc(29px + 20%), 50% calc(29px + 20%), 50% 50px, 100% 50px, 100% 29px)',
  leftRight: 'polygon(0 29px, 0 calc(100% - 20px), 21px calc(100% - 20px), 21px 50%, 20% 50%, 20% 49px, 21px 49px, 21px 29px)',
  leftLeft: 'polygon(0 29px, 0 calc(100% - 20px), 21px calc(100% - 20px), 21px calc(100% - 41px), 20% calc(100% - 41px), 20% 50%, 21px 50%, 21px 29px)',
  rightRight: 'polygon(calc(100% - 21px) 29px, calc(100% - 21px) 50%, 80% 50%, 80% calc(100% - 41px), calc(100% - 21px) calc(100% - 41px), calc(100% - 21px) calc(100% - 20px), 100% calc(100% - 20px), 100% 29px',
  rightLeft: 'polygon(calc(100% - 21px) 29px, calc(100% - 21px) 50px, 80% 50px, 80% 50%, calc(100% - 21px) 50%, calc(100% - 21px) calc(100% - 20px), 100% calc(100% - 20px), 100% 29px',
  bottomRight: 'polygon(0 calc(100% - 20px), 0 calc(100% - 41px), 50% calc(100% - 41px), 50% 80%, calc(100% - 21px) 80%, calc(100% - 21px) calc(100% - 41px), 100% calc(100% - 41px), 100% calc(100% - 20px))',
  bottomLeft: 'polygon(0 calc(100% - 20px), 0 calc(100% - 41px), 21px calc(100% - 41px), 21px 80%, 50% 80%, 50% calc(100% - 41px), 100% calc(100% - 41px), 100% calc(100% - 20px))'
}

export default dropareas
