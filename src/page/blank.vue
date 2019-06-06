<template>
  <router-view></router-view>
</template>
<script>
import { ajaxUrlBase } from '@/api';

export default {
  data() {
    return {

    };
  },
  mounted() {
    this.$nextTick(() => {
      ajaxUrlBase.initGet({ test: '111' }).then((res) => {
        console.log(res);
      });
      ajaxUrlBase.initPost({ test: '111' }).then((res) => {
        console.log(res);
      });
    });
  }
};
</script>
