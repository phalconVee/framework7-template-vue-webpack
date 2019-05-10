<template>
    <f7-page>
        <f7-navbar title="Bills" back-link="Back"></f7-navbar>
        <f7-block strong>
            <p>Bills</p>
            <p>Welcome to bills route.</p>
        </f7-block>

        <bottom-nav></bottom-nav>

    </f7-page>
</template>

<script>
    import bottomNav from '../components/BottomNav'
    export default {
        components: {
            bottomNav
        }
    };
</script>

<style scoped>

</style>