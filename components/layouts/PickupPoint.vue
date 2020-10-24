<template>
  <div class="pickup-point is-selected"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pickup-point {
  background-color: #272739;
  display: block;
  height: 100vh;
  position: absolute;
  right: 0px;

  &.is-selected {
    width: 72%;
  }
}
</style>
