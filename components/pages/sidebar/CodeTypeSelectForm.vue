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
      selected: 'js',
      options,
    };
  },
};
</script>

<style lang="scss" scoped>
.code-type-select-form {
}
</style>
