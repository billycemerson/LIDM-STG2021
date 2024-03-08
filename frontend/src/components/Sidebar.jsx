import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoBarChart, IoDocumentTextOutline, IoBook, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/AuthSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate('/');
  }

  return (
    <aside className="menu pl-2 hash-shadow">
      <div className="menu-container">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}><IoHome /> Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/quiz"}><IoBook /> Quiz</NavLink>
          </li>
          <li>
            <NavLink to={"/hasil"}><IoDocumentTextOutline /> Hasil Quiz</NavLink>
          </li>
          <li>
            <NavLink to={"/visualisasi"}><IoBarChart /> Visualisasi</NavLink>
          </li>
        </ul>

        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/user"}><IoPerson /> User</NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className='button is-white'>
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;