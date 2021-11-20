<template>
  <div class="hidden lg:block lg:w-2/5 py-2">
    <!-- tweet search input -->
    <div class="relative mb-5">
      <input
        placeholder="트위터 검색"
        type="text"
        class="pl-10 rounded-full w-full p-2 bg-gray-100 text-sm focus:right-1 focus:ring-primary focus:bg-white focus:outline-none"
      />
      <i class="fas fa-search absolute left-0 mt-3 ml-3 text-sm text-light" />
    </div>
    <div class="w-full rounded-lg bg-gray-50 flex flex-col">
      <div
        class="flex items-center justify-between p-3 py-2 border-b border-gray-100"
      >
        <span class="text-lg font-bold">나를 위한 트렌드</span>
      </div>
      <div
        class="border-b border-gray-100 hover:bg-gray-200 px-4 py-2 cursor-pointer"
        v-for="trend in randomTrends"
        :key="trend"
      >
        <div class="flex">
          <div class="flex-1 flex flex-col">
            <router-link :to="`/tweet/${trend.id}`">
              <div class="text-gray-500 mt-2">#{{ trend.username }}</div>
              <div class="font-bold text-lg mt-2">{{ trend.tweet_body }}</div>
              <div class="text-gray-500 mt-2">
                {{ trend.num_retweets }}명이 트윗
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- follow recommends -->
    <div class="mt-5 w-full rounded-lg bg-gray-50 flex flex-col">
      <div class="p-3 py-3 border-b border-gray-100">
        <span class="text-lg font-bold">팔로우 추천</span>
      </div>
      <div
        class="border-b border-gray-100 hover:bg-gray-200 px-4 py-2 cursor-pointer"
        v-for="trend in randomRecommendationUser"
        :key="trend"
      >
        <div class="flex items-center">
          <img
            :src="trend.profile_image_url"
            class="w-12 h-12 rounded-full mr-2"
          />
          <div class="flex-1 flex flex-col">
            <div class="font-bold text-lg">{{ trend.email }}</div>
            <div class="text-gray-500 text-sm">{{ trend.username }}</div>
          </div>
          <div
            v-if="currentUser.followings.includes(trend.uid)"
            @click="onUnFollow(trend.uid)"
          >
            <button
              class="bg-red-400 border-2 hover:opacity-100 px-2 py-1 rounded-full text-white text-sm"
            >
              언팔로우
            </button>
          </div>
          <div v-else @click="onFollow(trend.uid)">
            <button
              class="border-2 border-primary hover:bg-blue-100 px-2 py-1 rounded-full text-primary text-sm"
            >
              팔로우
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onBeforeMount, ref } from "vue";
import store from "../store";
import { TWEET_COLEECTION, USER_COLEECTION } from "../firebase";
import getTweetInfo from "../utils/getTweetInfo";
import firebase from "firebase";
const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

export default {
  setup() {
    const currentUser = computed(() => store.state.user);
    const trends = ref([]);
    const recommendationUser = ref([]);
    const user = ref([]);
    const randomTrends = computed(() => {
      //불변 객체
      const copy = [...trends.value];
      shuffle(copy);
      return copy.slice(0, 3);
    });

    const randomRecommendationUser = computed(() => {
      const copy = [...user.value];
      shuffle(copy);
      return copy.slice(0, 3);
    });

    onBeforeMount(() => {
      TWEET_COLEECTION.orderBy("create_at", "desc").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          let trend = await getTweetInfo(change.doc.data(0), currentUser.value);
          if (change.type === "added") {
            trends.value.splice(change.newIndex, 0, trend);
          } else if (change.type == "modified") {
            trends.value.splice(change.oldIndex, 1, trend);
          } else if (change.type == "removed") {
            trends.value.splice(change.oldIndex, 1);
          }
        });
      });

      USER_COLEECTION.where("uid", "!=", currentUser.value.uid).onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            user.value.push(change.doc.data());
          });
        }
      );
    });

    const onFollow = async (userId) => {
      await USER_COLEECTION.doc(currentUser.value.uid).update({
        followings: firebase.firestore.FieldValue.arrayUnion(userId),
      });

      await USER_COLEECTION.doc(userId).update({
        followers: firebase.firestore.FieldValue.arrayUnion(
          currentUser.value.uid
        ),
      });

      store.commit("SET_FOLLOW", userId);
    };

    const onUnFollow = async (userId) => {
      await USER_COLEECTION.doc(currentUser.value.uid).update({
        followings: firebase.firestore.FieldValue.arrayRemove(userId),
      });

      await USER_COLEECTION.doc(userId).update({
        followers: firebase.firestore.FieldValue.arrayRemove(
          currentUser.value.uid
        ),
      });
      store.commit("SET_UN_FOLLOW", userId);
    };

    return {
      trends,
      randomTrends,
      currentUser,
      randomRecommendationUser,
      recommendationUser,
      onUnFollow,
      onFollow,
    };
  },
};
</script>

<style></style>
