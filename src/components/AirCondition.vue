<template>
  <div id="AirCondition">
    AirCondition Data
    <chart
      :lineChartDatas="airConditionByYearLineChart"
    ></chart>
    <data-table :headers="translatedHeaders">
      <template slot-scope="props">
        <aircondition-table-row
          v-for="rawData in filterdData"
          :key="rawData.id"
          :rawData="rawData"
          :className="props.className"
        >
        </aircondition-table-row>
      </template>
    </data-table>
  </div>
</template>

<script>
import jelly from 'jelly-chart'
import {
  map,
  pick,
  groupBy,
  reduce,
  round,
  keys,
  filter,
} from 'lodash'
import airCondition from 'datas/airCondition'
import { airConditionHeaders } from 'utils/meta'

import DataTable from './DataTable'
import Chart from './Chart'
import AirConditionTableRow from './AirConditionTableRow.vue';

export default {
  name: 'AirCondition',
  data: () => ({
    airconditionData: [],
    dataColumns: ['city', 'id', 'year', 'month', 'o3min', 'o3avg', 'o3max', 'pm10min', 'pm10avg', 'pm10max'],
  }),
  components: {
    'data-table': DataTable,
    'aircondition-table-row': AirConditionTableRow,
    chart: Chart,
  },

  computed: {
    filterdData: function() {
      return map(this.airconditionData, (dataObj) => (
        pick(dataObj, this.dataColumns)
      ))
    },

    translatedHeaders: function() {
      const { dataColumns } = this
      const airConditionTableHeaders = filter(dataColumns, column =>
        column !== 'id' && column
      )

      return map(airConditionTableHeaders, (header) => (
        airConditionHeaders[header]
      ))
    },

    airConditionByYearLineChart: function() {
      const chartRenderData = [
        ...this.avgByYear('o3avg'),
        ...this.avgByYear('pm10avg')
      ]

      return {
        position: '.chartOne',
        dimensions: [
          {
            field: 'year'
          },
          {
            field: 'category',
          }
        ],
        measures: 'conditionAvg',
        axisTitles: [
          {
            target: 'x',
            title: '연도'
          },
          {
            target: 'y',
            title: '평균농도',
          }
        ],
        data: chartRenderData,
      }
    },

  },

  methods: {
    avgByYear: function(category) {
      const objectByYears = groupBy(this.filterdData, 'year')
      const years = keys(objectByYears)

      const result = map(objectByYears, (objByYear) => (
        round(reduce(objByYear, (n, data) => (
          Number(data[category]) + n
        ), 0) / objByYear.length, 7)
      ))

      return map(years, (year, index) => (
        {
          year,
          conditionAvg: result[index],
          category,
        }
      ))
    },
  },
  created() {
    this.airconditionData = airCondition
  },
}
</script>
