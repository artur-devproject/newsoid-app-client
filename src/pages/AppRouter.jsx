import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from './About'
import Posts from './Posts'
import Sources from './Sources'

export default function AppRouter () {

    return (
        <Routes>
            <Route path="posts" element={<Posts />} />
            <Route path="sources" element={<Sources />} />
            <Route path="about" element={<About />} />
            <Route path="/" element={<Navigate to="/posts" />} />
            <Route path="*" element={<Navigate to="/posts" />} />
        </Routes>
    )
}