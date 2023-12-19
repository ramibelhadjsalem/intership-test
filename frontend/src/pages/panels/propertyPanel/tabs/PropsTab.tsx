import { useEffect, useState } from "react";
import { FormElementProps, FormElements } from "../../../../models/FormElementType";
import "../../../../styles/propsTab.css"
import { useControlState } from "../../../AddForm";
import { ControlState } from "../../controlPanel/ControlPanel";

const PropsTab: React.FC<{ element: FormElements }> = ({ element }) => {
    const { controlState, setControlState } = useControlState();


    const [state, setState] = useState<Partial<FormElementProps>>(element.props)
    
    const handleInputValueChange = (key: string, newValue: string) => {
        let newProps: Partial<FormElementProps> = element.props
        newProps = {
            ...element.props,
            [key]: newValue,
        }


        element = {
            ...element,
            props: newProps
        }
        setControlState((prevState: ControlState) => ({
            ...prevState,
            formElements: prevState.formElements.map((el, index) =>
                index === controlState.itemSelected ? element : el
            ),
        }));
    };


    return (
        <div className="props-tab-container mb-2">
            <h3>Props :</h3>
            <div className="props-list">
                {Object.entries(element.props).map(([key, value]) => (
                    <div key={key} className="props-item">
                        <label>{key}</label>
                        <input
                            type="text"
                            placeholder={value as string}
                            onChange={(e) => handleInputValueChange(key, e.target.value)}
                            key={key}
                            
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default PropsTab