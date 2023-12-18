import { FormElements } from "../../../../models/FormElementType";

const StylesTab: React.FC<{ element: FormElements }> = ({ element }) => {


    return (
        <div className="props-tab-container">
            <h3>Styles :</h3>
            <div className="props-list">
                <RenderSubStyles {...element.style} />
            </div>
        </div>
    );
}
export default StylesTab
const RenderSubStyles = (object: Record<string, any>) => {

    return (
        <>
            {
                Object.entries(object).map(([key, value]) => (
                    <div key={key}>
                        {
                            typeof value === "object" && value != null ? (
                                <div>
                                    <span>{key}</span>
                                    <div className="p">
                                        <RenderSubStyles {...value} />
                                    </div>
                                   
                                </div>

                            ) : (
                                <div key={key} className="props-item">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        value={value as string}
                                        onChange={()=>{}}
                                    />
                                </div>
                            )
                        }
                    </div>

                ))}
        </>
    )

}

