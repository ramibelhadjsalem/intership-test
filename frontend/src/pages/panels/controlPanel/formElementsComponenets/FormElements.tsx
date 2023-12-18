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

export const getComponentByType = (element: FormElements) => {
    switch (element.type) {
        case 'Text':
            return <TextFormElement element={element} />;

        case 'Checkbox':
            return <CheckBoxFormElement element={element} />;
        case 'Input':
            return <InputComponent element={element} />;
        case 'Number Format':
            return <NumberFormatComponent element={element} />;
        case 'Text area':
            return <TextAreaComponent element={element} />;
        case 'Radio group':
            return <RadioGroupFormElement element={element}/>;
        case 'DropDown':
            return <DropdownComponent element={element}/>;
        case 'Uploader':
            return <UploaderComponent element={element}/>;

        case "Button" :
                return <ButtonFormEelement element={element}/>
        default:
            return <>{` ${element.type} not implemented yet `}</>;
    }
};