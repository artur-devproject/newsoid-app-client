import React from "react"
import { Link } from "react-router-dom"
import './styles/PostCard.css'

export default function PostCard({post}) {

    function deleteAllHtmlTags(text) {
        let div = document.createElement('div')
        div.innerHTML = text
        let description = div.textContent || div.innerText
        return description
    }
    
    function truncate(text, literalNum) {
        return text.substring(0, literalNum) + '...'
    }
    
    function formate(date) {
    
        const hourElapsed = (Date.now() - Date.parse(date)) / (1000*3600)
        const timeElapsed = hourElapsed < 1/60 ? 'Только что'
        : hourElapsed < 1 ? Math.floor(hourElapsed*60) + ' мин назад'
        : hourElapsed < 24 ? Math.floor(hourElapsed) + ' ч назад'
        : Math.floor(hourElapsed/24) + ' д назад'
    
        return timeElapsed
    }

    return (
        <div className="post-card">
            <a className="post-card__link" href={post.link} target="_blank" />
            <div className="post-card__title">{truncate(post.title.replace(/&quot;/g, `"`), 100)}</div>
            <div className="post-card__image">
                <img src={post.img} />
            </div>
            
            <div className="post-card__description">{truncate(deleteAllHtmlTags(post.description), 150)}</div>
            <div className="post-card__details">
                <div><i className="fa-regular fa-pen-to-square"></i> {post.sourceName}</div>
                <div><i className="fa-regular fa-clock"></i> {formate(post.pubDate)}</div>
            </div>
            
        </div>
    )
}