
export const getAllCustomers = () => {
    return (
        fetch("http://localhost:8088/customers")
            .then(res => res.json())
    )    
}

export const getAllEmployees = () => {
    return (
        fetch(`http://localhost:8088/employees`)
                .then(res => res.json())
    )
}

export const getEmployee = (employeeId) => {
    return (
        fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
    )
}


export const getAllTickets = () => {
    return (
        fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
            .then(res => res.json())
    )
}

export const getTicket = (ticketId) => {
    return (
        fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(response => response.json())
    )
}

export const addTicket = (ticketId, updatedTicket) => {
    return (
        fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTicket)
        })
    )
}