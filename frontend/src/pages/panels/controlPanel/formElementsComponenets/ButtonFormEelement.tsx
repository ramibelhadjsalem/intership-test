import { FormElementProps, FormElements } from "../../../../models/FormElementType"

const ButtonFormEelement  = ({ element }: { element: FormElements })=>{
    const props:Partial<FormElementProps> =element.props
    return (
        <div>
            <button type={props.type }>{props.text}</button>
        </div>
    )
}
export default ButtonFormEelement