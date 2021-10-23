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
              ref="backgroundImageRef"
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
            <div class="text-sm">웹사이트</div>
            <input
              type="text"
              placeholder="웹사이트"
              :value="currentUser.site"
              @change="site($event)"
              class="w-full txet-black focus:outline-none"
            />
          </div>

          <div class="flex px-2 py-2">
            <div
              class="w-3/4 px-2 py-3 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary"
            >
              <div class="text-sm right">우편번호</div>
              <input
                type="text"
                placeholder="우편번호"
                :value="currentUser.zonecode || updateState.zonecode"
                @change="zonecode($event)"
                class="w-full text-black focus:outline-none"
              />
            </div>
            <div>
              <button
                class="px-3 py-3 mx-2 my-4 w-full rounded hover:bg-blue-50 flex border border-primary text-center text-sm text-primary px-3 py-2 leading-loose"
                @click="ShowAddressOpen = true"
              >
                주소검색
              </button>
            </div>
          </div>
          <div
            class="mx-2 my-1 px-2 py-3 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary"
          >
            <div class="text-sm">주소1</div>
            <input
              type="text"
              placeholder="주소1"
              :value="currentUser.address || updateState.address"
              @change="address($event)"
              class="w-full text-black focus:outline-none"
            />
          </div>
          <div
            class="mx-2 my-1 px-2 py-3 border text-gray border-gray-200 rounded hover:border-primary hover:text-primary"
          >
            <div class="text-sm">주소2</div>
            <input
              type="text"
              placeholder="주소2"
              :value="currentUser.address2"
              @change="address2($event)"
              class="w-full text-black focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
    <VueDaumPostcode
      class="fixed z-10 inset-20 overflow-y-auto"
      v-if="ShowAddressOpen"
      :options="options"
      @complete="addressSearched"
      @close-modal="ShowAddressOpen = false"
    />
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import addTweet from "../utils/addTweet";
import store from "../store";
import { storage, USER_COLEECTION } from "../firebase";
import { VueDaumPostcode } from "vue-daum-postcode";
export default {
  components: { VueDaumPostcode },
  setup(props, { emit }) {
    const tweetBody = ref("");
    const currentUser = computed(() => store.state.user);
    const updateState = reactive({});
    const backgroundImageRef = ref(null);
    const ShowAddressOpen = ref(false);

    console.log(currentUser.value, currentUser.value.address);

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
      backgroundImageRef.value.click();
    };

    const onChangeProfileImage = () => {
      document.getElementById("ProfileImageInput").click();
    };

    const previewBackgroundImage = (event) => {
      const file = event.target.files[0];
      updateState.backgroundImageData = file;
      let reader = new FileReader();
      reader.onload = function (event) {
        updateState.backgroundImage = {
          src: event.target.result,
        };
      };
      reader.readAsDataURL(file);
    };

    const previewProfileImage = (event) => {
      const file = event.target.files[0];
      updateState.profileImageData = file;
      let reader = new FileReader();
      reader.onload = function (event) {
        updateState.profileImage = {
          src: event.target.result,
        };
      };
      reader.readAsDataURL(file);
    };

    // Profile edit value check

    const introduceMyself = ($event) => {
      const introduceMyselfValue = $event.target.value;
      updateState.introduceMyself = introduceMyselfValue;
    };

    const site = ($event) => {
      const siteValue = $event.target.value;
      updateState.site = siteValue;
    };

    const address2 = ($event) => {
      const address2Value = $event.target.value;
      updateState.address2 = address2Value;
    };

    const zonecode = ($event) => {
      const zonecodeValue = $evnet.target.value;
      updateState.zonecode = zonecodeValue;
    };
    const address = ($event) => {
      const addressValue = $event.target.value;
      updateState.address = addressValue;
    };
    //daum 주소찾기 컴포넌트 실행 코드
    const addressSearched = (data) => {
      //address
      //address2
      //zonecode
      updateState.address = data.address;
      updateState.address2 = data.address2;
      updateState.zonecode = data.zonecode;
      ShowAddressOpen.value = false;
      console.log("1", currentUser);
    };

    const onSaveProfile = async () => {
      if (!Object.keys(updateState).length) {
        return;
      }

      const {
        profileImageData,
        backgroundImageData,
        introduceMyself,
        address,
        address2,
        zonecode,
        site,
      } = updateState;

      if (profileImageData) {
        try {
          const uploadTask = await storage
            .ref(`profile/${currentUser.value.uid}/profile`)
            .put(profileImageData);
          const url = await uploadTask.ref.getDownloadURL();
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            profile_image_url: url,
          });
          store.commit("SET_PROFILE_IMAGE", url);
        } catch {
          console.log(`profile image data error:${e}`);
        }
      }

      if (backgroundImageData) {
        try {
          const uploadTask = await storage
            .ref(`profile/${currentUser.value.uid}/background`)
            .put(backgroundImageData);
          const url = await uploadTask.ref.getDownloadURL();
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            background_image_url: url,
          });
          store.commit("SET_BACKGROUND_IMAGE", url);
        } catch {
          console.log(`profile image data error:${e}`);
        }
      }

      if (introduceMyself) {
        try {
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            introduceMyself,
          });
          store.commit("SET_INTRODUCEMYSELF", introduceMyself);
        } catch (e) {
          console.log(`profile introduceMyself data error:${e}`);
        }
      }

      if (address) {
        try {
          await USER_COLEECTION.doc(currentUser.value.uid).update({ address });
          store.commit("SET_ADDRESS", address);
        } catch (e) {
          console.log(`profile address data error:${e}`);
        }
      }

      if (address2) {
        try {
          await USER_COLEECTION.doc(currentUser.value.uid).update({
            address2,
          });
          store.commit("SET_ADDRESS2", address2);
        } catch (e) {
          console.log(`profile ADDRESS2 data error:${e}`);
        }
      }

      if (zonecode) {
        try {
          await USER_COLEECTION.doc(currentUser.value.uid).update({ zonecode });
          store.commit("SET_ZONECODE", zonecode);
        } catch (e) {
          console.log(`profile zonecode data error:${e}`);
        }
      }

      if (site) {
        try {
          await USER_COLEECTION.doc(currentUser.value.uid).update({ site });
          store.commit("SET_SITE", site);
        } catch (e) {
          console.log(`profile site data error:${e}`);
        }
      }
      emit("close-modal");
    };

    return {
      backgroundImageRef,
      tweetBody,
      onAddTweet,
      currentUser,
      onChangeBackgroundImage,
      onChangeProfileImage,
      previewBackgroundImage,
      previewProfileImage,
      onSaveProfile,
      addressSearched,
      introduceMyself,
      ShowAddressOpen,
      site,
      address,
      address2,
      zonecode,
      updateState,
    };
  },
};
</script>

<style></style>
