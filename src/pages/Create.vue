<template>
<div>
    <nav x-data="{show:false}" class="flex items-center justify-between flex-wrap bg-indigo-400 p-5">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
     <img class="h-9 w-9 mr-2" src="/img/logo.png" alt="DevContentCms Logo">
    <span class="font-semibold text-xl tracking-tight text-white">DevContentCms</span>
  </div>
  <div class="block md:hidden">
    <button @click="show=!show" class="flex items-center px-3 py-2 border rounded text-blue-900 border-blue-900 hover:text-blue-900 hover:border-blue-500 font-bold">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div @click.prevent="show = false" :class="{ 'block': show, 'hidden': !show }" class="w-full block flex-grow md:flex md:justify-end md:w-auto">
    <div>
          <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-black-500 hover:font-bold mt-4 md:mt-0">Home</a>
        <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-black-500 mt-4 md:mt-0">Blog</a>
        <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-black-500 mt-4 md:mt-0">Services</a>
        <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-black-500 mt-4 md:mt-0">Contact</a>
    </div>
     <a href="#" class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-600 hover:bg-blue-500 text-white md:rounded">Create Account</a>
  </div>
</nav>
<div class=" w-full px-12 py-10 lg:px-24 bg-green-50">
  <h1 class=" w-full text-center mb-6 mt-0 py-0 text-blue-500 font-semibold uppercase">Create a New Posts</h1>
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
      let postURL = 'https://devcontentcms.herokuapp.com/post/create';
      axios.post(postURL, this.post).then(() => {
        this.$router.push('/viewPost')
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