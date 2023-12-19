import createHttpError from "http-errors";
import mongoose from "mongoose";
import FormModel from "../models/form"
import ReponsesModel from "../models/Reponces"

import { Request, RequestHandler, Response, NextFunction } from "express";
import { FormElementType } from "../models/FormElementType";

export const getForms: RequestHandler = async (req: Request, res: Response) => {
    try {
        const forms = await FormModel.find({})
                                        .populate("responses")
                                        .exec()
        res.status(200).json(forms)
    } catch (err) {
        console.log(err);
    }
}
export const getFormWithId: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const formId = req.params.formId

        if (!mongoose.isValidObjectId(formId)) throw createHttpError(400, "invalid form id")

        const form = await FormModel.findById(formId).populate("responses").exec()

        if (form) {
            res.status(200).json(form)
        }
        else
            throw createHttpError(404, `forms with id :${formId} `)

    } catch (error) {
        next(error);
    }
}

interface createDataType {
    _id: string | null,
    title: string,
    elements: FormElementType[]
}

export const createFrom: RequestHandler = async (req: Request<{}, {}, createDataType>, res: Response, next: NextFunction) => {
    const { _id, title, elements } = req.body;
    try {

        if (!elements || !Array.isArray(elements)) {
            throw createHttpError(400, "'elements' property is required and must be an array");
        }
        let newForm
        if (!mongoose.isValidObjectId(_id)) {
            newForm = await FormModel.create({
                title,
                elements,
            });
        } else {
            newForm = await FormModel.updateOne({ _id }, {
                $set: {
                    title,
                    elements
                }
            })
        }


        res.status(200).json(newForm)

    } catch (error) {
        next(error)
    }
}
interface createReponsesDataType{
    _form_id : string,
    reponses : {}
}
export const createReponses: RequestHandler = async (req: Request<{}, {}, createReponsesDataType>, res: Response, next: NextFunction) => {
    const { _form_id, reponses } = req.body;
    try {

        if(!mongoose.isValidObjectId(_form_id)) throw createHttpError(400, "invalid form id")
        
        if(Object.keys(reponses).length<1)  throw createHttpError(400, "invalid reponses")

        const newFormReponses = await ReponsesModel.create({
            _form_id,
            reponses
        })

        res.status(200).json(newFormReponses)

    } catch (error) {
        next(error)
    }
}