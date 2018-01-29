<template>
  <div class="seasonTable">
    <span>{{ this.season }}</span>
    <select v-model="selected">
      <option v-for="node of allWeeks" :value="node.value">{{ node.text }}</option>
    </select>
    <SeasonSVG :table="table" width="100%" />
  </div>
</template>

<script>
import SeasonSVG from './SeasonSVG'
import * as d3 from 'd3'

export default {
  name: 'SeasonTable',
  components: {
    SeasonSVG
  },
  data: function () {
    return {
      selected: 1,
      table: ''
    }
  },
  props: {
    season: {
      default: 2017
    },
    max: {
      default: 38
    }
  },
  computed: {
    allWeeks: function () {
      const options = []
      for (let i = 1; i <= this.max; i++) {
        options.push({text: `Week ${i}`, value: i})
      }
      return options
    }
  },
  created: function () {
    this.getData()
  },
  watch: {
    selected: function () {
      this.getData()
    }
  },
  methods: {
    getData: function () {
      let that = this
      // /src/assets/tables/${that.season}/week${that.selected}
      d3.json(`./static/tables/${that.season}/week${that.selected}.json`, function (val) {
        that.table = val.tables[0]
      })
    }
  }
}
</script>

<style scoped>

</style>
