import { FormElementType } from './FormElementType';
import { InferSchemaType,model,PopulatedDoc,Schema } from "mongoose";
const formElementSchema = new Schema<FormElementType>({
    type: { type: String, required: true },
    name :{type:String},
    props: { type: Object, required: true },
    style: { type: Object, required: true },
  });
  interface FormType {
    elements: FormElementType[];
    reponses?: number; 
  }
  
  interface FormDocument extends Document, FormType {}
  
  const formSchema = new Schema<FormDocument>(
    {
      title: { type: String, required: false },
      elements: [formElementSchema],
    },
    {
      timestamps: true,
      toJSON: { virtuals: true },
    }
  );
  
  // Define a virtual field to calculate the number of responses
  formSchema.virtual('responses', {
    ref: 'Reponses', 
    localField: 'id',
    foreignField: '_form_id',
    count: true,
    justOne: true,
  });
// type Form = InferSchemaType<typeof formSchema>;

// export default model<Form>("Forms",formSchema) 

formSchema.set('toObject', { virtuals: true });
formSchema.set('toJSON', { virtuals: true });

type Form = PopulatedDoc<FormDocument & Document>;

export default model<Form>('Forms', formSchema);


