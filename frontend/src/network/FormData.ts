import axios from "axios"
import { FormElements } from "../models/FormElementType";

export const baseUrl = "http://localhost:5000/api/"

export const getForms =async ()=>{
    try {
        const respnse  = await axios.get(baseUrl+"forms")
        return respnse.data ;
        
    } catch (error) {
        console.error("error get forms",error)
    }
}


export interface SaveFormData{
    _id:string|null
    title :string
    elements : FormElements[]
}
export const saveForms =async (data:SaveFormData)=>{
    try {
        const respnse  = await axios.post(baseUrl+"forms",data)
        return respnse.data ;
        
    } catch (error) {
        console.error("error get forms",error)
    }
}

export const getFormById =async (id:string) =>{
    try {
        const respnse  = await axios.get(baseUrl+"forms/"+id)
        return respnse.data ;
        
    } catch (error) {
        console.error("error get forms",error)
    }
}