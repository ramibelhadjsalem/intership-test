import { useState } from "react";
import "../../../../styles/DropdownSelect.css"
import { FormElementProps, FormElements } from "../../../../models/FormElementType";
export const DropdownComponent = ({ element }: { element: FormElements }) => {

    const props: Partial<FormElementProps> = element.props


    return (
        <div>
            {props.label!=null && <label htmlFor="x">{props.label}</label>}

            <div className="select-dropdown w-100">

                <select className="w-100" id="x" name="x">
                    {
                        props.options && props.options.map(option => (
                            <option value={option}>{option}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );
};