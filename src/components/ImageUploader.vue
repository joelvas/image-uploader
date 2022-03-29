<script setup>
import { ref } from 'vue'
const emit = defineEmits(['sendImage'])

let toggle = ref(false)

const onDropFile = (event) => {
	toggle.value = false
	const files = event.dataTransfer.files
	emit('sendImage', createImageFormData(files[0]))
}
const onSelectFile = (event) => {
	toggle.value = false
	const files = event.target.files
	emit('sendImage', createImageFormData(files[0]))
}
const createImageFormData = (file) => {
	const formData = new FormData()
	formData.append('image', file)
	return formData
}
</script>

<template>
	<div class="flex flex-col h-[25rem] w-[20rem] items-center shadow-slate-600 shadow-sm mx-3 px-2 py-2">
		<h2 class="text-[1.4rem] font-bold mt-2">Upload your image</h2>
		<p class="text-[.9rem] mt-3">File should be an jpeg, png...</p>
		<label
			@dragenter.prevent="toggle = !toggle"
			@dragleave.prevent="toggle = !toggle"
			@drop.prevent="onDropFile"
			@dragover.prevent
			@click.prevent
			:class="[
				`bg-[url('https://media.flaticon.com/dist/min/img/collections/collection-tour.svg')] bg-no-repeat bg-center`,
				'h-full w-full border-slate-500 mt-4',
				'border-2 border-blue-500',
				toggle ? 'border-solid' : 'border-dashed',
			]"
		>
			<input type="file" class="hidden" />
		</label>
		<p class="text-[.9rem] mt-3">or</p>
		<label
			:class="[
				'bg-blue-500 text-white py-2 px-2 cursor-pointer rounded-lg text-[.9rem] mt-3',
				'active:bg-blue-600 ease-out duration-500',
			]"
		>
			Choose a file
			<input type="file" style="display: none" @change="onSelectFile" />
		</label>
	</div>
</template>

<style></style>
