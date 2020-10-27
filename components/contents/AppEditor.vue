<template>
  <textarea id="code-mirror" ref="code_mirror" class="code-mirror"></textarea>
</template>

<script>
import * as CodeMirror from 'codemirror';
import { firstScript } from '@/scripts/static/default';

export default {
  props: {
    theme: {
      type: String,
      default: 'monokai app',
    },
    codeValue: {
      type: String,
      default: firstScript,
    },
  },
  data() {
    return {
      instance: null,
    };
  },
  computed: {
    stateEditorMode() {
      return this.$store.getters['preference/getMode'];
    },
  },
  watch: {
    stateEditorMode(newValue, oldValue) {
      if (newValue) {
        this.instance.setOption('mode', newValue);
      }
    },
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
      this.$store.commit('pickup/updatePosition', doc.listSelections()[0]);
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
