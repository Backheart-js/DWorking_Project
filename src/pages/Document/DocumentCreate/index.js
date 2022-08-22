import { red } from '@mui/material/colors';
import React, { useReducer, useState } from 'react'
import BasicModal from '../../../component/Modal';
import { dataMembers } from "../../../storageData/Datas";

import styles from './DocumentCreate.module.scss'

const initOpenModal = {
  addModal: false,
  sendModal: false,
  feedbackModal: false,
  rejectModal: false,
  copyModal: false,
  removeModal: false,
}

const SETCLOSE_ACTION = 'close';
const ADDMODAL_ACTION = 'addModal';
const SENDMODAL_ACTION = 'sendModal';
const FEEDBACKMODAL_ACTION = 'feedbackModal';
const REJECTMODAL_ACTION = 'rejectModal';
const COPYMODAL_ACTION = 'copyModal';
const REMOVEMODAL_ACTION = 'removeModal';

const reducerModal = (state, action) => {
  switch (action) {
    case SETCLOSE_ACTION:
      return {
        addModal: false,
        sendModal: false,
        feedbackModal: false,
        rejectModal: false,
        copyModal: false,
        removeModal: false,
      }

    case ADDMODAL_ACTION:
      return {
        ...state,
        addModal: true
      }
    
    case SENDMODAL_ACTION:
      return {
        ...state,
        sendModal:true
      }

    case FEEDBACKMODAL_ACTION:
      return {
        ...state,
        feedbackModal: true
      }
    
    case REJECTMODAL_ACTION:
      return {
        ...state,
        rejectModal: true
      }

    case COPYMODAL_ACTION:
      return {
        ...state,
        copyModal: true
      }

    case REMOVEMODAL_ACTION:
      return {
        ...state,
        removeModal: true
      }

    default:
      throw new Error('action invalid!')
  }
}

function DocumentCreate() {
  const [modalState, dispatch] = useReducer(reducerModal, initOpenModal);
  const [isOpen, setIsOpen] = useState(false);
  const [sendStep, setSendStep] = useState(true);
  const [approveStep, setApproveStep] = useState(false);
  const [replicationStep, setReplicationStep] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    dispatch(SETCLOSE_ACTION)
    setIsOpen(false)
  };

  //Gửi tài liệu để phê duyệt
  const onSendModal = () => {
    handleClose();
    setSendStep(false);
    setApproveStep(true);
  }
  const onApproveModal = () => {
    handleClose();
    // setSendStep(false);
    setApproveStep(false);
    setReplicationStep(true);
  }
  const defaultSubmit = () => {

  }
  let array_1 = ``, array_2 = ``, array_3 = ``;

//   dataMembers.map((member) => {
//     switch (member.department) {
//         case 'Ban giám đốc' : {
//             array_1 = array_1.concat(`
//                 <li className="members-item flex-center-y">
//                     <input type="checkbox" value="${member.id}">
//                     <div className="member-info grid flex-center-y">
//                         <p className="info-1">${member.fullname}</p>
//                         <p className="info-2">AnhNV</p>
//                         <p className="info-3">${member.office}</p>
//                     </div>
//                 </li>
//             `);
//             break;
//         }
//         case 'Hành chính nhân sự' : {
//             array_2 = array_2.concat(`
//                 <li className="members-item flex-center-y">
//                     <input type="checkbox" value="${member.id}">
//                     <div className="member-info grid flex-center-y">
//                         <p className="info-1">${member.fullname}</p>
//                         <p className="info-2">AnhNV</p>
//                         <p className="info-3">${member.office}</p>
//                     </div>
//                 </li>
//             `);
//             break;
//         }
//         case 'Kế toán' : {
//             array_3 = array_3.concat(`
//                 <li className="members-item flex-center-y">
//                     <input type="checkbox" value="${member.id}">
//                     <div className="member-info grid flex-center-y">
//                         <p className="info-1">${member.fullname}</p>
//                         <p className="info-2">AnhNV</p>
//                         <p className="info-3">${member.office}</p>
//                     </div>
//                 </li>
//             `);
//             break;
//         }
//         default: {
//             throw new Error(`Error`)
//         }
//     }
// })

//   let myArrayWithNoDuplicates = dataMembers.reduce(function (accumulator, element) {
//     if (accumulator.indexOf(element.department) === -1) {
//       console.log(accumulator.indexOf(element.department));
//       accumulator.push(element)
//     }
//     return accumulator
//   }, [])

//   console.log(myArrayWithNoDuplicates);

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
              <div className={styles.documentFuncTitle} >
                <p>Thông tin tài liệu</p>
              </div>

              <div className={styles.documentFuncInfo}>
                <div className="document-func-member w-full">
                  <h4 className="func-title">
                    Người tham gia
                  </h4>
                  <button title="addMem" className="open-modal func__member-btn flex-center" onClick={() => {
                    dispatch(ADDMODAL_ACTION);
                    handleOpen()
                  }}>
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
                        <select className="func__member-select">
                          <option value="duyet" className="func__member-option">Duyệt</option>
                          <option value="ky" className="func__member-option">Ký</option>
                          <option value="xem" className="func__member-option">Xem</option>
                        </select>
                      </li>       
                    </ul>
                  </div>
                </div>
                <div className="document-func-file w-full">
                  <h4 className="func-title">
                    Tài liệu tham chiếu đính kèm
                  </h4>
                  <button className="func__file-btn flex-center" onClick={() => {}}>
                    <span className="icon material-icons">
                      file_upload
                    </span>
                    Tải file lên
                  </button>
                </div>
                <div className="document-func-desc w-full">
                  <h4 className="func-title">
                    Nội dung mô tả
                  </h4>
                  <div className="textarea-wrapper">
                    <textarea className="textarea-desc" name id cols={35} rows={30} placeholder="Nhập mô tả..." defaultValue={""} />
                  </div>
                </div>
                <div className={styles.documentDirectory} >
                  <h4 className="func-title">
                    Thư mục lưu tài liệu
                  </h4>
                  <ul className={styles.direcOptionsGroup}>
                    <li className={styles.direcOptions}>
                      <input type="checkbox" />
                      <span>
                        Lưu trong một thư mục
                      </span>
                    </li>
                    <li className={styles.direcOptions}>
                      <input type="checkbox" />
                      <span>
                        Lưu kèm các file tham chiếu
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className={`document-func-btn w-full ${styles.documentFuncButton}`}>
                {
                  (sendStep &&
                  ( 
                    <>
                      <button className="btn-close-doc">Hủy</button>
                      <button className="btn-save-doc">Lưu</button>
                      <button className="btn-create-doc" onClick={() => {
                        dispatch(SENDMODAL_ACTION);
                        handleOpen();
                      }}>Gửi</button>
                    </>
                  ))
                  ||
                  (approveStep && (
                    <>
                      <button className="btn-close-doc" onClick={() => {
                        dispatch(REJECTMODAL_ACTION);
                        handleOpen();
                      }}>Từ chối</button>
                      <button className="btn-save-doc">Lưu</button>
                      <button className="btn-create-doc" onClick={() => {
                        dispatch(FEEDBACKMODAL_ACTION);
                        handleOpen();
                      }}>Duyệt</button>
                    </>
                  ))
                  ||
                  (replicationStep && (
                    <>
                      <button className="btn-save-doc" onClick={() => {
                        dispatch(REMOVEMODAL_ACTION);
                        handleOpen();
                      }}>Xóa</button>
                      <button className="btn-create-doc" onClick={() => {
                        dispatch(COPYMODAL_ACTION);
                        handleOpen();
                      }}>Nhân bản</button>
                    </>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {modalState.addModal && 
        <BasicModal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} title={'Thêm người duyệt'}>
          <div className="modal__search flex-center-y">
            <div className="modal__icon-wrapper flex-center">
                <span className="material-icons modal__icon icon">
                    search
                </span>
            </div>
            <span className="w-full">
                <input type="text" className="modal__search-input w-full" placeholder="Nhập để tìm kiếm..."/>
            </span>
          </div>
          <div className="modal__options">
              <div className="modal__member-group">
                  <div className="group-title-wrapper flex-center-y">
                      <span className="material-icons member-icon">
                          arrow_right
                      </span>
                      Ban Giám đốc
                  </div>
                  <ul className="members-list">
                      {array_1}
                  </ul>
              </div>
              <div className="modal__member-group">
                  <div className="group-title-wrapper flex-center-y">
                      <span className="material-icons member-icon">
                          arrow_right
                      </span>
                      Hành chính nhân sự
                  </div>
                  <ul className="members-list">
                      {array_2}
                  </ul>
              </div>
              <div className="modal__member-group active">
                  <div className="group-title-wrapper flex-center-y">
                      <span className="material-icons member-icon">
                          arrow_right
                      </span>
                      Kế toán
                  </div>
                  <ul className="members-list">
                      {array_3}
                  </ul>
              </div>
          </div>
        </BasicModal>}

        {modalState.sendModal && 
        <BasicModal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} title={'Trình duyệt tài liệu'} btnText={'Gửi'} onSubmit={onSendModal}>
          <div className={styles.modalNoti}>
            <p className={styles.modalTextContent}>Tài liệu sẽ được gửi đến các cấp phê duyệt</p>  
            <p className={styles.modalTextContent}>Trong quá trình phê duyệt, tài liệu không thể chỉnh sửa.</p>
          </div>
          <br/>
          <div className={styles.modalComfirm}>
            <span className={styles.modalTextContent}>Tiếp tục trình duyệt tài liệu này?</span>
          </div>
        </BasicModal>}

        {modalState.feedbackModal && 
        <BasicModal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} title={'Gửi phản hồi'} btnText={'Phản hồi'} onSubmit={onApproveModal}>
          <div className={styles.modaNoti}>
            <p className={styles.modalTextContent}>Vui lòng nhập thông tin phản hồi:</p>
            <textarea className={styles.modalFeedbackTextarea} rows="6">

            </textarea>
          </div>
        </BasicModal>}

        {modalState.rejectModal && 
        <BasicModal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} title={'Từ chối phê duyệt'} btnText={'Gửi'} onSubmit={defaultSubmit}>
          <div className={styles.modaNoti}>
            <p className={styles.modalTextContent}>Vui lòng nhập lý do từ chối:</p>
            <textarea className={styles.modalFeedbackTextarea} rows="2">

            </textarea>
          </div>
        </BasicModal>}

        {modalState.copyModal &&
        <BasicModal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} title={'Nhân bản tài liệu'} btnText={'Đồng ý'} onSubmit={defaultSubmit}>
          <div className={styles.modalNoti}>
            <p className={styles.modalTextContent}>Tài liệu được nhân bản ở trạng thái nháp, giữ nguyên tất cả các thiết lập và có thể chỉnh sửa.</p>  
          </div>
          <br/>
          <div className={styles.modalComfirm}>
            <span className={styles.modalTextContent}>Tiếp tục nhân bản tài liệu này?</span>
          </div>
        </BasicModal>
        }

        {modalState.removeModal &&
        <BasicModal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} title={'Xóa tài liệu'} btnText={'Đồng ý'} onSubmit={defaultSubmit}>
          <div className={styles.modalNoti}>
            <p className={styles.modalTextContent}>Tài liệu đã xóa không thể tìm kiếm.</p>  
          </div>
          <br/>
          <div className={styles.modalComfirm}>
            <span className={styles.modalTextContent}>Tiếp tục xóa tài liệu này?</span>
          </div>
        </BasicModal>
        }
      </div>
  )
}

export default DocumentCreate