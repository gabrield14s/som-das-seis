import React from "react";
import AtributesInChamber from "./AtributesInChamber";
import "../styles/AtributesStyles.css"

export default function Chamber() {
    return (
        <div className="box-chamber">
            <div className="chamber">
                <AtributesInChamber></AtributesInChamber>
            </div>
        </div>
    );
}
