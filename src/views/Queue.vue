<template>
  <div class="queue-page">
    <div>
      <header>New Requests</header>
      <queue-list :items="newItems"></queue-list>
    </div>
    <div>
      <header>In Progress</header>
      <queue-list :items="inProgressItems"></queue-list>
    </div>
    <div>
      <header>Completed Requests</header>
      <queue-list :items="completedItems"></queue-list>
    </div>
  </div>
</template>

<script>
import {db} from '@/main.js'
import queueList from '@/components/list/list'
export default {
  name: 'Queue-Page',
  data() {
    return {
      requests: [],
      newItems:[],
      inProgressItems: [],
      completedItems: []
    }
  },
  components: {
    queueList
  },
  firestore: {
        newItems: db.collection('requests').where("status", "==", 1),
        inProgressItems: db.collection('requests').where("status", "==", 2),
        completedItems: db.collection('requests').where("status", "==", 3)
  }
}
</script>

<style lang="scss" scoped>
.queue-page {
  width: 100%;
  display: flex;
  > div {
    flex:1;
    margin-right: 12px;
    padding-right: 12px;
    border-right: 1px solid #eaeaea;
    &:last-child {
      margin-right: 0;
      border-right: 0;
      padding-right: 0;
    }
    header {
      font-size: 1em;
      font-weight: 500;
      border-bottom: 1px solid #eaeaea;
      margin-bottom: 12px;
      padding-bottom: 12px;
    }
  }
}
</style>

