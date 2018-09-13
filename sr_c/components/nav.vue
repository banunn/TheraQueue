<template>
  <nav class="nav">
      <header class="brand">
          <router-link to="/">
            <img src="../assets/logo.svg" alt="">
          </router-link>
      </header>
      <aside class="action">
          <router-link to="/request" tag="button" class="btn">
              <i class="material-icons">add</i>
              Make A Request
          </router-link>
          <router-link to="/queue" class="nav-link">Manage Queue</router-link>
      </aside>
  </nav>
</template>

<script>
export default {
  name: 'Main_Navigation',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/palette';
.nav {
    flex:1;
    background: #fff;
    flex-basis: 250px;
    flex-shrink: 0;
    flex-grow: 0;
    max-width: 250px;
    padding: 0 0px;
    border-right: 1px solid #eaeaea;
    .brand {
        display: flex;
        align-items: center;
        height: 80px;
        padding: 0px 24px;
        border-bottom: 1px solid #eaeaea;
        img {
            max-width: 100%;
        }
    }

    .action {
        padding: 24px;
        .btn {
            display: flex;
            align-items: center;
            font-size: 1rem;
            width: 100%;
            border-radius: 25px;
            padding: 12px;
            background: #E040FB;
            border: none;
            color: #fff;
            box-shadow: 0px 2px 12px rgba(#000,.32);
            cursor: pointer;
            i {
                margin-right: .5rem;
            }
        }
    }
}

.nav-link {
    display: flex;
    padding: 24px 16px;
    font-weight: 600;
    color: $primary-text-color;
    &:hover {
        color: lighten($primary-text-color, 10%);
    }
}
</style>
