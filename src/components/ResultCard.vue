<script setup>
import { defineProps, ref } from 'vue'
const props = defineProps(['imageData'])
let copied = ref(false)
const copyLink = () => {
	copied.value = true
	navigator.clipboard.writeText(props.imageData).then(() => {
		console.log('copied')
	})
}
</script>

<template>
	<div
		class="flex flex-col h-[25rem] w-[20rem] items-center shadow-slate-600 py-8 shadow-sm p-2 mx-2"
	>
		<span class="material-icons text-white bg-green-600 rounded-full"
			>done</span
		>
		<h2 class="text-[1.2rem] mt-2">Uploaded successful!</h2>
		<div class="h-[57%]">
			<img
				:src="imageData"
				alt="loaded"
				class="h-[100%] border-slate-500 mt-4 bg-no-repeat bg-center"
			/>
		</div>
		<div
			class="flex w-[100%] bg-gray-100 border-[1px] border-gray-300 rounded-lg text-[.6rem] cursor-pointer mt-10"
			@click="copyLink"
		>
			<div
				class="inline items-center min-w-[5rem] w-[14rem] py-2 overflow-hidden bg-gray-100 border-none"
				readonly
			>
				{{ imageData }}
			</div>
			<button
				v-if="!copied"
				@click="copyLink"
				class="inline bg-blue-600 text-white py-1 px-2 text-[.9rem] w- rounded-lg border-t-[1px] border-gray-300"
			>
				Copy link
			</button>
			<button
				v-if="copied"
				class="inline bg-green-700 text-white py-1 ml-1 px-2 text-[.9rem] w- rounded-lg border-t-[1px] border-gray-300"
			>
				Copied!
			</button>
		</div>
	</div>
</template>

<style></style>
