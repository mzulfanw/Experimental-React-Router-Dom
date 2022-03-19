import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// how to make clean import
import { Home, List, Error } from '../Components/Index.js'
export default function Index () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/list' element={<List />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
