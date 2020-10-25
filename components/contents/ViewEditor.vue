<template>
  <textarea id="code-mirror" ref="code_mirror" class="code-mirror"></textarea>
</template>

<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

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
  },
  watch: {
    pickupCode(newValue, oldValue) {
      if (this.instance && newValue) {
        this.instance.setValue(newValue);
      }
    },
  },
  mounted() {
    const textArea = this.$refs.code_mirror;
    const instance = CodeMirror.fromTextArea(textArea, {
      mode: 'javascript',
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
