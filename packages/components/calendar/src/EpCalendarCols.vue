<!--
 * @Date: 2022-12-29 23:45:56
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-02 19:07:14
 * @FilePath: /element-pp/packages/components/calendar/src/EpCalendarCols.vue
-->
<script lang="ts" setup>
interface Props {
  mode?: string
  cols?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  mode: 'week',
  cols: () => ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
})
</script>

<template>
  <ul class="ep-calendar__cols">
    <li v-for="col in cols" :key="col" class="ep-calendar__cols-item">
      {{ col }}
    </li>
  </ul>
</template>
