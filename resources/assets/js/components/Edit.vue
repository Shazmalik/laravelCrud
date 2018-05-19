<template>
    <div>
        <h2>Edit user</h2>
        <form>
            <div class="form-group">
                <label for="first_name">First name:</label>
                <input type="text" id="first_name" class="form-control" v-model="user.first_name">
            </div>
            <div class="form-group">
                <label for="last_name">Last name:</label>
                <input type="text" id="last_name" class="form-control" v-model="user.last_name">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" class="form-control" v-model="user.email">
            </div>
            <button @click="saveUser" class="btn btn-success">Save user</button>
            <button @click="goToHome" class="btn btn-danger">Cancel</button>
        </form>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.userId = this.$route.params.id;
            axios.get(`/api/users/${this.userId}`).then((response) => {
                this.user = response.data;
            });
        },
        data(){
          return {
              user: {
                  first_name: '',
                  last_name: '',
                  email: ''
              },
              userId: 0
          }
        },
        methods: {
            goToHome(){
                this.$router.push('/');
            },
            saveUser(){
                let app = this;
                let newUser = this.user;
                axios.put(`/api/users/${this.userId}`, newUser).then((response) =>{
                    app.$router.replace('/');
                })
            }
        }
    }
</script>

<style scoped>

</style>