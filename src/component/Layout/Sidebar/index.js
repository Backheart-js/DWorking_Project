import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Document, Storage } from '../../../pages';
import PanelDocument from './PanelDocument';
import PanelStorage from './PanelStorage';

import './Sidebar.scss'

function Sidebar() {
  return (
    <div id="sidebar">
      <div id="category">
        <div className="category__menu">
          <div className="category__menu-wrap">
            <span className="icon material-icons category__menu-icon">
              menu
            </span>
          </div>
        </div>
        <div className="category__function">
          <ul className="category__function-list">
            <NavLink to="/document" className="category__function-item text-decor-none">
              <div className="category__function-wrap">
                <span className="icon material-icons category__function-icon">
                  description
                </span>
              </div>
              <p className="category__function-tag">Tài liệu</p>
            </NavLink>
            <NavLink to="/storage" className="category__function-item text-decor-none">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp category__function-icon">
                  folder
                </span>
              </div>
              <p className="category__function-tag">Lưu trữ</p>
            </NavLink>
            <NavLink to="/message" className="category__function-item text-decor-none">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp category__function-icon">
                  chat_bubble
                </span>
              </div>
              <p className="category__function-tag">Chat</p>
            </NavLink>
            <NavLink to="/work" className="category__function-item text-decor-none">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp category__function-icon">
                  assignment_turned_in
                </span>
              </div>
              <p className="category__function-tag">Công việc</p>
            </NavLink>
            <NavLink to="/schedule" className="category__function-item text-decor-none">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp category__function-icon">
                  event
                </span>
              </div>
              <p className="category__function-tag">Lịch họp</p>
            </NavLink>
            <NavLink to="/report" className="category__function-item text-decor-none">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp category__function-icon">
                  bar_chart
                </span>
              </div>
              <p className="category__function-tag">Báo cáo</p>
            </NavLink>
          </ul>
        </div>
      </div>
      <div id="panel">
        <div className="panel__logo">
          DWorking
        </div>
        <Routes>
          <Route index element={<PanelDocument />} />
          <Route path="/document" element={<PanelDocument />} >
            <Route path="/document/:title" element={<Document />} />
          </Route>
          <Route path="/storage" element={<PanelStorage />} >
            <Route path="/storage/:title" element={<Storage />} />
          </Route>
        </Routes>
        
      </div>
    </div>

  )
}

export default Sidebar