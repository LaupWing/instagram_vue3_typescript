<template>
   <div class="h-screen overflow-y-scroll scrollbar-hide">
      <top-header />
      <feed/>
      <!-- <div id="nav" class="bg-red-500">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view /> -->
   </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TopHeader from "@/components/TopHeader/index.vue";
import Feed from '@/components/Feed/index.vue'

export default defineComponent({
   components: {
      TopHeader,
      Feed
   },
   setup() {},
});
</script>