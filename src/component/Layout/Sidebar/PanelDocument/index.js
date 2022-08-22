import React, { useReducer, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { colorsLabel } from '../../../../storageData/Datas';
import { LabelsAvailable } from '../../../../storageData/Labels';
import Dropdown from '../../../Dropdown';
import BasicModal from '../../../Modal';
import '../Sidebar.scss'

const ADD_ACTION = 'add-action';
const EDIT_ACTION = 'edit-action';
const REMOVE_ACTION = 'remove-action';

const add = (payload) => {
    return {
        type: ADD_ACTION,
        payload
    }
}
const edit = (payload) => {
    return {
        type: EDIT_ACTION,
        payload
    }
}
const remove = (payload) => {
    return {
        type: REMOVE_ACTION,
        payload
    }
}

const reducer = (state, action) => {
    let newState = [];
    let newColors = [];

    switch (action.type) {
        case ADD_ACTION:
            newState = [
                ...state,
                action.payload
            ]
            break;
        case EDIT_ACTION:
            newColors = [...state]
            newColors.splice(action.payload.index,1,action.payload)
            newState = newColors
            
            break;
        case REMOVE_ACTION:
            newColors = [...state]
            newColors.splice(action.payload,1);
            newState = newColors
            
            break;
        default:
            throw new Error('Action invalid')
    }

    return newState;
}

function PanelDocument() {
    const [stateColor, dispatch] = useReducer(reducer,LabelsAvailable)
    const [dataColor, setDataColor] = useState({
        index: 0,
        title: '',
        id: 1
    })
    const [isOpen, setIsOpen] = useState(false);
    const [typeModal, setTypeModal] = useState('');
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        setDataColor({
            title: '',
            id: 1
        })
    }

    const handleAdd = () => {
        dispatch(add(dataColor))
        setDataColor({
            ...dataColor,
            title: '',
        })
    }

    const handleEdit = () => {
        dispatch(edit(dataColor));
    }

    const handleRemove = (index) => {
        dispatch(remove(index)) 
    }

  return (
    <div to="" className="panel__wrapper">
        <Link to="/document/create" className="panel__create text-decor-none">
            <button className="panel__create-btn btn btn-create-white">
                <span className="icon material-icons-sharp" style={{marginRight: 12}}>
                edit
                </span>
                Tạo tài liệu
            </button>
        </Link>
        <ul className="panel__options-list">
        <NavLink to="/document/all" className="panel__options-item text-decor-none">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            article
            </span>
            <p className="panel__option-tag">Tất cả tài liệu</p>
        </NavLink>
        <NavLink to="/document/sent" className="panel__options-item text-decor-none">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            send
            </span>
            <p className="panel__option-tag">Tài liệu đã gửi</p>
        </NavLink>
        <NavLink to="/document/important" className="panel__options-item text-decor-none">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            star
            </span>
            <p className="panel__option-tag">Tài liệu quan trọng</p>
        </NavLink>
        <NavLink to="/document/draft" className="panel__options-item text-decor-none">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            file_copy
            </span>
            <p className="panel__option-tag">Nháp</p>
        </NavLink>
        <NavLink to="/document/check" className="panel__options-item text-decor-none">
            <span className="icon material-icons-sharp" style={{textAlign:'left'}}>
            check_box
            </span>
            <p className="panel__option-tag">Cần phê duyệt</p>
        </NavLink>
        </ul>
        <div className="panel__label-wrapper">
        <div className="label__title-wrapper flex-center-y">
            <p className="label-text">NHÃN</p>
            <button title="addLabel" className="open-modal label-add-wrapper" 
                onClick={() => {
                    setTypeModal('addLabel');
                    handleOpen()
                }}>
            <span title="addLabel" className="label-add-icon icon material-icons">
                add
            </span>
            </button>
        </div>
        <ul className="label__list">
            {stateColor.map((labelColor,index) => (
                <li data-index={index} className="label-item flex-center-y">
                    <div className="label__item-info flex-center-y">
                        <span className={`label-${labelColor.id} label__icon material-icons`}>
                            label
                        </span>
                        <p className="label__content">{labelColor.title}</p>
                    </div>
                    <div className="label__more-wrapper">
                        <span className="label__more-icon open-dropdown icon material-icons" data-toggle="dropdown">
                            more_vert
                        </span>
                        
                        <Dropdown>
                            <li className={`dropdown__row`} onClick={(e) => {
                                setTypeModal('editLabel')
                                setDataColor({...stateColor[e.target.closest('.label-item').dataset.index],index:e.target.closest('.label-item').dataset.index})
                                handleOpen();
                            }}>Sửa</li>
                            <li className={`dropdown__row`} onClick={(e) => {
                                handleRemove(e.target.closest('.label-item').dataset.index)
                            }}>Xóa</li>
                        </Dropdown>
                    </div>
                </li>
            ))}
        </ul>
        </div>
        <BasicModal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} type={typeModal} title={typeModal === 'addLabel' ? 'Tạo nhãn mới' : 'Chỉnh sửa nhãn'} onAdd={handleAdd} onEdit={handleEdit} >
            <div className="label-name-wrapper">
                <p className="label-text">Vui lòng nhập tên nhãn mới:</p>
                <input required={true} value={dataColor.title} type="text" className="label-input" onChange={(e) => {
                    setDataColor({...dataColor, title: e.target.value})
                }}/>
            </div>
            <div className="color-choose-wrapper">
                <span className="label-text">Chọn màu nhãn:</span>
                <div className="color-container">
                    {colorsLabel.map((color, index) => {
                        return (
                            <div key={index} 
                                id={`${color.id}`} 
                                className={`color-choose color-${index+1} ${color.id===dataColor.id ? 'color-active' : ''} flex-center`} 
                                onClick={(e) => {
                                    setDataColor({
                                        ...dataColor,
                                        id: Number(e.target.id)
                                    })
                                }}
                                >
                                <span className="color-choose-icon material-icons">
                                    check
                                </span>
                            </div>
                        )
                    })}
                </div>
                <button type="button" className="delete-color">
                    Xóa màu
                </button>
            </div>
        </BasicModal>
    </div>
  )
}

export default PanelDocument