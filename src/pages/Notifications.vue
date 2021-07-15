<template>
    <div class="flex-1 border-gray-100 flex flex-col overflow-y-auto">
        <!-- Title -->
        <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
        <!-- notifications -->
        <div
            class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer"
            v-for="notification in 10"
            :key="notification"
        >
            <div class="flex justify-between">
                <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-80" />
                <i
                    class="
                        fas
                        fa-ellipsis-h
                        text-gray-500
                        hover:bg-blue-50 hover:text-primary
                        p-2
                        rounded-full
                        w-10
                        h-10
                        flex
                        items-center
                        justify-center
                    "
                ></i>
            </div>
            <div><span class="font-bold">시크릿 님의 최근 트윗</span></div>
            <div class="text-gray-500">
                참치는 동원참치참치는 동원참치참치는 동원참치참치는 동원참치참치는 동원참치참치는 동원참치참치는
                동원참치참치는 동원참치참치는 동원참치참치는 동원참치참치는 동원참치참치는 동원참치참치는 동원참치
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
