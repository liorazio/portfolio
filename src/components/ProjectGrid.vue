<template>
  <div>
    <Project title="Character design"/>
    <Project title="Gifs"/>
    <Project title="Golden aggle"/>
    <Project :grid-span="6" title="Illustrations"/>
    <Project :grid-span="6" title="Sketch book"/>
  </div>

</template>

<script>
import Project from "@/components/Project";

export default {
  name: "ProjectGrid",
  components: {Project}
}
</script>

<style scoped>
.project-grid {
  width: 100%;
  margin: 30px auto;
}

</style>