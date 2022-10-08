import React, {useState} from "react";

import { generateJSON, setupBoard, getNums } from "../Logic/logic.js"

const Home = () => {
    const [board] = useState(generateJSON(getNums()));

    const mapRow = (i) => {
        return (
            <>
                {board.map((cell, index) => 
                    (i <= index) && (index < i+4) && (<td> {cell.num} </td> )
                )}
            </>
        )
    }

    return <>
        <table>
            <tr>{ mapRow(0) }</tr>
            <tr>{ mapRow(4) }</tr>
            <tr>{ mapRow(8) }</tr>
            <tr>{ mapRow(12) }</tr>
        </table>
    </>
}

export default Home;