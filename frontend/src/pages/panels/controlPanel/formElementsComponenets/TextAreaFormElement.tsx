
import { FormElementProps, FormElements } from "../../../../models/FormElementType";

export const TextAreaComponent = ({ element,setInputsData }: { element: FormElements ,setInputsData? :(name:string,value:string)=>void }) => {
    const props: Partial<FormElementProps> = element.props
   
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
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(setInputsData){
            setInputsData(e.target.name,e.target.value)
        }
        
    };
    return (
        <div style={containerStyle}>
            {props.label != null && <label htmlFor="textarea" style={labelStyle}>{props.label}</label>}
            <textarea
                rows={4}
                id="textarea"
                placeholder={props.placeholder}
                style={textareaStyle}
                name={element.name}
                onChange={handleTextareaChange}
            ></textarea>
        </div>
    );
};