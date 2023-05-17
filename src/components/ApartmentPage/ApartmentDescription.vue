<template>
  <div class="apartment">
    <div class="apartment-title__container">
      <h2 class="apartment-title">{{ title }}</h2>
      <StarRating :rating="rating" />
    </div>
    <img class="apartment__image" :src="imgUrl" alt="apartment image" />
    <p class="apartment__description">{{ description }}</p>
    <ButtonApp class="apartment__btn" @click="reserve">Reserve</ButtonApp>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import StarRating from "@/components/reusable/StarRating.vue";
import ButtonApp from "@/components/reusable/ButtonApp.vue";
import API from "@/api/apartment";
import { mapState } from "vuex";

export default defineComponent({
  name: "ApartmentDescription",
  components: {
    StarRating,
    ButtonApp,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  props: {
    imgUrl: {
      type: String as PropType<string>,
      default: "",
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
    rating: {
      type: Number as PropType<number>,
      default: 0,
    },
    price: {
      type: Number as PropType<number>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
    // idApartm() {
    //   if ((this.$route.params.id = typeof "string")) {
    //     console.log("this.$route.params.id: ", this.$route.params.id);
    //     return this.$route.params.id;
    //   }
    //   return "";
    // },
  },
  methods: {
    async reserve() {
      // await API.getReserve();
      console.log(this.id);
      console.log("this.$route.params.id", this.$route.params.id);
      const id = this.$route.params.id;

      const data = await API.reserveApartment("this.$route.params.id");
      console.log("data: ", data);
    },
  },
});
</script>

<style scoped lang="scss">
.apartment {
  width: 730px;
  display: flex;
  flex-direction: column;

  &__image {
    max-width: 730px;
    max-height: 410px;
    flex-grow: 1;
    margin-bottom: 30px;
  }

  &__description {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: start;
    margin-bottom: 24px;
  }

  &__btn {
    align-self: center;
  }
}
.apartment-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-right: 20px;

  &__container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
