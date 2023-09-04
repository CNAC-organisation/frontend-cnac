<template>
  <header
    class="shadow flex items-center justify-between px-[10px] py-2 md:px-[50px]"
  >
    <div class="logo">
        <img src="~/assets/images/logo-finances.png" alt="logo" width="200" />
    </div>
    <div class="menu">
        <ul class="flex items-center">
            
            <li class="mr-4">
            <nuxt-link
                to="/"
                class="text-primary font-semibold hover:text-white hover:bg-primary p-2 rounded uppercase transition-all duration-300 ease-in-out"
                >Recettes</nuxt-link
            >
            </li>
            <li class="mr-4">
            <nuxt-link
                to="/contentieux"
                class="text-primary font-semibold hover:text-white hover:bg-primary p-2 rounded uppercase transition-all duration-300 ease-in-out"
                >Contentieux</nuxt-link
            >
            </li>
            
            
        </ul>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
