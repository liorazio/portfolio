<template>
  <div class="center-grid">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "CenterGrid",
}
</script>

<style scoped>
.center-grid {
  display: grid;
  width: 100%;
  margin: 30px auto;
  max-width: 50vw;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
}
@media only screen and (max-width: 768px) {

  .center-grid {
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
}
</style>