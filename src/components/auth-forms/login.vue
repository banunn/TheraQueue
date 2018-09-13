<template>
    <div v-if="!loggedInUser" class="form">
        <div class="field">
            <label class="label">email</label>
            <div class="control">
                <input v-model="user.email" class="input" type="email" placeholder="email@address.com">
            </div>
            <p class="help">enter your full email</p>
        </div>
        <div class="field">
            <label class="label">password</label>
            <div class="control">
                <input v-model="user.pass" class="input" type="password" placeholder="password">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button @click="login" class="button is-link">Log In</button>
            </div>
            <p class="help">{{msg}}</p>
        </div>
    </div>
    <div v-else>
        <p>You are logged in</p>
        <button @click="logOut" class="button">Log Out</button>
    </div>
</template>

<script>
import {auth} from '@/main.js';
export default {
    name: 'Login-Form',
    data() {
        return {
            msg: '',
            user: {
                email: '',
                pass: ''
            }
        }
    },
    methods: {
        login() {
            const u = this.user;
            const vm = this;
            auth.signInWithEmailAndPassword(u.email, u.pass).then(function( ){
              vm.$toast.open({
                    message: "Welcome! You've signed in!",
                    type: 'is-success'
              });
            }).catch(function(error) {
                vm.msg = error;
            });
        },
        reset() {
            this.user = {
                email: '',
                pass: ''               
            }
        },
        logOut() {
            const vm = this;
            auth.signOut().then(function() {
              vm.$toast.open({
                    message: "You are no longer logged in. ",
                    type: 'is-success'
              });
              vm.$router.push('/queue');
            }).catch(function(error) {
              vm.$toast.open({
                    message: "There was an error",
                    type: 'is-danger'
              });
            });
        }
    },
    computed: {
        loggedInUser( ){
            return this.$store.state.user;
        }
    }
}
</script>

<style lang="scss">

</style>
