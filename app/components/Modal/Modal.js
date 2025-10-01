import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, onClose }) => {
    return (
        <div className={styles['modal-overlay']}>
            <div className={styles['modal-content']}>
                <button className={styles['close-btn']} onClick={onClose}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.73863 0.298302C1.3409 -0.0994342 0.696039 -0.0994342 0.298302 0.298302C-0.0994342 0.696039 -0.0994342 1.3409 0.298302 1.73863L6.05967 7.5L0.298379 13.2613C-0.0993571 13.659 -0.0993576 14.3039 0.298379 14.7016C0.696116 15.0994 1.34097 15.0994 1.73871 14.7016L7.5 8.94033L13.2613 14.7016C13.659 15.0994 14.3039 15.0994 14.7016 14.7016C15.0994 14.3039 15.0994 13.659 14.7016 13.2613L8.94033 7.5L14.7017 1.73864C15.0994 1.3409 15.0994 0.696041 14.7017 0.298304C14.304 -0.0994327 13.6591 -0.0994327 13.2614 0.298304L7.5 6.05967L1.73863 0.298302Z" fill="white" />
                    </svg>

                </button>
                <h2 className={styles['title']}>ABBS</h2>
                {children}
            </div>
        </div>
    );
};

export default Modal;
