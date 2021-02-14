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

