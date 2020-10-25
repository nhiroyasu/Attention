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
    codeValue: {
      type: String,
      default: `const name = "attention app";\nconsole.log("Hello, " + name);\n`,
    },
    readOnly: {
      type: Boolean,
      default: false,
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
      lineNumbers: true,
      theme: `monokai ${this.theme}`,
      readOnly: this.readOnly,
    });
    instance.setValue(this.codeValue);

    if (this.readOnly === false) {
      instance.on('cursorActivity', (doc) => {
        this.$emit('onSelect', doc.getSelection());
      });
    }
    this.instance = instance;
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
