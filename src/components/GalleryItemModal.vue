<template>
  <transition type="transition" appear>
    <div class="modal-overlay" @click="$emit('modal-overlay-click')">
    </div>
  </transition>
  <transition type="transition" appear>
    <div class="modal" role="dialog">
      <div class="btn-close">
        <i @click="$emit('modal-overlay-click')" id="btn-close" class="far fa-window-close"></i>
      </div>
      <img class="modal-img" :src="this.imgSrc" alt="bigger img">
      <div class="text-under-img">
        <h2 v-if="this.caption">{{ this.caption }}</h2>
        <h3>{{ this.description }}</h3>
      </div>
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