<template>
   <div class="flex justify-between px-4 pt-4">
      <div class="flex space-x-4">
         <heart-icon class="btn" />
         <chat-icon class="btn" />
         <paper-airplane-icon class="btn" />
      </div>
      <bookmark-icon class="btn" />
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
   HeartIcon,
   ChatIcon,
   PaperAirplaneIcon,
   BookmarkIcon
} from '@heroicons/vue/outline'

export default defineComponent({
   name: "Actions",
   components:{
      HeartIcon,
      ChatIcon,
      PaperAirplaneIcon,
      BookmarkIcon
   }
})
</script>
