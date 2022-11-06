import React, { useState } from "react"
import useFetching from "../hooks/useFetching"
import PostService from "../api/PostService"

export const StoreContext = React.createContext(null)

export default ({children}) => {
    const [posts, setPosts] = useState([])
    const [lastPubDate, setLastPubDate] = useState(Date.now())
    const [sources, setSources] = useState([])
    const [activeSources, setActiveSources] = useState([])

    const [fetchPosts, isLoadingPosts, errorPosts] = useFetching(async() => {
        const response = await PostService.getPosts(lastPubDate)
        setPosts([...posts, ...response.data])
    })

    const [fetchSources, isLoadingSources, errorSources] = useFetching(async() => {
        const response = await PostService.getSources()
        setSources([...response.data.sources])
        setActiveSources([...response.data.sources])
        const savedSources = JSON.parse(localStorage.getItem("activeSources"))
        if(Array.isArray(savedSources)) {
            if(savedSources.length) setActiveSources([...savedSources])
        }
    })

    const store = {
        posts: [posts, setPosts],
        lastPubDate: [lastPubDate, setLastPubDate],
        sources: [sources, setSources],
        activeSources: [activeSources, setActiveSources],
        fetchPosts: [fetchPosts, isLoadingPosts, errorPosts],
        fetchSources: [fetchSources, isLoadingSources, errorSources],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}