<template>
  <div class="request">
      <header class="page-head">
        <h3>Request Service</h3>
      </header>
      <div class="main">
          <div class="form">
              <div class="request-type columns"  v-if="view == 1">
                  <div class="type column">
                  <label for="RequestType">Request Type: </label>
                    <div class="select">
                    <select v-model="request.type">
                        <option selected default disabled value="">Select A Request Type</option>
                        <option v-for="t in requestTypes" :key="t.id" :value="t.id">{{t.name}}</option>
                    </select>
                    </div>
                  </div>
              </div>
              <div class="form-wrap">
              <div class="form-super" v-if="view == 1">
                  <div class="form-header">
                      Child Information: 
                  </div>
                  <div class="form-content">
                      <div class="form-group inline">
                          <label for="requestName">Name:</label>
                          <div class="inline">
                            <input v-model="request.student.firstName" class="input" type="text" name="requestNameFirst" id="" placeholder="First Name">
                            <input v-model="request.student.lastName" class="input" type="text" name="requestNameLast" id="" placeholder="Last Name">
                          </div>
                      </div>
                      <div class="two-col radio-group">
                      <div class="form-group inline">
                        <div>
                          <div class="control">
                            <header>Does The Child Already Have Related Services?</header>
                            <!-- Need Check boxes for OT / PT / SPEECH  -->
                            <!-- ///////////////////////////////////// -->
                            <!-- THIS IS IMPORTANT -->
                            <div class="labels">
                              <b-switch v-model="request.student.hasServices"
                                  true-value="Yes"
                                  false-value="No">
                                  {{ request.student.hasServices }}
                              </b-switch>
                            </div>
                        </div>
                        <div class="checkbox-wrap">
                             <section v-if="request.student.hasServices == 'Yes'">
                              <div class="block">
                                  <b-checkbox v-model="request.student.services"
                                      native-value="OT">
                                      OT
                                  </b-checkbox>
                                  <b-checkbox v-model="request.student.services"
                                      native-value="PT">
                                      PT
                                  </b-checkbox>
                                  <b-checkbox v-model="request.student.services"
                                      native-value="Speech">
                                      Speech
                                  </b-checkbox>
                              </div>
                             </section>
                        </div>
                            </div>
                      </div>
                      <div class="form-group inline">
                          <div class="control">
                            <header>Is The Child On Ed Plan?</header>
                            <div class="labels">
                              <b-switch v-model="request.student.onEdPlan"
                                  true-value="Yes"
                                  false-value="No">
                                  {{ request.student.onEdPlan }}
                              </b-switch>
                            </div>
                            </div>
                      </div>
                      </div>
                      <div class="columns dates">
                        <div class="column">
                          <header>
                            Has parent signed consent for motor testing?
                            <b-switch v-model="request.student.dates[0].status"
                                true-value="Yes"
                                false-value="No">
                                {{ request.student.dates[0].status }}
                            </b-switch>
                          </header>
                          <div class="inline-date" v-if="request.student.dates[0].status == 'Yes'">
                             <flat-pickr :config="flatConfig" v-model="request.student.dates[0].date" placeholder="Please Provide A Date"></flat-pickr>
                          </div>
                        </div>
                        <div class="column">
                          <header>Is there a parent meeting scheduled?
                            <b-switch v-model="request.student.dates[1].status"
                                true-value="Yes"
                                false-value="No">
                                {{ request.student.dates[1].status }}
                            </b-switch>
                          </header>
                          <div class="inline-date" v-if="request.student.dates[1].status == 'Yes'">
                             <flat-pickr :config="flatConfig" v-model="request.student.dates[1].date" placeholder="Please Provide A Date"></flat-pickr>
                          </div>  
                        </div>
                      </div>
                      <div class="form-group">
                          <label for="fh-campus">Campus:</label>
                            <div class="select">
                            <select v-model="request.student.location.campus">
                                <option selected default disabled value="">Select A Campus</option>
                                <option v-for="c in campus" :key="c.id" :value="c">{{c.name}}</option>
                            </select>
                            </div>
                      </div>
                      <div class="two-col">
                        <div class="form-group">
                            <label for="patientLocation">Location Description:</label>
                            <textarea v-model="request.student.location.description" class="textarea" placeholder="Room Number Or Location..."></textarea>
                        </div>
                        <div class="comment">
                            <label for="patientComments">Comments:</label>
                            <textarea v-model="request.student.comments" class="textarea" name="childComments" placeholder="Comments, Concerns or Issues..."></textarea>
                        </div>
                      </div>
                  </div>
                  <div class="foot">
                      <button class="button is-secondary" @click="view = 2">
                          <span>File Holder Information</span>
                          <i class="material-icons">arrow_right</i>
                      </button>
                  </div>
              </div>
              <div class="form-super" v-if="view == 2">
                  <div class="form-header">
                      File Holder Information:
                  </div>
                  <div class="form-content">
                      <div class="form-group inline">
                          <label for="requestorName">Name:</label>
                          <div class="inline">
                            <input v-model="request.fileHolder.firstName" class="input" type="text" name="" id="" placeholder="First Name">
                            <input v-model="request.fileHolder.lastName" class="input" type="text" name="" id="" placeholder="Last Name">
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="fh-campus">Campus:</label>
                            <div class="select">
                            <select v-model="request.fileHolder.location.campus">
                                <option selected default disabled value="">Select A Campus</option>
                                <option v-for="c in campus" :key="c.id" :value="c">{{c.name}}</option>
                            </select>
                            </div>
                      </div>
                      <div class="form-group">
                          <label for="Location">Location Description:</label>
                          <textarea v-model="request.fileHolder.comments" class="textarea" placeholder="Room Number Or Location..."></textarea>
                      </div>
                      <div class="foot between">
                        <button @click="view = 1" class="button">
                            <i class="material-icons">chevron_left</i>
                            <span>Back</span>
                        </button>
                        <button @click="submitRequest" class="button is-primary">
                            <i class="material-icons">save</i>
                            <span>Submit Request</span>
                        </button>
                      </div>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { campuses, requestTypes } from "@/data/data.js";
import db from "@/main.js";
import FileHolder from "@/models/models.js";
export default {
  data() {
    return {
      campus: campuses,
      requestTypes: requestTypes,
      view: 1,
      flatConfig: {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
      },
      request: {}
    };
  },
  methods: {
    reset() {
      this.request = {
        status: 1,
        type: "",
        student: {
          firstName: "",
          lastName: "",
          hasServices: "No",
          services: [],
          onEdPlan: "No",
          location: {
            campus: "",
            description: ""
          },
          comments: "",
          dates: [
            {
              type: "Motor Testing Consent",
              status: "No",
              date: ""
            },
            {
              type: "Scheduled Meeting", 
              status: "No",
              date: ""
            }
          ]
        },
        fileHolder: {
          firstName: "",
          lastName: "",
          location: {
            campus: "",
            description: ""
          }
        }
      };
      this.view = 1;
    },
    submitRequest() {
      const vm = this;
      let request = this.request;
      db
        .collection("requests")
        .add(request)
        .then(function() {
              vm.$toast.open({
                    message: 'Successfully Submitted Request!',
                    type: 'is-success'
              });
          vm.reset();
        });
    }
  },
  beforeRouteLeave(to, from, next) {
    this.reset();
    next();
  },
  created() {
    this.reset();
  }
};
</script>


<style lang="scss">
@import "../assets/styles/palette";
.form-super {
  margin-bottom: 24px;
  flex: 1;
}
.request {
  flex: 1;
  margin: 0px auto;
}
.page-head {
  font-size: 22px;
  border-bottom: 1px solid #d1c4e9;
  padding-bottom: 16px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h3 {
    margin: 0;
  }
}
.request-type {
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    margin-right: 24px;
  }
  .type {
    display: flex;
    align-items: center;
  }
}

.form-group {
  margin-bottom: 12px;
  .inline {
    display: flex;
    input {
      display: inline-flex;
      margin-right: 24px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.form-header {
  margin-bottom: 24px;
  font-weight: bold;
}

.form-wrap {
  display: flex;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
}

label {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
}

.foot {
  margin-top: 24px;
  padding: 24px 0px;
  border-top: 1px solid #d1c4e9;
  display: flex;
  justify-content: flex-end;
  &.between {
      justify-content: space-between;
  }
}

.btn-action {
  border: none;
  background: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  background: #4caf50;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.32);
  i {
    margin-right: 12px;
  }
}

.inline {
  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    header {
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 6px;
      display: block;
    }
    &:first-child {
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 12px;
      margin-bottom: 12px;
    }
  }
  .checkbox-wrap {
    background: #fff;
    padding: 6px;
    margin-top: -13px;
    position: relative;
    z-index: 1;
    display: flex;
    border-bottom: 1px solid #eaeaea;
  }
}

.date {
  display: flex;
  align-items: center;
}

.two-col {
    display: flex;
    > * {
        flex:1;
        margin-right: 24px;
        &:last-child {
            margin-right: 0;
        }
    }
}

.radio-group {
    padding-top: 12px;
    margin-top: 24px;
    border-top: 1px solid #eaeaea;
}

.icon-btn {
    display: inline-flex;
    border: none;
    background: none;
    background: $accent-color;
    align-items: center;
    padding: 0 12px;
    height: 36px;
    border-radius: 12px;
    color: #fff;
}

.dates {
  header {
          font-size: 13px;
      font-weight: 500;
      margin-bottom: 6px;
      display: flex; 
      justify-content: space-between;
  }
}
</style>

