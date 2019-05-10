<template>
    <f7-page>
        <div>
            <f7-searchbar
                    disable-link-text="Cancel"
                    placeholder="Search with ID"
                    :clear-button="true"
            ></f7-searchbar>
        </div>

        <f7-list class="searchbar-not-found">
            <f7-list-item title="Nothing found"></f7-list-item>
        </f7-list>

        <div class="search-list searchbar-found">
            <f7-card @click.native="handleClickService" style="cursor: pointer;">
                <f7-card-content>
                    <f7-row>
                        <f7-col width="15">
                            <i class="material-icons" style="font-size: 40px;">
                                restaurant_menu
                            </i>
                        </f7-col>
                        <f7-col width="50">
                            <f7-list-item-row>
                                Order id- <span style="color: #40a0d8;">BM00020</span>
                            </f7-list-item-row>
                            <f7-list-item-row>
                                Date- 15-Dec-2018
                            </f7-list-item-row>
                            <f7-list-item-row>
                                Time- 4:00 PM
                            </f7-list-item-row>
                        </f7-col>
                        <f7-col width="20">
                            <f7-list-item-row>₦500.00</f7-list-item-row>
                            <f7-list-item-row>&nbsp;</f7-list-item-row>
                            <f7-list-item-row>
                                <span style="color:#00ce68;">Delivered</span>
                            </f7-list-item-row>
                        </f7-col>
                    </f7-row>
                </f7-card-content>
            </f7-card>

            <f7-card @click.native="handleClickService" style="cursor: pointer;">
                <f7-card-content>
                    <f7-row>
                        <f7-col width="15">
                            <i class="material-icons" style="font-size: 40px;">
                                restaurant_menu
                            </i>
                        </f7-col>
                        <f7-col width="50">
                            <f7-list-item-row>
                                Order id- <span style="color: #40a0d8;">BM00021</span>
                            </f7-list-item-row>
                            <f7-list-item-row>
                                Date- 16-Dec-2018
                            </f7-list-item-row>
                            <f7-list-item-row>
                                Time- 12:05 PM
                            </f7-list-item-row>
                        </f7-col>
                        <f7-col width="20">
                            <f7-list-item-row>₦1350.00</f7-list-item-row>
                            <f7-list-item-row>&nbsp;</f7-list-item-row>
                            <f7-list-item-row>
                                <span style="color:#00ce68;">Delivered</span>
                            </f7-list-item-row>
                        </f7-col>
                    </f7-row>
                </f7-card-content>
            </f7-card>

            <f7-card @click.native="handleClickService" style="cursor: pointer;">
                <f7-card-content>
                    <f7-row>
                        <f7-col width="15">
                            <i class="material-icons" style="font-size: 40px;">
                                restaurant_menu
                            </i>
                        </f7-col>
                        <f7-col width="50">
                            <f7-list-item-row>
                                Order id- <span style="color: #40a0d8;">BM00022</span>
                            </f7-list-item-row>
                            <f7-list-item-row>
                                Date- 01-Jan-2019
                            </f7-list-item-row>
                            <f7-list-item-row>
                                Time- 03:05 PM
                            </f7-list-item-row>
                        </f7-col>
                        <f7-col width="20">
                            <f7-list-item-row>₦1500.00</f7-list-item-row>
                            <f7-list-item-row>&nbsp;</f7-list-item-row>
                            <f7-list-item-row>
                                <span style="color:#ffcc00;">Pending</span>
                            </f7-list-item-row>
                        </f7-col>
                    </f7-row>
                </f7-card-content>
            </f7-card>

            <f7-card @click.native="handleClickService" style="cursor: pointer;">
                <f7-card-content>
                    <f7-row>
                        <f7-col width="15">
                            <i class="material-icons" style="font-size: 40px;">
                                restaurant_menu
                            </i>
                        </f7-col>
                        <f7-col width="50">
                            <f7-list-item-row>
                                Order id- <span style="color: #40a0d8;">BM00023</span>
                            </f7-list-item-row>
                            <f7-list-item-row>
                                Date- 16-Feb-2019
                            </f7-list-item-row>
                            <f7-list-item-row>
                                Time- 06:05 PM
                            </f7-list-item-row>
                        </f7-col>
                        <f7-col width="20">
                            <f7-list-item-row>₦1500.00</f7-list-item-row>
                            <f7-list-item-row>&nbsp;</f7-list-item-row>
                            <f7-list-item-row>
                                <span style="color:#ff3b30;">Failed</span>
                            </f7-list-item-row>
                        </f7-col>
                    </f7-row>
                </f7-card-content>
            </f7-card>
        </div>

    </f7-page>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {

            }
        },
        methods: {
            handleClickService() {
                this.$f7router.navigate('/order-list/')
            }
        }

    };
</script>

<style scoped>

</style>