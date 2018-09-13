<template>
    <div class="request-list">
        <list-item v-for="(i, index) in items" :key="index" :request="i"></list-item>  
    </div>
</template>

<script>
import listItem from './item'
export default {
    name: 'request-list',
    components: {
        listItem
    },
    props: {
        items: Array
    }
}
</script>

<style lang="scss" scoped>

</style>
