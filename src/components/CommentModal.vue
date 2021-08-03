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
                            답글
                        </button>
                        <button
                            v-else
                            @click="onAddTweet"
                            class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full"
                        >
                            답글
                        </button>
                    </div>
                </div>
                <!-- tweeting section -->
                <div>
                    <!-- original tweet -->
                    <div class="flex px-4 pt-4 pb-2">
                        <div flex flex-col>
                            <img
                                :src="tweet.profile_image_url"
                                class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
                            />
                            <div class="ml-5 w-0.5 h-full bg-gray-300 mt-2 -mb-1"></div>
                        </div>
                        <div class="ml-2 flex-1">
                            <div class="flex space-x-2">
                                <span class="font-bold text-sm">{{ tweet.email }}</span>
                                <span class="text-gray text-sm">{{ tweet.username }}}</span>
                                <span class="text-gray text-sm">{{ moment(tweet.create_at).fromNow() }}</span>
                            </div>
                            <div class="text-sm">{{ tweet.tweet_body }}</div>
                            <div>
                                <span class="text-primary text-sm">@{{ tweet.username }}</span>
                                <span class="text-gray text-sm">님에게 보내는 답글</span>
                            </div>
                        </div>
                    </div>
                    <!-- tweeting  -->
                    <div class="flex px-4 pb-4">
                        <img
                            :src="currentUser.profile_image_url"
                            class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
                        />
                        <div class="ml-2 flex-1 flex flex-col">
                            <textarea
                                v-model="tweetBody"
                                rows="5"
                                id="textarea"
                                placeholder="내 답글을 트윗합니다."
                                class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
                            ></textarea>
                            <div class="text-right hidden sm:block">
                                <!-- tweet button -->
                                <button
                                    v-if="!tweetBody.length"
                                    class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full"
                                >
                                    답글
                                </button>
                                <button
                                    v-else
                                    @click="onAddTweet"
                                    class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full"
                                >
                                    답글
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import moment from 'moment';
import store from '../store';
export default {
    props: ['tweet'],
    setup(props, { emit }) {
        const tweetBody = ref('');
        const currentUser = computed(() => store.state.user);
        return {
            tweetBody,
            currentUser,
            moment,
        };
    },
};
</script>

<style></style>
