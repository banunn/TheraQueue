<template>
<transition>
<div class="notification is-info">
  <button @click="clostToast" class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit
</div>


</template>

<script>
export default {
    name: 'toast',
    methods: {
        close() {
            this.$store.dispatch('clostToast');
        }
    },
    computed: {
        open() {
            return this.$store.getters.toast.open;
        },
        content() {
            return this.$store.getters.toast.content;
        }
    }
}
</script>

<style>

.notification {
    position: fixed;
    top: 24px;
    right: 24px;
}
</style>
