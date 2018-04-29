<template>
  <div class="Chart">
    <div class="chartOne"></div>
    <div class="chartTwo"></div>
  </div>
</template>

<script>
import jelly from 'jelly-chart'
import { isEmpty } from 'lodash'

export default {
  name: 'Chart',
  props: {
    'pieChartDatas': Object,
    'barChartDatas': Object,
    'lineChartDatas': Object,
  },
  watch: {
    barChartDatas: function (nextData, oldData) {
      this.createBarChart(nextData).reset(true)
    },

    pieChartDatas: function (nextData, oldData) {
      this.createPieChart(nextData).reset(true)
    },

    lineChartDatas: function (nextData, oldData) {
      this.createLineChart(nextData).reset(true)
    }
  },
  methods: {
    createBarChart: function(barChartDatas) {
      return jelly.bar().container(barChartDatas.position)
        .data(barChartDatas.data)
        .dimensions([barChartDatas.dimensions])
        .measures(barChartDatas.measures)
        .axis('x').axis('y')
        .axisTitles([
          {
            target: 'x',
            title: '교통사고유형'
          },
          {
            target: 'y',
            title: '사고건수',
          }
        ])
        .legend(true)
        .mono(false)
    },

    createPieChart: function(pieChartDatas) {
      return jelly.pie().container(pieChartDatas.position)
        .data(pieChartDatas.data)
        .dimensions(pieChartDatas.dimensions)
        .measures(pieChartDatas.measures)
        .legend(true)
    },

    createLineChart: function(lineChartDatas) {
      return jelly.line().container(lineChartDatas.position)
        .data(lineChartDatas.data)
        .dimensions(lineChartDatas.dimensions)
        .measures(lineChartDatas.measures)
        .axis('x').axis('y')
        .axisTitles(lineChartDatas.axisTitles)
        .point(true)
        .legend(true)
        .multiTooltip(true)
        .label(true)
        .facet('horizontal')
    }
  },
  mounted() {
    const {
      barChartDatas,
      pieChartDatas,
      lineChartDatas
    } = this.$props
    barChartDatas && this.createBarChart(barChartDatas).render()
    pieChartDatas && this.createPieChart(pieChartDatas).render()
    lineChartDatas && this.createLineChart(lineChartDatas).render()
  },
}
</script>

<style lang="scss" scoped>
  .chartOne {
    display: inline-block;
  }

  .chartTwo {
    display: inline-block;
  }
</style>

