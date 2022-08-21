import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div id="toolbar">
                <div className="toolbar__search">
                    <div className="search__icon-wrap">
                        <span className="material-icons table__icon-wrap icon" style={{height: '50%', width: '100%'}}>
                            search
                        </span>
                    </div>
                    <span>
                        <input type="text" className="toolbar__search-input" placeholder="Tìm kiếm"/>
                    </span>
                </div>
                <div className="toolbar__settings">
                    <div className="toolbar__settings-wrap">
                        <span className="icon material-icons-sharp" title="Hỗ trợ">
                            help_outline
                        </span>
                    </div>
                    <div className="toolbar__settings-wrap">
                        <span className="icon material-icons-sharp" title="Cài đặt">
                            settings
                        </span>
                    </div>
                    <div className="toolbar__user">
                        <div className="toolbar__user-wrap">
                            <span className="icon material-icons-sharp">
                                account_circle
                            </span>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Header