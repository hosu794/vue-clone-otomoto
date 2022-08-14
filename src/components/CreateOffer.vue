<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create offer
        </h2>
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6" action="#">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="type" class="">Type</label>
            <input
              id="type"
              name="type"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Type"
              v-model="type"
            />
            <div v-show="submitted && !type">Type is required</div>
          </div>
          <div>
            <label for="from" class="">From</label>
            <input
              id="email-address"
              name="from"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="From"
              v-model="from"
            />
            <div v-show="submitted && !from">From is required</div>
          </div>
          <div>
            <label for="brand" class="">Brand</label>
            <input
              id="brand"
              name="brand"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Type"
              v-model="brand"
            />
            <div v-show="submitted && !brand">Brand is required</div>
          </div>
          <div>
            <label for="model" class="">Model</label>
            <input
              id="model"
              name="model"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Type"
              v-model="model"
            />
            <div v-show="submitted && !model">Model is required</div>
          </div>
          <div>
            <label for="generation" class="">Generation</label>
            <input
              id="generation"
              name="generation"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="generation"
              v-model="generation"
            />
            <div v-show="submitted && !generation">Generation is required</div>
          </div>
          <div>
            <label for="mileage" class="">Mileage</label>
            <input
              id="mileage"
              name="mileage"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Mileage"
              v-model="mileage"
            />
            <div v-show="submitted && !mileage">Mileage is required</div>
          </div>
          <div>
            <label for="capacity" class="">Capacity</label>
            <input
              id="capacity"
              name="capacity"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Capacity"
              v-model="capacity"
            />
            <div v-show="submitted && !capacity">Capacity is required</div>
          </div>
          <div>
            <label for="fuel" class="">Fuel</label>
            <input
              id="fuel"
              name="fuel"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Fuel"
              v-model="fuel"
            />
            <div v-show="submitted && !fuel">Fuel is required</div>
          </div>
          <div>
            <label for="power" class="">Power</label>
            <input
              id="power"
              name="power"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Power"
              v-model="power"
            />
            <div v-show="submitted && !power">Power is required</div>
          </div>
          <div>
            <label for="transmission" class="">Transmission</label>
            <input
              id="transmission"
              name="transmission"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Transmission"
              v-model="transmission"
            />
            <div v-show="submitted && !transmission">
              Transmission is required
            </div>
          </div>
          <div>
            <label for="drive" class="">Drive</label>
            <input
              id="drive"
              name="drive"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="0"
              v-model="drive"
            />
            <div v-show="submitted && !drive">Drive is required</div>
          </div>
          <div>
            <label for="vin" class="">Vin</label>
            <input
              id="vin"
              name="vin"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Vin"
              v-model="vin"
            />
            <div v-show="submitted && !vin">Vin is required</div>
          </div>
          <div>
            <label for="bodyType" class="">Body Type</label>
            <input
              id="bodyType"
              name="bodyType"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Body Type"
              v-model="bodyType"
            />
            <div v-show="submitted && !bodyType">Body Type is required</div>
          </div>
          <div>
            <label for="doorCount" class="">Door Count</label>
            <input
              id="doorCount"
              name="doorCount"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Door Count"
              v-model="doorCount"
            />
            <div v-show="submitted && !doorCount">Door Count is required</div>
          </div>
          <div>
            <label for="color" class="">Color</label>
            <input
              id="color"
              name="color"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Color"
              v-model="color"
            />
            <div v-show="submitted && !color">Color is required</div>
          </div>
          <div>
            <label for="colorType" class="">Color Type</label>
            <input
              id="email-address"
              name="colorType"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Color Type"
              v-model="colorType"
            />
            <div v-show="submitted && !colorType">Color Type is required</div>
          </div>
          <div>
            <label for="country" class="">Country</label>
            <input
              id="country"
              name="country"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="country"
              v-model="country"
            />
            <div v-show="submitted && !country">Country is required</div>
          </div>
          <div>
            <label for="vat" class="">Vat</label>
            <input
              id="vat"
              name="vat"
              type="text"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Vat"
              v-model="vat"
            />
            <div v-show="submitted && !vat">Vat is required</div>
          </div>
          <div>
            <label for="firstRegistration" class="">First Registration</label>
            <input
              id="firstRegistration"
              name="firstRegistration"
              type="date"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              v-model="firstRegistration"
            />
            <div v-show="submitted && !firstRegistration">
              First Registration is required
            </div>
          </div>
          <div>
            <label for="notCrashed" class="">Not crashed</label>
            <input
              id="notCrashed"
              name="notCrashed"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Not crashed"
              v-model="notCrashed"
            />
            <div v-show="submitted && !notCrashed">Not crashed is required</div>
          </div>
          <div>
            <label for="conditionalCar" class="">Conditional Car</label>
            <input
              id="conditionCar"
              name="conditionCar"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              v-model="conditionalCar"
            />
            <div v-show="submitted && !conditionalCar">
              Conditional Car is required
            </div>
          </div>

          <div>
            <label for="leasing" class="">Leasing</label>
            <input
              id="leasing"
              name="leasing"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Leasing"
              v-model="leasing"
            />
            <div v-show="submitted && !leasing">Leasing is required</div>
          </div>
          <div>
            <label for="price" class="">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Price"
              v-model="price"
            />
            <div v-show="submitted && !price">Price is required</div>
          </div>

          <div>
            <label for="phone" class="">Phone</label>
            <input
              id="phone"
              name="phone"
              type="number"
              class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              v-model="phone"
            />
            <div v-show="submitted && !phone">Phone is required</div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div class="row">
          <div class="col-8">
            <label class="btn btn-default p-0">
              <input
                type="file"
                accept="image/*"
                name="files"
                multiple
                @change="selectFiles($event)"
              />
            </label>
          </div>

          <div>
            <img v-for="preview in previews" :src="preview" class="preview" />
          </div>

          <div class="col-4">
            <button
              class="btn btn-success btn-sm float-right"
              :disabled="!currentImage"
              @click="upload"
            >
              Upload
            </button>
          </div>
        </div>

        <div v-if="currentImage" class="progress">
          <div
            class="progress-bar progress-bar-info"
            role="progressbar"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{ width: progress + '%' }"
          >
            {{ progress }}%
          </div>
        </div>

        <div class="card mt-3">
          <div class="card-header">List of Images</div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="(image, index) in imageInfos"
              :key="index"
            >
              <a :href="image.url">{{ image.name }}</a>
            </li>
          </ul>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { offerService } from "../services/offer.service";

export default {
  data: () => {
    return {
      type: "",
      from: "",
      brand: "",
      model: "",
      generation: 0,
      mileage: 0,
      capacity: 0,
      fuel: "",
      power: "",
      transmission: 0,
      drive: 0,
      vin: "",
      bodyType: "",
      doorCount: 0,
      color: "",
      colorType: "",
      country: "",
      vat: 0,
      firstRegistration: "",
      notCrashed: 0,
      conditionalCar: 0,
      leasing: 0,
      price: 0,
      phone: 0,
      submitted: false,
      currentImage: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",
      imageInfos: [],
      progressInfos: [],
      selectedFiles: undefined,
      previews: [],
    };
  },
  computed: {
    // loggingIn() {
    //   return this.$store.state.authentication.status.loggingIn;
    // },
  },
  methods: {
    uploadFiles(offerId) {
      this.message = [];
      if (this.selectedFiles) {
        for (let i = 0; i < this.selectedFiles.length; i++) {
          this.upload(i, this.selectedFiles[i], offerId);
        }
      }
    },
    upload(idx, file, offerId) {
      this.progressInfos[idx] = { value: 0, fileName: file.name };
      if (file) {
        offerService.uploadFile(file, offerId).then(
          () => {
            const msg = "Uploaded the file successfully: " + file.name;
            this.message.push(msg);
          },
          () => {
            this.progressInfos[idx].value = 0;
            const msg = "Could not upload the file: " + file.name;
            this.message.push(msg);
          }
        );
      }
    },
    selectFiles(event) {
      this.message = [];
      this.progressInfos = [];
      this.selectedFiles = event.target.files;
      if (this.selectedFiles && this.selectedFiles[0]) {
        const numberOfFiles = this.selectedFiles.length;
        for (let i = 0; i < numberOfFiles; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.previews.push(e.target.result);
          };
          reader.readAsDataURL(this.selectedFiles[i]);
        }
      }
    },

    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;
      const {
        type,
        from,
        brand,
        model,
        generation,
        mileage,
        capacity,
        fuel,
        power,
        transmission,
        drive,
        vin,
        bodyType,
        doorCount,
        color,
        colorType,
        country,
        vat,
        firstRegistration,
        notCrashed,
        conditionalCar,
        leasing,
        price,
        phone,
      } = this;
      if (
        type &&
        from &&
        brand &&
        model &&
        generation &&
        mileage &&
        capacity &&
        fuel &&
        power &&
        transmission &&
        drive &&
        vin &&
        bodyType &&
        doorCount &&
        color &&
        colorType &&
        country &&
        vat &&
        firstRegistration &&
        notCrashed &&
        conditionalCar &&
        leasing &&
        price &&
        phone
      ) {
        const parsedIntTransmission = parseInt(transmission);
        const parsedIntVat = parseInt(vat);

        offerService
          .addOffer({
            type,
            from,
            brand,
            model,
            generation,
            mileage,
            capacity,
            fuel,
            power,
            transmission: parsedIntTransmission,
            drive,
            vin,
            bodyType,
            doorCount,
            color,
            colorType,
            country,
            vat: parsedIntVat,
            firstregistration: firstRegistration,
            notCrashed,
            conditionalCar,
            leasing,
            price,
            phone,
          })
          .then(
            (response) =>
              response.json().then((data) => {
                this.type = "";
                this.from = "";
                this.brand = "";
                this.model = "";
                this.generation = 0;
                this.mileage = 0;
                this.capacity = 0;
                this.fuel = "";
                this.power = "";
                this.transmission = 0;
                this.drive = 0;
                this.vin = "";
                this.bodyType = "";
                this.doorCount = 0;
                this.color = "";
                this.colorType = "";
                this.country = "";
                this.vat = 0;
                this.firstRegistration = "";
                this.notCrashed = 0;
                this.conditionalCar = 0;
                this.leasing = 0;
                this.price = 0;
                this.phone = 0;

                this.progressInfos = [];
                this.previews = [];
                this.message = [];
                this.loading = false;

                console.log("Data from creating.. ", data);

                this.uploadFiles(data.offer_id);
              }),
            () => {
              const message = "Offer not uploaded!";
              this.message.push(message);
            }
          );
      }
    },
  },
};
</script>
