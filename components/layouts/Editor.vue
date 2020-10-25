<template>
  <div class="editor">
    <pickup-point />
    <div class="code-mirror-wrapper">
      <code-mirror />
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
};
</script>

<style lang="scss" scoped>
.editor {
  flex-grow: 1;

  .code-mirror-wrapper {
    background-color: $editor-rgb;
    height: 100%;
    padding-left: 10px;
  }
}
</style>
