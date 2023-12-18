import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SidePanel from "./panels/sidePanel/SidePanel";
import ControlPanel, { ControlState } from "./panels/controlPanel/ControlPanel";
import PropertyPanel from "./panels/propertyPanel/PropertyPanel";
import LoadingIndicator from "../components/LoadingIndicator";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SaveFormData, getFormById, saveForms } from "../network/FormData";

const AddFormPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [controlState, setControlState] = useState<ControlState>({
        _id: "",
        title: "",
        formElements: [],
        onEdit: true,
        itemSelected: null,
    });

    useEffect(() => {
      
        
        if (!id) return
        const fetchForm = async () => {
            try {
                setLoading(true)
                const formdata = await getFormById(id)
                setControlState((prev) => ({
                    ...prev,
                    title: formdata.title,
                    _id: id,
                    formElements: formdata.elements
                }))
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchForm()

    }, [id])




    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000)

    const contextValue: ControlContextProps = {
        controlState,
        setControlState,
    };

    const saveFormElement = async () => {
        try {
            setLoading(true)
            const data: SaveFormData = {
                _id: controlState._id,
                title: controlState.title,
                elements: controlState.formElements
            }
            const savedFormData = await saveForms(data)
            console.log("saved data", savedFormData);

            setLoading(false)
            navigate("/")
        } catch (error) {
            setLoading(false)
            console.log(error);


        }
    }
    return (
        <div className="container-fluid d-flex flex-column vh-100 p-0 position-relative">
            {loading && <LoadingIndicator />}
            {
                !loading &&
                <div className="row flex-grow-1 ">
                    <ControlContext.Provider value={contextValue}>
                        <DndProvider backend={HTML5Backend}>
                            <SidePanel saveAction={() => saveFormElement()} />
                            <ControlPanel />
                            <PropertyPanel />
                        </DndProvider>
                    </ControlContext.Provider>

                </div>
            }


        </div>
    )
}
export default AddFormPage;
const ControlContext = createContext<ControlContextProps | undefined>(undefined);
interface ControlContextProps {
    controlState: ControlState;
    setControlState: React.Dispatch<React.SetStateAction<ControlState>>;
}

export const useControlState = () => {
    const context = useContext(ControlContext);

    if (!context) {
        throw new Error('useControlState must be used within a ControlProvider');
    }

    return context;
};