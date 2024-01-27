<script>
import DashboardBar from './DashboardBar.vue';
import DashboardSideBar from './DashboardSideBar.vue';
import DashboardFooter from './DashboardFooter.vue';

export default {
  name:'Dashboard',
  components: {
    DashboardBar,
    DashboardSideBar,
    DashboardFooter
  },
  data() {
    return {
      menuList:Array()
    }
  },
  methods: {
    listItem() {
      this.menuList = [
        {icon:"mdi-view-dashboard", link:"dashboard", title:"Dashboard"},
        {icon:"mdi-newspaper", link:"news", title:"News/Notice/Article"}
      ];
    }
  },
  beforeMount() {
    this.listItem();
  }
}
</script>

<template>
<DashboardSideBar :menuList="this.menuList" />
<DashboardBar />
<v-main class="d-flex flex-column" style="min-height: 100vh;">
    <router-view></router-view>
    <DashboardFooter />
</v-main>
</template>

<style scoped></style>
