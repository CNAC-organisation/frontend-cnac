import { defineStore } from "pinia";
import type { Recettes } from "~/types/recettes";
import { getValueMonth } from "~/utils";

export const useRecettesStore = defineStore("recettes", () => {
  const recettes = ref<Recettes[] | unknown>([]);
  const loading = ref(false);
  const error = ref(null);

  const { find } = useStrapi();

  const fetchRecettes = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await find("recettes");
      recettes.value = response.data?.map((recette: any) => {
        return {
          ...recette,
          moisId: getValueMonth(recette.mois),
        };
      });
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const getRecettes2021 = computed(() => {
    return recettes.value?.filter((recette: Recettes) => {
      return recette.annee === "2021";
    });
  });

  const getRecettes2022 = computed(() => {
    return recettes.value?.filter((recette: Recettes) => {
      return recette.annee === "2022";
    });
  });

  const getRecettes2023 = computed(() => {
    return recettes.value?.filter((recette: Recettes) => {
      return recette.annee === "2023";
    });
  });

  const regies = computed(() => {
    const regies = recettes.value?.map((recette: Recettes) => {
      return recette.regie;
    });
    return [...new Set(regies)];
  });

  const annees = computed(() => {
    const annees = recettes.value?.map((recette: Recettes) => {
      return recette.annee;
    });
    return [...new Set(annees)];
  });

  return {
    recettes,
    loading,
    error,
    getRecettes2021,
    getRecettes2022,
    getRecettes2023,
    regies,
    annees,
    fetchRecettes,
  };
});
