<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        {{ names }}
        <v-btn @click="click">{{ counter }}</v-btn>
      </div>
      <v-card>{{ example }}</v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      names: ['Shahar', 'Yonatan'],
    }
  },
  computed: {
    counter() {
      return this.$store.state.exampleStore.counter
    },
    example() {
      return this.$store.state.exampleStore.example
    },
  },
  methods: {
    click() {
      this.$store.dispatch('exampleStore/increment')
      this.$store.dispatch('exampleStore/getExampleData')
    },
  },
}
</script>
