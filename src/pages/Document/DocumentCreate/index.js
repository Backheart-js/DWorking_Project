import React from 'react'

function DocumentCreate() {
  return (
      <div className="table table-create-doc">
        <div className="table-create-header flex-center-y">
          <div className="back-wrapper">
            <span className="icon material-icons">
              arrow_back
            </span>
          </div>
          <h3 className>Tạo tài liệu trình ký mới</h3>
        </div>
        <div className="table-create-content">
          <div className="doc-row row h-full">
            <div className="document-wrapper col-md-8 ">
              <div className="document w-full h-full">
                <div className="document__header">
                  <h4 className="document__header-text">
                    Subject
                  </h4>
                </div>
              </div>
            </div>
            <div className="document-func-wrapper col-md-4 h-full">
              <div className="document-func-member w-full">
                <h4 className="func-title">
                  Người tham gia
                </h4>
                <button title="addMem" className="open-modal func__member-btn flex-center">
                  <span className="material-icons">
                    person_add_alt_1
                  </span>
                  Thêm người duyệt
                </button>
                <div className="member__list-wrapper">
                  <ul className="func__member-list">
                    <li className="func__member-item flex-center-y">
                      <span className="func__member-name">Nguyễn Vân A</span>
                      <span className="func__member-quantity">1</span>
                      <select name id className="func__member-select">
                        <option value="duyet" className="func__member-option">Duyệt</option>
                        <option value="ky" className="func__member-option">Ký</option>
                        <option value="xem" className="func__member-option">Xem</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="document-func-desc w-full">
                <h4 className="func-title">
                  Nội dung mô tả
                </h4>
                <div className="textarea-wrapper">
                  <textarea className="textarea-desc" name id cols={35} rows={30} placeholder="Nhập mô tả..." defaultValue={""} />
                </div>
              </div>
              <div className="document-func-file w-full">
                <h4 className="func-title">
                  Tài liệu đính kèm
                </h4>
                <input type="file" id="file" name="file" className="func__file-input" />
                <label className="func__file-label" htmlFor="file">
                  <span className="material-icons">
                    file_upload
                  </span>
                  Tải file lên
                </label>
              </div>
              <div className="document-func-btn w-full">
                <button className="btn-close-doc">Hủy</button>
                <button className="btn-save-doc">Lưu</button>
                <button className="btn-create-doc">Tạo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DocumentCreate