<template>
    <div>
        <f7-searchbar
                disable-link-text="Cancel"
                placeholder="Search in tables"
                :clear-button="true"
        ></f7-searchbar>

        <f7-list class="searchbar-not-found">
            <f7-list-item title="Nothing found"></f7-list-item>
        </f7-list>

        <div class="search-list searchbar-found">
            <f7-block>
                <f7-row tag="p" class="item-title">
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> A2-01</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button color="black" raised> A2-02</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button color="black" raised> A2-03</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button color="black" raised> A2-04</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button color="black" raised> A2-05</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button color="black" raised> A2-06</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button color="black" raised> A2-07</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> A2-08</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> A2-09</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> A2-10</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> A2-11</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> A2-12</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-01</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-02</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-03</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-04</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-05</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-06</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-07</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-08</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-09</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-10</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-11</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="blue" raised> B2-12</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-01</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-02</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-03</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-04</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-05</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-06</f7-button>
                    </f7-col>
                </f7-row>

                <f7-row tag="p">
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-07</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-08</f7-button>
                    </f7-col>
                    <f7-col tag="span">
                        <f7-button fill color="red" raised> C2-09</f7-button>
                    </f7-col>
                </f7-row>

            </f7-block>
        </div>

        <div style="padding-bottom: 50px;"></div>

    </div>
</template>

<script>
    export default {
        components: {

        }
    };
</script>

<style scoped>

</style>