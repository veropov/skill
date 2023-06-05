import { styleFilter } from './components/filter style list';
import { useState } from "react";
import { ContainerSVG } from "./components/svg";
import { Player} from '@lottiefiles/react-lottie-player';
import filterTrans from './style/Lottie/filter Skilla 2.json';
import {CheckB, CheckTrue} from './components/checkbox';
import { observer } from 'mobx-react-lite';
import DataFilt from './components/filter data';

export const Filters = ({objects}) => {

    const [check, setCheck] = useState(objects.check)
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
        }, 200);
    }

    function LottieCheck() {
        if (anim === true) {
            return (<Player 
                className="filter_anim" 
                src={filterTrans} 
                loop={false}
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
        key={objects.id}
        onClick={() => {
            TimerCheck()
            TimerAnimation()
            }
        }
        className={FilterToggle()}>
            {LottieCheck()}
            <div className='Line'></div>
            <div className="list_filter">
                {check ? <CheckTrue/> : <CheckB/>}
                <div className="trans" style={styleFilter[0]}>
                    <div className="trans_cont">
                        <p className="filter_title">{objects.number}</p>
                        <div className="trans_date">
                            <p className="trans_sub_title">{objects.date}</p>
                            <p className="trans_sub_title">{objects.dateHours}</p>
                        </div>
                    </div>
                </div>
                <div className="type" style={styleFilter[1]}>
                    <p className="filter_title">{objects.type}</p>
                    <p className="filter_sub_title">{objects.subType}</p>
                </div>
                <p className="filter_title" style={styleFilter[2]}>{objects.initiator}</p>
                <div className="type" style={styleFilter[3]}>
                    <p className="filter_title">{objects.sender}</p>
                    <p className="filter_sub_title">{objects.subSender}</p>
                </div>
                <div className="type" style={styleFilter[4]}>
                    <p className="filter_title">{objects.recipient}</p>
                    <p className="filter_sub_title">{objects.subRecipient}</p>
                </div>
                <p className="filter_title" style={styleFilter[5]}>{objects.sum}</p>
                <p className="transaction" style={styleFilter[6]}>{'*' + `${objects.card}`}</p>
                <p className={objects.comm_us ? "comm_us_true" : "comm_us_false"} style={styleFilter[7]}>{objects.comm_us ? 'да' : 'нет'}</p>
                <p className={objects.comm_ps ? "comm_us_true" : "comm_us_false"} style={styleFilter[8]}>{objects.comm_ps ? 'да' : 'нет'}</p>
                <p className="transaction" style={styleFilter[9]}>{'*' + `${objects.numberTrans}`}</p>
                <div className="state" style={styleFilter[10]}>{objects.state}</div>
                <div className="type" style={styleFilter[11]}>
                    <p className="filter_title">{objects.approved}</p>
                    <p className="filter_title">{objects.subApproved}</p>
                </div>
            </div>
        </div>
    )
}

export const FilterP = () => {

    const [fill, setFill] = useState(DataFilt.filterData)

    const activeFill = () => {
        console.log('asd')
    }
    
    const products = fill.map((objects) => {
        return <Filters 
            objects={objects} 
            activeFill={activeFill}
        />
    })

    return (
        <div className="filter_main">
            {products}
        </div>
    )
}