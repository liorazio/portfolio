<template>
    <div>
        <h1 class="wide-letter-heading">
            <slot/>
        </h1>
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
    letter-spacing: 0.1em;
    font-weight: bold;
}

</style>