<template>
    <div class="flex h-screen">
        <div class="w-20 xl:w-1/4 pt-5 xl:ml-10 flex flex-col justify-between border-r border-gray-100">
            <div class="flex flex-col items-start">
                <!-- twitter logo -->
                <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
                <!-- sidemenu icons -->
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="fas fa-home fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg">홈</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="fas fa-hashtag fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg">탐색하기</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-bell fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg">알림</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-envelope fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg">쪽지</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-bookmark fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg">북마크</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-list-alt fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg">리스트</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-user fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg">프로필</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg">더보기</span>
                </div>
            </div>
            <!-- tweet button -->
            <div class="mr-3">
                <button class="mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark foucs:outline-none">
                    트윗
                </button>
            </div>
            <div class="mr-3 mb-3">
                <button class="mt-3 px-2 py-1 w-full h-12 rounded full hover:bg-blue-50 flex items-center">
                    <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full" />
                    <div class="ml-2">
                        <div class="text-sm font-bold">jhjang.com</div>
                        <div class="text-xs text-gray-500 text-left">@jhjang</div>
                    </div>
                    <i class="ml-auto fas fa-ellipsis-h fa-fw text-x5"></i>
                </button>
            </div>
        </div>
        <div class="xl:pr-3 mb-3 relative"></div>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
