export async function getCars(){
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`)
    .then(response=>response.json())
}

export async function deleteCars(id){
    const deleteData = JSON.stringify({"id": id});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`,
    {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: deleteData
    })
    .then(response=>response.json())
}

export async function addCar(newCar){
    const carData=JSON.stringify(newCar);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`,
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: carData
    })
    .then(resonse=>resonse.json())
}

export async function editcar(newCar){
    const carData=JSON.stringify(newCar);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`,
    {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: carData
    })
    .then(response=>response.json())
}

