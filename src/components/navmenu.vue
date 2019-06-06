<template>
  <div class="lg-navmenu">
    <ul class="lg-navmenu-l1">
      <li class="lg-l1-item" v-for="(item, index) in menu"
        :class="{ 'is-select': item.isSelect, 'is-current': item.isCurrent }" :key="item.path">
        <h3 class="lg-l1-title">
          <a href="javascript:void(0)" class="is-block"
            @click="toRouter(item, index)">
            <i class='lg-navmenu-icon' :class="[item.icon]"></i>
            <span class="lg-navmenu-text">{{item.name}}</span>
            <i class="lg-icon-down" v-if="item.children && item.children.length"></i>
          </a>
        </h3>
        <ul class="lg-navmenu-l2" v-if="item.children && item.children.length">
          <li class="lg-l2-item" v-for="(subItem, subIndex) in item.children"
            :class="{ 'is-current': subItem.isCurrent }" :key="subItem.path">
            <h4 class="lg-l2-title">
              <a href="javascript:void(0)" class="is-block"
                @click="toSubRouter(subItem, index, subIndex)">
                <span class="lg-navmenu-text">{{subItem.name}}</span>
              </a>
            </h4>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import menuList from '@/common/js/menu-config';

export default {
  data() {
    return {
      menu: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.menu = menuList;
      this.updateCurrent(this.routerPath);
    });
  },
  methods: {
    toRouter(obj, idx) {
      if (obj.children) { // 含有子路由
        const tempMenu = Object.assign([], this.menu);
        if (obj.isSelect) { // 展开状态
          tempMenu[idx].isSelect = false;
        } else { // 收起状态
          tempMenu[idx].isSelect = true;
        }
        this.menu = tempMenu;
      } else { // 没有子路由直接跳转
        this.$router.push({
          path: obj.path
        });
      }
    },
    toSubRouter(obj, idx, subIdx) {
      console.log(obj, idx, subIdx);
      this.$router.push({
        path: obj.path
      });
    },
    updateCurrent(path) {
      /* eslint-disable no-lonely-if */
      const tempMenu = Object.assign([], this.menu);
      for (let i = 0; i < tempMenu.length; i += 1) {
        if (path.indexOf(tempMenu[i].path) >= 0) { // 当前页面在这个菜单下
          tempMenu[i].isSelect = true;
          if (tempMenu[i].children && tempMenu[i].children.length > 0) { // 含有子菜单
            for (let j = 0; j < tempMenu[i].children.length; j += 1) {
              if (tempMenu[i].children[j].path === path) { // 匹配
                tempMenu[i].children[j].isCurrent = true;
              } else {
                tempMenu[i].children[j].isCurrent = false;
              }
            }
          } else {
            tempMenu[i].isCurrent = true;
          }
        } else { // 不在当前菜单下
          if (tempMenu[i].children && tempMenu[i].children.length > 0) {
            for (let j = 0; j < tempMenu[i].children.length; j += 1) {
              tempMenu[i].children[j].isCurrent = false;
            }
          } else {
            tempMenu[i].isCurrent = false;
          }
        }
      }
      this.menu = tempMenu;
    }
  },
  computed: {
    routerPath() {
      return this.$route.path;
    }
  },
  /* eslint-disable object-shorthand */
  /* eslint-disable func-names */
  watch: {
    routerPath: function (path) {
      this.updateCurrent(path);
    }
  }
};
</script>
