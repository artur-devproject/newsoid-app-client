import React from 'react'
import { StoreContext } from "../context"
import './styles/SourceList.css'

export default function SourceList() {

    const store = React.useContext(StoreContext)
    const sources = store.sources[0]
    const [activeSources, setActiveSources] = store.activeSources

    const isActive = source => activeSources.includes(source)
    const allIsActive = () => sources.every(source => activeSources.includes(source))
    const btnStyle = bool => bool ? "sources-list__item active-source" : "sources-list__item"

    const handleClick = (source) => {
        isActive(source)
            ? setActiveSources([...activeSources.filter(elem => elem !== source)])
            : setActiveSources([...activeSources, source])
    }

    const handleClickAll = () => {
        if(!allIsActive()) setActiveSources([...sources])
        if(allIsActive()) setActiveSources([])
    }

    return (
        <div className="sources-list">
            <button className={btnStyle(allIsActive())} onClick={handleClickAll}>Все</button>
            {sources.map((source, key) => 
                <button 
                className={btnStyle(isActive(source))} 
                onClick={() => handleClick(source)} 
                key={key}
                >{source}</button>
            )}
        </div>
    )
}