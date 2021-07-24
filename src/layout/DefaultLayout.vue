<template>
  <div class="flex h-screen container mx-auto relative">
    <!-- side section -->
    <div
      class="w-20 xl:w-1/4 pt-5 xl:ml-10 flex flex-col justify-between border-r border-gray-100"
    >
      <div class="flex flex-col items-center xl:items-start">
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <router-link
          :to="route.path"
          class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
          v-for="route in routes"
          :key="route"
        >
          <div v-if="route.meta.isMenu">
            <i :class="route.icon"></i>
            <span class="ml-5 text-xl hidden xl:inline-block">{{
              route.title
            }}</span>
          </div>
        </router-link>
        <div class="w-full xl:pr-3 flex justify-center">
          <button
            class="mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark foucs:outline-none"
          >
            <span class="hidden xl:block">트윗</span>
            <i class="fas fa-plus xl:hidden"></i>
          </button>
        </div>
      </div>
      <!-- Profile button -->
      <div class="xl:mr-3 mb-3 relative" @click="showProfileDropdown = true">
        <button
          class="hidden xl:flex mt-3 px-2 py-1 xl:w-full w-12 h-12 rounded full hover:bg-blue-50 items-center"
        >
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full" />
          <div class="xl:ml-2 hidden xl:block">
            <div class="text-sm font-bold">jhjang.com</div>
            <div class="text-xs text-gray-500 text-left">@jhjang</div>
          </div>
          <i
            class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden xl:block"
          ></i>
        </button>
        <div class="xl:hidden flex justify-center">
          <img
            src="http://picsum.photos/100"
            class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </div>
    <!-- main section -->
    <div class="flex-1 flex h-screen">
      <router-view />
      <Trends />
    </div>
    <!-- profile dropdown menu -->
    <div
      class="absolute bottom-20 left-10 shadow rounded-lg w-60 bg-white"
      v-if="showProfileDropdown"
      @click="showProfileDropdown = false"
    >
      <button
        class="hover:bg-gray-50 border-b border-gray-100 flex p-3 w-full items-center"
      >
        <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full" />
        <div class="ml-2">
          <div class="font-bold text-sm">jhjang@nate.com</div>
          <div class="text-left text-gray-500 text-sm">@jhjang</div>
        </div>
        <i class="fas fa-check text-primary ml-auto"></i>
      </button>
      <button
        class="hover:bg-gray-50 w-full text-left text-sm"
        @click="onLoginout"
      >
        @jhjang 계정에서 로그아웃
      </button>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import router from "../router";
import Trends from "../components/trends.vue";
import { auth } from "../firebase";
import store from "../store";
export default {
  components: { Trends },
  setup() {
    const routes = ref([]);
    const showProfileDropdown = ref(false);

    const onLoginout = async () => {
      await auth.signOut();
      store.commit("SET_USER", null);
      await router.replace("/login");
    };

    onBeforeMount(() => {
      routes.value = router.options.routes || "DefaultLayout";
    });

    return { routes, showProfileDropdown, onLoginout };
  },
};
</script>
<style></style>
