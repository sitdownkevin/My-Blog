<template>

  <div class="home-container">
    <div class="home-img">
      <img src="/imgs/1699205459091.jpg" alt="index" width="100px" :style="imgStyle">
    </div>
    <br><br>
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

  .home-img {
    user-select: none;
    /* border: 2px solid black; */
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
    position: relative;
  }


  .home-title {
    font-size: 1.5rem;
    user-select: none;
    font-family: "Vollkorn", serif;

    font-weight: 700;
  }
}
</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      imgStyle: {
        border: '2px solid hsl(0, 100%, 50%)'
      }
    }
  },
  mounted() {
    this.animateBorder();
  },
  methods: {
    animateBorder() {
      let hue = 0; // 初始色调值

      setInterval(() => {
        hue = (hue + 1) % 360; // 每次增加色调值
        this.imgStyle.border = `2px solid hsl(${hue}, 100%, 50%)`; // 使用hsl颜色设置边框样式
      }, 100); // 每100毫秒更新一次边框样式
    }
  }
}

</script>