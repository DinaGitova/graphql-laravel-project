import gql from 'graphql-tag'

export default gql`
    query ($officeCode: ID){
        offices {
            officeCode
            city
        }
        
        office(officeCode: $officeCode) {
            officeCode
            city
            employees {
                employeeNumber
                firstName
                lastName
                jobTitle
            }
        }
    }
`
