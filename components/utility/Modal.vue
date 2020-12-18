<template>
    <transition name="modal">
        <div class="modal-mask" @click="dismiss($event)">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">
                        Information or Alert
                    </slot>
                    <span @click="$emit('close')">
                        <MdCloseIcon class="close-button"/>
                    </span>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        This is a default message.
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    "name": "Modal",
    "components": {
        "MdCloseIcon": () => import("vue-ionicons/dist/md-close.vue")
    },
    "methods": {
        dismiss (event) {

            if (event.target.className === "modal-mask") {

                this.$emit("close")

            }

        }
    }
}
</script>

<style scoped>
    .close-button {
        cursor: pointer;
    }
    .modal-mask {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        overflow: scroll;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
        display: flex;
        /* align-items: center; */
        justify-content: center;
    }

    .modal-container {
        max-width: 948px;
        min-width: 768px;
        height: fit-content;
        background-color: #FFF;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-header {
        margin-top: 0;
        font-size: 16px;
        font-weight: 400;
        padding: 1rem;
        text-align: left;
        background-color: #0d7ad4;
        color: #FFF !important;
        display: flex;
        justify-content: space-between;
    }

    .modal-body {
        margin: 20px 0;
        padding: 0.5rem;
        color: rgb(192, 196, 200);
    }

    .modal-footer {
        display: flex;
        padding: 0.5rem;
        justify-content: flex-end;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
