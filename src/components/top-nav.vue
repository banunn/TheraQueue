<template>
  <nav class="top-nav">
      <button @click="login" title="therapist login" class="button"><i class="material-icons">person</i></button>
  </nav>
</template>

<script>
export default {
  name: "top-nav",
  props: {},
  methods: {
    login() {
      this.$store.dispatch('login');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-nav { 
  height: 80px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  position: relative;
  flex-basis: 80px;
  max-height: 80px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  justify-content: flex-end;
}
</style>
