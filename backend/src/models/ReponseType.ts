import {  Types } from "mongoose";

export interface ReponseType{
    _form_id: Types.ObjectId,
    reponses : Record<string,any>
}