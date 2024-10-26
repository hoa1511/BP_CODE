// // src/components/SideBar.js
// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo_login.png';
// import thilogi from '../../assets/logo_header.png';
// const { Sider } = Layout;

// const SideBar = ({ collapsed, onPageChange }) => {
//   const navigate = useNavigate();

//   const handleMenuClick = (e) => {
//     const labelMap = {
//       'monitor': 'Giám sát chung',
//       '1': 'Khu trạm chờ',
//       '2': 'Khu đóng gói',
//       '3': 'Kho mát',
//       '4': 'Dữ liệu khu trạm chờ',
//       '5': 'Dữ liệu khu đóng gói',
//       '6': 'Dữ liệu kho mát',
//       '7': 'Cài đặt',
//     };

//     const pathMap = {
//       'monitor': 'monitor',
//       '1': 'waiting-area',
//       '2': 'packing-area',
//       '3': 'cold-storage',
//       '4': 'data-waiting-area',
//       '5': 'data-packing-area',
//       '6': 'data-cold-storage',
//       '7': 'settings',
//     };

//     // Cập nhật tên trang dựa trên labelMap
//     if (labelMap[e.key]) {
//       onPageChange(labelMap[e.key]);
//     }

//     // Điều hướng đến URL dựa trên pathMap
//     if (pathMap[e.key]) {
//       navigate(`/${pathMap[e.key]}`);
//     }
//   };

//   const menuItems = [
//     {
//       key: 'sub1',
//       icon: <i className="bx bx-desktop" style={{ color: '#000' }}></i>,
//       label: 'Giám sát',
//       children: [
//         {
//           key: 'monitor',
//           icon: <i className="bx bx-show" style={{ color: '#000', marginRight: '8px' }}></i>,
//           label: 'Giám sát chung',
//         },
//         {
//           key: '1',
//           icon: <i className="bx bx-buildings" style={{ color: '#000', marginRight: '8px' }}></i>,
//           label: 'Khu trạm chờ',
//         },
//         {
//           key: '2',
//           icon: <i className="bx bx-package" style={{ color: '#000', marginRight: '8px' }}></i>,
//           label: 'Khu đóng gói',
//         },
//         {
//           key: '3',
//           icon: <i className="bx bx-store" style={{ color: '#000', marginRight: '8px' }}></i>,
//           label: 'Kho mát',
//         },
//       ],
//     },
//     {
//       key: 'sub2',
//       icon: <i className="bx bx-data" style={{ color: '#000' }}></i>,
//       label: 'Dữ liệu',
//       children: [
//         {
//           key: '4',
//           icon: <i className="bx bx-buildings" style={{ color: '#000', marginRight: '8px' }}></i>,
//           label: 'Dữ liệu khu trạm chờ',
//         },
//         {
//           key: '5',
//           icon: <i className="bx bx-package" style={{ color: '#000', marginRight: '8px' }}></i>,
//           label: 'Dữ liệu khu đóng gói',
//         },
//         {
//           key: '6',
//           icon: <i className="bx bx-store" style={{ color: '#000', marginRight: '8px' }}></i>,
//           label: 'Dữ liệu kho mát',
//         },
//       ],
//     },
//     {
//       key: '7',
//       icon: <i className="bx bx-cog" style={{ color: '#000' }}></i>,
//       label: 'Cài đặt',
//     },
//   ];

//   return (
//     <Sider
//       trigger={null}
//       collapsible
//       collapsed={collapsed}
//       width={270}
//       collapsedWidth={80}
//       className="h-screen bg-white"
//     >
//       <div className="flex justify-center items-center py-4">
//         <img
//           src={collapsed ? logo : thilogi}
//           alt="Logo"
//           className={`transition-all duration-75 object-contain ${
//             collapsed ? 'h-8 w-8' : 'h-6 w-auto mx-4'
//           }`}
//         />
//       </div>
//       <Menu
//         theme="light"
//         mode="inline"
//         items={menuItems}
//         onClick={handleMenuClick}
//       />
//     </Sider>
//   );
// };

// export default SideBar;
// src/components/SideBar.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_login.png';
import thilogi from '../../assets/logo_header.png';

const { Sider } = Layout;

const SideBar = ({ collapsed, onPageChange }) => {
  const handleMenuClick = (label) => {
    // Gọi hàm onPageChange để cập nhật tiêu đề trang khi nhấn vào Link
    if (onPageChange) {
      onPageChange(label);
    }
  };

  // Cấu hình các mục trong Menu với Link
  const menuItems = [
    {
      key: 'monitor-main',
      icon: <i className="bx bx-desktop" style={{ color: '#000' }}></i>,
      label: 'Giám sát',
      children: [
        {
          key: 'monitor-overview',
          icon: <i className="bx bx-show" style={{ color: '#000', marginRight: '8px' }}></i>,
          label: (
            <Link to="/monitor" onClick={() => handleMenuClick('Giám sát chung')}>
              Giám sát chung
            </Link>
          ),
        },
        {
          key: 'waitingArea',
          icon: <i className="bx bx-buildings" style={{ color: '#000', marginRight: '8px' }}></i>,
          label: (
            <Link to="/waiting-area" onClick={() => handleMenuClick('Khu trạm chờ')}>
              Khu trạm chờ
            </Link>
          ),
        },
        {
          key: 'packingArea',
          icon: <i className="bx bx-package" style={{ color: '#000', marginRight: '8px' }}></i>,
          label: (
            <Link to="/packing-area" onClick={() => handleMenuClick('Khu đóng gói')}>
              Khu đóng gói
            </Link>
          ),
        },
        {
          key: 'coldStorage',
          icon: <i className="bx bx-store" style={{ color: '#000', marginRight: '8px' }}></i>,
          label: (
            <Link to="/cold-storage" onClick={() => handleMenuClick('Kho mát')}>
              Kho mát
            </Link>
          ),
        },
      ],
    },
    {
      key: 'data-main',
      icon: <i className="bx bx-data" style={{ color: '#000' }}></i>,
      label: 'Dữ liệu',
      children: [
        {
          key: 'dataWaitingArea',
          icon: <i className="bx bx-buildings" style={{ color: '#000', marginRight: '8px' }}></i>,
          label: (
            <Link to="/data-waiting-area" onClick={() => handleMenuClick('Dữ liệu khu trạm chờ')}>
              Dữ liệu khu trạm chờ
            </Link>
          ),
        },
        {
          key: 'dataPackingArea',
          icon: <i className="bx bx-package" style={{ color: '#000', marginRight: '8px' }}></i>,
          label: (
            <Link to="/data-packing-area" onClick={() => handleMenuClick('Dữ liệu khu đóng gói')}>
              Dữ liệu khu đóng gói
            </Link>
          ),
        },
        {
          key: 'dataColdStorage',
          icon: <i className="bx bx-store" style={{ color: '#000', marginRight: '8px' }}></i>,
          label: (
            <Link to="/data-cold-storage" onClick={() => handleMenuClick('Dữ liệu kho mát')}>
              Dữ liệu kho mát
            </Link>
          ),
        },
      ],
    },
    {
      key: 'settings',
      icon: <i className="bx bx-cog" style={{ color: '#000' }}></i>,
      label: (
        <Link to="/settings" onClick={() => handleMenuClick('Cài đặt')}>
          Cài đặt
        </Link>
      ),
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={270}
      collapsedWidth={80}
      className="h-screen bg-white"
    >
      <div className="flex justify-center items-center py-4">
        <img
          src={collapsed ? logo : thilogi}
          alt="Logo"
          className={`transition-all duration-75 object-contain ${collapsed ? 'h-8 w-8' : 'h-6 w-auto mx-4'}`}
        />
      </div>
      <Menu theme="light" mode="inline" items={menuItems} />
    </Sider>
  );
};

export default SideBar;
