<!--
 * @Date: 2022-12-29 23:46:49
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-02 17:22:39
 * @FilePath: /element-pp/packages/components/calendar/src/EpCalendarRows.vue
-->
<script lang="ts" setup>
interface Props {
  mode?: string
  rows?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  mode: 'week',
  rows: () => [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ],
})
</script>

<template>
  <ul class="ep-calendar__rows">
    <li v-for="row in rows" :key="row" class="ep-calendar__rows-item">
      <span class="ep-calendar__rows-hour">{{ row }}</span>
    </li>
  </ul>
</template>
