import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployee } from "../ApiManager"

export const Employee = () => {
    const [employee, set] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            getEmployee(employeeId)
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of employeeId change
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__id">Id: {employee.id}</div>
                <div className="employee__specialty">Specialty: {employee.specialty}</div>
            </section>
        </>
    )
}