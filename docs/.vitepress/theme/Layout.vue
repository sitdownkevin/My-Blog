<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme



</script>

<template>

  <Layout>

    <template #layout-bottom>
      <div class="bottom-container">
        <span class="bottom-slogan">One day we will climb the highest mountain, and suvey the smallest point.</span>
      </div>
    </template>
  </Layout>

</template>

<style>


.VPImage.logo {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
}

a.title {
  font-family: 'Lobster', cursive;
}

.bottom-container {
  border-top: 1px solid var(--vp-c-gutter);
  width: 100%;
  height: calc(var(--vp-nav-height) - 1px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .bottom-slogan {
    max-width: 80%;
    max-height: 100%;
    font-family: 'Dancing Script', cursive;
    font-size: 16px;
    user-select: none;
  }
}
</style>