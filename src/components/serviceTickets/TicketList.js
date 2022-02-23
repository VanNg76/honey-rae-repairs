import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


export const TicketList = () => {
    const [tickets, setTickets] = useState([])

    const history = useHistory()

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
        <div>
            <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
        </div>
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

