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
      default: 'app',
    },
  },
  mounted() {
    const textArea = this.$refs.code_mirror;
    const instance = CodeMirror.fromTextArea(textArea, {
      mode: 'javascript',
      lineNumbers: true,
      theme: `monokai ${this.theme}`,
    });
    instance.on('cursorActivity', (doc) => {});
  },
};
</script>

<style lang="scss">
@import 'codemirror/lib/codemirror.css';
@import 'codemirror/theme/monokai.css';
@import '@/assets/scss/theme/app.scss';

.CodeMirror {
  height: 100%;
}
</style>
