<template>
    <div class="flex items-center justify-end space-x-4">
        <home-icon class="navBtn" />
        <menu-icon class="h-6 md:hidden cursor-pointer" />
        <div class="relative navBtn">
            <paper-airplane-icon class="navBtn rotate-45" />
            <div
                class="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center animate-pulse"
            >
                3
            </div>
        </div>
        <plus-circle-icon class="navBtn"/>
        <user-group-icon class="navBtn" />
        <heart-icon class="navBtn" />
        <!-- <img
            src="{session.user?.image}"
            alt="profile picture"
            class="h-10 w-10 object-fill rounded-full"
        /> -->
        <button>Sign in</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/vue/outline'
import {
    HomeIcon
} from '@heroicons/vue/solid'

export default defineComponent({
    components:{
        SearchIcon,
        PlusCircleIcon,
        UserGroupIcon,
        HeartIcon,
        PaperAirplaneIcon,
        MenuIcon,
        HomeIcon
    },
    name: 'RightNav'
});
</script>
