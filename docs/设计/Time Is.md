---
layout: page
---
<script setup>
    import TimeIs from "../.vitepress/components/TimeIs.vue"
</script>


<div class="home-container">
    <TimeIs />
</div>


<style>
    .home-container {
        width: 100vw;
        min-height: calc(100vh - var(--vp-nav-height) * 2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>