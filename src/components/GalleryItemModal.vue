<template>
  <transition type="transition" appear>
    <div class="modal-overlay" @click="$emit('modal-overlay-click')">
    </div>
  </transition>
  <transition type="transition" appear>
    <div class="modal" role="dialog">
      <img class="modal-img" :src="this.imgSrc" alt="bigger img">
      <h2 v-if="this.caption">{{ this.caption }}</h2>
      <h3>{{ this.description }}</h3>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GalleryItemModal",
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
  emits: ['modal-overlay-click']
}
</script>

<style scoped>

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
  width: 50vw;
  height: 50vw
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

@media only screen and (max-width: 768px) {
  .modal-img {
    object-fit: contain;
    width: 90vw;
    height: 90vw
  }
}
</style>