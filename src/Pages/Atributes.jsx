import React from "react";
import "../styles/AtributesStyles.css"
import chamber from "../assets/chamber.svg"

export default function Atributes(){
    return(
        <body className="atributes-page">
            <div className="box-chamber">
                <div className="pai">
                    <div className="inputs">

                        <div className="line1"><input type="number" name="fisico" id="fis" max="10"/></div>
                        <div className="line2">
                            <input type="number" name="intelecto" id="int" max="10"/>
                            <input type="number" name="agilidade" id="agi" max="10"/>
                        </div>
                        <div className="line3"><input type="number" name="coragem" id="crg" max="10"/></div>
                    </div>
                <img src={chamber} alt="chamber with atributes"/>
                </div>
            </div>
        </body>
    );
}