<template>
    <div className="max-w-xs">
        <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <search-icon class="h-5 w-5 text-gray-500" />
            </div>
            <input
                className="bg-gray-50 block w-full pl-10 sm:text-sm border border-gray-300 rounded-md focus:ring-black focus:border-black"
                type="text"
                placeholder="Search"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {SearchIcon} from '@heroicons/vue/outline'

export default defineComponent({
    name: 'SearchBar',
    components:{
        SearchIcon
    }
});
</script>
