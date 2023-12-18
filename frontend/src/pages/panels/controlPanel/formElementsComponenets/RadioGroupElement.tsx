import { useState } from "react";
import { FormElementProps, FormElements } from "../../../../models/FormElementType";

export const RadioGroupFormElement = ({ element }: { element: FormElements })=> {
    const [selectedOption, setSelectedOption] = useState(null);
    const props :Partial<FormElementProps> =element.props
    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '8px', fontWeight: 'bold' }}>
            {props.label || 'Radio Group'}
          </label>
          {props.options &&
            props.options.map((option, key) => (
              <label key={key} style={{ marginBottom: '4px', display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  style={{ marginRight: '4px' }}
                />
                {option}
              </label>
            ))}
        </div>
      );
};