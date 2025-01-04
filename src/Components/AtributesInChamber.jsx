import React from "react";

export default function AtributesInChamber() {
    return (
        <div className="inputs">
            <div className="line1">
                <div className="atributes-place">
                    <input type="number" name="fisico" id="fis" max="10" />
                </div>
            </div>
            <div className="line2">
                <div className="atributes-place">
                    <input type="number" name="intelecto" id="int" max="10" />
                </div>
                <div className="atributes-place">
                    <input type="number" name="agilidade" id="agi" max="10" />
                </div>
            </div>
            <div className="line3">
                <div className="atributes-place">
                    <input type="number" name="coragem" id="crg" max="10" />
                </div>
            </div>
        </div>
    );
}
