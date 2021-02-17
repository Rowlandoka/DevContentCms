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
        <svg viewBox="0 0 100 80" class="w-6 h-6 fill-current">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
     </button>
   </div>
   <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
      <ul class="flex flex-col lg:flex-row list-none ml-auto">
        <li class="nav-item">
           <a class="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75" href="#pablo">
             <span class="ml-2">Home</span>
            </a>
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
  <div class="bg-white rounded-lg shadow-lg py-6">
     <div class="block overflow-x-auto mx-6">
       <table class="w-full text-left rounded-lg">
         <thead>
           <tr class="text-black border border-b-0 text-center">
             <th class="px-4 py-3">#</th>
             <th class="px-4 py-3">Title</th>
             <th class="px-4 py-3">Author</th>
             <th class="px-4 py-3">Description</th>
             <th class="px-4 py-3">Body</th>
             <th class="px-4 py-3">Action</th>
           </tr>
         </thead>
          <tbody>
            <tr v-for="(post, i) in Posts" :key="post._id" class="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0">
              <td class="px-4 py-4">{{ i + 1 }}</td>
              <td class="px-4 py-4">{{ post.title }}</td>
              <td class="px-4 py-4">{{ post.author }}</td>
              <td class="px-4 py-4">{{ post.description }}</td>
              <td class="px-3 py-4">{{ post.body }}</td>
                <td class="text-center py-4 m-2 flex">
                  <router-link :to="{name: 'edit', params: {id:post._id}}"><span class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 mr-2 focus:outline-none">edit</span>
                  </router-link>
                  <button @click.prevent="deletePost(post._id)"><span class="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-4 py-2 focus:outline-none">delete</span></button>
               </td>
            </tr>
          </tbody>
       </table>
     </div>
   </div>
</div>
</template>

<script>
import axios from "axios";

export default {
   name: "indigo-navbar",
   data() {
    return {
      showMenu: false,
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

