<template>
  <div>
    <div class="app-container">
      <sidebar />
      <code-container />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layouts/Sidebar';
import CodeContainer from '@/components/layouts/CodeContainer';

export default {
  components: {
    Sidebar,
    CodeContainer,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;
}
</style>
