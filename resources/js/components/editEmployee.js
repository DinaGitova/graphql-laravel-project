
import gql from 'graphql-tag'

export default gql`
    mutation (
        $employeeNumber: ID!
        $lastName: String!
        $firstName: String!
        $extension: String!
        $email: String!
        $officeCode: Int!
        $reportsTo: Int
        $jobTitle: String!
    ){
        updateEmployee(
            employeeNumber: $employeeNumber
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
