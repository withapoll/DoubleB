<template>
  <div class="app">
    <!-- Content -->
    <main>
      <router-view />
    </main>

    <!-- Sidebar -->
    <SideBar v-if="showSidebar" />
    <!-- <SideBar /> -->
  </div>
</template>

<script setup>
import { ref, watch, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import SideBar from "@/components/SideBar.vue";

let showSidebar = ref(true);
let route = useRoute();

onBeforeMount(() => {
  watch(
    () => route.path,
    (newPath) => {
      if (newPath === "/login") {
        showSidebar.value = false;
      } else {
        showSidebar.value = true;
      }
    }
  );
});
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
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
html {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: var(--light);
  border-radius: 20px;
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
  border-radius: 0px 20px 20px 0;
  overflow: hidden;

  main {
    flex: 1 1 0;
    padding: 20px;
    margin-left: var(--sidebar-width); 
    overflow-y: auto;
    height: 100vh;
    @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .login-container {
    position: fixed; 
    left: 261px; 
    width: var(--sidebar-width); 
    height: 100vh; 
  }
}

</style>
