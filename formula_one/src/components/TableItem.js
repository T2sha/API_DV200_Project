import React from "react";

const TableItem = (props) => {


    return (
        <div className="tableItem">
            
            <p2><strong></strong> {props.pts} PTS </p2>
            <p><strong></strong> {props.name}</p>
           
        </div>
    );
}

export default TableItem 
