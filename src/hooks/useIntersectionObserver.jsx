import { useEffect, useRef } from "react"

export default function useIntersectionObserver(callback, dependencyArray) {
    const observer = useRef(null)
    const element = useRef()

    useEffect(() => {
        if(observer.current) observer.current.disconnect()
        
        observer.current = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) callback()
        })
        
        observer.current.observe(element.current)

        return () => observer.current.disconnect()
    }, dependencyArray)

    return element
}