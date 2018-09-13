<template>
  <div class="note-list">
      <note-item v-for="(n, index) in notes" :key="index" :note="n"></note-item>
  </div>
</template>

<script>
import noteItem from './note'
export default {
  name: "note-list",
  props: {
    notes: Array,
    noteId: String
  },
  components: {
      noteItem
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.note-list { 
    padding: 24px 12px;
    display: flex;
    flex-direction: column;
    flex:1;
    overflow-y: auto;
    max-height: 550px;
    flex-wrap: nowrap;
    flex-shrink: 0;
}
</style>
