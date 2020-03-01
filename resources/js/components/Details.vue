<template>
    <div>
        <h1>Employee Details:</h1> <hr/>
        <ApolloQuery
            :query="require('./empDetailsQuery.js').default"
            :variables="{employeeNumber: $route.params.id}"
        >
            <template slot-scope="{ result: { data, loading }, isLoading }">
            <div v-if="isLoading"> <b-spinner label="Spinning"></b-spinner>Loading...</div>
            <div v-else>
                <b-container fluid>
                    <b-row class="my-1">
                        <b-col sm="2">Last Name: </b-col>
                        <b-col sm="10">{{data.employee.lastName}}</b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">First Name: </b-col>
                        <b-col sm="10">{{data.employee.firstName}}</b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">Extension: </b-col>
                        <b-col sm="10">{{data.employee.extension}}</b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">Email: </b-col>
                        <b-col sm="10">{{data.employee.email}}</b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">Office : </b-col>
                        <b-col sm="10">{{data.employee.office.city}}</b-col>
                    </b-row>
                <div v-if="data.employee.manager">
                    <b-row class="my-1">
                        <b-col sm="2">Manager: </b-col>
                        <b-col sm="10">{{data.employee.manager.firstName}} {{data.employee.manager.lastName}}</b-col>
                    </b-row>
                </div>
                    <b-row class="my-1">
                        <b-col sm="2">Job Title: </b-col>
                        <b-col sm="10">{{data.employee.jobTitle}}</b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="6"><b-button block pill variant="dark" :to="`/employee/${data.employee.employeeNumber}/update`" href="#" class="">Edit</b-button></b-col>
                        <b-col sm="6"><b-button block pill variant="dark" href="#" @click.prevent="deleteEmp">Delete</b-button></b-col>
                    </b-row>
                </b-container>
            </div>
            <hr/>
</template>
        </ApolloQuery>
    </div>
</template>

<script>
    import deleteEmployee from "./deleteEmployee";
    export default {
        methods: {
            deleteEmp() {
                this.$apollo.mutate({
                    mutation: deleteEmployee,
                    variables: {
                        employeeNumber: this.$route.params.id,
                    }
                }).then(data => {
                    console.log(data)
                    this.$router.push('/')
                })
            }
        }
    }
</script>

<style scoped>

</style>
