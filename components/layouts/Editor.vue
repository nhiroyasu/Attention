<template>
  <div class="editor">
    <pickup-point :pickup-value="selectedValue" />
    <div class="code-mirror-wrapper">
      <code-mirror @onSelect="selectedValue = $event" />
    </div>
  </div>
</template>

<script>
import PickupPoint from '@/components/layouts/PickupPoint';
import CodeMirror from '@/components/contents/CodeMirror';

export default {
  components: {
    PickupPoint,
    // eslint-disable-next-line vue/no-unused-components
    CodeMirror,
  },
  data() {
    return {
      selectedValue: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.editor {
  flex-grow: 1;
  overflow-x: hidden;

  .code-mirror-wrapper {
    background-color: $editor-rgb;
    height: 100%;
    padding: 10px 0px 0px 10px;
  }
}
</style>
