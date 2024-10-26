import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Nếu bạn có file index.css

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Đây là nơi mà ứng dụng sẽ được render vào index.html
);

