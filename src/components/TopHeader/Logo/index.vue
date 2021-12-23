<template>
    <div class="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div class="relative hidden lg:inline-grid w-24 cursor-pointer">
            <img src="@/assets/images/instagram_logo_large.png" alt="logo" />
        </div>
        <div class="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
            <img src="@/assets/images/instagram_logo_small.png" alt="logo" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Logo'
});
</script>
