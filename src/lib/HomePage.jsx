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

const HomePage = () => {

    const buttonWatch = new Button(
        'Подключить платежную систему',
        'button_head',
    );

    const [fill, setFill] = useState(DataFilt.filterData)

    const activeFill = () => {
        return console.log('asd')
    }
    
    const products = fill.map((objects) => {
        return <Filters 
            objects={objects} 
            activeFill={activeFill}
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
                            <div className="button_filter_act">
                                <p className="button_filter_p">Действия</p>
                                <DropSVG />
                            </div>
                        </div>
                        {buttonWatch.Button()}
                    </div>
                    <div className="filter">
                        <div className="filter_item">
                            <CheckAll activeFill={activeFill}/>
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