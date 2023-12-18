import FieldItem from "./FieldItem"
import { fieldList } from "./FieldList"
import "../../../styles/SidePanel.css"
import { useControlState } from "../../AddForm";
import { useState } from "react";
const SidePanel: React.FC<{ saveAction: () => void }> = ({ saveAction }) => {

    const { controlState, setControlState } = useControlState();
   
  
    return (
        <div className="left-side  col-3 col-lg-2 d-flex flex-column ">
            <form className="btn-container my-3 p-0" onSubmit={saveAction} >
                <div className="container-input">
                <label htmlFor="input">Form title</label>
                    <input
                        name="title"
                        type="text"
                        min={1} 
                        value={controlState.title}
                        placeholder="choose title for form" required 
                        onChange={(e) => {
                            setControlState((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value
                            }))
                        }}/>
                </div>
                <button  type="submit" className="btn btn-primary w-100 mt-3"><i className="bi bi-arrow-return-right me-2"></i>Save</button>
            </form>
            <div className="fields-container row ">
                {fieldList.map((item, key) => <FieldItem key={key} {...item} />)}
            </div>

        </div>
    )
}

export default SidePanel
