import './style.css';

export default function Descriptor(props) {

    return (
        <div className="descriptor" >
            <div className='normalizer'>
                <div className='contain'>
                    <p className='intro'>{props.intro}</p>
                    <p className='welcome'>{props.welcome}</p>
                    {props.encourager}
                </div>
            </div>
        </div>
    );
}

