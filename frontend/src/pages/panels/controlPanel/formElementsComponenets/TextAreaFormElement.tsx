import { useState } from "react";
import { FormElementProps, FormElements } from "../../../../models/FormElementType";

export const TextAreaComponent = ({ element }: { element: FormElements }) => {
    const props: Partial<FormElementProps> = element.props
    const [textareaValue, setTextareaValue] = useState<string>('');
    const containerStyle = {
        marginBottom: '16px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        color: '#333',
    };

    const textareaStyle = {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        borderColor: '#ccc',
    };
    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
        console.log(textareaValue);
        
    };
    return (
        <div style={containerStyle}>
            {props.label != null && <label htmlFor="textarea" style={labelStyle}>{props.label}</label>}
            <textarea
                rows={4}
                id="textarea"
                placeholder={props.placeholder}
                style={textareaStyle}
                onChange={handleTextareaChange}
            ></textarea>
        </div>
    );
};