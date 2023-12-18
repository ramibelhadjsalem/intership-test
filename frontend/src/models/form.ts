import { FormElementProps, FormElements } from "./FormElementType";

export interface Form {
    _id :string,
    title : string,
    elements : FormElements[]
    createdAt: string;
    updatedAt: string;
}