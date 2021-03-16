import React from "react";

function Addform(props){
    return(
        <div className="container col-sm-4 col-md-4  border border-primary rounded">
            <h1>Add Form</h1>
            Name: <input type="text" id="name" onChange={props.update}/><br/>
            Model: <input type="text" id="model" onChange={props.update}/><br/>
            <button className="btn btn-primary" onClick={props.action}>Add Item</button>
        </div>
    )
}

export default Addform;