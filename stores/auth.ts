import { defineStore } from "pinia";
import type { StrapiUser } from "@nuxtjs/strapi/dist/runtime/types";

export const useAuthStore = defineStore("auth", () => {
  const {
    login,
    logout,
    forgotPassword,
    resetPassword,
    changePassword,
    fetchUser,
  } = useStrapiAuth();

  const router = useRouter();

  const loading = ref(false);
  const error = ref(null);
  const user = ref<StrapiUser | null>(null);

  const loginUser = async (identifier: string, password: string) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await login({ identifier, password });
      router.push("/");
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const logoutUser = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await logout();
      router.push("/authentification");
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const forgotPasswordUser = async (email: string) => {
    try {
      const response = await forgotPassword({ email });
      router.push("/mot-de-passe-oublie");
    } catch (err: any) {
      error.value = err;
    }
  };

  const resetPasswordUser = async (
    code: string,
    password: string,
    passwordConfirmation: string
  ) => {
    try {
      const response = await resetPassword({
        code,
        password,
        passwordConfirmation,
      });
    } catch (err: any) {
      error.value = err;
    }
  };

  const changePasswordUser = async (
    currentPassword: string,
    password: string,
    passwordConfirmation: string
  ) => {
    try {
      const response = await changePassword({
        currentPassword,
        password,
        passwordConfirmation,
      });
    } catch (err: any) {
      error.value = err;
    }
  };

  return {
    loading,
    error,
    user,
    loginUser,
    logoutUser,
    forgotPasswordUser,
    resetPasswordUser,
    changePasswordUser,
  };
});
