import formProps from '../models/FormElementProps';
import { v4 as uuidv4 } from 'uuid';
import formStyle from '../styles/formsStyles';
import FormElementProps from './FormElementProps';
export interface FormElements {
  type: AllowedTypes,
  name: string
  props: {},
  style: {}


}
export interface FormElementProps {
  label: string
  placeholder: string,
  value: string
  min: number
  max: number,
  text: string,
  checked: boolean
  options: string[],
  type: "submit" | "reset" | "button",
  name: string
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

const generateUniqueId = (): string => {
  return uuidv4() as string
};
export const createNewFormElement = (type: AllowedTypes): FormElements => {
  const defaultStyles = {
    fontSize: '16px'
  };

  return {
    type,
    name: generateUniqueId(),
    props: {
      ...formProps[type]
    },
    style: {
      ...formStyle[type],
    },
  };
};