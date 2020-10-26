<template>
  <div class="sidebar" :class="{ 'is-hidden': $store.getters['pickup/getShowing'] === true }">
    <div class="title-wrapper">
      <img src="banner.png" alt="banner" />
    </div>
    <div class="contents-wrapper">
      <div class="content code-type-wrapper">
        <h3 class="text-light">Type</h3>
        <code-type-select-form />
      </div>
      <div class="content description-wrapper">
        <h3 class="text-light">Description</h3>
        <p class="lead"></p>
      </div>
      <div class="content github-btn">
        <b-button
          variant="light"
          class="github-link-btn"
          href="https://github.com/cyan-0fbcf9/Attention"
          target="blank"
        >
          <img src="~assets/images/GitHub-Mark-120px-plus.png" alt="github-icon" />
          GitHub
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import CodeTypeSelectForm from '@/components/pages/sidebar/CodeTypeSelectForm';

export default {
  components: {
    CodeTypeSelectForm,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: $sidebar-rgb;
  transition: width 0.4s ease-in-out;
  width: 350px;

  @include md {
    width: 200px;
  }

  &.is-hidden {
    width: 0px;
  }

  .title-wrapper {
    margin: 10px 0px 20px 0px;
    img {
      padding: 0px 18px;
      width: 100%;
    }
  }

  .contents-wrapper {
    padding: 0px 16px;

    h3 {
      font-family: 'Fredoka One', cursive;
      letter-spacing: 1px;
    }

    .content {
      margin: 16px 0px;
    }

    .code-type-wrapper {
    }

    .github-link-btn {
      align-items: center;
      display: inline-flex;
      font-size: 1.2rem;

      img {
        margin-right: 8px;
        width: 28px;
      }
    }
  }
}
</style>
