import Login from './pages/Auth/login.vue';
import Menu from './pages/Menu.vue';
import Table from './pages/Table.vue';
import Cart from './pages/Cart.vue';
import Bills from './pages/Bills.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';
import PanelLeftPage from './pages/panel-left.vue';
import Form from './pages/Form-pay.vue';
import Payment from './pages/Payment.vue';
import ItemDetails from './pages/item-details.vue';
import OrderList from './pages/order-list.vue';
import OrderHistory from './pages/order-history.vue';
import About from './pages/about.vue';
import Notifications from './pages/Notifications.vue';
import BottomNav from './components/BottomNav.vue';
import HomePage from './pages/home.vue';

export default [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/about/',
    component: About,
  },
  {
    path: '/table/',
    component: Table,
  },
  {
    path: '/cart/',
    component: Cart,
  },
  {
    path: '/order-history/',
    component: OrderHistory,
  },
  {
    path: '/bills/',
    component: Bills,
  },
  {
    path: '/customer-pay/',
    component: Form,
  },
  {
    path: '/payment/',
    component: Payment,
  },
  {
    path: '/order-list/',
    component: OrderList,
  },
  {
    path: '/notifications/',
    component: Notifications,
  },
  {
    path: '/item-detail/:item_id',
    component: ItemDetails,
  },
  {
    path: '/xxx',
    component: BottomNav,
    tabs: [
        {
          path: '/',
          id: 'tab1',
          component: Menu
        },
        {
          path: '/table/',
          id: 'tab2',
          component: Table
        },
        {
          path: '/cart/',
          id: 'tab3',
          component: Cart
        },
        {
          path: '/bills/',
          id: 'tab4',
          component: Bills
        }
    ]
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/not-found',
    component: NotFoundPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
