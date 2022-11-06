import React, { useEffect } from "react"
import PostList from "../components/PostList"
import Loader from "../components/Loader"
import Scroller from "../components/Scroller"
import { StoreContext } from "../context"
import './styles/PostsPage.css'
import useFilter from "../hooks/useFilter"

export default function Posts() {

  const store = React.useContext(StoreContext)

  const posts = store.posts[0]
  const setLastPubDate = store.lastPubDate[1]
  const activeSources = store.activeSources[0]
  const [fetchPosts, isLoadingPosts, errorPosts] = store.fetchPosts

  const loadMorePosts = () => {
    if(filteredPosts.length) fetchPosts()
  }

  useEffect(() => {
    if(posts.length) setLastPubDate(Date.parse(posts[posts.length - 1].pubDate))
  }, [posts])

  const filteredPosts = useFilter(posts, activeSources)

  return (
    <div className="posts-page container">
        <Scroller />
        <PostList posts={filteredPosts} />
        {errorPosts && <div className="posts-page__error-message">{errorPosts}</div>}
        <div className="posts-page__footer">
          {!isLoadingPosts && <button className="load-btn" onClick={loadMorePosts}>Load more</button>}
          <div>{isLoadingPosts && <Loader />}</div>
        </div>
    </div>
  )
}