import gql from 'graphql-tag'

export default gql`
    query ($employeeNumber: ID){
        employee (employeeNumber: $employeeNumber){
            employeeNumber
            lastName
            firstName
            extension
            email
            reportsTo
            jobTitle
            manager {
                employeeNumber
                lastName
                firstName
                jobTitle
            }
            office {
                officeCode
                city
            }
        }
    }
`
