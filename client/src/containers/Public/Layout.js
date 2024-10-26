// src/components/Layout.js
import React from 'react';
import TitleHeader from './TitleHeader'; // Import TitleHeader để hiển thị tiêu đề cố định

const Layout = ({ title, children }) => {
  return (
    <div>
      {/* Tiêu đề sẽ hiển thị cố định ở trên */}
      <TitleHeader title={title} />
      {/* Nội dung của các trang sẽ được hiển thị bên dưới */}
      <div className="p-4 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
