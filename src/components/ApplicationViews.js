import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"
import { HiringForm } from "./employees/HiringForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/hiring">
                <HiringForm />
            </Route>

            <Route exact path="/serviceTickets">
                <TicketList />
            </Route>

            <Route path="/serviceTickets/create">
                <TicketForm />
            </Route>
        </>
    )
}