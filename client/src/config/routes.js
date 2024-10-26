// src/config/routes.js
import Monitor from '../containers/Public/Monitor';
import WaitingArea from '../containers/Public/WaitingArea';
import PackingArea from '../containers/Public/PackingArea';
import ColdStorage from '../containers/Public/ColdStorage';
import DataWaitingArea from '../containers/Public/DataWaitingArea';
import DataPackingArea from '../containers/Public/DataPackingArea';
import ChartPage from '../containers/Public/ChartPage';

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
    path: '/chart',
    component: ChartPage,
  },
];

export default routes;
