<template>
   <main
      class="
         grid grid-cols-1
         md:grid-cols-2 md:max-w-3xl
         xl:grid-cols-3 xl:max-w-6xl
         mx-auto
      "
   >
      <section class="col-span-2">
         <!-- <Stories/>
            <Posts/> -->
      </section>
      <section class="hidden xl:inline-grid md:col-span-1">
         <div class="fixed top-20">
            <mini-profile/>
            <!-- <Suggestions/> -->
         </div>
      </section>
   </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MiniProfile from './MiniProfile/index.vue'

export default defineComponent({
   name: "Feed",
   components:{
      MiniProfile
   }
});
</script>
