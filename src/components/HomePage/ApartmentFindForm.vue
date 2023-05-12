<template>
  <FormApp class="form" @submit.prevent="submitForm">
    <SelectApp
      class="form__selector"
      :SelectorList="SelectorList"
      v-model="city"
    />
    <InputApp
      type="number"
      class="form__input"
      v-model:value="price"
      messageError="Pleas enter correct value"
      placeholder="Price, from:"
      :validationRules="rules"
    />
    <ButtonApp type="submit">Find apartment</ButtonApp>
  </FormApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ISearchQuery } from "@/types/data";
import InputApp from "@/components/reusable/InputApp.vue";
import SelectApp from "@/components/reusable/SelectApp.vue";
import ButtonApp from "@/components/reusable/ButtonApp.vue";
import { notEmpty, symbolsLimit } from "@/utils/validationRules";
import FormApp from "@/components/form/index.vue";

export default defineComponent({
  name: "ApartmentFindForm",
  components: {
    InputApp,
    SelectApp,
    ButtonApp,
    FormApp,
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
      rules: [notEmpty, symbolsLimit(10)],
      price: null,
      city: "",
      SelectorList: [
        "Dnipro",
        "Poltava",
        "Kharkiv",
        "Mariupol",
        "Odesa",
        "Kyiv",
        "Kherson",
        "Chasity",
        "Lviv",
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.form {
  display: flex;
  width: 100%;
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
