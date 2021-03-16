import React, { useEffect, useState } from "react";
import { addCar, deleteCars, editcar, getCars } from "../../ServicesNla25/carServiceNla25";
import Addform from "../AddForm/AddForm";
import EditForm from "../EditForm/EditForm";

function CarListNla25()
{
    const [Cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState();
    const [action, setAction] = useState("add");

    useEffect(() =>{
        refreshPage()
    },[])

    function refreshPage(){
        getCars()
        .then(json=>{
            setCars(json);
        })
        .catch(err => {
            console.error(err)
        })
    }

    function renderEditItemCar(e){
        e.preventDefault();
        let carToUpdate={};
        Cars.forEach((car) => {
            if(car.id===e.target.value){
                carToUpdate=car;
            }
        })
        setNewCar(carToUpdate);
        setAction("edit");
    }

    async function deleteItem(e){
        await deleteCars(e.target.value)
        refreshPage();
    }

    function updateCar(e){
        setNewCar({
            ...newCar,
            [e.target.id] : e.target.value
        })
    }

    async function editItem(e){
        let updatedItem = newCar;
        await editcar(updatedItem)
        refreshPage();
        setAction("add");
    }

    async function addItem(e){
        await addCar(newCar);
        refreshPage();
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
                    {Cars.map((car, key) => (
                        <tr key={key}>
                            <td>{car.id}</td>
                            <td>{car.name}</td>
                            <td>{car.model}</td>
                            <td><button className="alert-primary alert" value={car.id} onClick={renderEditItemCar}>Edit</button></td>
                            <td><button className="alert-primary alert" value={car.id} onClick={deleteItem}>Delete</button></td>
                        </tr>
                    ))}
                    
                </tbody>
                </table>
            </div>

            {(action === "add") ? 
            <Addform update={updateCar} action={addItem}/> : <EditForm newCarData={newCar} action={editItem} update={updateCar}/>}

        </div>
    )
}

export default CarListNla25;