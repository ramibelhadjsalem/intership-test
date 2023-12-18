import React from "react";
import { Form } from "../models/form";
import '../styles/FormItem.css'
// import { Trash3 ,PencilSquare} from "react-bootstrap-icons"
import { formatDate } from "../utils/formatDate";

interface FormItemProps {
    item: Form,
    onEditClick :(id:string)=>void,
    onDeleteClick:(id:string)=>void,
    onFormCardClick :(id:string)=>void

 
}

const FormItem = ({ item,onEditClick,onDeleteClick,onFormCardClick}: FormItemProps) => {

    const { _id, title, createdAt } = item
    return (
        <div className="col-12  col-md-6 col-lg-3 p-1" >
            <div className="form-card position-relative d-flex flex-column justify-content-between">
                <div  onClick={()=>onFormCardClick(_id)} className="title">{title}</div>
                <div className="icons d-flex flex-nowrap ">
                    <button onClick={()=>onDeleteClick(_id)}><i className=" delete-icon bi bi-trash3 me-2"></i></button>
                    <button onClick={()=>onEditClick(_id)}> <i className="edit-icon bi bi-pencil-square"></i></button>
                </div>
              
                <div className="form-footer mt-5">
                    Last Update :{formatDate(createdAt)}
                </div>

            </div>
        </div>

    )
}
export default FormItem

