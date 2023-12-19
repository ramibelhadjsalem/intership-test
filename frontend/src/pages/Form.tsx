import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getFormById, saveFormReponces, saveReponcesDataType } from "../network/FormData"

import "../styles/FormPass.css"
import { Form } from "../models/form"
import LoadingIndicator from "../components/LoadingIndicator"
import { getComponentByType } from "./panels/controlPanel/formElementsComponenets/FormElements"

const FormPass = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState<Form>()
    const [inputState, setInputState] = useState({})
    const navigate =useNavigate()


    useEffect(() => {


        if (!id) return
        const fetchForm = async () => {
            try {
                setLoading(true)
                const formdata = await getFormById(id)
                setState(formdata)

                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchForm()

    }, [id])

    const setInputsData = (key: string, value: any) => {
        setInputState((prev) => ({
            ...prev,
            [key]: value
        }))
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!id) return
        const newInputState: saveReponcesDataType = {
            reponses: inputState,
            _form_id: id
        }
        console.log(newInputState);
        
        try {
            setLoading(true)
            const data = saveFormReponces(newInputState)
            setLoading(false)
            navigate("/")
            console.log(data);
            
        } catch (error) {
            
            setLoading(false)
            console.log(error);
            
        }


    }
    return (
        <div className="container-fluid d-flex flex-column vh-100 p-0 position-relative">
            {loading && <LoadingIndicator />}
            {!loading &&
                <div className="row justify-content-center">
                    <div className="title col-12 text-center my-3"><h3>{state?.title}</h3></div>
                    <div className="form-container col col-md-8 col-lg-7 abs">
                        <form onSubmit={handleSubmit} >
                            {state?.elements.map((element, key) => <div key={key}> {getComponentByType(element, setInputsData)}</div>)}
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}
export default FormPass