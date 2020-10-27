<template>
  <div class="pickup-point" :class="{ 'is-selected': isShowing }">
    <div class="selected-line-number">
      L : {{ $store.getters['pickup/getHeadLine'] }} -
      {{ $store.getters['pickup/getAnchorLine'] }}
    </div>
    <view-editor class="view-editor" />
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
  display: flex;
  flex-direction: column;
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

  .selected-line-number {
    color: white;
    font-family: 'Muli', sans-serif;
    font-size: 1.5rem;
    margin: 16px 0px;
  }

  .view-editor {
    flex-grow: 1;
  }
}
</style>
