import React, { useState, useRef, useEffect, useCallback } from 'react'
import ContentMenu from '../../../component/ContextMenu';
import Dropdown from '../../../component/Dropdown';
import Image from '../../../component/Image';
import styles from './StorageAll.module.scss';

function StorageAll() {
  const [layoutType, setLayoutType] = useState('grid');
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    setAnchorPoint({ x: e.clientX, y: e.clientY });
    setShow(true);
  }, [setAnchorPoint, setShow])

  const handleClickOutSide = useCallback((e) => (
    show ? setShow(false) : null
  ), [show]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide);

    return () => {
      document.removeEventListener('click', handleClickOutSide);
    }
  })

  return (
    <div className="table table-all-doc">
      <div className={`table__heading flex-center-y ${styles.tableHeading}`}>
        <div className={`${styles.documentDirectory} flex-center-y`}>
          <div className={styles.directoryElement}>
            <h5 className={styles.directoryText}>
              Thư mục Lorem ipsum
            </h5>
          </div>
          <div className={`${styles.directoryNext} flex-center`}>
            <span className={`material-icons ${styles.directoryIcon}`}>
              navigate_next
            </span>
          </div>
          <div className={styles.directoryElement}>
            <h5 className={styles.directoryText}>
              Lorem ipsum
            </h5>
          </div>
          <div className={`${styles.directoryNext} flex-center`}>
            <span className={`material-icons ${styles.directoryIcon}`}>
              navigate_next
            </span>
          </div>
          <div className={styles.directoryElement}>
            <h5 className={styles.directoryText}>
              Tên thư mục
            </h5>
          </div>
        </div>
        <div className={`${styles.documentLayoutStyles} flex-center-y`}>
          <button className={`${styles.layoutStylesWrapper} ${layoutType === 'grid' && styles.layoutActive}`} disabled = {layoutType === 'grid' ? true : false} onClick={() => {
            setLayoutType('grid');
          }}>
            <span className={`material-icons ${styles.layoutStylesIcon}`}>
              apps
            </span>
          </button>
          <button className={`${styles.layoutStylesWrapper} ${layoutType === 'list' && styles.layoutActive}`} disabled = {layoutType === 'list' ? true : false} onClick={() => {
            setLayoutType('list');
          }}>
            <span className={`material-icons ${styles.layoutStylesIcon}`}>
              view_list
            </span>
          </button>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div layout={layoutType} className={styles.contentTableWrapper}>
            <div className={styles.tableRow}>
              <div className={styles.tableListHeader}>
                <span id="listHeaderName" className={styles.listHeaderText}>Tên tài liệu</span>
                <span id="listHeaderCreator" className={styles.listHeaderText}>Người tạo</span>
                <span id="listHeaderModify" className={styles.listHeaderText}>Sửa đổi lần cuối</span>
                <span id="listHeaderSize" className={styles.listHeaderText}>Dung lượng</span>
              </div>
              
              <div className={styles.tableGridHeader}>
                <p className={styles.gridHeaderText}>Thư mục</p>
              </div>
              <div className={`${styles.folderGroup}`}>
                <div className={`${styles.folderWrapper}`} onContextMenu={handleContextMenu}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>

                <div className={`${styles.folderWrapper}`} onContextMenu={handleContextMenu}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>

                <div className={`${styles.folderWrapper}`}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>

                <div className={`${styles.folderWrapper}`}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>

                <div className={`${styles.folderWrapper}`}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>

                <div className={`${styles.folderWrapper}`}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>

                <div className={`${styles.folderWrapper}`}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>

                <div className={`${styles.folderWrapper}`}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>

                <div className={`${styles.folderWrapper}`}>
                  <span className={`material-icons icon ${styles.folderIcon}`}>
                    folder
                  </span>
                  <span className={styles.folderName}>
                    Thư mục 1
                  </span>
                  <span className={styles.folderCreator}>
                    Lorem Ipsum
                  </span>
                  <span className={styles.modifyTime}>
                    01/09/2022 14:30
                  </span>
                  <span className={styles.folderSize}>
                    2 MB
                  </span>
                </div>
              </div>

              <div className={styles.tableGridHeader}>
                <p className={styles.gridHeaderText}>Tệp</p>
              </div>
              <div className={styles.fileGroup}>
                <div className={styles.fileWrapper} onContextMenu={handleContextMenu}>
                  <div className={styles.fileImageWrapper}>
                    <Image src={"https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg"} className={styles.fileImg} alt={"file image"} />
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Thư mục 1
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
                <div className={styles.fileWrapper} onContextMenu={handleContextMenu}>
                  <div className={styles.fileImageWrapper}>
                    <Image src={"https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg"} className={styles.fileImg} alt={"file image"} />
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Tên tài liệu
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
                <div className={styles.fileWrapper} onContextMenu={handleContextMenu}>
                  <div className={styles.fileImageWrapper}>
                    <img src="https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg" alt="file image" className={styles.fileImg}/>
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Tên tài liệu
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
                <div className={styles.fileWrapper}>
                  <div className={styles.fileImageWrapper}>
                    <img src="https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg" alt="file image" className={styles.fileImg}/>
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Tên tài liệu
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
                <div className={styles.fileWrapper}>
                  <div className={styles.fileImageWrapper}>
                    <img src="https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg" alt="file image" className={styles.fileImg}/>
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Tên tài liệu
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
                <div className={styles.fileWrapper}>
                  <div className={styles.fileImageWrapper}>
                    <img src="https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg" alt="file image" className={styles.fileImg}/>
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Tên tài liệu
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
                <div className={styles.fileWrapper}>
                  <div className={styles.fileImageWrapper}>
                    <img src="https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg" alt="file image" className={styles.fileImg}/>
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Tên tài liệu
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
                <div className={styles.fileWrapper}>
                  <div className={styles.fileImageWrapper}>
                    <img src="https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg" alt="file image" className={styles.fileImg}/>
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Tên tài liệu
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
                <div className={styles.fileWrapper}>
                  <div className={styles.fileImageWrapper}>
                    <img src="https://www.thegeeksclub.com/wp-content/uploads/2022/06/source-documents-1024x682-1.jpeg" alt="file image" className={styles.fileImg}/>
                  </div>
                  <div className={styles.fileInfo}>
                    <span className={`material-icons icon ${styles.fileIcon}`}>
                      folder
                    </span>
                    <span className={styles.fileName}>
                      Tên tài liệu
                    </span>
                    <span className={styles.fileCreator}>
                      Lorem Ipsum
                    </span>
                    <span className={styles.modifyTime}>
                      01/09/2022 14:30
                    </span>
                    <span className={styles.fileSize}>
                      2 MB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <ContentMenu className={styles.contextWraper} anchor={anchorPoint} style={{
            top: `${anchorPoint.y}px`,
            left: `${anchorPoint.x}px`
        }} >
          <ul className={styles.contextList} >
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                share
              </span>
              <span className={styles.contextContentSelect}>Chia sẻ</span>
            </li>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                link
              </span>
              <span className={styles.contextContentSelect}>Nhận liên kết chia sẻ</span>
            </li>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                folder_open
              </span>
              <span className={styles.contextContentSelect}>Hiển thị trong thư mục</span>
            </li>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                star_outline
              </span>
              <span className={styles.contextContentSelect}>Thêm vào mục quan trọng</span>
            </li>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                book_online
              </span>
              <span className={styles.contextContentSelect}>Quản lý phiên bản</span>
            </li>
            <hr/>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                edit
              </span>
              <span className={styles.contextContentSelect}>Đổi tên</span>
            </li>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                content_copy
              </span>
              <span className={styles.contextContentSelect}>Nhân bản</span>
            </li>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                open_with
              </span>
              <span className={styles.contextContentSelect}>Di chuyển</span>
            </li>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons`}>
                download
              </span>
              <span className={styles.contextContentSelect}>Tải xuống</span>
            </li>
            <li className={styles.contextItem}>
              <span class={`${styles.contextIcon} material-icons-outlined`}>
              backspace
              </span>
              <span className={styles.contextContentSelect}>Xóa</span>
            </li>
          </ul>
      </ContentMenu>}
    </div>
  )
}

export default StorageAll