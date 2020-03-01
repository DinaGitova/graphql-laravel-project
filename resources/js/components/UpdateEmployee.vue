<template>
    <div class="edit container mt-12" style="text-align: left">
        <h1 class="mb-4">Edit Employee</h1>
        <b-form action="#" method="POST" @submit.prevent="edit">
            <b-form-group
                id="input-group-1"
                label="Last Name"
                label-for="lastName"
            >
                <b-form-input type="text" name="lastName" id="lastName" v-model="lastName"></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-2"
                label="First Name"
                label-for="firstName"
            >
                <b-form-input type="text" name="firstName" id="firstName" v-model="firstName"></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-3"
                label="Extension"
                label-for="extension"
            >
                <b-form-input type="text" name="extension" id="extension" v-model="extension"></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-4"
                label="Email"
                label-for="email"
            >
                <b-form-input type="email" name="email" id="email" v-model="email"></b-form-input>
            </b-form-group>

            Office:
            <div class="form-group">
                <ApolloQuery :query="require('./createEmpQuerries.js').default">
                    <template slot-scope="{ result: { data, loading }, isLoading }">
                        <div v-if="isLoading">Loading...</div>
                        <select v-else v-model="officeCode" id="officeCode">
                            <option v-for="office of data.offices" :value="office.officeCode">
                                {{ office.city }}
                            </option>
                        </select>
                    </template>
                </ApolloQuery>
            </div>
            Manager:
            <div class="form-group">
                <ApolloQuery :query="require('./createEmpQuerries.js').default">
                    <template slot-scope="{ result: { data, loading }, isLoading }">
                        <div v-if="isLoading">Loading...</div>
                        <select v-else v-model="reportsTo" id="reportsTo">
                            <option v-for="employee of data.employees" :value="employee.employeeNumber">
                                {{ employee.firstName }} {{ employee.lastName }}
                            </option>
                        </select>
                    </template>
                </ApolloQuery>
            </div>

            <b-form-group
                id="input-group-5"
                label="Job Title"
                label-for="jobTitle"
            >
                <b-form-input type="text" name="jobTitle" id="jobTitle" v-model="jobTitle"> </b-form-input>
            </b-form-group>

            <div >
                <b-button pill variant="dark" type="submit">Update Employee</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    import editEmployee from "./editEmployee";
    import empDetailsQuery from "./empDetailsQuery";
    export default {
        data() {
            return {
                lastName: '',
                firstName: '',
                extension: '',
                email: '',
                officeCode: 1,
                reportsTo: null,
                jobTitle: ''
            }
        },
        apollo: {
            employee: {
                query: empDetailsQuery,
                variables () {
                    if (this.$route && this.$route.params) {
                        return {
                            employeeNumber: this.$route.params.id
                        }
                    }
                },
                result ({ data: {employee} }) {
                    this.lastName = employee.lastName
                    this.firstName = employee.firstName
                    this.extension = employee.extension
                    this.email= employee.email
                    this.officeCode = employee.office.officeCode
                    if(employee.manager) {
                        this.reportsTo=employee.manager.employeeNumber
                    }
                    this.jobTitle = employee.jobTitle
                },
            },
        },
        methods: {
            edit() {
                this.$apollo.mutate({
                    mutation: editEmployee,
                    variables: {
                        employeeNumber: this.$route.params.id,
                        lastName: this.lastName,
                        firstName: this.firstName,
                        extension: this.extension,
                        email: this.email,
                        officeCode: this.officeCode,
                        reportsTo: this.reportsTo,
                        jobTitle: this.jobTitle
                    }
                }).then((data) => {
                    console.log(data)
                    this.$router.push(`/employee/${this.$route.params.id}`)
                }).catch((error) => {
                    console.error(error)
                })
            }
        }
    }
</script>


