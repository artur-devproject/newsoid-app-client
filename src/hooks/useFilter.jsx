import { useMemo } from "react"

export default function useFilter(posts, sources) {

      const filteredPosts = useMemo(() => {
         return posts.filter(post => 
           sources.some(source => 
             source.toLowerCase() == post.sourceName.toLowerCase()
           )
         )
      }, [posts, sources])
    
    return filteredPosts
}