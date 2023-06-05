import {DropSVG} from '../components/svg';

const Filter = (title: String, style: any) => {
    return (
        <div className='filter_inf' style={style}>
            <p>{title}</p>
            <DropSVG />
        </div>
    )
}

export default Filter;