import React, {useState} from 'react';
import { Modal } from 'antd';

import {ListTodo} from './components/ListTodo'
import {AddTodoForm} from './components/AddTodoForm'

import 'antd/dist/antd.css'
import './App.css';

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    // useEffect(()=>{
    //     console.log(close);
    //     if (close === 1){
    //         setIsModalVisible(false);
    //         close = 0;
    //     }
    // } , [close]);


    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const handleCloseModal = () => {
        setIsModalVisible(false)
    }

    return (
        <div className="App">
            <h2>List todo</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New Todo
                </button>
            </div>

            <ListTodo />

            <Modal title="Add Todo" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddTodoForm onClose={handleCloseModal} />
            </Modal>
        </div>
    );
}

export default App;
