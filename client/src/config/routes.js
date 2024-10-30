// src/config/routes.js
import Monitor from '../containers/Public/Monitor';
import WaitingArea from '../containers/Public/WaitingArea';
import PackingArea from '../containers/Public/PackingArea';
import ColdStorage from '../containers/Public/ColdStorage';
import DataWaitingArea from '../containers/Public/DataWaitingArea';
import DataPackingArea from '../containers/Public/DataPackingArea';
import ChartPage from '../containers/Public/ChartPage';
import PackingPlanning from '../containers/Public/PackingPlanning';
import DataColdStorage from '../containers/Public/DataColdStorage';
const routes = [
  {
    key: 'monitor',
    path: '/', // Đặt "/" làm đường dẫn mặc định để hiển thị Monitor
    component: Monitor,
  },
  {
    key: '1',
    path: '/waiting-area',
    component: WaitingArea,
  },
  {
    key: '2',
    path: '/packing-area',
    component: PackingArea,
  },
  {
    key: '3',
    path: '/cold-storage',
    component: ColdStorage,
  },
  {
    key: '4',
    path: '/data-waiting-area',
    component: DataWaitingArea,
  },
  {
    key: '5',
    path: '/data-packing-area',
    component: DataPackingArea,
  },
  {
    path: '/data-waiting-area/chart',
    component: ChartPage,
  },
  {
    path: '/data-waiting-area/planning',
    component: PackingPlanning,
  },
  {
    path: '/data-cold-storage',
    component: DataColdStorage,
  }
];

export default routes;
