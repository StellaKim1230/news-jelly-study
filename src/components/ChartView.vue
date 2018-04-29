<template>
  <div class="ChartView">
    <side-bar></side-bar>
    <div class="ChartView__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from 'components/SideBar'
import Chart from 'components/Chart'

export default {
  name: 'ChartView',
  components: {
    'side-bar': SideBar,
  }
}
</script>

<style lang="scss" scoped>
  .ChartView {
    clear: both;
  }

  .ChartView__content {
    float: right;
    width: 85%;
  }
</style>

