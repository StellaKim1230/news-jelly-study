<template>
  <div class="MainView">
    <gnb />
    <router-view />
  </div>
</template>

<script>
import GNB from './GNB'
import SideBar from './SideBar'

export default {
  name: 'MainView',
  components: {
    gnb: GNB,
    sidebar: SideBar,
  }
}
</script>
