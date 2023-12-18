import { useDrag } from 'react-dnd'
import '../../../styles/fieldItem.css'


export interface FieldItemProps {
    type: string,
    icon: string
}

const FieldItem = ({ type, icon }: FieldItemProps) => {
    const [, drag] = useDrag({
        type: 'FORM_ELEMENT',
        item: { type }
    });

    return (
        <div className="col-6 field-item flex-grow-1  " ref={drag} data-handler-id={type}>
            <div className="field-card d-flex flex-nowrap align-items-center">
                <i className={`field-icon ${icon} me-2`} ></i>
                <p>{type}</p>
            </div>

        </div>
    )
}

export default FieldItem