import { FormElementType } from './FormElementType';
import { InferSchemaType,model,Schema } from "mongoose";
const formElementSchema = new Schema<FormElementType>({
    type: { type: String, required: true },
    props: { type: Object, required: true },
    style: { type: Object, required: true },
  });
const formSchema =new Schema({

    title : {type:String ,require:false},
    elements: [formElementSchema],

},{timestamps:true})

type Form = InferSchemaType<typeof formSchema>;

export default model<Form>("Forms",formSchema) 


