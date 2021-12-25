<template>
   <div class='flex items-center p-5'>
      <img 
         src="https://autototaalbv.nl/wp-content/uploads/2017/04/profile-placeholder.png" 
         class='rounded-full h-12 w-12 border p-1 mr-3 object-contain' 
         alt="owner" 
      />
      <p class='flex-1 font-bold'>LaupWing</p>
      <dots-horizontal-icon class='h-5' />
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DotsHorizontalIcon } from '@heroicons/vue/outline'

export default defineComponent({
   components:{
      DotsHorizontalIcon
   },
   setup() {
      
   },
})
</script>
