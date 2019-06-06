<template>
  <div class="lg-layout lg-layout-row">
    <!-- navbar -->
    <Header></Header>
    <div class="lg-layout-main">
      <div class="lg-layout-container">
        <Menu></Menu>
        <div class="lg-layout-inner">
          <router-view />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Header from '@/components/header';
import Menu from '@/components/navmenu';

export default {
  name: 'App',
  data() {
    return {
    };
  },
  components: {
    Header,
    Menu
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="scss">
@import "./common/css/_base.scss";
@import "./common/css/_mixin.scss";
@import "./common/css/_layout.scss";
@import "./common/css/_navmenu.scss";
@import "./common/css/_crumb.scss";
@import "./common/css/_iconfont.scss";

</style>
