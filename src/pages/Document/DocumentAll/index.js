import React, { useState } from 'react';

function DocumentAll() {

  const [checkedAll, setCheckedAll] = useState(false)

  const handleCheckedAll = (e) => {
    setCheckedAll(e.target.checked);
  }

  return (
      <div className="table table-all-doc ">
        <div className="table__heading flex-center-y">
          <div className="table__heading--left flex-center-y">
            <div className="flex-center-y">
              <div className="table__icon-wrap flex-center-x">
                <input type="checkbox" className="table__content-checkbox" />
              </div>
              <div className="icon-dropdown-wrap flex-center-x">
                <span className="icon-dropdown icon material-icons">
                  expand_more
                </span>
                <div className="dropdown__wrapper dropdown-checkbox">
                  <ul className="dropdown__list">
                    <li className="dropdown__row">Tất cả</li>
                    <li className="dropdown__row">Bỏ chọn tất cả</li>
                    <li className="dropdown__row">Đã xem</li>
                    <li className="dropdown__row">Chưa xem</li>
                    <li className="dropdown__row">Gắn dấu sao</li>
                    <li className="dropdown__row">Không gắn dấu sao</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="table__icon-wrap flex" style={{justifyContent: 'start'}}>
              <span className="icon material-icons">
                refresh
              </span>
            </div>
          </div>
          <div className="table__heanding--right flex-center-y">
            <div className="table__heading-text flex-center" style={{marginRight: 20}}>
              <span style={{fontWeight: '500', color: '#666'}}>1 - 20 trong số 120</span>
              <div className="dropdown__wrapper">
                <ul className="dropdown__list">
                  <li className="dropdown__row">Mới nhất</li>
                  <li className="dropdown__row">Cũ nhất</li>
                </ul>
              </div>
            </div>
            <div className="table__heading-page flex-center-y">
              <div className="table__icon-wrap flex-center">
                <span className="icon material-icons flex-center">
                  chevron_left
                </span>
              </div>
              <div className="table__icon-wrap flex-center">
                <span className="icon material-icons flex-center">
                  navigate_next
                </span>
              </div>
              <div className="more-function table__icon-wrap flex-center">
                <span className="icon material-icons flex-center">
                  more_vert
                </span>
                <div className="dropdown__wrapper">
                  <ul className="dropdown__list">
                    <li className="dropdown__title">
                      Hiển thị tối đa
                    </li>
                    <li className="dropdown__row line-display-wrapper">
                      <span className="icon material-icons check-icon">
                        done
                      </span>
                      <span className="line-display-text">
                        5 mục
                      </span>
                    </li>
                    <li className="dropdown__row line-display-wrapper">
                      <span className="icon material-icons check-icon">
                        done
                      </span>
                      <span className="line-display-text">
                        10 mục
                      </span>
                    </li>
                    <li className="dropdown__row line-display-wrapper active">
                      <span className="icon material-icons check-icon">
                        done
                      </span>
                      <span className="line-display-text">
                        25 mục
                      </span>
                    </li>
                    <li className="dropdown__row line-display-wrapper">
                      <span className="icon material-icons check-icon">
                        done
                      </span>
                      <span className="line-display-text">
                        50 mục
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table__content">
          <div className="table__content-wrap grid">
            <div className="content-row row flex-center-y">
              <div className="col col-md-4 flex-center-y table__content-col1">
                <div className="table__content-function flex-center-y">
                  <div className="table__icon-wrap table__content-function-icon flex-center">
                    <input type="checkbox" className="table__content-checkbox" />
                  </div>
                  <div className="table__icon-wrap table__content-function-icon flex-center">
                    <span className="material-icons star-icon">
                      star
                    </span>
                  </div>
                  <div className="table__icon-wrap table__content-function-icon flex-center">
                    <span className="material-icons label-icon">
                      label
                    </span>
                  </div>
                </div>
                <div className="table__content-name flex-center-y">
                  <span className="table__content-text">Ha Nguyen, Vui Do, Phan 3</span>
                </div>
              </div>
              <div className="col col-md-5 flex-center-y table__content-col2">
                <div className>
                  <span className="table__content-text">
                    Phê duyệt Chương trình kinh doanh Quý IV - 2022
                  </span>
                </div>
              </div>
              <div className="col col-md-3 flex-center-y h-full">
                <div className="col l-6 flex-center table__content-col3">
                  <span className="table__content-text">
                    Hoàn thành
                  </span>
                </div>
                <div className="col l-6 flex-center">
                  <span className="table__content-text">
                    10/3/2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DocumentAll