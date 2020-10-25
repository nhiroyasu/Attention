<template>
  <div class="sidebar" :class="{ 'is-hidden': $store.getters['pickup/getShowing'] === true }"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: $sidebar-rgb;
  transition: width 0.4s ease-in-out;
  width: 350px;

  @include md {
    width: 200px;
  }

  &.is-hidden {
    width: 0px;
  }
}
</style>
