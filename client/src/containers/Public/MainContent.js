// src/containers/Public/MainContent.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import routes from '../../config/routes';

const MainContent = () => {
  return (
    <div className="m-2 p-2 bg-white rounded-lg shadow-md">
      <Routes>
        {routes.map(({ path, component: Component, key }) => (
          <Route key={key || path} path={path} element={<Component />} />
        ))}

        {/* Đảm bảo fallback chuyển hướng về Monitor nếu không tìm thấy đường dẫn */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default MainContent;
