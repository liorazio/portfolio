<template>
    <transition type="transition" appear>
        <div class="modal-overlay" @click="closeModal()">
        </div>
    </transition>
    <transition type="transition" appear>
        <div class="modal" role="dialog">
            <div class="btn-close">
                <i @click="closeModal()" id="btn-close" class="fa-regular fa-rectangle-xmark"></i>
            </div>
            <img class="modal-img" :src="this.imgSrc" alt="bigger img">
            <div class="text-under-img">
                <h3 v-if="this.caption">{{ this.caption }}</h3>
                <p>{{ this.description }}</p>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    name: "GalleryItemModal",
    mounted: function () {
        document.addEventListener('keydown', this.onKeyDown);
    },
    beforeUnmount: function () {
        document.removeEventListener('keydown', this.onKeyDown);
    },
    methods: {
        closeModal: function () {
            this.$emit('modal-close')
        },
        onKeyDown: function (event) {
            if (event.key === 'Escape') {
                this.closeModal()
            }
        }
    },
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: false,
            default: null
        },
        description: {
            type: String,
            required: false,
            default: null
        },
    },
    emits: ['modal-close']
}
</script>

<style scoped>
p {
    font-size: 20px;
}

.text-under-img {
    font-weight: lighter;
    margin-top: 10px;
}

.btn-close {
    font-size: 30px;
    margin-right: 1em;
    text-align: right;
    height: 1em;
}

#btn-close {
    cursor: pointer;
    position: fixed;
    margin-bottom: 10px;
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    width: fit-content;
    height: fit-content;
    /*max-width: 22em;*/
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    background: #FFF;
    z-index: 999;
    transform: none;
}

.modal-img {
    object-fit: contain;
    width: min(75vh, 50vw);
    height: min(75vh, 50vw);
}

.modal-overlay {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: #2c3e50;
    opacity: 0.6;
    cursor: pointer;
}
</style>