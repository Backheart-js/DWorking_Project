import React, { useReducer, useRef, useState } from 'react'

import { NavLink, Link } from 'react-router-dom';
import BasicModal from '../../../Modal';
import '../Sidebar.scss'

function PanelStorage() {
  return (
    <div to="" className="panel__wrapper">
        <ul className="panel__options-list" style={{marginTop: '0px'}}>
            <NavLink to="/storage/all" className="panel__options-item text-decor-none">
                <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                article
                </span>
                <p className="panel__option-tag">Tài liệu của tôi</p>
            </NavLink>
            <NavLink to="/storage/shared" className="panel__options-item text-decor-none">
                <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                people_alt
                </span>
                <p className="panel__option-tag">Được chia sẻ với tôi</p>
            </NavLink>
            <NavLink to="/storage/starred" className="panel__options-item text-decor-none">
                <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                star
                </span>
                <p className="panel__option-tag">Quan trọng</p>
            </NavLink>
            <NavLink to="/storage/recently" className="panel__options-item text-decor-none">
                <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                watch_later
                </span>
                <p className="panel__option-tag">Gần đây</p>
            </NavLink>
            <NavLink to="/storage/trash" className="panel__options-item text-decor-none">
                <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
                delete
                </span>
                <p className="panel__option-tag">Thùng rác</p>
            </NavLink>
        </ul>
    </div>
  )
}

export default PanelStorage