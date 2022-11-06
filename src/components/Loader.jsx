import React from "react"
import './styles/Loader.css'

export default function Loader(props) {
    if(props.error) {
        return (
            <div className="loader">
                <div className="loader__message">Sorry, something went wrong :/</div>
                <div className="loader__message">{props.error.message}</div>
                <br />
                <div className="loader__message">Try to reload the page, please</div>
            </div>
        )
    } else if(!props.isLoaded) {
        return (
            <div className="loader">
                <div className="loader__message">Loading, wait a while ...</div>
                <span className="loader__spinner"></span>
            </div>
        )
    } else {
        return (<div />)
    }
}