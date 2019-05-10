<template>
    <f7-navbar :sliding="false">
        <f7-nav-left>
            <f7-link panel-open="left" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-link>
        </f7-nav-left>

        <f7-nav-title sliding>{{ msg }}</f7-nav-title>

        <f7-nav-right>
            <f7-link>
                <f7-icon f7="bell">
                    <f7-badge color="red">5</f7-badge>
                </f7-icon>
            </f7-link>
        </f7-nav-right>
    </f7-navbar>
</template>

<script>
    export default {
        props: [
            'msg'
        ],
    }
</script>

<style scoped>

</style>