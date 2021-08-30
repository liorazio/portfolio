<template>
  <section class="projects">
    <div id="projects">
      <WideHeader text="Projects"/>
      <CenterGrid>
          <Project title="Character design"/>
          <Project title="Gifs"/>
          <Project title="Golden aggle"/>
          <Project :grid-span="6" title="Illustrations"/>
          <Project :grid-span="6" title="Sketch book"/>
      </CenterGrid>
    </div>
  </section>
</template>

<script>
import Project from "@/components/Project";
import WideHeader from "@/components/WideHeader";
import CenterGrid from "@/components/CenterGrid";

export default {
  name: "Projects",
  components: {CenterGrid, WideHeader, Project}
}
</script>

<style scoped>

.projects {
  padding: 0 0 4rem 0;
  display: block
}

#projects {
  margin-top: 50px;

}


@media only screen and (max-width: 768px) {
  #projects {
    margin-top: 20px;
  }


}

</style>