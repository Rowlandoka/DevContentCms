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
   <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="/img/logo.png" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Forgoten Your Password?
      </h2>
    </div>
    <form class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div class="mb-4">
          <label for="email-address" class="block text-gray-700 text-sm font-bold mb-2 mt-2 uppercase">
            Email address
          </label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
      </div>
      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
            Reset Password
        </button>
      </div>
    </form>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "indigo-navbar",
  data (){
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>