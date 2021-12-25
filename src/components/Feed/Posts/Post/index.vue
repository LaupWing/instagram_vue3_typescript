<template>
   <div class='bg-white my-7 border rounded-sm'>
         <div class='flex items-center p-5'>
            <img 
               src="https://autototaalbv.nl/wp-content/uploads/2017/04/profile-placeholder.png" 
               class='rounded-full h-12 w-12 border p-1 mr-3 object-contain' 
               alt="" 
            />
            <p class='flex-1 font-bold'>LaupWing</p>
            <DotsHorizontalIcon class='h-5' />
         </div>
         <img
            src="https://autototaalbv.nl/wp-content/uploads/2017/04/profile-placeholder.png"
            alt="image"
            class='object-cover w-full'
         />
         <div class='flex justify-between px-4 pt-4'>
            <div class='flex space-x-4'>
               <HeartIcon class='btn' />
               <ChatIcon class='btn' />
               <PaperAirplaneIcon class='btn' />
            </div>
            <BookmarkIcon class='btn' />
         </div>
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

         <form class='flex items-center p-4'>
            <EmojiHappyIcon class='h-7' />
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
      </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   name: 'Post'
})
</script>
