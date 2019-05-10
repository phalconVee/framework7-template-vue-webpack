<template>
  <f7-page>
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-link panel-open="left" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-link>
      </f7-nav-left>

      <f7-nav-title sliding>{{navbarTitle}}</f7-nav-title>

       <nav-search v-if="navbarTitle == 'Menu'"></nav-search>
    </f7-navbar>

    <f7-toolbar :position="isBottom ? 'bottom' : 'top'" tabbar labels>
      <f7-link tab-link="#home" tab-link-active text="Home">
          <f7-icon f7="home"></f7-icon>
      </f7-link>
      <f7-link tab-link="#table" text="Table">
          <f7-icon f7="collection"></f7-icon>
      </f7-link>
      <f7-link tab-link="#cart" text="Cart">
          <i class="material-icons">add_shopping_cart</i>
      </f7-link>
      <f7-link tab-link="#history" text="Order">
          <i class="material-icons">history</i>
      </f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="home" tab-active @tab:show="tabActived('home')">
        <menu-view></menu-view>
      </f7-tab>
      <f7-tab id="table" @tab:show="tabActived('table')">
        <table-view></table-view>
      </f7-tab>
      <f7-tab id="cart" @tab:show="tabActived('cart')">
        <cart-view></cart-view>
      </f7-tab>
       <f7-tab id="history" @tab:show="tabActived('history')">
         <order-history-view></order-history-view>
       </f7-tab>
    </f7-tabs>

  </f7-page>
</template>

<script>
    import NavSearch from '../components/NavSearch'
    import MenuView from './Menu'
    import TableView from './Table'
    import CartView from './Cart'
    import OrderHistoryView from './order-history'
    export default {
        data() {
            return {
                activedTab: 'home',
                isBottom: true,
            }
        },
        computed: {
            navbarTitle() {
                switch (this.activedTab) {
                    case 'home':
                        return 'Menu';
                    case 'table':
                        return 'Table';
                    case 'cart':
                        return 'Cart';
                    case 'history':
                        return 'History';
                }
            }
        },
        methods: {
            tabActived(tab) {
                this.activedTab = tab
            },
        },
        components: {
            NavSearch,
            MenuView,
            TableView,
            CartView,
            OrderHistoryView,
        }
    }
</script>