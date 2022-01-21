import React, {useState} from "react";
import axios from "axios";
import {load} from "../ListTodo/index"
import * as TodoServices from "../../services/TodoServices"

type dataType = {
    onClose : Function
};

export const AddTodoForm = ({onClose } : dataType) => {

    // console.log(typeof onClose);

    const [name , setName] = useState("");
    const [content , setContent] = useState("");

    const handleAdd = async ()=>{
        if (name === "" || content === ""){
            alert("Không được để trống !")
        } else {
            await TodoServices.addToDo(name , content)
                .then((response)=>{
                    console.log(response.data);
                    console.log("add todo ok");
                })
                .catch((error)=>{
                    console.log(`Error API POST add todo list ${error}`)
                });

            load.a  = 1;
        }

    };

    const handleInputName = (tagInput : any)=>{
        setName( tagInput.value )
    }

    const handleInputContent = (tagInput : any)=>{
        setContent(tagInput.value)
    }

    return <div>
        <div className="field-input-group">
            <input placeholder="Name" type="text" className="ant-input"
                   onInput={(event)=> handleInputName(event.target) }/>
        </div>
        <div className="field-input-group">
            <input placeholder="Description" type="text" className="ant-input"
                   onInput={(event)=> handleInputContent(event.target) } />
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary" onClick={handleAdd} >
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}} onClick={()=> onClose()} >
                Cancel
            </button>
        </div>
    </div>
}
