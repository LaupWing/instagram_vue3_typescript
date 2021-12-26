<template>
   <div className='flex space-x-2 p-6 mt-8 border-gray-200 border rounded-sm overflow-x-scroll bg-white scrollbar-thin scrollbar-thumb-black'>
      <Story 
         img=""
         username="LaupWing"
      />
      <Story 
         img={profile.avatar}
         username={profile.username}
      />
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   setup() {
      
   },
})
</script>
