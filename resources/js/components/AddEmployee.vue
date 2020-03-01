<template>
    <div class="create container mt-12" style="text-align: left">
        <h1 class="mb-4">Add Employee</h1> <hr/>
        <b-form action="#" method="POST" @submit.prevent="addEmployee">
            <b-form-group
                id="input-group-1"
                label="Last Name"
                label-for="lastName"
            >
                <b-form-input type="text" name="lastName" id="lastName" v-model="lastName" placeholder="Enter last name"></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-2"
                label="First Name"
                label-for="firstName"
            >
                <b-form-input type="text" name="firstName" id="firstName" v-model="firstName" placeholder="Enter first name"></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-3"
                label="Extension"
                label-for="extension"
            >
                <b-form-input type="text" name="extension" id="extension" v-model="extension" placeholder="Enter Work Extension"></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-4"
                label="Email"
                label-for="email"
            >
                <b-form-input type="email" name="email" id="email" v-model="email" placeholder="Enter email"></b-form-input>
            </b-form-group>

            Select office:
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
            Select manager:
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
                <b-form-input type="text" name="jobTitle" id="jobTitle" v-model="jobTitle" placeholder="Enter job title"> </b-form-input>
            </b-form-group>

            <div >
                <b-button pill variant="dark" type="submit">Add Employee</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    import createEmployee from "./createEmployee";
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
        methods: {
            addEmployee() {
                this.$apollo.mutate({
                    mutation: createEmployee,
                    variables: {
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
                    this.$router.push('/')
                }).catch((error) => {
                    console.error(error)
                })
            }
        }
    }
</script>
