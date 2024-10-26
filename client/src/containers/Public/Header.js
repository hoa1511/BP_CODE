// src/components/Header.js

import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Header = ({ collapsed, toggleSidebar }) => {
  return (
    <header className="relative flex items-center justify-center bg-white shadow-md p-4">
      {/* Nút toggle sidebar */}
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        className="text-xl absolute left-4" // Đặt nút ở bên trái
      />
      
      {/* Tiêu đề căn giữa */}
      <h1 className="text-xl font-bold text-green-600">HỆ THỐNG GIÁM SÁT SẢN XUẤT</h1>
    </header>
  );
};

export default Header;
