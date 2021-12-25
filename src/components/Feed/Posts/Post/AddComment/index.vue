<template>
   <form class='flex items-center p-4'>
      <emoji-happy-icon class='h-7' />
      <input
         placeholder='Add a comment...'
         class='border-none flex-1 focus:ring-0'
      />
      <button
         type='submit'
         class='font-semibold text-blue-400'
      >
         Post
      </button>
   </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EmojiHappyIcon } from '@heroicons/vue/outline'

export default defineComponent({
   components:{
      EmojiHappyIcon
   },
   setup() {
      
   },
})
</script>
