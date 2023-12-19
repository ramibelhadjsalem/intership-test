import { useState } from "react";
import { FormElementProps, FormElements } from "../../../../models/FormElementType";

export const UploaderComponent = ({ element, setInputsData }: { element: FormElements, setInputsData?: (name: string, value: any) => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);

      if (setInputsData) {
        setInputsData(element.name, file);
      }
    }
  };

  const styles: Record<string, React.CSSProperties> = element.style
  const props: Partial<FormElementProps> = element.props
  return (
    <label htmlFor="images" className="drop-container" id="dropcontainer" style={styles.dropContainer}>
      <span className="drop-title" style={styles.dropTitle}>{props.label}</span>
      {' '}
      or
      <input type="file" onChange={handleFileChange} />
    </label>
  );
};