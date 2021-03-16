import React from "react";

function EditForm(props){
    return(
        <div className="container col-sm-4 col-md-4  border border-primary rounded">
            <h1>Add Form</h1>
            Name: <input type="text" id="name" onChange={props.update} value={props.newCarData.name}/><br/>
            Model: <input type="text" id="model" onChange={props.update} value={props.newCarData.model}/><br/>
            <button className="btn btn-primary" onClick={props.action}>Edit Item</button>
        </div>
    )
}

export default EditForm;