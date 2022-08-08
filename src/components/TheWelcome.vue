<script>
export default {
  computed: {
    getCurrentUser() {
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log(this.getCurrentUser.currentUser.Email);
  },
};
</script>

<template>
  <div>
    <p v-if="getCurrentUser">{{ this.getCurrentUser.currentUser.Email }}</p>
  </div>
</template>
