import './style/main.css';
import { Button } from "./components/button";
import Filter from "./components/filter";
import Search from "./components/search";
import {ContainerSVG, DropSVG, LineSVG} from './components/svg';
import { filterItem, styleFilter } from './components/filter style list';
import { CheckAll } from './components/checkbox';
import { Filters } from './Filters';
import { useState } from 'react';
import DataFilt from './components/filter data';
import { Action } from './components/action';
import Modal from './components/modal';
import modalAn from './style/Lottie/skilla modal 2.json';
import { Player} from '@lottiefiles/react-lottie-player';

const SkillaPage = () => {

    const buttonWatch = new Button(
        'Подключить платежную систему',
        'button_head',
    );

    const [fill, setFill] = useState(DataFilt.filterData)
    const [arg, setArg] = useState(false);
    const argR = (arg) => {
        return setArg(!arg)
    }

    const activeFill = (arg) => {
        setFill((fill) => {
            return fill.map((objects) => {
                return {
                    ...objects,
                    check: !arg
                }
            })
        })
    }

    const activeNu = (id, checkR) => {
        setFill((fill) => {
            return fill.map((objects) => {
                if (objects.id === id) {
                    return {
                        ...objects,
                        check: !checkR
                    }
                } else return objects;
            })
        })
    }

    const [count, setCount] = useState(0);
    const countR = (count, checkR) => {
        if (checkR === false) {
            return setCount(count+1)
        } else if (checkR === true) {
            return setCount(count-1)
        }
    }
    
    const products = fill.map((objects) => {
        return <Filters 
            objects={objects} 
            activeNu={activeNu}
            id={objects.id}
            checkR={objects.check}
            countR={countR}
            count={count}
        />
    })

    const [modal, setModal] = useState(false);
    const [modalAnim, setmodalAnim] = useState(false);
    const [back, setBack] = useState(false);

    const argModal = (modal) => {
        return setTimeout(() => {
            setModal(!modal)
        }, 300)
    }

    const argModalAnim = (modalAnim) => {
        return setTimeout(() => {
            setmodalAnim(modalAnim === false)
            setTimeout(() => {
                setmodalAnim(modalAnim === true)
            }, 500)
        },0)
    }

    function LottieCheck() {
        if (modalAnim === true) {
            return (
            <div className='modal_anim'>
                <Player 
                    className="filter_anim" 
                    src={modalAn} 
                    loop={false}
                    autoplay={true}
                    speed={1.2}
                />
            </div>
            )
        } else return null;
    }

    const argBack = (back) => {
        setBack(!back)
    }

    return (
        <div className="container">
            <div className="main">
                {back ? <div className='back' onClick={() => {
                    argBack(back)
                    argModal(modal)
                    argModalAnim(modalAnim)
                }   
                }></div> : <div className='back_active'/>}
                <div className="head">
                    <div className="head_search_filter">
                        <div className="head_search_filter_obj">
                            {LottieCheck()}
                            {modal ? <Modal /> : null}
                            <Search />
                            <p className="drop_filter">Сбросить фильтры</p>
                            <Action 
                                count={count} 
                                argModal={argModal} 
                                argModalAnim={argModalAnim}
                                modal={modal}
                                modalAnim={modalAnim}
                                argBack={argBack}
                                back={back}
                            />
                        </div>
                        {buttonWatch.Button()}
                    </div>
                    <div className="filter">
                        <div className="filter_item">
                            <CheckAll 
                                activeFill={activeFill} 
                                argR={argR}
                                arg={arg}
                            />
                            {filterItem.map((object, index) => (
                                Filter(`${filterItem[index]}`, styleFilter[index])
                            ))}
                        </div>
                    </div>
                </div>
                <div className="filter_main">
                    {products}
                </div>
            </div>
        </div>
    )
}

export default SkillaPage;