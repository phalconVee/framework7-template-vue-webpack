<template>
    <f7-page>
        <div class="data-table">
            <table>
                <thead>
                <tr>
                    <th class="label-cell">Item</th>
                    <th class="numeric-cell">Quantity</th>
                    <th class="numeric-cell">Price</th>
                    <th class="numeric-cell">Edit</th>
                    <th class="numeric-cell">Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="label-cell">
                        <f7-row>
                            <f7-col width="66">
                                <img :src="s3.g_drive + '1uX0gVUoI7zu-ungvukjsEQxiAGC28nMB'"
                                     width="80" />
                            </f7-col>
                            <f7-col width="33">
                                Star 60cl
                            </f7-col>
                        </f7-row>
                    </td>

                    <td class="numeric-cell" style="text-align: center;">
                        <f7-stepper fill color="black" :min="0" :step="1" small></f7-stepper>
                    </td>

                    <td class="numeric-cell">
                        <span style="color: #32CD32;">
                            ₦300
                        </span>
                    </td>

                    <td class="numeric-cell">
                        <f7-link>
                            <i class="material-icons" style="color: black;">edit</i>
                        </f7-link>
                    </td>

                    <td class="numeric-cell">
                        <f7-link>
                            <i class="material-icons" style="color: #df3826;">delete</i>
                        </f7-link>
                    </td>
                </tr>
                <tr>
                    <td class="label-cell">
                        <f7-row>
                            <f7-col width="66">
                                <img :src="s3.g_drive + '1GEkMTwhWSv21cUKnusgr3aGPCnfZBvFz'"
                                     width="80" />
                            </f7-col>
                            <f7-col width="33">
                                Goldberg 60cl
                            </f7-col>
                        </f7-row>
                    </td>
                    <td class="numeric-cell" style="text-align: center;">
                        <f7-stepper fill color="black" :min="0" :step="1" small></f7-stepper>
                    </td>
                    <td class="numeric-cell">
                        <span style="color: #32CD32;">
                            ₦300
                        </span>
                    </td>

                    <td class="numeric-cell">
                        <f7-link>
                            <i class="material-icons" style="color: black;">edit</i>
                        </f7-link>
                    </td>

                    <td class="numeric-cell">
                        <f7-link>
                            <i class="material-icons" style="color: #df3826;">delete</i>
                        </f7-link>
                    </td>

                </tr>
                <tr>
                    <td class="label-cell">
                        <f7-row>
                            <f7-col width="66">
                                <img :src="s3.g_drive + '1Hh2Ha5Q-W_u5fnS7vrMylidOBaNycCr8'"
                                     width="80" />
                            </f7-col>
                            <f7-col width="33">
                                Origin 60cl
                            </f7-col>
                        </f7-row>
                    </td>
                    <td class="numeric-cell" style="text-align: center;">
                        <f7-stepper fill color="black" :min="0" :step="1" small></f7-stepper>
                    </td>
                    <td class="numeric-cell">
                        <span style="color: #32CD32;">
                            ₦250
                        </span>
                    </td>

                    <td class="numeric-cell">
                        <f7-link>
                            <i class="material-icons" style="color: black;">edit</i>
                        </f7-link>
                    </td>

                    <td class="numeric-cell">
                        <f7-link>
                            <i class="material-icons" style="color: #df3826;">delete</i>
                        </f7-link>
                    </td>

                </tr>
                </tbody>

            </table>

        </div>

        <div class="card data-table data-table-collapsible data-table-init">
            <div class="card-header">
                <div class="data-table-title">Total:</div>
                <div class="data-table-actions">
                    <span style="color: #32CD32;">₦850</span>
                </div>
            </div>
        </div>

        <f7-block>
            <f7-row>
                <f7-col>
                    <f7-button href="/customer-pay/" fill color="red" large raised round>
                        Proceed to Pay
                    </f7-button>
                </f7-col>
            </f7-row>
        </f7-block>

    </f7-page>
</template>

<script>
    import g_drive from '../helpers/constants'
    import bottomNav from '../components/BottomNav'
    export default {
        components: {
            bottomNav
        },
        data() {
            return {
                s3: g_drive,
            }
        },
    };
</script>

<style scoped>

</style>