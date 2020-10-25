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
      default: 'monokai app',
    },
    codeValue: {
      type: String,
      default: `const name = "attention app";\nconsole.log("Hello, " + name);\n`,
    },
  },
  data() {
    return {
      instance: null,
    };
  },
  mounted() {
    const textArea = this.$refs.code_mirror;
    const instance = CodeMirror.fromTextArea(textArea, {
      mode: 'javascript',
      lineNumbers: true,
      theme: this.theme,
    });
    instance.setValue(this.codeValue);
    instance.on('cursorActivity', (doc) => {
      this.$store.commit('pickup/updateCode', doc.getSelection());
    });

    this.instance = instance;
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/theme/app.scss';

.CodeMirror {
  height: 100%;
}
</style>
