import formProps from '../models/FormElementProps';

import formStyle from '../styles/formsStyles';
import FormElementProps from './FormElementProps';
export interface FormElements {
  type: AllowedTypes,
  
  props: {},
  style: {}


}
export interface FormElementProps {
  label:string
  placeholder: string,
  value: string
  min: number
  max: number,
  text: string,
  checked:boolean
  options: string[],
}
export type AllowedTypes =
  "Text"
  | "calender"
  | "Checkbox"
  | "Input"
  | "Number Format"
  | "Text area"
  | "Radio group"
  | "DropDown"
  | "Uploader"
  | "Button";

export const createNewFormElement = (type: AllowedTypes): FormElements => {
  const defaultStyles = {
    fontSize: '16px'
  };

  return {
    type,
    props: {
      ...formProps[type]
    },
    style: {
      ...formStyle[type],
    },
  };
};