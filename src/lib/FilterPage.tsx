import { useState } from "react";
import { styleFilter } from "./components/filter style list";
import { ContainerSVG } from "./components/svg";
import { Player} from '@lottiefiles/react-lottie-player';
import filterTrans from './style/Lottie/filter Skilla 2.json';

export const FilterState = (
    number: String,
    date: String,
    dateHours: String,
    type: String,
    subType: any,
    initiator: String,
    sender: String,
    subSender: any,
    recipient: String,
    subRecipient: any,
    sum: String,
    card: String,
    comm_us: Boolean,
    comm_ps: Boolean,
    numberTrans: String,
    state: any,
    approved: String,
    subApproved: String

) => {

    const [check, setCheck] = useState(false)
    const [anim, setAnim] = useState(false)

    function TimerAnimation() {
        return setTimeout(() => {
            setAnim(true)
            setTimeout(() => {
                setAnim(false)
            }, 270)
        }, 0);
    }

    function TimerCheck() {
        return setTimeout(() => {
            setCheck(!check)
        }, 250);
    }

    function LottieCheck() {
        if (anim === true) {
            return (<Player 
                className="filter_anim" 
                src={filterTrans} 
                loop={true}
                autoplay={true}
            />)
        } else return null;
    }

    function FilterToggle() {
        if (check === true) {
            return 'content_filter_true' 
        }  else if (check === false) return 'content_filter'
    }

    return (
        <div 
        onClick={() => {
            TimerCheck()
            TimerAnimation()
            }
        }
        className={FilterToggle()}>
            {LottieCheck()}
            <div className='Line'></div>
            <div className="list_filter">
                <div className='chekbox'>
                    {check ? null : <ContainerSVG />}
                </div>
                <div className="trans" style={styleFilter[0]}>
                    <div className="trans_cont">
                        <p className="filter_title">{number}</p>
                        <div className="trans_date">
                            <p className="trans_sub_title">{date}</p>
                            <p className="trans_sub_title">{dateHours}</p>
                        </div>
                    </div>
                </div>
                <div className="type" style={styleFilter[1]}>
                    <p className="filter_title">{type}</p>
                    <p className="filter_sub_title">{subType}</p>
                </div>
                <p className="filter_title" style={styleFilter[2]}>{initiator}</p>
                <div className="type" style={styleFilter[3]}>
                    <p className="filter_title">{sender}</p>
                    <p className="filter_sub_title">{subSender}</p>
                </div>
                <div className="type" style={styleFilter[4]}>
                    <p className="filter_title">{recipient}</p>
                    <p className="filter_sub_title">{subRecipient}</p>
                </div>
                <p className="filter_title" style={styleFilter[5]}>{sum}</p>
                <p className="transaction" style={styleFilter[6]}>{'*' + `${card}`}</p>
                <p className={comm_us ? "comm_us_true" : "comm_us_false"} style={styleFilter[7]}>{comm_us ? 'да' : 'нет'}</p>
                <p className={comm_ps ? "comm_us_true" : "comm_us_false"} style={styleFilter[8]}>{comm_ps ? 'да' : 'нет'}</p>
                <p className="transaction" style={styleFilter[9]}>{'*' + `${numberTrans}`}</p>
                <div className="state" style={styleFilter[10]}>{state}</div>
                <div className="type" style={styleFilter[11]}>
                    <p className="filter_title">{approved}</p>
                    <p className="filter_title">{subApproved}</p>
                </div>
            </div>
        </div>
    )
}


export const FilterPage = () => {
    return (
        <div className="filter_main">
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
            {FilterState('14256', '04.12.20', '21:58:17', 'Комиссия', 'Партнер - ПС', 'ПС', 'ИП Упоров...', 'Москва', 'ПС', null, '24', '0005', false, true,' 546', 'Исполнено', '04.12.20', '22:03:51')}
        </div>
    )
}