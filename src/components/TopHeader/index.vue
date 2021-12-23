<template>
    <header class="flex">
        <logo/>        
        
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo/index.vue'

export default defineComponent({
    components:{
        Logo
    },
    setup() {
        
    },
})
</script>