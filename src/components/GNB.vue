<template>
  <div class="GNB">
    <router-link
      class="GNB__link"
      :to="'/home'"
    >
      home
    </router-link>
    <router-link
      class="GNB__link"
      :to="'/chart/accident'"
    >
      chart
    </router-link>
  </div>
</template>

<script>
  const data = {
    pathname: location.pathname.split('/')[1] 
  }
  export default {
    name: 'GNB',
    data: () => data,
  }
</script>

<style lang="scss" scoped>
  .GNB {
    background-color: #222222;
    border-bottom: 1px solid white;
    display: block;
    padding: 1rem;
  }

  .GNB__link {
    color: white;
    border: 1px solid white;
    border-radius: 3px;
    display: inline-block;
    font-size: 1.5rem;
    vertical-align: top;
    text-decoration: none;
    width: 9rem;

    &:hover {
      color: #222222;
      background-color: white;
    }

    &:first-child {
      margin-right: 1.5rem
    }
  }

  .router-link-active {
    background-color: white;
    color: #222222;
  }
</style>

