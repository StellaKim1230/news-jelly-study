<template>
  <div class="Table">
    <table class="DataTable">
      <thead class="DataTable__headers">
        <th 
          v-for="header in headers" 
          :key="header"
        >{{ header }}</th>
      </thead>
      <tbody>
        <slot className="DataTable__data">
          데이터가 없습니다.
        </slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    headers: Array,
  },
}
</script>

<style lang="scss">
  .Table{
    height: 700px;
    overflow: scroll;
  }

  .DataTable {
    margin: 0 auto;
    border: 1px solid #222222;
    border-collapse: collapse;
    width: 90%;

    th {
      padding: .5rem 0;
    }
  }

  .DataTable__headers {
    background: lightgrey;
    border-bottom: 1px solid #222222;
  }

  .DataTable__data {
    padding: .5rem 0;
    border-bottom: 1px solid rgb(241, 241, 241);
  }

  .DataTable__row {
    &:hover {
      background: rgb(243, 243, 243);
      cursor: pointer;
    }
  }

</style>
