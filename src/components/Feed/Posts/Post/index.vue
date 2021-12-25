<template>
   <div class='bg-white my-7 border rounded-sm'>
      <owner/>
      <img
         src="https://autototaalbv.nl/wp-content/uploads/2017/04/profile-placeholder.png"
         alt="image"
         class='object-cover w-full'
      />
      <actions/>
      <p class='p-5 truncate'>
         <span class='font-bold mr-1'>Laupwing </span> caption
      </p>
      <div class='ml-10 h-20 overflow-y-scroll scrollbar-track-black scrollbar-thin'>
         <!-- {comments.map(comment => (
            <div key={comment.id} class='flex items-center space-x-2 mb-3'>
               <img class='h-7 rounded-full' src={comment.data().userImage} alt="user image" />
               <p class='text-sm flex-1'> <span class='font-bold'>{comment.data().username}</span> {comment.data().comment}</p>
               <Moment fromNow class='pr-5 text-xs'>
                  {comment.data().timestamp.toDate()}
               </Moment>
            </div>
         ))} -->
      </div>

      <add-comment/>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Owner from './Owner/index.vue'
import Actions from './Actions/index.vue'
import Comment from './Comment/index.vue'
import AddComment from './AddComment/index.vue'

export default defineComponent({
   name: 'Post',
   components:{
      Owner,
      AddComment,
      Actions,
      Comment
   }
})
</script>
