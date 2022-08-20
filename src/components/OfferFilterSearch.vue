<template>
  <div class="w-full shadow p-5 rounded-lg bg-white mb-10">
    <!-- <div class="relative">
      <div class="absolute flex items-center ml-2 h-full">
        <svg
          class="w-4 h-4 fill-current text-primary-gray-dark"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"
          ></path>
        </svg>
      </div>

      <input
        type="text"
        placeholder="Search by listing, location, bedroom number..."
        class="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
      />
    </div> -->

    <div class="flex items-center justify-between mt-4">
      <p class="font-medium">Filters</p>

      <button
        class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
      >
        Reset Filter
      </button>
    </div>

    <div>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        <div>
          <label for="type" class="">Type</label>
          <select
            v-model="type"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="sedan">sedan</option>
            <option value="combi">combi</option>
            <option value="coupe">coupe</option>
            <option value="suv">suv</option>
            <option value="crossover">crossover</option>
            <option value="sport">sport</option>
            <option value="minivan">minivan</option>
          </select>
        </div>

        <div>
          <label for="model" class="">Model</label>
          <input
            v-model="model"
            type="text"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <label for="brand">Brand</label>
          <input
            v-model="brand"
            placeholder="Brand"
            type="text"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <label for="generation">Generation</label>
          <select
            v-model="generation"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
            <option value="4">IV</option>
            <option value="5">V</option>
            <option value="6">VI</option>
            <option value="7">VII</option>
            <option value="8">VIII</option>
          </select>
        </div>

        <div>
          <label for="mileageFrom">Mileage from</label>
          <input
            v-model="mileageFrom"
            placeholder="Mileage from"
            type="number"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <label for="capacityFrom">Capacity from</label>
          <input
            v-model="capacityFrom"
            placeholder="Capacity from"
            type="number"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <label for="capacityTo">Capacity to</label>
          <input
            v-model="capacityTo"
            placeholder="Capacity to"
            type="number"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <label for="fuel">Fuel</label>
          <select
            v-model="fuel"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="*">Fuel</option>
            <option value="benzin">Benzin</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybrid</option>
            <option value="electric">Electric</option>
          </select>
        </div>

        <div>
          <label for="priceFrom">Price from</label>
          <input
            v-model="priceFrom"
            placeholder="Price from"
            type="number"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <label for="priceTo">Price to</label>
          <input
            v-model="priceTo"
            placeholder="Price to"
            type="number"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div>
          <label for="doorCount">Door count</label>
          <select
            v-model="doorCount"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
          </select>
        </div>

        <div>
          <label for="color">Color</label>
          <input
            v-model="color"
            placeholder="Color"
            type="text"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <button
          @click="searchFilter"
          class="px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router";

export default {
  data() {
    return {
      type: "",
      model: "",
      brand: "",
      generation: null,
      mileageFrom: null,
      mileageTo: null,
      capacityFrom: null,
      capacityTo: null,
      fuel: "",
      priceFrom: null,
      priceTo: null,
      doorCount: null,
      color: "",
    };
  },
  methods: {
    searchFilter() {
      let paramsObject = JSON.parse(JSON.stringify(this.$data));

      Object.entries(paramsObject).map((item) => {
        if (!item[1]) {
          delete paramsObject[item[0]];
        } else return item;
      });

      router.push({ path: "search", query: paramsObject });
    },
  },
};
</script>
<style></style>
