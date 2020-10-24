<template>
  <div>
    <div class="app-container">
      <sidebar />
      <editor />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layouts/Sidebar';
import Editor from '@/components/layouts/Editor';

export default {
  components: {
    Sidebar,
    Editor,
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
