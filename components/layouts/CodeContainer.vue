<template>
  <div class="code-container">
    <pickup-point :pickup-value="selectedValue" />
    <div class="code-mirror-wrapper">
      <app-editor @onSelect="selectedValue = $event" />
    </div>
  </div>
</template>

<script>
import PickupPoint from '@/components/layouts/PickupPoint';
import AppEditor from '@/components/contents/AppEditor';

export default {
  components: {
    PickupPoint,
    AppEditor,
  },
  data() {
    return {
      selectedValue: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.code-container {
  flex-grow: 1;
  overflow-x: hidden;

  .code-mirror-wrapper {
    background-color: $editor-rgb;
    height: 100%;
    padding: 10px 0px 0px 10px;
  }
}
</style>
