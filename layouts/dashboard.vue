<template>
  <div>
    <main class="min-h-screen relative flex">
      <aside
        class="bg-primary md:w-[15%] border-r border-gray-200 flex flex-col"
      >
        <div class="logo bg-white flex justify-center">
          <img src="~/assets/images/logo_cnac.png" alt="logo" width="80" />
        </div>
        <div class="">
          <ul class="flex flex-col items-center gap-2 mt-6">
            <li v-for="(item, index) in menu" :key="index" class="mb-5">
              <nuxt-link
                :to="item.link"
                class="text-primary bg-white px-4 py-1 text-sm rounded uppercase font-medium flex items-center gap-3"
              >
                <Icon :name="item.icon" size="2em" />
                {{ item.label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="logout absolute bottom-0 flex justify-center">
          <button
            class="text-primary bg-white px-4 py-1 text-sm rounded uppercase font-medium flex items-center gap-3"
          >
            Deconnecion
          </button>
        </div>
      </aside>
      <main class="w-full">
        <div
          class=" px-[20px] md:px-[30px] py-[50px] md:px-[70px]"
        >
          <slot />
        </div>
      </main>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const menu = ref([
  {
    label: "Tableau de bord",
    link: "/",
    icon: "tabler:home",
  },
  {
    label: "athlètes",
    link: "/athletes",
    icon: "icon-park-outline:sport",
  },
  {
    label: "Féderations",
    link: "/federations",
    icon: "la:trade-federation",
  },
  {
    label: "Disciplines",
    link: "/disciplines",
    icon: "simple-icons:discogs",
  },
  {
    label: "équipes",
    link: "/equipes",
    icon: "fluent:people-team-48-filled",
  },
]);
</script>
