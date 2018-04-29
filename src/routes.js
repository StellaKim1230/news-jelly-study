import Home from 'components/Home'
import ChartView from 'components/ChartView'
import Accident from 'components/Accident'
import AirCondition from 'components/AirCondition'

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/chart',
    component: ChartView,
    children: [
      {
        path: 'accident',
        component: Accident,
      },
      {
        path: 'aircondition',
        component: AirCondition,
      }
    ]
  }
]

export default routes
