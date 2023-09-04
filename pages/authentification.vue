<template>
  <div class="auth grid grid-cols-1 md:grid-cols-2">
    <div
      class="auth__illustration hidden bg-primary h-screen md:flex flex-col justify-center items-center  px-[20px] md:px-[50px]"
    >
      <div class="logo mb-4">
       
      </div>
      <h1 class="text-white text-4xl uppercase text-center font-bold mb-8">
        Portail de Gestion des Athlètes
      </h1>
      <p class="text-white uppercase text-lg font-bold">
       Comité National Antidopage Congolais (CNAC)
      </p>
    </div>
    <div class="auth__form h-screen flex flex-col justify-center px-[20px] md:px-[50px]">
      <div class="logo  mb-4 flex justify-center">
        <img src="~/assets/images/logo_cnac.png" alt="logo" width="200" />
      </div>
      <h1 class="text-primary text-4xl text-center font-semimediumbold mb-8">
        Connexion
      </h1>

      <FormLogin />
    </div>
  </div>
</template>

<script setup lang="ts">



</script>
