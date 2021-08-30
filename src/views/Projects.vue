<template>
<div>
  <WideHeader>aaaadfsga</WideHeader>
  <CenterGrid>
    <Project title="Character design"/>
    <Project title="Gifs"/>
    <Project title="Golden aggle"/>
    <Project :grid-span="6" title="Illustrations"/>
    <Project :grid-span="6" title="Sketch book"/>
  </CenterGrid>
</div>
</template>

<script>
import WideHeader from "@/components/WideHeader";
import CenterGrid from "@/components/CenterGrid";
import Project from "@/components/Project";
export default {
  name: "Projects",
  components: {Project, CenterGrid, WideHeader}
}
</script>

<style scoped>

</style>