import { Schema, Types, model, Document } from 'mongoose';
import { ReponseType } from './ReponseType';

interface ReponsesDocument extends ReponseType, Document {}

const ReponsesSchema = new Schema<ReponsesDocument>(
  {
    _form_id: { type: Schema.Types.ObjectId, required: true },
    reponses: { type: Object, required: true },
  },
  { timestamps: true }
);

export default model<ReponsesDocument>('Reponses', ReponsesSchema);

