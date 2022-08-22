import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div id="toolbar">
                <div className="toolbar__search">
                    <div className="search__wrapper">
                        <span className="material-icons search__icon icon" style={{height: '100%'}}>
                            search
                        </span>
                        <input type="text" className="search__input" placeholder="Tìm kiếm"></input>
                    </div>
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