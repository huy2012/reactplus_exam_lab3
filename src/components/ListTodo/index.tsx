import './ListTodo.css'
import {useState , useEffect} from "react";
import * as TodoServices from "../../services/TodoServices"

export let load = {
    a : 0
};

type todo = {
    id : number,
    name : string,
    content : string
}

const handleRemove = (id : string)=>{
    TodoServices.removeToDo(id)
        .then((response)=>{
            console.log(response.data)
            load.a = 1;
        })
        .catch((error)=>{
           throw error;
        });
    alert("Đã xóa todo")
};

const handleUpdate = (id : string , name : string , content : string)=>{
    const inputName = prompt("input name ");
    const inputContent = prompt("input Content ");
    TodoServices.updateToDo(id , String(inputName) , String(inputContent))
        .then((response)=>{
            console.log(response.data)
            load.a = 1;
        })
        .catch((error)=>{
            throw error;
        });
    alert("Đã cập nhật todo")
};

const Test = (todo : todo)=>{
    return (
        <div className="ant-list-item">
            <div className="ant-list-item-meta">
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a> {todo.name} </a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                        {todo.content}
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li>
                        <a
                            onClick={ () => handleUpdate(String(todo.id) , "name 2222" , "sua 1111") }
                        >
                            Edit
                        </a>
                    </li>
                    <li>
                        <a onClick={ () => handleRemove(String(todo.id)) } >Remove</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export const ListTodo = () => {

    const [listTodo , setListToDo] = useState([]);

    const getListToDo = async ()=>{
        await TodoServices.getAllToDo()
            .then((response)=>{
                setListToDo(response.data);
            })
            .catch((error)=>{
                throw error;
            })
    }

    useEffect(()=>{
        getListToDo()
    } , []);

    useEffect(()=>{
        getListToDo();
        load.a = 0;
    } , [load.a]);

    const renderUI = ()=>{
         const  a = listTodo.map( (todo : todo , index : number) =>{
            return <Test key={index} id={todo.id} name={todo.name} content={todo.content} />
        });

        return a;
    }

    return <div className="ant-list-items">
        {renderUI()}
    </div>
}
