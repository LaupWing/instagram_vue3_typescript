<template>
   <div className='flex space-x-2 p-6 mt-8 border-gray-200 border rounded-sm overflow-x-scroll bg-white scrollbar-thin scrollbar-thumb-black'>
      <story 
         :img="'https://autototaalbv.nl/wp-content/uploads/2017/04/profile-placeholder.png'"
         :username="'LaupWing'"
      />
      <!-- <story
         img={profile.avatar}
         username={profile.username}
      /> -->
   </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import faker from '@/helpers'
import {FakerObject} from '@/types/interfaces'
import Story from './Story/index.vue'

export default defineComponent({
   components:{
      Story
   },
   setup() {
      const stories = ref<FakerObject[]>([]) 
      const init = async ()=>{
         const data:FakerObject[] = await faker(20)
         stories.value = data
      }
      init()

      
      // const getStores = await faker(20)
      // const stories = ref([])
      
   },
})
</script>
