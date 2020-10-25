<template>
  <div class="pickup-point" :class="{ 'is-selected': isShowing }">
    <code-mirror :read-only="true" theme="material-ocean pickup" :code-value="pickupValue || ''" />
  </div>
</template>

<script>
import CodeMirror from '@/components/contents/CodeMirror';

export default {
  components: {
    CodeMirror,
  },
  props: {
    pickupValue: {
      type: String,
      default: null,
    },
  },
  computed: {
    isShowing() {
      if (this.pickupValue) {
        return true;
      } else {
        return false;
      }
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
