import { DropSVG } from "./svg"


export const Action = ({count}) => {

    const actToggle = () => {
        if (count === 0) {
            return (
                <div className="button_filter_act">
                    <p className="button_filter_p">Действия</p>
                    <DropSVG />
                </div>
            )
        } else return (
            <div className="button_filter_act">
                <p className="button_filter_p">Действия</p>
                <p>{count}</p>
                <DropSVG />
            </div>
        )
    }

    return (
        actToggle()
    )
}