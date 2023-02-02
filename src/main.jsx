import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter ,Route,Routes} from 'react-router-dom'
import Movie from '../router/pages/movies'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

    <HashRouter>
    <App />
    </HashRouter>
)
