import { useState } from "react";
import { FormElementProps, FormElements } from "../../../../models/FormElementType";

export const UploaderComponent =({ element }: { element: FormElements })=> {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };
    const styles: Record<string, React.CSSProperties> = element.style
    const props  :Partial<FormElementProps>=element.props
    return (
        <label htmlFor="images" className="drop-container" id="dropcontainer" style={styles.dropContainer}>
          <span className="drop-title" style={styles.dropTitle}>{props.label}</span>
          {' '}
          or
          <input type="file"  onChange={(e)=>handleFileChange(e)}/>
        </label>
      );
};