<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    @click="$emit('close-modal')"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <!-- contetnts -->
      <div
        @click.stop
        class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
      >
        <div
          class="border-b border-gray-100 p2 flex items-center justify-between"
        >
          <div class="flex items-center">
            <button
              @click="$emit('close-modal')"
              class="flex items-center justify-center fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-blue-50 rounded-full"
            ></button>
            <span>프로필 수정</span>
          </div>
          <div class="text-right mr-2">
            <button
              @click="onSaveProfile"
              class="hover:bg-dark bg-primary text-white font-bold px-3 py-1 rounded-full"
            >
              저장
            </button>
          </div>
        </div>
        <!-- tweeting section -->
        <div class="h-60">
          <div
            class="bg-gray-300 h-40 relative flex items-center justify-center"
          >
            <img
              ref="backgroundImage"
              :src="currentUser.background_image_url"
              class="object-cover absolute h-full w-full"
            />
            <button
              @click="onChangeBackgroundImage"
              class="absolute h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg"
            ></button>
            <input
              @change="previewBackgroundImage"
              type="file"
              accept="image/*"
              id="backgroundImageInput"
              class="hidden"
            />
            <img
              ref="profileImage"
              :src="currentUser.profile_image_url"
              class="border-4 border-white w-28 h-28 absolute -bottom-14 left-2 rounded-full"
            />
            <button
              @click="onChangeProfileImage"
              class="absolute left-11 h-10 w-10 hover:text-gray-200 left-8 -bottom-5 rounded-full fas fa-camera text-white text-lg"
            ></button>
            <input
              @change="previewProfileImage"
              type="file"
              accept="image/*"
              id="ProfileImageInput"
              class="hidden"
            />
          </div>
        </div>
        <div class="flex flex-col p-2">
          <div
            class="mx-2 my-1 px-2 py-1 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary"
          >
            <div class="text-sm">이름</div>
            <input
              type="text"
              readonly
              :value="currentUser.email"
              class="txet-black focus:outline-none"
            />
          </div>
          <div
            class="mx-2 my-1 px-2 py-5 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary"
          >
            <div class="text-sm">자기소개</div>
            <input
              type="text"
              placeholder="자기소개"
              :value="currentUser.introduceMyself"
              @change="introduceMyself($event)"
              class="w-full txet-black focus:outline-none"
            />
          </div>
          <div
            class="mx-2 my-1 px-2 py-3 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary"
          >
            <div class="text-sm">위치</div>
            <input
              type="text"
              placeholder="위치"
              :value="currentUser.location"
              @change="location($event)"
              class="w-full txet-black focus:outline-none"
            />
          </div>
          <div
            class="mx-2 my-1 px-2 py-3 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary"
          >
            <div class="text-sm">웹사이트</div>
            <input
              type="text"
              placeholder="웹사이트"
              :value="currentUser.site"
              @change="site($event)"
              class="w-full txet-black focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import addTweet from "../utils/addTweet";
import store from "../store";
import { storage, USER_COLEECTION } from "../firebase";
export default {
  setup(props, { emit }) {
    const tweetBody = ref("");
    const currentUser = computed(() => store.state.user);
    const profileImage = ref(null);
    const backgroundImage = ref(null);
    const profileImageData = ref(null);
    const backgroundImageData = ref(null);

    const onAddTweet = () => {
      try {
        addTweet(tweetBody.value, currentUser.value);
        tweetBody.value = "";
        emit("close-modal");
      } catch (e) {
        conosle.log("on add tweet errorr on homepage", e);
      }
    };
    const onChangeBackgroundImage = () => {
      document.getElementById("backgroundImageInput").click();
    };

    const onChangeProfileImage = () => {
      document.getElementById("ProfileImageInput").click();
    };

    const previewBackgroundImage = (event) => {
      const file = event.target.files[0];
      backgroundImageData.value = file;
      let reader = new FileReader();
      reader.onload = function (event) {
        backgroundImage.value.src = event.target.result;
      };
      reader.readAsDataURL(file);
    };

    const previewProfileImage = (event) => {
      const file = event.target.files[0];
      profileImageData.value = file;
      let reader = new FileReader();
      reader.onload = function (event) {
        profileImage.value.src = event.target.result;
      };
      reader.readAsDataURL(file);
    };

    // Profile edit value check
    const location = ($event) => {
      const locationValue = $event.target.value;
      location.value = locationValue;
    };

    const introduceMyself = ($event) => {
      const introduceMyselfValue = event.target.value;
      introduceMyself.value = introduceMyselfValue;
    };

    const site = ($event) => {
      const siteValue = $event.target.value;
      site.value = siteValue;
    };

    const onSaveProfile = async () => {
      if (
        !profileImageData.value &&
        !backgroundImageData.value &&
        !location.value &&
        !introduceMyself.value &&
        !site.value
      ) {
        return;
      }
      if (profileImageData.value) {
        try {
          const uploadTask = await storage
            .ref(`profile/${currentUser.value.uid}/profile`)
            .put(profileImageData.value);
          const url = await uploadTask.ref.getDownloadURL();
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            profile_image_url: url,
          });
          store.commit("SET_PROFILE_IMAGE", url);
        } catch {
          console.log(`profile image data error:${e}`);
        }
      }

      if (backgroundImageData.value) {
        try {
          const uploadTask = await storage
            .ref(`profile/${currentUser.value.uid}/background`)
            .put(backgroundImageData.value);
          const url = await uploadTask.ref.getDownloadURL();
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            background_image_url: url,
          });
          store.commit("SET_BACKGROUND_IMAGE", url);
        } catch {
          console.log(`profile image data error:${e}`);
        }
      }

      if (introduceMyself.value) {
        try {
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            introduceMyself: introduceMyself.value,
          });
          store.commit("SET_INTRODUCEMYSELF", introduceMyself.value);
        } catch (e) {
          console.log(`profile introduceMyself data error:${e}`);
        }
      }

      if (location.value) {
        try {
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            location: location.value,
          });
          store.commit("SET_LOCATION", location.value);
        } catch (e) {
          console.log(`profile location data error:${e}`);
        }
      }

      if (site.value) {
        try {
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            site: site.value,
          });
          store.commit("SET_SITE", site.value);
        } catch (e) {
          console.log(`profile site data error:${e}`);
        }
      }
      emit("close-modal");
    };

    return {
      tweetBody,
      onAddTweet,
      currentUser,
      onChangeBackgroundImage,
      onChangeProfileImage,
      previewBackgroundImage,
      backgroundImage,
      previewProfileImage,
      profileImage,
      onSaveProfile,
      profileImageData,
      backgroundImageData,
      introduceMyself,
      location,
      site,
    };
  },
};
</script>

<style></style>
