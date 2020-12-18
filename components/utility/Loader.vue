<template>
    <transition name="fade">
        <div
            class="loader-container"
            v-if="isLoading"
        >
            <div class="loading-area">
                <orbit-spinner
                    :animation-duration="1000"
                    :size="100"
                    :color="'#0d7ad4'"
                />
                <p class="mt-2">{{ message }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
import {OrbitSpinner} from "epic-spinners"
export default {
    "components": {
        OrbitSpinner
    },
    data () {

        return {
            "timer": null
        }

    },
    "computed": {
        "isLoading": function () {

            return this.$store.getters.isLoading

        },
        "loadingMessages": function () {

            return this.$store.getters.loadingMessages

        },
        "message": function () {

            return this.loadingMessages.length
                ? this.loadingMessages[0]
                : "loading..."

        }
    },
    "watch": {
        "isLoading": function (newValue) {

            if (!newValue) {

                clearInterval(this.timer)
                this.message = "loading..."

            } else {

                let t = 1
                this.timer = setInterval(() => {

                    if (t > 6 && t < 31) {

                        this.message = "waiting for server response..."


                    } else if (t > 30 && t < 46) {

                        this.message = "we don't like to keep you waiting..."

                    } else if (t > 45 && t < 61) {

                        this.message = "wrapping up, almost there..."

                    } else if (t > 60) {

                        this.message = "something doesn't look right, kindly refresh your page."

                    } else {

                        this.message = this.loadingMessages.length
                            ? this.loadingMessages[0]
                            : "loading..."

                    }
                    t++

                }, 1000)

            }

        }
    }
}
</script>

<style scoped>
/*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>
