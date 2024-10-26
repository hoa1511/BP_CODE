import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo_login.png'
import { login } from "../../services/authService";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
       // Gọi hàm login từ authService
      const data = await login(email, password);
      // Nếu đăng nhập thành công, lưu token và chuyển hướng đến trang Home
      localStorage.setItem('token', data.token);// Lưu token vào localStorage hoặc sessionStorage
      navigate("/home")
    } catch (error) {
      console.log('Login failed:', error);
      setErrorMessage(error.message || 'Đăng nhập thất bại, vui lòng thử lại');

    }
    // Xử lý đăng nhập ở đây
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex shadow-lg max-w-4xl w-full bg-white">
        <div className="w-1/2 bg-white p-8 rounded-bl-lg rounded-tl-lg">
          <div className="text-center mb-6">
            <img src={logo} alt="Logo" className="mx-auto w-16 h-16" />
            <h2 className="text-2xl font-bold">Đăng nhập</h2>
            <p className="mt-2 text-gray-600">Sử tên đăng nhập và mật khẩu để đăng nhập</p>
          </div>
          {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input type="text" placeholder="Tên đăng nhập" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Mật khẩu" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-green-500 hover:underline">
                Quên mật khẩu
              </a>
            </div>
            <div className="mb-4 flex items-center justify-center">
              <button type="submit" className="w-full  bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 "
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 bg-green-500 text-white rounded-br-lg rounded-tr-lg rounded-bl-[50px] rounded-tl-[50px] flex flex-col items-center justify-center">
          <h2 className="font-bold text-3xl">Xin chào</h2>
          <p className="mt-6 mx-2 text-center">Tạo tài khoản mới để truy cập toàn bộ tính năng của trang web</p>
          <button className="mt-6 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-green-500 bg-green-600" onClick={() => navigate("/register")}>
            Đăng kí
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
