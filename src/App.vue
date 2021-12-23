<template>
    <div id="nav" class="bg-red-500">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <top-header />
    <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TopHeader from "./components/TopHeader.vue";

export default defineComponent({
    components: {
        TopHeader,
    },
    setup() {},
});
</script>
