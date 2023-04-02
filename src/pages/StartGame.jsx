import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateState } from "../redux/appSlice";

export default function StartGame(){

    //States
    let [theme, setTheme] = React.useState("numbers")
    let [playerNumber, setPlayerNumber] = React.useState("1")
    let [gridSize, setGridSize] = React.useState("4x4")

    //update Redux
    const dispatch = useDispatch()

    //User interaction
    function handleThemeSelect(e){
        setTheme(e)
    }

    function handlePlayerNumberSelect(e){
        setPlayerNumber(e)
    }

    function handleGridSizeSelect(e){
        setGridSize(e)
    }

    function handleStartGame(){
        dispatch(updateState(
            {
                theme: theme,
                playerNumber: playerNumber,
                gridSize: gridSize,
                homepageActive: false
            }
        ))
        console.log("starting game")
    }

    return(
        <section className="start-game">
            <h1 className="title">memory</h1>

            <section className="form">
                <p>Select Theme</p>
                <section className="choice__container">
                    <button type="type" onClick={e => handleThemeSelect("numbers")} className={"menu-selection " + (theme === "numbers" ? "active" : undefined)}>Numbers</button>
                    <button type="button" onClick={e => handleThemeSelect("icons")} className={"menu-selection " + (theme === "icons" ? "active" : undefined)}>Icons</button>
                </section>

                <p>Number of players</p>
                <section className="choice__container">
                    <button type="button" onClick={e => handlePlayerNumberSelect("1")} className={"menu-selection " + (playerNumber === "1" ? "active" : undefined)}>1</button>
                    <button type="button" onClick={e => handlePlayerNumberSelect("2")} className={"menu-selection " + (playerNumber === "2" ? "active" : undefined)}>2</button>
                    <button type="button" onClick={e => handlePlayerNumberSelect("3")} className={"menu-selection " + (playerNumber === "3" ? "active" : undefined)}>3</button>
                    <button type="button" onClick={e => handlePlayerNumberSelect("4")} className={"menu-selection " + (playerNumber === "4" ? "active" : undefined)}>4</button>
                </section>

                <p>Grid Size</p>
                <section className="choice__container">
                    <button type="button" onClick={e => handleGridSizeSelect("4x4")} className={"menu-selection " + (gridSize === "4x4" ? "active" : undefined)}>4x4</button>
                    <button type="button" onClick={e => handleGridSizeSelect("6x6")} className={"menu-selection " + (gridSize === "6x6" ? "active" : undefined)}>6x6</button>
                </section>

                <button type="button" className="button-primary" onClick={handleStartGame}>Start Game</button>
            </section>
        </section>
    )
}