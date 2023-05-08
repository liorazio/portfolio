<template>
    <div :class="`grid-x${gridSpanCalc}-width`">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "CenterGridItem",
    props: {
        gridSpan: {
            type: Number,
            required: false,
            default: 4
        },
    },
    data: function () {
        return {gridSpanCalc: 4}
    },
    methods: {
        onResize: function () {
            //span calculate for resize
            if (window.innerWidth > 768) {
                this.gridSpanCalc = this.gridSpan
            } else {
                this.gridSpanCalc = 12
            }
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    unmounted() {
        window.removeEventListener('resize', this.onResize)
    },
}
</script>

<style scoped>

.grid-x4-width {
    grid-column-start: span 4;
    grid-column-end: span 4;
}

.grid-x6-width {
    grid-column-start: span 6;
    grid-column-end: span 6;
}

.grid-x12-width {
    grid-column-start: span 12;
    grid-column-end: span 12;
}

</style>