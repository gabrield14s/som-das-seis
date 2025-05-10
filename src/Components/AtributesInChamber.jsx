import React, { useEffect, useState } from "react";
import { BsCursor } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

export default function AtributesInChamber() {
    const [editavel, setEditavel] = useState(false);
    const [valor, setValor] = useState("");

    return (
        <>
        <div className="inputs">
            <div className="line1">
                <div className="atributes-place">
                    <input type="number" name="fisico" disabled={!editavel} id="fis" max="10"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    onBlur={() => {
                      if (valor === "") setValor("0");
                    }}
                    className={`atributes-place-input ${!editavel ? "no-border" : ""}`}
                    />
                    <p>FIS</p>
                </div>
            </div>
            <div className="line2">
                <div className="atributes-place" id="atributes-place-int">
                    <input type="number" name="intelecto" disabled={!editavel} id="int" max="10"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    onBlur={() => {
                      if (valor === "") setValor("0");
                    }}
                    className={`atributes-place-input ${!editavel ? "no-border" : ""}`}
                    />
                    <p>INT</p>
                </div>
                <div className="atributes-place" id="atributes-place-agl">
                    <input type="number" name="agilidade" disabled={!editavel} id="agi" max="10" 
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    onBlur={() => {
                      if (valor === "") setValor("0");
                    }}
                    className={`atributes-place-input ${!editavel ? "no-border" : ""}`}
                    />
                    <p>AGI</p>
                </div>
            </div>
            <div className="line3">
                <div className="atributes-place">
                    <input type="number" name="coragem" disabled={!editavel} id="crg" max="10"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    onBlur={() => {
                      if (valor === "") setValor("0");
                    }}
                    className={`atributes-place-input ${!editavel ? "no-border" : ""}`}
                    />
                    <p>CRG</p>
                </div>
            </div>
            <div className="area-edit-button">
                <button className="button-edit" onClick={() => setEditavel(!editavel)} style={ { all: "unset", cursor: "pointer", color: "white"} }>
                    {editavel ? <FaCheck size={24}/> : <CiEdit size={24}/>}
                </button>
            </div>
        </div>
        
        </>
    );
}
