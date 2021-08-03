<template>
    <div
        class="fixed z-10 inset-0 overflow-y-auto"
        @click="$emit('close-modal')"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <!-- contetnts -->
            <div
                @click.stop
                class="
                    inline-block
                    bg-white
                    rounded-lg
                    text-left
                    overflow-hidden
                    shadow-xl
                    transform
                    transition-all
                    sm:my-8 sm:align-middle sm:max-w-lg
                    w-full
                "
            >
                <div class="border-b border-gray-100 p2 flex items-center justify-between">
                    <button
                        @click="$emit('close-modal')"
                        class="fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-blue-50 rounded-full"
                    ></button>
                    <div class="text-right block sm:hidden mr-2">
                        <!-- tweet button -->
                        <button
                            v-if="!tweetBody.length"
                            class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full"
                        >
                            트윗
                        </button>
                        <button
                            v-else
                            @click="onAddTweet"
                            class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full"
                        >
                            트윗
                        </button>
                    </div>
                </div>
                <!-- tweeting section -->
                <div class="flex p-4">
                    <img
                        :src="currentUser.profile_image_url"
                        class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
                    />
                    <div class="ml-2 flex-1 flex flex-col">
                        <textarea
                            v-model="tweetBody"
                            rows="5"
                            id="textarea"
                            placeholder="무슨 일이 일어나고 있나요?"
                            class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
                        ></textarea>
                        <div class="text-right hidden sm:block">
                            <!-- tweet button -->
                            <button
                                v-if="!tweetBody.length"
                                class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full"
                            >
                                트윗
                            </button>
                            <button
                                v-else
                                @click="onAddTweet"
                                class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full"
                            >
                                트윗
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import addTweet from '../utils/addTweet';
import store from '../store';
export default {
    setup(props, { emit }) {
        const tweetBody = ref('');
        const currentUser = computed(() => store.state.user);
        const onAddTweet = () => {
            try {
                addTweet(tweetBody.value, currentUser.value);
                tweetBody.value = '';
                emit('close-modal');
            } catch (e) {
                conosle.log('on add tweet errorr on homepage', e);
            }
        };
        return {
            tweetBody,
            onAddTweet,
            currentUser,
        };
    },
};
</script>

<style></style>
