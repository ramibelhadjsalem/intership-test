import { FormElementProps, FormElements } from "../../../../models/FormElementType";

export const CheckBoxFormElement = ({ element,setInputsData }: { element: FormElements ,setInputsData? :(name:string,value:string)=>void }) => {
  
    
    const handleInputChange = (e: any) => {
        if (setInputsData) {
            setInputsData(element.name, e.target.checked.toString());
            console.log(element.name, e.target.checked.toString());
        }
        
    };

    const styles: Record<string, React.CSSProperties> = element.style
    const props: Partial<FormElementProps> = element.props
    return (
        <div style={styles.container} className="checkbox-container">
            <input
                type="checkbox"
                className="custom-checkbox me-3"
                id={element.name}
                onChange={handleInputChange}
                style={styles.checkbox}
            />
         {props.label && <label htmlFor={element.name}>{props.label}</label>}
        </div>
    )
}