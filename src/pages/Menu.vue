<template>
    <f7-page>

        <!-- List Items -->
        <f7-list media-list>
            <f7-list-item
                    link="/item-detail/25/"
                    title="Gulder (60cl)"
                    after="₦350"
                    subtitle="Lager"
                    text="Big bottle gulder available in 60cl package."
            >
                <img slot="media" class="lazy lazy-fadeIn demo-lazy" :src="s3.g_drive + '1DJ5R_d28F5Ji6Zub1T5yRfo4h_7qENe5'" width="80" />
            </f7-list-item>

            <f7-list-item
                    link="/item-detail/25/"
                    title="Star (60cl)"
                    after="₦300"
                    subtitle="Lager"
                    text="Star lager beer available in all warehouses"
            >
                <img slot="media" class="lazy lazy-fadeIn demo-lazy" :src="s3.g_drive + '1uX0gVUoI7zu-ungvukjsEQxiAGC28nMB'" width="80" />
            </f7-list-item>

            <f7-list-item
                    link="/item-detail/25/"
                    title="Goldberg (60cl)"
                    after="₦200"
                    subtitle="Lager"
                    text="Goldberg lager beer available in all warehouses"
            >
                <img slot="media" class="lazy lazy-fadeIn demo-lazy" :src="s3.g_drive + '1GEkMTwhWSv21cUKnusgr3aGPCnfZBvFz'" width="80" />
            </f7-list-item>

            <f7-list-item
                    link="/item-detail/25/"
                    title="Origin (60cl)"
                    after="₦250"
                    subtitle="Ready-to-drink"
                    text="Original Origin herbal drink available in all warehouses"
            >
                <img slot="media" class="lazy lazy-fadeIn demo-lazy" :src="s3.g_drive + '1Hh2Ha5Q-W_u5fnS7vrMylidOBaNycCr8'" width="80" />
            </f7-list-item>

            <f7-list-item
                    link="/item-detail/25/"
                    title="Heineken (60cl)"
                    after="₦400"
                    subtitle="Lager"
                    text="Heineken for the smooth gentle man: drink available in all warehouses"
            >
                <img slot="media" class="lazy lazy-fadeIn demo-lazy" :src="s3.g_drive + '1Qz1BCz_ns3_huUtHecrV75quKeuGreIe'" width="80" />
            </f7-list-item>

            <f7-list-item
                    link="/item-detail/25/"
                    title="Life (60cl)"
                    after="₦300"
                    subtitle="Lager"
                    text="Life lager beer drink available in all warehouses"
            >
                <img slot="media" class="lazy lazy-fadeIn demo-lazy" :src="s3.g_drive + '1DyhIY5630r3osCR8mdiP9cUDg8iz_i4F'" width="80" />
            </f7-list-item>

            <f7-list-item
                    link="/item-detail/25/"
                    title="Guinness Extra Stout"
                    after="₦300"
                    subtitle="Stout"
                    text="Guinness extra stout available in all warehouses"
            >
                <img slot="media" class="lazy lazy-fadeIn demo-lazy" :src="s3.g_drive + '1N9R5-4plpGES2e840FhKidSoOYr8JxW4'" width="80" />
            </f7-list-item>

        </f7-list>
        <!-- End List Items -->

    </f7-page>
</template>

<script>
    import g_drive from '../helpers/constants'

    export default {
        components: {
            //bottomNav
        },
        data() {
            return {
                s3: g_drive,
                popupOpened: false,
                img1: 'https://drive.google.com/uc?id=1DJ5R_d28F5Ji6Zub1T5yRfo4h_7qENe5'
            }
        },
    };
</script>
