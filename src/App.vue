<script setup>
import { defineComponent, ref } from 'vue'
import ImageUploader from './components/ImageUploader.vue'
import LoadingBar from './components/LoadingBar.vue'
import ResultCard from './components/ResultCard.vue'
import axios from 'axios'

document.title = 'DevChanllenges | Image Uploader'

let loading = ref(false)
let sent = ref(false)
let imageLoaded = ref(
	'https://res.cloudinary.com/jsonvas/image/upload/v1648519598/ppklqtivhuiaavnccfoz.jpg'
)

const sendImage = async (imageFormData) => {
	loading.value = true
	const res = await axios.post('http://localhost:8000/images', imageFormData)
	if (res) {
		console.log(res.data.result.secure_url)
		loading.value = false
		sent.value = true
		imageLoaded.value = res.data.result.secure_url
	}
}
</script>

<template>
	<div>
		<div class="fixed bg-blue-500 px-3 text-white py-2 w-full">
			<h2 class="text-[1.2rem]">Image uploader</h2>
		</div>
		<div class="flex justify-center items-center pt-[10rem]">
			<LoadingBar v-if="loading" />
			<ImageUploader @sendImage="sendImage" v-if="!loading && !sent" />
			<ResultCard v-show="!loading && sent" :image-data="imageLoaded" />
		</div>
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
