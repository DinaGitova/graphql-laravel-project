
import gql from 'graphql-tag'

export default gql`
    mutation (
        $lastName: String! 
        $firstName: String! 
        $extension: String!
        $email: String!
        $officeCode: Int!
        $reportsTo: Int
        $jobTitle: String!
    ){
        createEmployee(
            lastName:  $lastName
            firstName: $firstName
            extension: $extension
            email: $email
            officeCode: $officeCode
            reportsTo: $reportsTo
            jobTitle: $jobTitle
        ) {
            employeeNumber
            firstName
        }
    }
`
