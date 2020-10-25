<template>
  <div class="pickup-point" :class="{ 'is-selected': isShowing }">
    <view-editor />
  </div>
</template>

<script>
import ViewEditor from '@/components/contents/ViewEditor';

export default {
  components: {
    ViewEditor,
  },
  computed: {
    isShowing() {
      return this.$store.getters['pickup/getShowing'];
    },
  },
};
</script>

<style lang="scss" scoped>
.pickup-point {
  background-color: $pickup-point-rgb;
  box-shadow: 0px -16px 20px rgba($pickup-point-rgb, 0.6);
  display: block;
  height: 100vh;
  position: absolute;
  padding: 10px 0px 0px 10px;
  right: 0px;
  transition: transform 0.4s ease-in-out;
  transform-origin: center right;
  transform: translateX(100%);
  width: 72%;
  z-index: 10;

  &.is-selected {
    transform: translateX(0%);
  }
}
</style>
