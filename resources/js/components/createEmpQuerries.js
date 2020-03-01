import gql from 'graphql-tag'

export default gql`
    query {
        offices {
            officeCode
            city
        }
        employees {
            employeeNumber
            lastName
            firstName
        }
    }
`
