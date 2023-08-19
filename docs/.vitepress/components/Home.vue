<template>

  <div class="home-container">
    <div class="home-title">WELCOME TO MY SPACE</div>
    <br>
    <div class="home-email"><a style="cursor: pointer;">Email: kexu567@gmail.com</a></div>
  </div>

</template>


<style scoped>

.home-container {
  width: 100vw;
  min-height: calc(100vh - var(--vp-nav-height) * 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Vollkorn", serif;
  font-weight: 600;
  .home-title {
    font-size: 1.5rem;
    user-select: none;
    font-family: "Vollkorn", serif;
    //font-style: italic;
    font-weight: 700;
    //background-image: var(--vp-custom-home-title);
    //-webkit-background-clip: text;
    //color: transparent;
  }
}
</style>

<script>
export default {
  name: 'Home'
}

</script>