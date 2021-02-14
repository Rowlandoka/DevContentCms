<template>
<body class="bg-gray-200">
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
          <router-link to="/" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-black-500 hover:font-bold mt-4 md:mt-0">Home</router-link>
        <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-black-500 mt-4 md:mt-0">Blog</a>
        <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-black-500 mt-4 md:mt-0">Services</a>
        <a href="#" class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-black-500 mt-4 md:mt-0">Contact</a>
    </div>
     <router-link to="/signup" class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-600 hover:bg-blue-500 text-white md:rounded">Create Account</router-link>
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
</body>
</template>

<script>
export default {
  data (){
    return {

    }
  }
}
</script>