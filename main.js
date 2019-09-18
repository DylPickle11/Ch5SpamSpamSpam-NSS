import customers from "./customers.js"

const emailArray = customers.map(customer => {
    const customerEmail = customer.contacts.email

    const email = customerEmail.map(custemail => {
        return custemail
    })

    return email.join(", ")
});

console.log(emailArray)