import React, { useEffect, useState } from "react";
import { Form } from "../models/form";
import FormItem from "../components/FormItem"
import { useNavigate } from "react-router-dom";
import { getForms } from "../network/FormData";
const HomePage = () => {
    const navigate = useNavigate();

    
    const onDeleteFormClick = (id: string) => {

    }
    const [state, setState] = useState<{ forms: Form[]; isLoading: boolean }>({
        forms: [],
        isLoading: true,
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const formsData = await getForms();
                setState({ forms: formsData, isLoading: false });
            } catch (error) {
                console.error("Error fetching forms", error);
                setState({ forms: [], isLoading: false });
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            {state.isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="row">
                    {state.forms.map((item) => (
                        <FormItem
                            key={item._id}
                            item={item}
                            onEditClick={(id: string) => navigate(`edit/${id}`)}
                            onDeleteClick={(id: string) => {}}
                            onFormCardClick={(id: string) => navigate(`form/${id}`)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default HomePage;