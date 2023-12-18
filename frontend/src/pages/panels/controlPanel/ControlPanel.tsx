import { useEffect, useState } from "react"
import '../../../styles/ControlPanel.css'

import { useDrop } from "react-dnd";
import { FormElements, createNewFormElement } from "../../../models/FormElementType";
import { getComponentByType } from "./formElementsComponenets/FormElements";
import { useControlState } from "../../AddForm";

const ControlPanel = () => {
    const { controlState, setControlState } = useControlState();


    const [, drop] = useDrop({
        accept: 'FORM_ELEMENT',
        drop: (item: FormElements) => {
            setControlState((prevState) => ({
                ...prevState,
                formElements: [...prevState.formElements, createNewFormElement(item.type)],
            }));

        },
    });

    const selectItemSelected = (index: number) => {
        if (controlState.onEdit) {
            setControlState((prevState) => ({
                ...prevState,
                itemSelected: index,
            }));
        }
    }

    return (
        <div className="left-side col flex-grow-1" ref={drop}>
            <div className="leftsidecontainer">
                {controlState.formElements.map((element, index) =>
                    <div onClick={() => selectItemSelected(index)} className={`form-element-container ${controlState.onEdit ? ".cursur-pointer" : ""}`} key={index}>{getComponentByType(element)}</div>
                )}
            </div>

        </div>
    )
}

export default ControlPanel

export interface ControlState {
    _id:string,
    title:string,
    formElements: FormElements[],
    onEdit: Boolean,
    itemSelected: number | null
}

