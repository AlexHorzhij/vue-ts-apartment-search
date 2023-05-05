<template>
  <form class="form" @submit.prevent="submitForm">
    <SelectApp
      class="form__selector"
      :SelectorList="SelectorList"
      v-model="city"
    />
    <InputApp
      class="form__input"
      v-model:value="price"
      placeholder="Price, from:"
    />
    <ButtonApp type="submit">Find apartment</ButtonApp>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ISearchQuery } from "@/types/data";
import InputApp from "@/components/reusable/InputApp.vue";
import SelectApp from "@/components/reusable/SelectApp.vue";
import ButtonApp from "@/components/reusable/ButtonApp.vue";

export default defineComponent({
  name: "ApartmentFindForm",
  components: {
    InputApp,
    SelectApp,
    ButtonApp,
  },
  methods: {
    submitForm() {
      const data: ISearchQuery = {
        price: this.price,
        city: this.city,
      };
      this.$emit("apartmentSearch", data);
    },
  },
  data() {
    return {
      price: null,
      city: "",
      SelectorList: ["Dnipro", "Poltava", "Kharkiv"],
    };
  },
});
</script>

<style scoped lang="scss">
.form {
  display: flex;
  padding: 60px 0 39px 0;

  &__selector {
    width: 220px;
    margin-right: 31px;
  }
  &__input {
    width: 220px;
    margin-right: auto;
  }
}
</style>
