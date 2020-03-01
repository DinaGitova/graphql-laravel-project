
import gql from 'graphql-tag'

export default gql`
    mutation (
        $employeeNumber: ID!
    ){
        deleteEmployee(employeeNumber: $employeeNumber) {
            employeeNumber
            firstName
            lastName
        }
    }
`
