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

const HomePage = () => {

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

    return (
        <div className="container">
            <div className="main">
                <div className="head">
                    <div className="head_search_filter">
                        <div className="head_search_filter_obj">
                            <Search />
                            <p className="drop_filter">Сбросить фильтры</p>
                            <Action count={count} />
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

export default HomePage;