<template>
    <f7-page>
        <f7-navbar title="Payment" back-link="Back"></f7-navbar>

        <f7-block>
            <f7-row>
                <f7-col>
                    <f7-card @click.native="showAlert" style="cursor: pointer;">
                        <f7-card-content>
                            <i class="material-icons" style="font-size: 98px;">account_balance_wallet</i><br>
                            <span style="color: #ff3b30;">Pay with Cash</span>
                        </f7-card-content>
                    </f7-card>
                </f7-col>
                <f7-col>
                    <f7-card @click.native="payWithCard">
                        <f7-card-content style="text-align: center;">
                            <i class="f7-icons" style="font-size: 102px;">card</i><br>
                            <span style="color: #ff3b30;">Debit Card</span>
                        </f7-card-content>
                    </f7-card>
                </f7-col>
            </f7-row>

        </f7-block>
    </f7-page>
</template>

<script>
    import { Transaction, Card } from 'paystack-js';
    export default {
        name: "payment",
        methods: {
            showAlert(){
                this.$swal(
                    {
                        title: "Are you sure?",
                        text: "",
                        buttons: true,
                    })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal({
                                icon: "success",
                                title: "Your order is confirmed!",
                                text: "Order has been sent to the kitchen",
                                button: "View Order"
                            }).then(() => {
                                this.$f7router.navigate('/order-list/')
                            });
                        } else {
                            swal("Payment request cancelled!");
                        }
                    }
                );
            },
            payWithCard() {


            }
        }
    }
</script>

<style scoped>

</style>