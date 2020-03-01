
<template>
    <div>
        <h1>Employee Management System</h1>
        <h3>Offices:</h3>
        <ApolloQuery
            :query="require('./queries.js').default"
            :variables="{officeCode: selectedOffice}"
        >
            <template slot-scope="{ result: { data, loading }, isLoading }">
                <div v-if="isLoading"><b-spinner variant="success" label="Spinning"></b-spinner>Loading...</div>

                <div v-else>

                    <b-button-group>
                    <b-button pill variant="success" href="#" v-for="office of data.offices"
                       @click.prevent="selectOffice(office.officeCode)">
                        {{ office.officeCode }}.
                        {{ office.city }}
                    </b-button>
                    </b-button-group>
                        <hr/>

                        <div v-for="employee of data.office.employees" :key="employee.employeeNumber" >
                            <b-card>
                            <router-link :to="`/employee/${employee.employeeNumber}`">
                                <b-card-title>
                                    {{ employee.firstName }}
                                     {{ employee.lastName }}
                                </b-card-title>
                                <b-card-text>
                                {{ employee.jobTitle }}
                                </b-card-text>
                            </router-link>
                            </b-card>
                        </div>
                </div>
                <hr/>
            </template>

        </ApolloQuery>
        <b-button pill variant="dark" to="/employee/add">Add Employee</b-button>
    </div>
</template>


<script>

    import queries from "./queries";
    export default {
        name: 'home',
        components: {

        },
        data() {
            return {
                queries: queries,
                selectedOffice: 1,
                offices: []
            }
        },
        methods: {
            selectOffice(office) {
                if(office ==='all') {
                    this.query
                }
                else
                this.selectedOffice = office;
            }
        }
    }

</script>
