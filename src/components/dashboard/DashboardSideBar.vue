<script>
export default {
  name: "DashboardSideBar",
  props: {
      menuList: Array
  }
}
</script>

<template>
<v-navigation-drawer expand-on-hover rail>
    <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams" subtitle="sandra_a88@gmailcom"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
        <v-list-item v-for="item in this.menuList" :key="item.value" :prepend-icon="item.icon" :title="item.title" :to="item.link"></v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<style scoped>
</style>
