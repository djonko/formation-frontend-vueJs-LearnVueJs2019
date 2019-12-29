<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
      <b-nav-item disabled>Counter: {{ innerNumCorrect }}/{{ innerNumTotal }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    innerNumCorrect: Number,
    innerNumTotal: Number,
  },
  methods: {},
};
</script>
