<template>
    <div class="relative hidden lg:inline-grid w-24 cursor-pointer my-auto">
        <img src="@/assets/images/instagram_logo_large.png" alt="logo" />
    </div>
    <div class="relative lg:hidden w-10 flex-shrink-0 cursor-pointer my-auto">
        <img src="@/assets/images/instagram_logo_small.png" alt="logo" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Logo'
});
</script>
