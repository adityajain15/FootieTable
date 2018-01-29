/* eslint-disable */
<template>
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" :width="width">
    <template v-for="(node,index) of table.entries">
      <image class="clubs" :href=getBadgeUrl(node.team.club.name) :x="getX(node.overall.points)" :y="getY(node.team.club.name)" :height="20" :width="20" :key="node.team.id" :name="node.team.club.name"/>
    </template>
  </svg>
</template>

<script>
import {scaleLinear} from 'd3-scale'
import {TweenLite} from 'gsap'

export default {
  name: 'SeasonSVG',
  props: {
    table: {
      default: 3
    },
    width: {
      default: '100%'
    },
    numTeams: {
      default: 20
    }
  },
  data () {
    return {
      margin: 20,
      numTies: '',
      xScale: scaleLinear().domain([0, 114])
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
    this.xScale.range([this.margin + 0, this.$el.clientWidth - this.margin])
  },
  methods: {
    getX: function (val) {
      return this.xScale(val)
    },
    getY: function (name) {
      return this.margin + this.numTies[name]
    },
    updateTiePosition: function (theTable) {
      let ties = {}
      for (let i = 0; i < theTable.entries.length; i++) {
        // debugger
        ties[`${theTable.entries[i].team.club.name}`] = 20 * this.getTiePosition(theTable.entries[i], i)
      }
      return ties
    },
    getTiePosition: function (node, index) {
      for (let i = 0; i < index; i++) {
        if (this.table.entries[i].overall.points === node.overall.points) {
          return node.position - this.table.entries[i].position
        }
      }
      return 0
    },
    handleResize: function () {
      this.xScale = scaleLinear().domain([0, 114]).range([this.margin + 0, this.$el.clientWidth - this.margin])
    },
    getBadgeUrl: function (name) {
      return `./static/badges/${name}.png`
    }
  },
  watch: {
    table: function (newVal, oldVal) {
      if (!oldVal) {
        this.numTies = this.updateTiePosition(newVal)
        return
      }

      let yNewValue = this.updateTiePosition(newVal)
      TweenLite.to(this.numTies, 1, yNewValue)

      let fromOldValue = {}
      let toNewValue = {onUpdate: update, onUpdateScope: this}

      function update () {
        for (let i = 0; i < newVal.entries.length; i++) {
          this.table.entries[i].overall.points = fromOldValue[this.table.entries[i].team.club.name]
        }
      }

      for (let i = 0; i < newVal.entries.length; i++) {
        fromOldValue[`${oldVal.entries[i].team.club.name}`] = oldVal.entries[i].overall.points
        toNewValue[`${newVal.entries[i].team.club.name}`] = newVal.entries[i].overall.points
      }

      TweenLite.to(fromOldValue, 1, toNewValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
svg{
  background-color: gray;
}
.clubs{
  fill:black;
  stroke: white;
  stroke-width: 1px;
}
</style>
