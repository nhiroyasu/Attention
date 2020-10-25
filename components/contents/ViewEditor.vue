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
      default: 'material-ocean pickup',
    },
    codeValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      instance: null,
    };
  },
  watch: {
    codeValue(newValue, oldValue) {
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
    instance.setValue(this.codeValue);
    this.instance = instance;
  },
};
</script>

<style lang="scss" scoped>
textarea {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

<style lang="scss">
@import 'codemirror/lib/codemirror.css';
@import 'codemirror/theme/material-ocean.css';
@import '@/assets/scss/theme/pickup.scss';

.CodeMirror {
  height: 100%;
}
</style>
