<template>
  <div id="app">
    <side-nav></side-nav>
    <div class="app-wrap">
    <top-nav></top-nav>
    <div class="app-content">
        <router-view/>
    </div>
    </div>
  </div>
</template>

<script>
import sideNav from '@/components/nav'
import topNav from '@/components/top-nav'
export default {
  name: 'app',
  components: {
      sideNav,
      topNav
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin:0;
  padding:0;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
}

#app {
    display: flex;
}

.app-wrap {
    display: flex;
    flex-direction: column;
    flex:1;
}

.app-content {
    display: flex;
    flex:1;
    padding: 24px;
    height: calc(100vh - 80px);
}
</style>
