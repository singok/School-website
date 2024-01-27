<script>
export default {
    name: "Datatable",
    data() {
        return {
            dataItems: [{
                    name: 'African Elephant',
                    species: 'Loxodonta africana',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Forests',
                },
                {
                    name: 'African Elephant',
                    species: 'Loxodonta africana',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Forests',
                },
                {
                    name: 'cfrican Elephant',
                    species: 'Loxodonta africana',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Forests',
                },
                {
                    name: 'bfrican Elephant',
                    species: 'Loxodonta africana',
                    diet: 'Herbivore',
                    habitat: 'Savanna, Forests',
                },
            ]
        }
    }
}
</script>

<template>
<v-data-table :items="this.dataItems"></v-data-table>
</template>

<style scoped>
</style>
