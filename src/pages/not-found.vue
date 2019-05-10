<template>
  <f7-page>
    <f7-navbar title="Not found" back-link="Back"></f7-navbar>
    <f7-block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </f7-block>

    <bottom-nav></bottom-nav>

  </f7-page>
</template>

<script>
  import bottomNav from '../components/BottomNav'
  export default {
      components: {
          bottomNav
      }
  };
</script>