<template>
  <div class="request-page">
      <header class="tools">
              <div>
                  <button @click="$router.go(-1)" class="button is-info is-rounded"><i class="material-icons">arrow_back</i> Go Back</button>
              </div>
              <div>
                  <div class="select">
                    <select @change="changeStatus" v-if="statusTypes" v-model="status">
                        <option v-for="s in statusTypes" :key="s.id" :value="s.id">{{s.name}}</option>
                    </select>
                    </div>
                      <button @click="deleteRequest" title="Delete Request" class="button is-danger">
                        <span class="icon is-small">
                        <i class="material-icons">delete</i>
                        </span>
                    </button>

              </div>

      </header>
<div class="content">
    <div class="detail">
        <header class="detail-head">
            Student
        </header>
        <div v-if="student" class="detail-content">
            <div class="d-content">
                <h3>{{student.firstName + ' ' + student.lastName}}                 <span class="tag" :class="student.onEdPlan == 'Yes' ? 'is-success' : 'is-danger'">{{student.onEdPlan == 'Yes' ? 'In Ed Plan' : 'Not In Ed Plan'}}</span></h3>

                <widget :w-title="'Has Related Services: ' + student.hasServices">
                    <div class="tags">
                    <span class="tag" v-for="(s, index) in student.services" :key="index">{{s}}</span>   
                    </div>
                </widget>
                <widget w-title="Location">
                    <div>{{student.location.campus.name}}</div>
                    <div>{{student.location.description}}</div>
                </widget>
                <widget class="dates" w-title="Important Dates">
                    <ul>
                        <li v-for="(d, index) in student.dates" :key="index">
                            <span>{{d.type}}</span>:  <span>{{d.date ? d.date : 'No provided date'}}</span>
                        </li>
                    </ul>
                </widget>
            </div>

            <widget w-title="Comments">
                                <p>{{student.comments}}</p>
            </widget>
        </div>
    </div>
    <div v-if="holder" class="detail">
        <header class="detail-head">File-holder</header>
        <div class="detail-content">
            <div class="d-content">
            <h3>{{holder.firstName + ' ' + holder.lastName}}</h3>
                            <widget w-title="Location">
                    <div>{{holder.location.campus.name}}</div>
                    <div>{{holder.location.description}}</div>
                </widget>
            </div>
                        <widget w-title="Comments">
                                        <p>{{holder.comments}}</p>
            </widget>
        </div>
    </div>
</div>
<note-panel></note-panel>
  </div>
</template>

<script>
import { statusTypes } from "@/data/data.js";
import {db} from '@/main.js'
import notePanel from '@/components/notes/panel'
import widget from '@/components/widget'
export default {
  name: 'Request-Item-Page',
  data() {
    return {
        request: {},
        status: null,
        statusTypes: statusTypes
    }
  },
  components: {
      notePanel,
      widget
  },
  computed: {
      itemId() {
          return this.$route.params.id;
      },
      student() {
          return this.request.student;
      },
      holder() {
          return this.request.fileHolder;
      }
  },
  methods: {
      setInitialStatus() {
          const vm = this;
          let current = this.request.status;
          var theIndex = _.findIndex(vm.statusTypes, function(s) {
              return s.id == current;
          });
          console.log(theIndex);
          if(theIndex > -1 ) {
              this.status = vm.statusTypes[theIndex].id;
          }
      },
      changeStatus() {
          const vm = this;
          const dbRef = db.collection('requests').doc(vm.$route.params.id);
          dbRef.update({
              status: vm.status
          }).then(function(event) {
              console.log(event);
              console.log('Update Successful');
              vm.$toast.open({
                    message: 'Successfully Changed Status!',
                    type: 'is-success'
              })
          });
      },
      deleteRequest() {
          const vm = this;
          const docRef = db.collection('requests').doc(vm.$route.params.id);
          var c = confirm("You are about to delete this request! Would you like to proceed?");
          if(c == true) {
            docRef.delete().then(function() {
                console.log('deleted record');
                vm.$router.go(-1);
            });
          } else {
              // No Deletion occured;
          }
      },
      getData() {
          const vm = this;
          const docRef = db.collection('requests').doc(vm.$route.params.id);
            docRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    vm.request = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

      }
  },
  watch: {
      request(newVal, oldVal) {
          if(newVal) {
              console.log(newVal);
              this.setInitialStatus();
          }
      }
  },
  created() {
      this.getData();
  }
}
</script>

<style lang="scss" scoped>
.request-page {
width: 100%;
}
.d-content {
    h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.detail-head {
    background:  #512DA8;
    color: #fff;
    padding: 6px 12px;
    margin-bottom: 12px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
}

.tools {
    border-bottom: 2px solid purple;
    padding-bottom: 12px;
    margin-bottom: 24px;
    display: flex;
    > div {
        &:first-child {
            flex:1;
        }
        &:last-child {
            > * {
                margin-left: 12px;
            }
        }
    }
}

.content {
    display: flex;
    .detail {
        flex:1;
        padding-right: 12px;
        margin-right: 12px;
        border-right :1px solid #eaeaea;
        &:last-child {
            padding-right: 0px;
            margin-right:0;
            border-right: none;
        }
    }
}

.dates {
    ul {
        margin-top:0;
    }
}
</style>
