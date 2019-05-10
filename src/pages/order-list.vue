<template>
    <f7-page>
        <f7-navbar title="Order List" back-link="Back"></f7-navbar>

        <f7-block>
            <f7-row>
                <f7-card>
                    <f7-card-content>
                       <table>
                           <tr>
                               <td>Order ID - </td>
                               <td>BM00020</td>
                           </tr>
                           <tr>
                               <td>Order Date - </td>
                               <td>3-Jan-2018</td>
                           </tr>
                           <tr>
                               <td>Order Time - </td>
                               <td>4:00 PM</td>
                           </tr>
                           <tr>
                               <td>Delivery Address - </td>
                               <td>8 Esietedo street, CBN Alkija, Lagos</td>
                           </tr>
                           <tr>
                               <td>Status - </td>
                               <td>
                                   <span style="color: #df3826;">Pending</span>
                               </td>
                           </tr>
                       </table>
                    </f7-card-content>
                </f7-card>
            </f7-row>
        </f7-block>

        <div class="card data-table">
            <table>
                <thead>
                <tr>
                    <th class="label-cell">Item</th>
                    <th class="numeric-cell">Quantity</th>
                    <th class="numeric-cell">Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="label-cell">Star</td>
                    <td class="numeric-cell">15</td>
                    <td class="numeric-cell">6000</td>
                </tr>
                <tr>
                    <td class="label-cell">Goldberg</td>
                    <td class="numeric-cell">3</td>
                    <td class="numeric-cell">900</td>
                </tr>
                <tr>
                    <td class="label-cell">Hero</td>
                    <td class="numeric-cell">2</td>
                    <td class="numeric-cell">500</td>
                </tr>
                <tr>
                    <td class="label-cell">Total</td>
                    <td class="numeric-cell">20</td>
                    <td class="numeric-cell">7400</td>
                </tr>
                </tbody>
            </table>
        </div>

        <f7-block>
            <f7-row>
                <f7-col>
                    <f7-button @click="cancelOrder" fill color="red" large raised round>
                        Cancel
                    </f7-button>
                </f7-col>
            </f7-row>
        </f7-block>

    </f7-page>
</template>

<script>
    import bottomNav from '../components/BottomNav'
    export default {
        components: {
            bottomNav
        },
        methods: {
            cancelOrder() {
                const app = this.$f7;
                app.dialog.alert('Order Cancelled!');
            }
        }
    };
</script>

<style scoped>

</style>