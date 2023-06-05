import { IconSVG } from "./svg"

export const CheckB = () => {
    return (
        <div className="chekbox" >
            <input type='checkbox' className="checkbox_cont"/>
        </div>
    )
}

export const CheckAll = ({activeFill}) => {
    return (
        <div className="chekbox" onClick={() => activeFill}>
            <input type='checkbox' className="checkbox_cont"/>
        </div>
    )
}

export const CheckTrue = () => {
    return (
        <div className="chekbox_true">
            <IconSVG/>
            <input type='checkbox' className="checkbox_cont"/>
        </div>
    )
}