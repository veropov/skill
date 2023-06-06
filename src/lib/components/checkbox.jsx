import { useState } from "react";
import { IconSVG } from "./svg"

export const CheckB = () => {
    return (
        <div className="chekbox">
            <input type='checkbox' className="checkbox_cont"/>
        </div>
    )
}

export const CheckAll = ({activeFill, argR, arg}) => {

    function ArgCheck() {
        if (arg === false) {
            return 'chekbox'
        } else return 'chekbox_true'
    }

    return (
        <div className={ArgCheck()} onClick={() => {
            console.log(arg)
            activeFill(arg)
            argR(arg)
        }
        }>
            { arg ? <IconSVG/> : null }
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