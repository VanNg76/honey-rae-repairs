import React, { useEffect, useState} from "react"
import { EmployeeList } from "../employees/EmployeeList"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((ticketData) => {
                    setTickets(ticketData)
                })

        },
        []
    )

    return (
        <>
            {
                tickets.map(ticket => {
                    return <div key={`ticket--${ticket.id}`}>
                                <p> {ticket.description} submitted by {ticket.customer.name}
                                    and worked on by {ticket.employee.name} </p>
                            </div>
                })
            }
        </>
    )
}

