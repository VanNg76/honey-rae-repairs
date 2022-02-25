import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min"
import { getAllEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialtyString, createSpecialty] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then(employeeData => {
                    setEmployees(employeeData)
                })
        },
        []
    )

    useEffect(
        () => {
            const specialty = employees.map(employee => employee.specialty)
            createSpecialty(specialty.join(", "))
        }
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/hiring")}>Hire New Employee</button>
            </div>
            <br></br>
            <div>
                Specialties: { specialtyString }
            </div>
        {
            employees.map(employee => {
                return <p key={`employee--${employee.id}`}>
                    <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
                </p>
            })
        }
        </>
    )
}
