import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            getAllCustomers()
                .then(
                    (customers) => {
                        assignCustomers(customers)
                    }
                )
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            } else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(customer => {
                    return <p key={`customer--${customer.id}`}>{customer.name}</p>
                })
            }
        </>
    )
}

