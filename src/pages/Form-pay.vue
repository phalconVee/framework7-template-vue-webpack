<template>
    <f7-page>
        <f7-navbar title="Enter Your Details" back-link="Back"></f7-navbar>

        <f7-list no-hairlines-md>
            <f7-list-input
                    label="Full Name"
                    type="text"
                    placeholder="Your name"
                    clear-button
            ></f7-list-input>

            <f7-list-input
                    label="Mobile"
                    type="text"
                    placeholder="Your Phone Number"
                    clear-button
            ></f7-list-input>

            <f7-list-input
                    label="E-mail"
                    type="email"
                    placeholder="Your e-mail"
                    clear-button
            ></f7-list-input>

            <f7-list-input
                    label="Address"
                    type="text"
                    placeholder="Your Address"
                    clear-button
            ></f7-list-input>
        </f7-list>

        <f7-block>
            <f7-row>
                <f7-col>
                    <f7-button href="/payment/" fill color="red" large raised round>
                        Save & Continue
                    </f7-button>
                </f7-col>
            </f7-row>
        </f7-block>

    </f7-page>
</template>

<script>
    export default {
        name: "form-pay"
    }
</script>

<style scoped>

</style>