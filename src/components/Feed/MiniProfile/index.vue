<template>
   <div class="flex items-center justify-between mt-14 ml-10">
      <img
         src="https://autototaalbv.nl/wp-content/uploads/2017/04/profile-placeholder.png"
         alt="profile"
         class="rounded-full border p-[2px] w-16 h-16"
      />

      <div class="flex-1 mx-4">
         <h2 class="font-bold">LaupWing</h2>
         <h3 class="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
         class="text-blue-400 text-sm font-semibold"
         onClick="{signOut}"
      >
         Sign Out
      </button>
   </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
   name: "MiniProfile",
});
</script>
