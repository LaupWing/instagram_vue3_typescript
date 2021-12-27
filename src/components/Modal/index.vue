<template>
	<modal name="my-first-modal"> This is my first modal </modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "MyComponent",
	methods: {
		show() {
			// @ts-ignore
			this.$modal.show("my-first-modal");
		},
		hide() {
			// @ts-ignore
			this.$modal.hide("my-first-modal");
		},
	},
	mounted() {
		
		this.show();
	},
	setup() {},
});
</script>
