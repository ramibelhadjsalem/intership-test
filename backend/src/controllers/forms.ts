import createHttpError from "http-errors";
import mongoose from "mongoose";
import FormModel from "../models/form"
import { Request, RequestHandler, Response, NextFunction } from "express";
import { FormElementType } from "../models/FormElementType";

export const getForms: RequestHandler = async (req: Request, res: Response) => {
    try {
        const forms = await FormModel.find({}).exec()
        res.status(200).json(forms)
    } catch (err) {
        console.log(err);
    }
}
export const getFormWithId: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const formId = req.params.formId

        if (!mongoose.isValidObjectId(formId)) throw createHttpError(400, "invalid form id")

        const form = await FormModel.findById(formId).exec()

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