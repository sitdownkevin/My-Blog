<template>
    <div class="tools-box">
        <div class="tool">
            <div class="panel otpt"><b>Paste Github url below</b></div>
            <input class="panel inpt" v-model="orig_url" />

            <div class="panel otpt"><b>User name:</b> {{ user_name }} <b>Repo name:</b> {{ repo_name }} <b>File name:</b> {{
                file_name? file_name: 'Not_a_file' }}</div>
            <div class="panel otpt"><b>CDN url:</b>
                <p @click="gotoCDN()" style="cursor: pointer; text-decoration: underline;">{{ jsdelicr_url }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const orig_url = ref('https://github.com/sitdownkevin/ImageHosting/')


const user_name = computed(() => {
    return orig_url.value.split('github.com/')[1].split('/')[0]
})

const repo_name = computed(() => {
    return orig_url.value.split('github.com/')[1].split('/')[1]
})

const file_name = computed(() => {
    return orig_url.value.split('github.com/')[1].split('/')[2]
})

const jsdelicr_url = computed(() => {
    return 'https://cdn.jsdelivr.net/gh/' + user_name.value + '/' + repo_name.value + '/' + (file_name.value ? file_name.value : '')
})

const gotoCDN = () => {
    window.open(jsdelicr_url.value)
}

</script>


<style scoped>
.tools-box {
    display: flex;
    width: 100%;
    height: calc(100vh - var(--vp-nav-height) * 2);
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.inpt {
    border: 1px solid #ccc;
    border-radius: 2px;
}

.otpt {
    margin-top: 5px;
}

.panel {
    width: 70vw;
    padding: 2px 8px 2px 8px;
    font-family: 'Courier New', Courier, monospace;
}
</style>