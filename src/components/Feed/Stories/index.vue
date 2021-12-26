<template>
   <div className='flex space-x-2 p-6 mt-8 border-gray-200 border rounded-sm overflow-x-scroll bg-white scrollbar-thin scrollbar-thumb-black'>
      <!-- <Story 
         img=""
         username="LaupWing"
      />
      <Story 
         img={profile.avatar}
         username={profile.username}
      /> -->
   </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
const faker = require('@/helpers/index.js')

export default defineComponent({
   async setup() {
      console.log('heh')
      const test = async ()=>{ 
         const stories = await faker(20)
         console.log(stories)
      }
      test()
      // const getStores = await faker(20)
      // console.log(getStores)
      // const stories = ref([])
      
   },
})
</script>
