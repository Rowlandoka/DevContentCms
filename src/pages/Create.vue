<template>
<div>
 <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3">
 <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
   <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
     <div class="flex items-center flex-shrink-0 text-white mr-6">
     <img class="h-9 w-9 mr-2" src="/img/logo.png" alt="DevContentCms Logo">
    <span class="font-semibold text-sm tracking-tight text-white leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap">DevContentCms</span>
  </div>
     <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:text-black" type="button" v-on:click="toggleNavbar()">
        <svg class="h-5 w-5" v-bind:style="{ fill: 'black' }" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        <!-- <svg viewBox="0 0 100 80" class="w-6 h-6 fill-current">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg> -->
     </button>
   </div>
   <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
      <ul class="flex flex-col lg:flex-row list-none ml-auto">
        <li class="nav-item">
           <router-link class="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75" to="/home">
             <span class="ml-2">Home</span>
            </router-link>
        </li>
         <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75" href="#pablo">
             <span class="ml-2">Blog</span>
            </a>
          </li>
            <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <span class="ml-2">Services</span>
            </a>
          </li>
            <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75" href="#pablo">
             <span class="ml-2">Contact</span>
            </a>
          </li>
      </ul>
   </div>
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
   name: "indigo-navbar",
  data (){
    return {
      showMenu: false,
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
    },
     toggleNavbar: function(){
      this.showMenu = !this.showMenu;
       }
  }
}
</script>