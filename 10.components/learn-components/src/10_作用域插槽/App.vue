<template>
  <div>
    <ChildCpnVue>
      <template v-slot="slotProps"> {{ slotProps.names }}</template>
      <template v-slot:info="infoProps">
        {{ infoProps }}
      </template>
    </ChildCpnVue>
  </div>
</template>
<script>
import ChildCpnVue from "./ChildCpn.vue";
export default {
  components: {
    ChildCpnVue,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
</style>