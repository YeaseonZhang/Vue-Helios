<template>
  <div class="lg-navmenu has-horizontal" id="j-menu">
    <div class="lg-navmenu-logo">
      <a
        href="javascript:;"
        class="lg-logo"
        style="background-color: #0083ff;border-radius:4px;
                color:#fff;text-align:center;
                line-height:33px"
      >站点LOGO</a>
    </div>
    <div class="lg-userinfo">
      <div class="lg-userinfo-item lg-userinfo-anim"
        :class="{'is-on': showInfo}"
        @mouseover="showUser"
        @mouseout="hideUser">
        <span class="lg-userinfo-text lg-userinfo-own">
          <a href class="is-block">用户名abcdefg</a>
        </span>
        <i class="lg-icon-down"></i>
        <ul class="lg-userinfo-dorpdown">
          <li class="lg-userinfo-nitem">
            <a href class="is-block">个人中心</a>
          </li>
          <li class="lg-userinfo-nitem">
            <a href class="is-block">退出</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showInfo: false
    };
  },
  methods: {
    showUser() {
      this.showInfo = true;
    },
    hideUser() {
      this.showInfo = false;
    }
  }
};
</script>
<style lang="scss">

</style>
