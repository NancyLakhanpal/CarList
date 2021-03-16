import React, { useEffect, useState } from "react";

function CarListNla25()
{
    const [Cars, setCars] = useState([]);

    useEffect(() =>{
        refreshPage()
    },[])

    function refreshPage(){
        
    }

    return(
        <div className="row border-dark border rounded">
              <h1>Lab 7 - Cars Web Service</h1>
            <div className="container col-sm-8 col-md-8 border border-danger rounded">
            <table className="table">
                <thead>
                    <tr>
                        <th>id (hide from user)</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                </thead>
                <tbody>
                    
                </tbody>
                </table>
            </div>

        </div>
    )
}