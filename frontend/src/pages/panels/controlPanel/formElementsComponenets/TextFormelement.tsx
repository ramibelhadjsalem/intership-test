import { useEffect } from "react";
import { FormElementProps, FormElements } from "../../../../models/FormElementType"


export const TextFormElement = ({ element }: { element: FormElements }) => {
    return (
        <div style={element.style}>
            {(element.props as FormElementProps ).text}
        </div>
    )
}