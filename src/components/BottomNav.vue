<template>
    <f7-page :page-content="false">
        <f7-toolbar tabbar :position="isBottom ? 'bottom' : 'top'">
            <f7-link tab-link-active href="/menu/" route-tab-id="tab1">
                <f7-icon f7="home"></f7-icon>
            </f7-link>
            <f7-link tab-link href="/table/" route-tab-id="tab2">
                <f7-icon f7="collection"></f7-icon>
            </f7-link>
            <f7-link tab-link href="/cart/" route-tab-id="tab3">
                <!--<f7-icon md="add_shopping_cart" ></f7-icon>-->
                <i class="material-icons">add_shopping_cart</i>
            </f7-link>
            <f7-link tab-link href="/order-history/" route-tab-id="tab4">

                <i class="material-icons">history</i>
            </f7-link>
        </f7-toolbar>

        <!--<f7-tabs routable>
            <f7-tab class="page-content" id="tab1" tab-active></f7-tab>
            <f7-tab class="page-content" id="tab2"></f7-tab>
            <f7-tab class="page-content" id="tab3"></f7-tab>
            <f7-tab class="page-content" id="tab4"></f7-tab>
        </f7-tabs>-->
    </f7-page>
</template>

<script>
    export default {
        data() {
            return {
                isBottom: true,
            };
        }
    }
</script>

<style scoped>
    .mobile-bottom-bar {
        width: 100%;
        /*height: 60px;*/
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9999;
        border-top:1px solid #ccc;
        background: linear-gradient(45deg, #FFFFFF, #FFFFFF) !important;
        display: inline-flex;
        align-items: flex-end;
        overflow: hidden;
    }
</style>