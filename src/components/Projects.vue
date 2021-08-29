<template>
  <section class="projects">
    <div id="projects">
      <WideHeader text="Projects"/>
      <ProjectGrid class="project-grid"/>
    </div>
  </section>
</template>

<script>
import ProjectGrid from "@/components/ProjectGrid";
import WideHeader from "@/components/WideHeader";

export default {
  name: "Projects",
  components: {WideHeader, ProjectGrid}
}
</script>

<style scoped>
.project-grid {
  display: grid;
  max-width: 50vw;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
}

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

  .project-grid {
    display: grid;
    max-width: 90vw;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-gap: 1rem;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: center;
  }

  .wide-letter-heading {
    letter-spacing: 6vw;
    font-weight: bold;
  }

}

</style>