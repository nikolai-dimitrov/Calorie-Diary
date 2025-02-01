import React, { useState } from 'react';
import { Modal, ConfigProvider } from 'antd';

import styles from './diary-modal.module.css';
export const DiaryModal = ({ open, closeModal, currentModalMode }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            closeModal();
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        closeModal();
    };

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            contentBg: '#3c3c3c',
                            headerBg: '#3c3c3c',
                            titleColor: '#fff',

                        },
                        Button: {
                            colorBgContainer: '#3c3c3c',
                            primaryShadow: '#3c3c3c',
                            colorPrimary: '#3c3c3c',
                            colorPrimaryActive: '#fff',
                            colorPrimaryHover: 'orange',
                            colorText: "#fff",
                            colorBorder: '#3c3c3c',
                        }
                    },
                }}
            >
                <Modal
                    // todo - on update display daily report creation date 
                    title={currentModalMode == 'createMode' ? 'Add your daily report' : 'Update your daily report'}
                    open={open}
                    okText={currentModalMode == 'createMode' ? 'Create' : 'Update'}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    className={styles.modal}
                >
                    <form action="" className={styles.modalForm}>
                        <div>
                            <label htmlFor="eatenCalories">Food Obtained Calories</label>
                            <input type="text" name="eatenCalories" id="eatenCalories" />
                        </div>
                        <div>
                            <label htmlFor="exerciseBurnedCalories">Exercise Burned Calories</label>
                            <input type="text" name="exerciseBurnedCalories" id="exerciseBurnedCalories" />

                        </div>
                    </form>
                </Modal>
            </ConfigProvider>
        </>
    );
};