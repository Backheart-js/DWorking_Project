import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import styles from './Modal.module.scss'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '600px',
    maxWidth: '700px',
    minHeight: '320px',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    p: 4,
};

export default function BasicModal({ isOpen, handleOpen, handleClose, btnText = 'Thêm', children,  ...props }) {
  

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{props.title}</h3>
                <div className={styles.wrapCloseModal}>
                    <span className={`icon material-icons ${styles.iconClose}`} onClick={handleClose}>
                    close
                    </span>
                </div>
            </div>
            <div className={styles.modalContent}>
              {children}
            </div>
            <div className={styles.modalFooter}>
                <button type="button" className={`${styles.btnModal} ${styles.closeModal}`} onClick={handleClose}>
                    Hủy
                </button>
                <button type="button" className={`${styles.btnModal} ${styles.addBtnModal}`} 
                  onClick={() => {
                    switch (props.type) {
                      case 'addLabel':
                        return props.onAdd();
                      case 'editLabel':
                        return props.onEdit();
                      default:
                        return props.onSubmit();
                    }
                  }}>
                    {btnText}
                </button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
