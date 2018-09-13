<template>
  <div class="note-input">
    <textarea v-model="note" class="textarea" placeholder="Add a note" @keyup.enter="addNote"></textarea>
  </div>
</template>

<script>
import {db} from '@/main.js'
export default {
  name: "note-input",
  props: {
      noteId: String
  },
  data() {
    return {
      note: ''
    }
  },
  methods: {
    addNote() {
      const vm = this;
      let noteObj = {
        author: '',
        date: new Date,
        note: vm.note
      }
      var dbRef = db.collection('requests').doc(vm.noteId).collection('notes');
      dbRef.add(noteObj).then(function( ){
        vm.note = ''
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.note-input { 
    padding: 12px 12px;
    box-sizing: border-box;
    max-width: calc(100% - 12px);
    font-size: 14px;
    textarea {
      max-height: 64px !important;
      min-height: 64px !important;
      transition: all .24s ease;
      &:focus {
        max-height: 225px !important;
        height: 225px;
      }
    }
}
</style>
