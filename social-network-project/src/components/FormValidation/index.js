
import {CircularProgress, Box} from '@mui/material';
import Button from "../Button"
import './style.css';

export default function FormValidation(props) {

    return (
        <div className="validation">
            <div className='progress'>
                {props.isLoading && <Box sx={{ width: '95%'}}>
                    <CircularProgress color="success" />
                </Box>}
            </div>
            <Button handler={props.submitHandler} class="primary" label={props.primaryLabel}/>
            <div className="secondary-container">
                <p style={{marginTop:"1rem!important",height:"100%",display:"flex",alignItems:"center"}}>{props.secondaryMessage}</p>
                <Button handler={props.abortHandler} class="secondary" label={props.secondaryLabel}/>
            </div>
        </div>
    );
}
