<template>
	<div class="app">
		<!-- Sidebar -->
		<SideBar />

		<!-- Content -->
		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup>
import SideBar from './components/SideBar.vue'
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;
  background-color: white;
//   border: solid;
//   border-color: #333;
//   border-radius: 20px;

	main {
		flex: 1 1 0;
		padding: 20px;
    

		@media (max-width: 768px) {
			padding-left: 10px;
			padding-right: 10px;
		}
	}
}
</style>