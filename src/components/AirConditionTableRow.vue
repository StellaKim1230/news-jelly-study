<template>
  <tr 
    class="DataTable__row"
  >
    <td :class="className">{{ rawData.city }}</td>
    <td :class="className">{{ rawData.year }}</td>
    <td :class="className">{{ rawData.month }}</td>
    <td :class="className">{{ rawData.o3min }}</td>
    <td :class="className">{{ rawData.o3avg }}</td>
    <td :class="className">{{ rawData.o3max }}</td>
    <td :class="className">{{ rawData.pm10min }}</td>
    <td :class="className">{{ rawData.pm10avg }}</td>
    <td :class="className">{{ rawData.pm10max }}</td>
  </tr>
</template>

<script>
export default {
  name: 'AirConditionTableRow',
  props: {
    rawData: Object,
    className: String,
  }
}
</script>