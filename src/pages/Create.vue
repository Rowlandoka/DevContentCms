<template>
<div class="px-12 py-20 lg:px-24 bg-green-50">
  <h1 class=" w-full text-center mb-6 text-blue-500 font-semibold uppercase">Create a New Posts</h1>
  <div class="w-full h-full bg-white rounded shadow-lg p-8 m-4 md:mx-auto">
  <form>
    <div>
      <div>
        <div>
          <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="post-article">Post 
            Title:
          </label>
          <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" v-model="post.title" type="text" name="" id="">
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>
          <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="">Post Body:</label>
          <textarea v-model="post.body" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
        </div>
      </div>
    </div><br>
    <div class="-mx-3 md:flex mt-3">
      <div class="md:w-full px-3">
      <button class="md:w-full bg-blue-500 text-white text-lg font-bold py-2 px-4 border-b-4 hover:border-b-2 border-blue-500 hover:border-blue-100 rounded-full">Create Post</button>
      </div>
    </div> 
  </form>
  </div>
</div>
</template>

<script>
export default {
  data (){
    return {
      post:{}
    }
  },
  methods: {
    addPost(){
      console.log(this.post);
    }
  }
}
</script>