<template>
  <div>
    <Project/>
    <Project/>
    <Project/>
    <Project :grid-span="6"/>
    <Project :grid-span="6"/>
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
  margin: 30px auto ;
}

</style>