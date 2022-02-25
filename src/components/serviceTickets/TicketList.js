import React, { useEffect, useState} from "react"
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min"
import { getAllTickets } from "../ApiManager"
import "./Ticket.css"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const [message, showMessage] = useState("")

    const history = useHistory()

    useEffect(
        () => {
            getAllTickets()
                .then((ticketData) => {
                    setTickets(ticketData)
                })

        },
        []
    )

    useEffect(
        () => {
            if (tickets.length === 1) {
                showMessage("You have 1 ticket")
            } else {
                showMessage(`You have ${tickets.length} tickets`)
            }

        },
        [tickets]
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })

        // update tickets array to eliminate the deleted one!
        const copy = tickets.filter(ticket => ticket.id != id)
        setTickets(copy)
        
    }

    return (
        <>
        <div>
            <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
        </div>
        <p>{message}</p>

            {
                tickets.map(ticket => {
                    return <div key={`ticket--${ticket.id}`}>
                                <p className={ticket.emergency ? "emergency" : ""}>
                                    {ticket.emergency ? "🚑" : ""} <Link to={`/serviceTickets/${ticket.id}`}>{ticket.description}</Link>
                                    <button onClick={() => {
                                        deleteTicket(ticket.id)
                                    }}
                                    >Delete</button>
                                </p>
                            </div>
                })

                
            }
        </>
    )
}

