import React from "react";
import "../styles/AtributesStyles.css"
import Chamber from "../Components/Chamber";
import Title from "../Components/Title";

export default function Atributes(){
    return(
        <div className="atributes-page">
            <Title title="Atributos"></Title>
            <Chamber></Chamber>
        </div>
    );
}