<template>
  <div class="editor">
    <pickup-point />
  </div>
</template>

<script>
import PickupPoint from '@/components/layouts/PickupPoint';

export default {
  components: {
    PickupPoint,
  },
};
</script>

<style lang="scss" scoped>
.editor {
  background-color: $editor-rgb;
  display: block;
  flex-grow: 1;
}
</style>
