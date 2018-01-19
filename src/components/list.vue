<template>
<div>
  <ul class="list">
    <li v-for="(item, index) in list" :key="item.id" class="item">{{index}},{{item.name}}</li>
  </ul>
  <button @click="pushItem()">Push item</button>
  <button @click="popItem()">Pop item</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornad' }
      ],
      id: 21
    };
  },
  methods: {
    pushItem() {
      this.list.push({
        id: this.id + 1,
        name: 'test'
      });
    },
    popItem() {
      this.list.pop();
    }
  }
};
</script>

 <style lang="scss" scoped>
  .list {
    font-size: 16px;
    .item {
      color: red;
      transform: translate(10px, 0);
    }
  }
</style>
