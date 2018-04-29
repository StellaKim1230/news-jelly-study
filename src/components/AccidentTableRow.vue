<template>
  <tr
    class="DataTable__row"
    @dblclick="clickTableRow(rawData.id)"
  >
    <td :class="className">{{ getAccidentTime(rawData.timestamp) }}</td>
    <td :class="`DataTable__accidentType ${className}`">
      <span v-if="isEdit">
        <input
          v-model="accidentType"
          @keyup.enter="clickTableRow(rawData.id)"
        />
      </span>
      <span v-else>
        {{ rawData.accidentType }}
      </span>
    </td>
    <td :class="className">{{ rawData.date }}요일</td>
    <td :class="className">{{ rawData.dead }}명</td>
    <td :class="className">{{ rawData.casualty }}명</td>
    <td :class="className">{{ rawData.state }}</td>
    <td :class="className">
      <span v-if="isEdit">
        <input
          v-model="city"
          @keyup.enter="clickTableRow(rawData.id)"
        />
      </span>
      <span v-else>
        {{ rawData.city }}
      </span>
    </td>
  </tr>
</template>

<script>
import moment from 'moment'
import { omit, pickBy } from 'lodash'

export default {
  name: 'AccidentTableRow',
  data: function() { 
    return {
      isEdit: false,
      city: '',
      accidentType: '',
    }
  },
  props: {
    rawData: Object,
    className: String,
    changeDataByTableRow: Function,
  },
  methods: {
    getAccidentTime: function(timestamp) {
      return moment(timestamp).format('YYYY-MM-DD HH:mm')
    },

    clickTableRow: function(columnId) {
      if (this.isEdit) {
        const changedData = pickBy(omit(this.$data, ['isEdit']), (value) => {
          return value !== ''
        })
        this.$props.changeDataByTableRow(columnId, changedData)
      }
      this.isEdit = !this.isEdit
    }
  },
}
</script>
