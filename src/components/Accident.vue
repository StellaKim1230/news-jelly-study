<template>
  <div class="Accident">
    Accident Data
    <chart
      :pieChartDatas="accidentByAccidentTypePieChart"
      :barChartDatas="accidentByMonthBarChart"
    >
    </chart>
    <data-table :headers="translatedHeaders">
      <template slot-scope="props">
        <accident-table-row
          v-for="rawData in filterdData" 
          :key="rawData.id"
          :rawData="rawData"
          :className="props.className"
          :changeDataByTableRow="changeDataByTableRow"
        />
      </template>
    </data-table>
  </div>
</template>

<script>
import moment from 'moment'
import jelly from 'jelly-chart'
import {
  map,
  pick,
  keys,
  countBy,
  sum,
  groupBy,
  findIndex,
  filter
} from 'lodash'
import trafficAccident from 'datas/trafficAccident'
import { accidentHeaders } from 'utils/meta'

import AccidentTableRow from './AccidentTableRow'
import DataTable from './DataTable'
import Chart from './Chart'

export default {
  name: 'Accident',
  data: () => ({
    accidentData: [],
    dataColumns: ['timestamp', 'accidentType', 'date', 'dead', 'casualty', 'state', 'city', 'id'],
  }),
  components: {
    'data-table': DataTable,
    'accident-table-row': AccidentTableRow,
    chart: Chart,
  },
  computed: {
    filterdData: function() {
      return map(this.accidentData, (dataObj) => (
        pick(dataObj, this.dataColumns)
      ))
    },

    translatedHeaders: function() {
      const dataColumns = this.dataColumns

      return map(
        filter(dataColumns, column => column !== 'id'), (header) => {
        return accidentHeaders[header]
      })
    },

    accidentByMonthBarChart: function() {
      const accidentTypeCount = countBy(this.filterdData, (dataObj) => {
        return dataObj.accidentType
      })
      const chartInitData = map(keys(accidentTypeCount), (key) => {
        return {
          'accidentType': key,
          'count': accidentTypeCount[key]
        }
      })

      return {
        data: chartInitData,
        dimensions: 'accidentType',
        measures: 'count',
        position: '.chartOne'
      }
    },

    accidentByAccidentTypePieChart: function() {
      const accidentMonthCount = countBy(this.filterdData, (dataObj) => (
        moment(dataObj.timestamp).month()
      ))
      const chartInitData = map(keys(accidentMonthCount), (key) => {
        return {
          month: Number(key) + 1 + '월',
          count: accidentMonthCount[key]
        }
      })

      return {
        data: chartInitData,
        dimensions: {field: 'month', order:'ascending'},
        measures: {field: 'count', op: 'mean'},
        position: '.chartTwo'
      }
    }
  },

  methods: {
    changeDataByTableRow: function(columnId, changedData) {
      const { accidentData } = this
      const changedIndex = findIndex(accidentData, (dataObj) => {
        return dataObj.id === columnId
      })
      const changedAccidentData = Object.assign({}, {
        ...accidentData[changedIndex],
        ...changedData
      })

      this.accidentData = [
        ...accidentData.slice(0, changedIndex),
        changedAccidentData,
        ...accidentData.slice(changedIndex + 1, accidentData.length)
      ]
  },
    },
  created() {
    this.accidentData = trafficAccident
  },
}
</script>
