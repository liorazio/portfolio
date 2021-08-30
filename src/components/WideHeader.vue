<template>
  <div>
    <h1 class="wide-letter-heading">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "WideHeader",
  props: {
    text: String
  }
}
</script>

<style scoped>

.wide-letter-heading {
  letter-spacing: 1.5em;
  font-weight: bold;
}

@media only screen and (max-width: 768px) {
  .wide-letter-heading {
    letter-spacing: 6vw;
    font-weight: bold;
  }
}
</style>