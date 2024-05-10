<template>
	<div class="prose dark:prose-dark mb-14">
		<Title>
			Karol Reinert
			<template v-slot:description>Programming Blog</template>
		</Title>
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
