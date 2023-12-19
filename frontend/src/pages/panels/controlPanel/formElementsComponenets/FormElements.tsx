import { useState } from "react";
import { AllowedTypes, FormElements } from "../../../../models/FormElementType"
import { TextFormElement } from "./TextFormelement";
import { CheckBoxFormElement } from "./CheckboxFormElement";
import { RadioGroupFormElement } from "./RadioGroupElement";
import { UploaderComponent } from "./UploaderFormElement";
import { DropdownComponent } from "./DropDownFormElement";
import { InputComponent, NumberFormatComponent } from "./InputFormElement";
import { TextAreaComponent } from "./TextAreaFormElement";
import ButtonFormEelement from "./ButtonFormEelement";

export const getComponentByType = (element: FormElements,setInputsData?:(key:string,value:any)=>void) => {
    switch (element.type) {
        case 'Text':
            return <TextFormElement element={element} />;

        case 'Checkbox':
            return <CheckBoxFormElement element={element} setInputsData={setInputsData}/>;
        case 'Input':
            return <InputComponent element={element} setInputsData={setInputsData} />;
        case 'Number Format':
            return <NumberFormatComponent element={element} setInputsData={setInputsData}/>;
        case 'Text area':
            return <TextAreaComponent element={element} setInputsData={setInputsData}/>;
        case 'Radio group':
            return <RadioGroupFormElement element={element} setInputsData={setInputsData}/>;
        case 'DropDown':
            return <DropdownComponent element={element} setInputsData={setInputsData}/>;
        case 'Uploader':
            return <UploaderComponent element={element} setInputsData={setInputsData}/>;

        case "Button" :
                return <ButtonFormEelement element={element}/>
        default:
            return <>{` ${element.type} not implemented yet `}</>;
    }
};