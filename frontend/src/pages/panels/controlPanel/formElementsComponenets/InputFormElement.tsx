import { FormElementProps, FormElements } from "../../../../models/FormElementType";
import "../../../../styles/InputStyle.css"
export const InputComponent = ({ element,setInputsData }: { element: FormElements ,setInputsData? :(name:string,value:string)=>void }) => {
    const props: Partial<FormElementProps> = element.props

    const min = props.min || undefined;
    const max = props.max || undefined;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setInputsData) {
          setInputsData(e.target.name, e.target.value);
        }
      };
    return (
        <div className="container-input">
            {props.label && <label htmlFor="input">{props.label}</label>}
            <input
                name={element.name}
                type={element.type}
                min={min} max={max}
                placeholder={props.placeholder} 
                onChange={handleInputChange}/>
        </div>)
};

export const NumberFormatComponent = ({ element,setInputsData }: { element: FormElements ,setInputsData? :(name:string,value:string)=>void }) => {
    const props: Partial<FormElementProps> = element.props

    const min = props.min || undefined;
    const max = props.max || undefined;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setInputsData) {
          setInputsData(e.target.name, e.target.value);
        }
      };
    return (
        <div className="container-input">
            {props.label && <label htmlFor="input">{props.label}</label>}
            <input
                type="number"
                min={min} max={max}
                placeholder={props.placeholder} 
                onChange={handleInputChange}/>
        </div>)

};

