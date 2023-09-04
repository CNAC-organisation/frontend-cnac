<template>
  <div class="login flex justify-center">
    <form class="w-[100%] md:w-[80%] lg:w-[60%]" @submit.prevent="submit">
      <div class="mb-4">
        <label for="email" class="text-primary text-md font-bold mb-4"
          >Email</label
        >
        <br />
        <input
          type="email"
          name="email"
          id="email"
          v-model="form.identifier"
          class="form-input w-full rounded"
          placeholder="Email"
        />
        <p v-if="errors.identifier" class="text-red text-sm mt-2">
          {{ errors.identifier }}
        </p>
      </div>
      <div class="mb-4">
        <label for="password" class="text-primary text-md font-bold mb-4"
          >Mot de passe</label
        >
        <br />
        <input
          type="password"
          name="password"
          id="password"
          v-model="form.password"
          class="form-input w-full rounded"
          placeholder="Mot de passe"
        />
        <p v-if="errors.password" class="text-red text-sm mt-2">
          {{ errors.password }}
        </p>
      </div>
      <div class="">
        <input
          type="submit"
          :value="loading ? 'connnexion en cours...' : 'Se connecter'"
          class="bg-primary focus:border-0 focus-visible:border-0 focus-within:border-0 form-input text-white rounded w-full uppercase font-semibold hover:bg-yellow hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
        />
        <p v-if="errorMessage" class="text-red text-sm mt-2">
          {{  errorMessage}}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();

const { loading, error } = storeToRefs(authStore);

const form = ref({
  identifier: "",
  password: "",
});

const errorMessage = ref("");

const errors = ref({
  identifier: "",
  password: "",
});

const emptyForm = () => {
  if (form.value.identifier === "") {
    errors.value.identifier = "ce champ est obligatoire";
  } else {
    errors.value.identifier = "";
  }
  if (form.value.password === "") {
    errors.value.password = "ce champ est obligatoire";
  } else {
    errors.value.password = "";
  }
  if (form.value.identifier === "" || form.value.password === "") {
    return false;
  } else {
    return true;
  }
};

const validEmail = () => {
  const email = form.value.identifier;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regex.test(email)) {
    errors.value.identifier = "email invalide";
    return false;
  } else {
    errors.value.identifier = "";
    return true;
  }
};

watchEffect(() => {
  if (error.value) {
    errorMessage.value = "Email ou Mot de passe incorrect";
  } else {
    errorMessage.value = "";
  }
});

const submit = async () => {
  if (!emptyForm()) {
    return;
  }
  if (!validEmail()) {
    return;
  }

  await authStore.loginUser(form.value.identifier, form.value.password);
  console.log(errorMessage.value);
};
</script>
