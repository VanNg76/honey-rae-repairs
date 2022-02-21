import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialtyString, createSpecialty] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
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
                Specialties: { specialtyString }
            </div>
        {
            employees.map(employee => {
                return <p key={`employee--${employee.id}`}>{employee.name}</p>
            })
        }
        </>
    )
}
