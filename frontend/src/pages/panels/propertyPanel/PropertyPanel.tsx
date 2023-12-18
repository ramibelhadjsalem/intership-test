import { ChangeEvent, useEffect, useState } from "react";
import { FormElements } from "../../../models/FormElementType";
import { useControlState } from "../../AddForm";
import { ControlState } from "../controlPanel/ControlPanel";
import PropsTab from "./tabs/PropsTab";
import StylesTab from "./tabs/StylesTab";
import { isObjectNotEmpty } from "../../../utils/ObjectUtils";

const PropertyPanel = () => {

    const { controlState, setControlState } = useControlState();
    const  [itemSelected ,setItemSlected]  = useState<FormElements | null >(null)

    useEffect(()=>{

        if(controlState.itemSelected!=null) {
            setItemSlected(controlState.formElements[controlState.itemSelected])
        }
    },[controlState.itemSelected])
    
    return (
        <div className="col-3 col-lg-2">
            {
                !itemSelected && <div>
                    no item selected
                </div>
            }
            {
                itemSelected!=null && (
                <>  
                   {isObjectNotEmpty(itemSelected.props) && <PropsTab element={itemSelected}  />}
                   {isObjectNotEmpty(itemSelected.props) &&  <StylesTab element={itemSelected}/>}
                </>
                )
            }
           
        </div>
    )
}

export default PropertyPanel

// interface RenderPropsProps {
//     selectedItem: FormElements;
//     dispatchControlAction: (action: any) => void; // Adjust the type based on your actual dispatch function
// }

// const RenderProps: React.FC<RenderPropsProps> = ({ selectedItem, dispatchControlAction }) => {
//     const { controlState, setControlState } = useControlState();

//     const handleInputChange = (key: string, newValue: any) => {
//         const updatedFormElements = controlState.formElements.map((element,index) => {
//             if (index=== controlState.itemSelected) {
//                 return { ...element, [key]: newValue };
//             }
//             return element;
//         });

       
//         // dispatchControlAction({
//         //     type: "UPDATE_FORM_ELEMENTS",
//         //     payload: updatedFormElements,
//         // });
//         setControlState((prevState)=>({
//             ...prevState,
//             formElements :updatedFormElements
//         }))
//     };


//     return (
//         <>
//             {Object.entries(selectedItem).map(([key, value]) => (
//                 <div key={key}>
//                     {typeof value === "object" && value !== null ? (
//                         <>
//                             {key}:
//                             <RenderProps selectedItem={value} dispatchControlAction={dispatchControlAction} />
//                         </>
//                     ) : (
//                         <>
//                             {key}:{" "}
//                             <input
//                                 type="text"
//                                 value={value}
//                                 onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(key, e.target.value)}
//                             />
//                         </>
//                     )}
//                 </div>
//             ))}
//         </>
//     );
// };
