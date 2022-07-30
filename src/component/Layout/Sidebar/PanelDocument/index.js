import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import '../Sidebar.scss'

function PanelDocument() {
  return (
    <div to="" className="panel__wrapper">
        <Link to="/document/create" className="panel__create">
            <button className="panel__create-btn btn btn-create-white">
                <span className="icon material-icons-sharp" style={{marginRight: 12}}>
                edit
                </span>
                Tạo tài liệu
            </button>
        </Link>
        <ul className="panel__options-list">
        <NavLink to="/document/all" className="panel__options-item">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            article
            </span>
            <p className="panel__option-tag">Tất cả tài liệu</p>
        </NavLink>
        <NavLink to="/document/sent" className="panel__options-item">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            send
            </span>
            <p className="panel__option-tag">Tài liệu đã gửi</p>
        </NavLink>
        <NavLink to="/document/important" className="panel__options-item">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            star_border
            </span>
            <p className="panel__option-tag">Tài liệu quan trọng</p>
        </NavLink>
        <NavLink to="/document/draft" className="panel__options-item">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            file_copy
            </span>
            <p className="panel__option-tag">Nháp</p>
        </NavLink>
        <NavLink to="/document/check" className="panel__options-item">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            check_box
            </span>
            <p className="panel__option-tag">Cần phê duyệt</p>
        </NavLink>
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
    </div>
  )
}

export default PanelDocument