<template>
  <div class="seasonTable">
    <select v-model="selected">
      <option v-for="node of allWeeks" :value="node.value">{{ node.text }}</option>
    </select>
    <HelloWorld :table="table" width="100%" />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import * as d3 from 'd3'

export default {
  name: 'SeasonTable',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      selected: 1,
      table: ''
    }
  },
  props:{
    season:{
      default: 2017
    },
    max:{
      default: 39
    }
  },
  computed: {
    allWeeks: function(){
      const options = []
      for(let i=1;i<this.max;i++){
        options.push({text: `Week ${i}`, value: i})
      }
      return options
    }
  },
  created: function(){
    this.getData()
  },
  watch:{
    selected: function(){
      this.getData()
    }
  },
  methods: {
    getData: function(){
      var that = this
      d3.json(`/src/assets/tables/${that.season}/week${that.selected}.json`,function(val){
        that.table = val.tables[0]
      })
    }
  }
}
</script>

<style scoped>

</style>
