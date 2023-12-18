import { FormElementProps, FormElements } from "../../../../models/FormElementType";
import "../../../../styles/InputStyle.css"
export const InputComponent = ({ element }: { element: FormElements }) => {
    const props: Partial<FormElementProps> = element.props

    const min = props.min || undefined;
    const max = props.max || undefined;

    return (
        <div className="container-input">
            {props.label && <label htmlFor="input">{props.label}</label>}
            <input
                type={element.type}
                min={min} max={max}
                placeholder={props.placeholder} />
        </div>)
};

export const NumberFormatComponent = ({ element }: { element: FormElements }) => {
    const props: Partial<FormElementProps> = element.props

    const min = props.min || undefined;
    const max = props.max || undefined;

    return (
        <div className="container-input">
            {props.label && <label htmlFor="input">{props.label}</label>}
            <input
                type="number"
                min={min} max={max}
                placeholder={props.placeholder} />
        </div>)

};

