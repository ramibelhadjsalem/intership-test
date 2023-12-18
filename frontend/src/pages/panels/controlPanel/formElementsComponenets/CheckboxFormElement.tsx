import { useState } from "react";
import { FormElementProps, FormElements } from "../../../../models/FormElementType";

export const CheckBoxFormElement = ({ element }: { element: FormElements }) => {
    console.log("checkbox eelemet",element);
    
    const handleCheckboxChange = () => {
       
    };

    const styles: Record<string, React.CSSProperties> = element.style
    const props: Partial<FormElementProps> = element.props
    return (
        <div style={styles.container} className="checkbox-container">
            <input
                type="checkbox"
                className="custom-checkbox me-3"
                id="myCheckbox"
                checked={props.checked}
                onChange={handleCheckboxChange}
                style={styles.checkbox}
            />
         {props.label && <label htmlFor="myCheckbox">{props.label}</label>}
        </div>
    )
}