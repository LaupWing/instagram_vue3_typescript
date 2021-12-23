<template>
    <header class="flex">
        <logo/>        
        <search-bar/>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo/index.vue'
import SearchBar from './SearchBar/index.vue'

export default defineComponent({
    components:{
        Logo,
        SearchBar
    },
    setup() {
        
    },
})
</script>