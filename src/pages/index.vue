<template>
	<div class="prose dark:prose-dark mb-8">
		<Title class="mb-0">
			Karol Reinert
			<template v-slot:description>Programming Blog</template>
		</Title>
		<div class="flex justify-center mt-0">
			<div class="text-sm">Programming Blog</div>
		</div>

	</div>
	<!-- Separator -->
	<div class="w-32 bg-gray-400 h-[1px] mb-16"></div>
	<PostList />
	<!-- Push page down a little bit -->
	<div class="h-32"></div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
	title: 'Karol Reinert Blog',
	meta: [{ name: 'description', content: 'Karol Reinert Programming Blog' }]
});
</script>

<route>
{
	meta: {
		layout: "home"
	}
}
</route>
