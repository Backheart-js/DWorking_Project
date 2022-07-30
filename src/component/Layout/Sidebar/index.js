import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Document } from '../../../pages';
import PanelDocument from './PanelDocument';

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
            <NavLink to="/document" className="category__function-item">
              <div className="category__function-wrap">
                <span className="icon material-icons category__function-icon">
                  description
                </span>
              </div>
              <p className="category__function-tag">Tài liệu</p>
            </NavLink>
            <NavLink to="/storage" className="category__function-item">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp category__function-icon">
                  folder_open
                </span>
              </div>
              <p className="category__function-tag">Lưu trữ</p>
            </NavLink>
            <NavLink to="/message" className="category__function-item">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp category__function-icon">
                  chat_bubble_outline
                </span>
              </div>
              <p className="category__function-tag">Chat</p>
            </NavLink>
            <NavLink to="/work" className="category__function-item">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp">
                  assignment_turned_in
                </span>
              </div>
              <p className="category__function-tag">Công việc</p>
            </NavLink>
            <NavLink to="/schedule" className="category__function-item">
              <div className="category__function-wrap">
                <span className="icon material-icons-sharp category__function-icon">
                  event
                </span>
              </div>
              <p className="category__function-tag">Lịch họp</p>
            </NavLink>
            <NavLink to="/report" className="category__function-item">
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
            <Route path="/document" element={<PanelDocument />} >
              <Route path="/document/:title" element={<Document />} />
            </Route>
          </Routes>
          
        {/* <NavLink to="" className="panel__wrapper">
          <div className="panel__create">
            <button className="panel__create-btn btn btn-create-white">
              <span className="icon material-icons-sharp" style={{marginRight: 12}}>
                edit
              </span>
              Tạo tài liệu
            </button>
          </div>
          <ul className="panel__options-list">
            <li className="panel__options-item active">
              <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                article
              </span>
              <p className="panel__option-tag">Tất cả tài liệu</p>
            </li>
            <li className="panel__options-item">
              <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                send
              </span>
              <p className="panel__option-tag">Tài liệu đã gửi</p>
            </li>
            <li className="panel__options-item">
              <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                star_border
              </span>
              <p className="panel__option-tag">Tài liệu quan trọng</p>
            </li>
            <li className="panel__options-item">
              <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                file_copy
              </span>
              <p className="panel__option-tag">Nháp</p>
            </li>
            <li className="panel__options-item">
              <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                check_box
              </span>
              <p className="panel__option-tag">Cần phê duyệt</p>
            </li>
          </ul>
          <div className="panel__label-wrapper">
            <div className="label__title-wrapper flex-center-y">
              <p className="label-text">NHÃN</p>
              <button title="addLabel" className="open-modal label-add-wrapper">
                <span title="addLabel" className="label-add-icon icon material-icons">
                  add
                </span>
              </button>
            </div>
            <ul className="label__list">
            </ul>
          </div>
        </NavLink>
        <NavLink to="" className="panel__wrapper">
        </NavLink>
        <NavLink to="" className="panel__wrapper">
        </NavLink>
        <NavLink to="" className="panel__wrapper">
        </NavLink>
        <NavLink to="" className="panel__wrapper">
        </NavLink>
        <NavLink to="" className="panel__wrapper">
        </NavLink> */}
      </div>
    </div>

  )
}

export default Sidebar