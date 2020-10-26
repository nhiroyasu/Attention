<template>
  <div class="code-type-select-form">
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </div>
</template>

<script>
import { options } from '@/plugins/mapping/code-type';

export default {
  data() {
    return {
      selected: 'text/javascript',
      options,
    };
  },
  watch: {
    selected(newValue, oldValue) {
      if (newValue) {
        this.$store.commit('preference/updateMode', newValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.code-type-select-form {
}
</style>
