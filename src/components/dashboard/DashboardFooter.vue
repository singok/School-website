<script>
export default {
    name: "DashboardFooter"
}
</script>

<template>
<v-footer class="d-flex flex-column">
    <div class="py-2 bg-teal-lighten-5 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
</v-footer>
</template>

<style scoped>
</style>
