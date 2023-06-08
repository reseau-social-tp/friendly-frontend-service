
import './style.css';

export default function Entry(props) {

    return (
        <div className="entry-container">
            <input onChange={props.handler} type={props.type} className="input-area" id={props.identifier} placeholder={props.value} required/>
            <label for={props.identifier} className="label">{props.label}</label>
        </div>
        
    );
}