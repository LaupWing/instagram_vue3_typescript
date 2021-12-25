<template>
   <div class='flex items-center space-x-2 mb-3'>
      <img 
         class='h-7 rounded-full' 
         src="https://autototaalbv.nl/wp-content/uploads/2017/04/profile-placeholder.png" 
         alt="user image" 
      />
      <p class='text-sm flex-1'> <span class='font-bold'>Gebruiker </span> Dit is een comment</p>
      <!-- <Moment fromNow class='pr-5 text-xs'>
         {comment.data().timestamp.toDate()}
      </Moment> -->
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   setup() {
      
   },
})
</script>
