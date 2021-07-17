<template>
  <!-- tweets -->
  <div
    class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
  >
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
        http://inven.co.kr/board/maple/2304/16586 안녕하세요. WzComparerR2-KMS을
        수정하여 캐시 이펙트와 믹스염색이 가능하도록 만들어보았습니다. 해당
        링크에서 다운로드 받으실 수 있습니다. 감사합니다.
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
</template>

<script>
export default {};
</script>

<style></style>
