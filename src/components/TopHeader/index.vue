<template>
    <header class="shadow-sm sticky border-b bg-white top-0 z-50">
        <div class="flex justify-between max-w-6xl mx-5 lg:mx-auto">
            <logo/>        
            <search-bar/>
            <right-nav/>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo/index.vue'
import SearchBar from './SearchBar/index.vue'
import RightNav from './RightNav/index.vue'

export default defineComponent({
    components:{
        Logo,
        SearchBar,
        RightNav
    },
    setup() {
        
    },
})
</script>