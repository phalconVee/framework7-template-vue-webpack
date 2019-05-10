<template>
    <div style="margin-top: -50px;">
        <f7-nav-right>
            <f7-link class="searchbar-enable"
                     data-searchbar=".searchbar-components"
                     icon-ios="f7:search"
                     icon-aurora="f7:search"
                     icon-md="material:search"></f7-link>

            <f7-link popup-open=".demo-popup">
                <i class="material-icons">filter_list</i>
            </f7-link>
        </f7-nav-right>

        <f7-searchbar
                class="searchbar-components"
                search-container=".components-list"
                search-in="a"
                expandable
                :disable-button="!this.$theme.aurora"
        ></f7-searchbar>

        <!-- Filter popup -->
        <f7-popup class="demo-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
            <f7-page>
                <f7-navbar title="Filter">
                    <f7-nav-right>
                        <f7-link popup-close>Close</f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <f7-block-title>Available Filters</f7-block-title>
                <f7-block>
                    <f7-row tag="p">
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Lager
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Stout
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Ready-to-drink
                            </f7-button>
                        </f7-col>
                    </f7-row>
                    <f7-row tag="p">
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Carbonated drink
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Spirit
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Syrup
                            </f7-button>
                        </f7-col>
                    </f7-row>

                    <f7-row tag="p">
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Pet
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Can
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Bottle
                            </f7-button>
                        </f7-col>
                    </f7-row>

                    <f7-row tag="p">
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Asun
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Kebab
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Nkwobi
                            </f7-button>
                        </f7-col>
                    </f7-row>

                    <f7-row tag="p">
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Vegetable
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Ofe Nsala
                            </f7-button>
                        </f7-col>
                        <f7-col tag="span">
                            <f7-button color="black"
                                       style="text-transform: none;"
                                       raised>
                                <span style="color: #df3826;">+</span>                                 Banga
                            </f7-button>
                        </f7-col>
                    </f7-row>

                </f7-block>
            </f7-page>
        </f7-popup>
        <!-- End Filter -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                popupOpened: false
            }
        },
    }
</script>

<style scoped>

</style>