<template>
  <div :class="`SideBar ${isTopOfView ? '' : 'SideBar--top'}`">
    <router-link
      class="SideBar__link"
      :to="'/chart/accident'"
    >
      accident
    </router-link>
    <router-link
      class="SideBar__link"
      :to="'/chart/aircondition'"
    >
      aircondition
    </router-link>
  </div>
</template>

<script>
const data = {
  isTopOfView: true,
}
export default {
  name: 'SideBar',
  data: () => data,
  methods: {
    changeSidebar: function() {
      data.isTopOfView = window.scrollY < 60
    }
  },
  mounted() {
    window.addEventListener('scroll', this.changeSidebar)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.changeSidebar)
  }
}
</script>

<style lang="scss" scoped>
  .SideBar {
    background-color: #222222;
    display: inline-block;
    position: fixed;
    left: 0;
    height: 100%;
    min-width: 210px;
    width: 15%;
    padding: 3rem 2rem;
    z-index: 1;

    &--top {
      top: 0;
      padding-top: 6rem;
    }
  }

  .SideBar__link {
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    display: block;
    font-size: 1.6rem;
    margin-top: 1.5rem;
    text-decoration: none;
    width: 100%;

    &:hover {
      background-color: white;
      color: #222222;
    }
  }

  .router-link-active {
    background-color: white;
    color: #222222;
  }
</style>

