<template>
  <div>
    <WideHeader>Gallery</WideHeader>
    <CenterGrid>
      <GalleryItem v-for="item in items" :imgSrc="item.imgSrc" :gridSpan="item.gridSpan" :caption="item.caption"
                   :description="item.description" :key="itemList + '/' +item.imgSrc"/>
    </CenterGrid>
  </div>
</template>

<script>
import WideHeader from "@/components/WideHeader";
import CenterGrid from "@/components/CenterGrid";
import GalleryItem from "@/components/GalleryItem";

// const axios = require('axios').default;


export default {
  name: "Projects",
  components: {GalleryItem, CenterGrid, WideHeader},
  props: {
    itemList: {
      type: String,
      required: false,
      default: './cd.json'
    }
  },
  methods: {
    loadItemList: function () {
      const json = require.context("../assets/json", false, /.*\.json$/)
      this.items = json(this.itemList)
    }
  },
  mounted: function () {
    this.loadItemList()
  },
  updated: function () {
    this.loadItemList()
  },
  data: function () {
    return {
      items: []
    }
  }
}
</script>

<style scoped>

</style>