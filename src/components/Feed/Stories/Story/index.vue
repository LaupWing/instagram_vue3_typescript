<template>
   <div>
      <img 
         className="h-14 w-14 object-contain cursor-pointer rounded-full p-[1.5px] border-red-500 border-2 hover:scale-110 transition transform duration-200 ease-out"
         :src="img" 
         alt="" 
      />
      <p className="text-xs w-14 truncate text-center">{{username}}</p>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   props:{
      img:{
         type: String,
         required: true
      },
      username:{
         type: String,
         required: true
      }
   },
   setup() {
      
   },
})
</script>
