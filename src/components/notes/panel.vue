<template>
  <nav class="note-panel" :class="{'active': open}">
      <div class="panel-head" @click="open = !open"><span>Notes</span> <i class="material-icons">{{open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</i></div>
      <div class="content" v-if="open">
      <note-input :note-id="noteId"></note-input>
      <note-list :notes="notes" :note-id="noteId"></note-list>
      </div>
  </nav>
</template>

<script>
import noteInput from './input';
import noteList from './list'
import {db} from '@/main.js'
export default {
  name: "note-panel",
  props: {},
  components: {
      noteInput,
      noteList
  },
  computed: {
      noteId() {
          return this.$route.params.id;
      }
  },
  data() {
      return {
          open: false,
          notes: []
      }
  },
  firestore() {
    const vm = this;
    return {
        notes: db.collection('requests').doc(vm.noteId).collection('notes').orderBy('date', 'desc'), 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.note-panel { 
    font-size: 14px;
    position: fixed;
    bottom: 0;
    left:250px;
    right:0;
    background: #fff;
    transform: translateY(calc(100% - 36px));
    transition: transform .4s ease-out;
    height: 0px;
    overflow: 56px;
    &.active {
        transform: translateY(0);
            height: calc(100vh - 160px);
    }
    .panel-head {
        font-size: 16px;
            background-color: #00d1b2;
    border-color: transparent;
    color: #fff;
    padding: 6px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #00c4a7;
    border-color: transparent;
    color: #fff;
    }
    &:active {
            background-color: #00b89c;
    border-color: transparent;
    color: #fff;
    }
    }
}
</style>
