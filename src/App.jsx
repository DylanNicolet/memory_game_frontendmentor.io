import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import "./sass/App.css"
import StartGame from "./pages/StartGame"

export default function App(){
    //States
    const homepageActive = useSelector(state => state.appState.homepageActive)

    return(
        <section className="app">
            {homepageActive && <StartGame />}
        </section>
    )
}