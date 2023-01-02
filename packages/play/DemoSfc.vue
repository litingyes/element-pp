<!--
 * @Date: 2022-12-29 00:40:23
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-02 19:39:51
 * @FilePath: /element-pp/packages/play/DemoSfc.vue
-->
<template>
  <div>
    <EpCalendar :time="time" :data="events"></EpCalendar>
  </div>
</template>

<script lang="ts" setup>
import { dateAddHours, dateSubHours, dateAddMinutes, dateSubMinutes } from '@element-pp/utils'
import { events, time } from './data/events.js'
</script>
