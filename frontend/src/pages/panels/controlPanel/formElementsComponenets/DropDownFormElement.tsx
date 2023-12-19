import { useState } from "react";
import "../../../../styles/DropdownSelect.css"
import { FormElementProps, FormElements } from "../../../../models/FormElementType";
export const DropdownComponent = ({ element, setInputsData }: { element: FormElements, setInputsData?: (name: string, value: string) => void }) => {

    const props: Partial<FormElementProps> = element.props

    const handleInputChange = (e: any) => {
        if (setInputsData) {
            setInputsData(element.name, e.target.value);
        }
        
    };
    return (
        <div>
            {props.label != null && <label htmlFor={element.name}>{props.label}</label>}

            <div className="select-dropdown w-100">

                <select className="w-100" id={element.name} name={element.name} onChange={handleInputChange} value={props.value || ''}>
                    {
                        props.options && props.options.map((option, key) => (
                            <option key={key} value={option}>{option}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );
};