<template>
  <section class="projects">
    <div id="projects">
      <h1 class="wide-letter-heading">Projects</h1>
      <ProjectGrid class="project-grid"/>
    </div>
  </section>
</template>

<script>
import ProjectGrid from "@/components/ProjectGrid";

export default {
  name: "Projects",
  components: {ProjectGrid}
}
</script>

<style scoped>
.project-grid {
  display: grid;
  max-width: 85vw;
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

.wide-letter-heading {
  letter-spacing: 1.5em;
  font-weight: bold;
}


@media only screen and (max-width: 768px) {
  #projects {
    margin-top: 20px;
  }

  .wide-letter-heading {
    letter-spacing: 6vw;
    font-weight: bold;
  }

}

</style>