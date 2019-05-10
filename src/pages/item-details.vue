<template>
    <f7-page>
        <f7-navbar title="Item Details" back-link="Back"></f7-navbar>

        <br><br><br>
        <div class="img_holder">
            <img slot="media"
                 :src="s3.g_drive + '1DJ5R_d28F5Ji6Zub1T5yRfo4h_7qENe5'"
                 width="160" height="160"/>
        </div>

        <div>&nbsp;</div>
        <f7-list media-list>
            <f7-list-item>
                <f7-row>
                    <f7-col width="66">
                        <span>
                            <strong>Gulder 60 cl</strong><br/>
                            <span class="small_text_color">Lager</span>
                        </span>
                    </f7-col>
                    <f7-col width="33">
                        <span class="small_text_color">₦300</span>
                    </f7-col>
                </f7-row>
            </f7-list-item>

            <f7-list-item>
                <f7-row>
                    <f7-col width="66">
                        <span>
                            <strong>Quantity</strong>
                        </span>
                    </f7-col>
                    <f7-col width="33">
                        <span>
                            <f7-stepper fill color="black" :min="0" :step="1" small></f7-stepper>
                        </span>
                    </f7-col>
                </f7-row>
            </f7-list-item>

        </f7-list>

        <f7-block>
            <f7-row>
                <f7-col>
                    <f7-button href="/customer-pay/" fill color="red" large raised round>
                        Add to Cart
                    </f7-button>
                </f7-col>
            </f7-row>
        </f7-block>

        <div style="padding-bottom: 50px;"></div>

    </f7-page>
</template>

<script>
    import g_drive from '../helpers/constants'
    export default {
        components: {

        },
        props: [
            'item_id'
        ],
        data() {
            return {
                s3: g_drive,
            }
        }
    }
</script>

<style scoped>
    .img_holder {
        text-align: center;
        margin: auto;
        border: 1px #cccccc;
        height: 120px;
        width: 180px;
        position: relative;
    }

    .small_text_color {
        color: #4D4E4F;
        font-size: 14px;
    }
</style>