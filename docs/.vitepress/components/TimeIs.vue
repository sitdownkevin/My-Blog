<template>

    <div class="time-is" :style="`font-size: ${font_size}px`">
      {{ cur_time }}
    </div>



</template>

<script>
export default {
  name: 'TimeIs',
  data() {
    return {
      cur_time: null,
      font_size: null
    }
  },
  mounted() {
    setInterval(() => {
      this.cur_time = (new Date()).toLocaleTimeString()
    }, 50)

    if (typeof window !== 'undefined') {
      this.font_size = window.innerWidth / 6

      window.addEventListener('resize', () => {
        this.font_size = window.innerWidth / 6
      })
    }


    const nav = document.querySelector('.VPNav')
    nav.style.cssText = `
      display: none;
    `

    const btm = document.querySelector('.bottom-container')
    btm.style.cssText = `
      display: none;
    `
  },
  unmounted() {
    const nav = document.querySelector('.VPNav')
    nav.style.cssText = `
      display: ;
    `

    const btm = document.querySelector('.bottom-container')
    btm.style.cssText = `
      display: ;
    `
  }
}

</script>

<style scoped>
  .time-is {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    user-select: none;
  }
</style>