import './style.css';

export default function Descriptor(props) {

    return (
        <div className="descriptor" >
            <div className='normalizer'>
                <div className='contain'>
                    <p className='intro'>{props.intro}</p>
                    {props.welcome}
                    {props.encourager}
                </div>
            </div>
        </div>
    );
}

