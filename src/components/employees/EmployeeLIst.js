import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialties, creatSpecialties] = useState("")

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
            const justSpecialities = employees.map(emp => emp.specialty)
            creatSpecialties(justSpecialities.join(", "))
        },
        [employees]
    )

    return (
        <>
            <div>
                
            </div>
        </>
    )
}

// {
    // Specialties: { specialties }
    //     employees.map(employee => {
        //         return <p key={`employee--${employee.id}`}>{employee.name}</p>
        //     })
        // }