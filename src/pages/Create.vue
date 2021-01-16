<template>
<div class=" w-full px-12 py-20 lg:px-24 bg-green-50">
  <h1 class=" w-full text-center mb-6 text-blue-500 font-semibold uppercase">Create a New Posts</h1>
  <div class="w-4/5 h-full bg-white rounded shadow-lg p-8 m-4 md:mx-auto">
  <form @submit.prevent="appPost">
       <div>
          <label class="uppercase tracking-wide text-blue-500 text-xs font-bold mb-2" for="post-article"> 
            Title:
          </label>
          <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" v-model="post.title" type="text" name="" id="">
        </div>
        <div>
          <label class="uppercase tracking-wide text-blue-500 text-xs font-bold mb-2" for="name">Author:
          </label>
          <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" v-model="post.author" type="text" name="" id="">
        </div>
        <div>
          <label class="uppercase tracking-wide text-blue-500 text-xs font-bold mb-2" for="name">Description:
          </label>
          <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" v-model="post.description" type="text" name="" id="">
        </div>
      <div>
        <div>
          <label class="uppercase tracking-wide text-blue-500 text-xs font-bold mb-2" for="">Body:</label>
          <textarea v-model="post.body" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
        </div>
    </div><br>
    <div class="-mx-3 md:flex mt-3">
      <div class="md:w-full px-3">
        <button type="button" class="bg-blue-600 text-gray-200 font-bold text-lg rounded-full hover:bg-blue-500 px-6 py-3 focus:outline-none border-b-4 hover:border-b-2 hover:border-b-100" v-on:click="addPost">Create Post</button>
      </div>
    </div> 
  </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data (){
    return {
      post:{
        title: '',
        author: '',
        description: '',
        body: ''
      }
    }
  },
  methods: {
    addPost(){
      let postURL = 'http://localhost:4000/post/create';
      axios.post(postURL, this.post).then(() => {
        this.$router.push('/dashboard')
        this.post = {
          title: '',
          author: '',
          description: '',
          body: ''
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>