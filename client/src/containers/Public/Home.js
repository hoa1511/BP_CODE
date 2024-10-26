// src/containers/Public/Home.js
import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import SideBar from './SideBar';
import TitleHeader from './TitleHeader';
import MainContent from './MainContent';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState('Giám sát chung');
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    // Cập nhật tiêu đề dựa trên đường dẫn
    switch (location.pathname) {
      case '/waiting-area':
        setTitle('Khu trạm chờ');
        break;
      case '/packing-area':
        setTitle('Khu đóng gói');
        break;
      case '/cold-storage':
        setTitle('Kho mát');
        break;
      case '/data-waiting-area':
        setTitle('Dữ liệu khu trạm chờ');
        break;
      case '/data-packing-area':
        setTitle('Dữ liệu khu đóng gói');
        break;
      case '/chart':
        setTitle('Biểu đồ');
        break;
      default:
        setTitle('Giám sát chung');
    }
  }, [location.pathname]);

  return (
    <Layout className="min-h-screen flex">
      <SideBar collapsed={collapsed} onPageChange={setTitle} />
      <Layout className="flex flex-col w-full">
        <Header collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <TitleHeader title={title} />
        <MainContent />
      </Layout>
    </Layout>
  );
};

export default Home;
