<template>
  <textarea id="code-mirror" ref="code_mirror" class="code-mirror"></textarea>
</template>

<script>
import * as CodeMirror from 'codemirror';

export default {
  props: {
    theme: {
      type: String,
      default: 'monokai pickup',
    },
  },
  data() {
    return {
      instance: null,
    };
  },
  computed: {
    pickupCode() {
      return this.$store.getters['pickup/getCode'];
    },
    stateEditorMode() {
      return this.$store.getters['preference/getMode'];
    },
  },
  watch: {
    pickupCode(newValue, oldValue) {
      if (this.instance && newValue) {
        this.instance.setValue(newValue);
      }
    },
    stateEditorMode(newValue, oldValue) {
      if (newValue) {
        this.instance.setOption('mode', newValue);
      }
    },
  },
  mounted() {
    const textArea = this.$refs.code_mirror;
    const instance = CodeMirror.fromTextArea(textArea, {
      mode: 'text/javascript',
      theme: this.theme,
      readOnly: 'nocursor',
    });
    instance.setValue(this.pickupCode);
    this.instance = instance;
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/theme/pickup.scss';

.CodeMirror {
  height: 100%;
}
</style>
