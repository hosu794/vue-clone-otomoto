<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div class="flex items-center">
              <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                Men
              </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                Clothing
              </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li class="text-sm">
            <a
              href="#"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
            >
              {{ offer && offer.brand }} {{ offer && offer.model }}
            </a>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        <!-- <div
          class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block"
        >
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt="Two each of gray, white, and black shirts laying flat."
            class="w-full h-full object-center object-cover"
          />
        </div> -->
        <!-- <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              alt="Model wearing plain black basic tee."
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              alt="Model wearing plain gray basic tee."
              class="w-full h-full object-center object-cover"
            />
          </div>
        </div> -->
        <!-- <div
          class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4"
        >
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            alt="Model wearing plain white basic tee."
            class="w-full h-full object-center object-cover"
          />
        </div> -->
      </div>
      <swiper
        v-if="offer && offer.images.length > 0"
        class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(image, index) in offer.images">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="'http://localhost:1323/images/' + image.image_directory"
              alt="Model wearing plain black basic tee."
              class="w-full h-full object-center object-cover"
            /></div
        ></swiper-slide>
      </swiper>

      <!-- Product info -->
      <div
        class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ offer && offer.brand }} {{ offer && offer.model }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl text-gray-900">$ {{ offer && offer.price }}</p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center"></div>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-900 font-medium">
                Color: {{ offer && offer.color }} /
                {{ offer && offer.color_type }}
              </h3>
            </div>

            <!-- Sizes -->

            <button
              type="submit"
              class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact
            </button>

            <button
              type="submit"
              class="mt-10 w-full bg-white border border-black border-transparent rounded-md py-3 px-8 flex items-center justify-center text-black font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Phone
            </button>
          </form>
        </div>

        <div
          class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <span class="text-base text-gray-900">
                <h1>Body Type: {{ offer && offer.body_type }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Door Count: {{ offer && offer.DoorCount }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>
                  Condition:
                  {{ offer && offer.condition_car === 0 ? "New" : "Used" }}
                </h1> </span
              ><span class="text-base text-gray-900">
                <h1>Country: {{ offer && offer.country }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Driver Count: {{ offer && offer.drive }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>
                  First registration: {{ offer && offer.first_registration }}
                </h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>From: {{ offer && offer.from }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Fuel: {{ offer && offer.fuel }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Generation: {{ offer && offer.generation }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Leasing: {{ offer && offer.leasing ? "No" : "Yes" }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Mileage: {{ offer && offer.mileage }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>
                  Not crashed: {{ offer && offer.not_crashed ? "No" : "Yes" }}
                </h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Fuel: {{ offer && offer.fuel }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Phone: {{ offer && offer.phone }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Power: {{ offer && offer.power }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Type: {{ offer && offer.type }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Vat: {{ offer && offer.vat ? "No" : "Yes" }}</h1>
              </span>
              <span class="text-base text-gray-900">
                <h1>Vin: {{ offer && offer.vin }}</h1>
              </span>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>
            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray
                Basic Tees. Sign up for our subscription service and be the
                first to get new, exciting colors, like our upcoming
                &quot;Charcoal Gray&quot; limited release.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { offerService } from "../services/offer.service";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      offer: null,
    };
  },
  computed: {
    computedOffer() {
      return this.offer;
    },
  },
  mounted() {
    this.getOfferById();
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    getOfferById() {
      offerService
        .getOfferById(this.$route.params.id)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          this.offer = data;
        });
    },
  },
};
</script>
<style lang=""></style>
