<template>
  <table class="table-auto bg-blue-500 w-5/6 mx-auto mt-8">
      <thead>
        <tr>
          <th class="text-white text-center px-8 py-4 border-r-2 border-solid border-blue-800">Title</th>
          <th class="text-white text-center px-8 py-4 border-r-2 border-solid border-blue-800">Author</th>
          <th class="text-white text-center px-8 py-4 border-r-2 border-solid border-blue-800">Description</th>
          <th class="text-white text-center px-8 py-4">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in Posts" :key="post._id">
          <td>{{ post.title }}</td>
          <td>{{ post.author }}</td>
          <td>{{ post.description }}</td>
          <td>{{ post.body }}</td>
          <td>
            <router-link :to="{name: 'edit', params: {id:post._id}}">Edit</router-link>
            <button @click.prevent="deletePost(post._id)">Delete</button>
          </td>
        </tr>
      </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Posts: []
    }
  },
  created() {
    let postURL = 'https://devcontentcms.herokuapp.com/post';
    axios.get(postURL).then(res => {
      this.Posts = res.data;
    }).catch(error => {
      console.log(error)
    });
  },
  methods: {
    deletePost(id){
      let postURL = `https://devcontentcms.herokuapp.com/post/delete-post/${id}`;
      let indexOfArrayItem = this.Posts.findIndex(i => i._id === id);

      if(window.confirm("Do you really want to delete?")){
        axios.delete(postURL).then(() => {
          this.Posts.splice(indexOfArrayItem, 1);
        }).catch(error => {
          console.log(error)
        });
      }
    }
  }
}
</script>

