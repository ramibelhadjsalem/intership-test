import { useState } from "react";
import { FormElementProps, FormElements } from "../../../../models/FormElementType";

export const RadioGroupFormElement = ({ element, setInputsData }: { element: FormElements, setInputsData?: (name: string, value: string) => void }) => {
 
  const props: Partial<FormElementProps> = element.props
  
  
  const handleOptionChange = (event: any) => {
    if(setInputsData){
      setInputsData(props.label || element.name, event.target.value)
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label  style={{ marginBottom: '8px', fontWeight: 'bold' }}>
        {props.label || 'Radio Group'}
      </label>
      {props.options &&
        props.options.map((option, key) => (
          <label key={key} style={{ marginBottom: '4px', display: 'flex', alignItems: 'center' }}>
            <input
               type="radio"
               name={element.name || 'options'}
              //  checked={props.value === option}
              onChange={handleOptionChange}
              value={option}
              style={{ marginRight: '4px' }}
            />
            {option}
          </label>
        ))}
    </div>
  );
};