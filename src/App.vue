<template>
    <div class="flex h-screen">
        <!-- side section -->
        <div class="w-20 xl:w-1/4 pt-5 xl:ml-10 flex flex-col justify-between border-r border-gray-100">
            <div class="flex flex-col items-center lg:items-start">
                <!-- twitter logo -->
                <i class="fab fa-twitter text-3xl text-primary lg:ml-4 mb-3"></i>
                <!-- sidemenu icons -->
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="fas fa-home fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="fas fa-hashtag fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-bell fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-envelope fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-bookmark fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-list-alt fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                    <i class="far fa-user fa-fw text-2xl"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
                </div>
                <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
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
        <div class="flex-1">
            <div class="flex h-screen">
                <!-- main section -->
                <div class="flex-1 border-r border-gray-100 overflow-y-auto">
                    <div class="flex flex-col">
                        <!-- page title -->
                        <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
                        <!-- tweeting setion -->
                        <div class="flex px-3 py-3 border-b-8 border-gray-100">
                            <img
                                src="http://picsum.photos/200"
                                class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
                            />
                            <div class="ml-2 flex-1 flex flex-col">
                                <textarea
                                    id="textarea"
                                    placeholder="무슨 일이 일어나고 있나요?"
                                    class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
                                ></textarea>
                                <div class="text-right">
                                    <button
                                        class="
                                            bg-primary
                                            hover:bg-dark
                                            text-sm
                                            font-bold
                                            text-white
                                            px-4
                                            py-1
                                            rounded-full
                                        "
                                    >
                                        트윗
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- tweets -->
                        <div class="flex px-3 py-3 border-b border-gray-100" v-for="tweet in 10" :key="tweet">
                            <img
                                src="http://picsum.photos/200"
                                class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
                            />
                            <div class="ml-3 flex-1 flex flex-col space-y-1">
                                <div class="text-sm space-x-1">
                                    <span class="font-bold">KMS(T) 패치 알리미</span>
                                    <span class="text-gray-500 text-xs">@kmspatcher</span>
                                    <span>·</span>
                                    <span class="text-graqy-500 text-xs">2019년 7월 17일</span>
                                </div>
                                <!-- tweet body -->
                                <div>
                                    http://inven.co.kr/board/maple/2304/16586 안녕하세요. WzComparerR2-KMS을 수정하여
                                    캐시 이펙트와 믹스염색이 가능하도록 만들어보았습니다. 해당 링크에서 다운로드 받으실
                                    수 있습니다. 감사합니다.
                                </div>
                                <!-- tweet actions -->
                                <div class="flex justify-between">
                                    <div class="text-gray-500 hover:text-primary">
                                        <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
                                        <span class="ml-1 textgray-500 text-sm">11</span>
                                    </div>
                                    <div class="text-gray-500 hover:text-green-500">
                                        <i class="fas fa-retweet hover:bg-blue-50 rounded-full p-2"></i>
                                        <span class="ml-1 textgray-500 text-sm">11</span>
                                    </div>
                                    <div class="text-gray-500 hover:text-read-500">
                                        <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
                                        <span class="ml-1 textgray-500 text-sm">11</span>
                                    </div>
                                    <div class="text-gray-500 hover:text-primary">
                                        <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- trend section -->
                <div class="w-2/5">trend</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
