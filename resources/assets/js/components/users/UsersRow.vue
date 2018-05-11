<template>
	<tr>
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.first_name }}</td>
      <td>{{ user.last_name }}</td>
      <td>{{ user.email }}</td>
      <td>
          <router-link :to="editUserUrl" class="btn btn-warning text-white">Edit</router-link>
      	<button @click='deleteUser' type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
</template>

<script>
	export default {
		props: {
			user: {
				type: Object
			},
            index: Number
		},
        computed: {
		  editUserUrl(){
		      return `/user/${this.user.id}`;
          }
        },
        methods: {
		    deleteUser(){
                axios.delete(`/api/users/${this.user.id}`).then((resp) =>{
                    this.$emit('userRemoved', this.index);
                }).catch((resp) => {
                    console.log("An error has ocurred");
                });
            }
        }
	}
</script>