import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const HiringForm = () => {
    const [employee, addEmployee] = useState({
       
    });

    const history = useHistory()

    const saveEmployee = (event) => {

        event.preventDefault()
        
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }
        
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="hiringForm">
            <h2 className="hiringForm__title">Hiring Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter fullname"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                addEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter specialty"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                addEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}