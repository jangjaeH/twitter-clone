<template>
    <div class="flex h-screen container mx-auto">
        <!-- side section -->
        <div class="w-20 lg:w-1/4 pt-5 lg:ml-10 flex flex-col justify-between border-r border-gray-100">
            <div class="flex flex-col items-center lg:items-start">
                <!-- twitter logo -->
                <i class="fab fa-twitter text-3xl text-primary lg:ml-4 mb-3"></i>
                <!-- sidemenu icons -->
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                    <i class="fas fa-home fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                    <i class="fas fa-hashtag fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                    <i class="far fa-bell fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                    <i class="far fa-envelope fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                    <i class="far fa-bookmark fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                    <i class="far fa-list-alt fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                    <i class="far fa-user fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                    <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">더보기</span>
                </div>
                <div class="w-full lg:pr-3 flex justify-center">
                    <button
                        class="mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark foucs:outline-none"
                    >
                        <span class="hidden lg:block">트윗</span>
                        <i class="fas fa-plus lg:hidden"></i>
                    </button>
                </div>
            </div>
            <!-- tweet button -->
            <div class="mr-3 mb-3 relative">
                <button
                    class="hidden lg:flex mt-3 px-2 py-1 lg:w-full w-12 h-12 rounded full hover:bg-blue-50 items-center"
                >
                    <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full" />
                    <div class="lg:ml-2 hidden lg:block">
                        <div class="text-sm font-bold">jhjang.com</div>
                        <div class="text-xs text-gray-500 text-left">@jhjang</div>
                    </div>
                    <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden lg:block"></i>
                </button>
                <div class="lg:hidden flex justify-center">
                    <img
                        src="http://picsum.photos/100"
                        class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
                    />
                </div>
            </div>
        </div>
        <!-- main section -->
        <div class="flex-1 flex h-screen">
            <!-- <Notification /> -->
            <Home />
            <Trends />
        </div>
    </div>
</template>
<script>
import Home from './pages/Home.vue';
import Notification from './pages/Notifications.vue';
import Trends from './components/trends.vue';

export default {
    components: { Home, Trends, Notification },
    setup() {},
};
</script>
<style></style>
