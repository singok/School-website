<script>
import Datatable from '../common/Datatable.vue';

export default {
    name: "DashboardNews",
    data() {
        return {
            breadcrumbItems: ["Dashboard", "News"]
        }
    }
}
</script>

<template>
<v-breadcrumbs :items="this.breadcrumbItems" divider="/"></v-breadcrumbs>

<div class="px-4 py-2">
  <Datatable />
</div>
</template>

<style scoped>
</style>
