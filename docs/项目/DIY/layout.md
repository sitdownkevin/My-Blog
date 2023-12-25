---
layout: page
---
<script setup>
    import ShelfLayout from "../../.vitepress/components/ShelfLayout.vue"
</script>


<div class="home-container">
    <ShelfLayout />
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