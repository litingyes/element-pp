<!--
 * @Date: 2022-12-28 23:48:51
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-02 23:37:04
 * @FilePath: /element-pp/packages/components/calendar/src/EpCalendar.vue
-->
<script lang="ts" setup>
import { computed } from 'vue'
import { dateStartOfWeek, dateAddDays, MILLISECOND_OF_DAY } from '@element-pp/utils'
import type { EventItem } from '@element-pp/utils'
import EpCalendarCols from './EpCalendarCols.vue'
import EpCalendarRows from './EpCalendarRows.vue'
import EpCalendarWeek from './EpCalendarWeek.vue'

interface PropsDataItem {
  start: number
  end: number
  title: string
  [key: string]: any
}
interface Props {
  mode?: 'week'
  time?: number
  data?: PropsDataItem[]
}
const props = withDefaults(defineProps<Props>(), {
  mode: 'week',
  time: Date.now(),
  data: () => [],
})

const startTime = computed(() => {
  if (props.mode === 'week') return dateStartOfWeek(props.time).valueOf()
  return dateStartOfWeek(props.time).valueOf()
})

const dayScope = computed(() => {
  const scopes: number[][] = []
  if (props.mode === 'week') {
    for (let i = 0; i < 7; i++) {
      let dayStart = dateAddDays(startTime.value, i).valueOf()
      let dayEnd = dateAddDays(startTime.value, i + 1).valueOf()
      scopes.push([dayStart, dayEnd])
    }
  }
  return scopes
})

const events = computed(() => {
  const store: EventItem[][] = new Array(7).fill(null).map((_) => [])
  let index = 0

  if (props.mode === 'week') {
    props.data.forEach((d) => {
      let eventItem: EventItem = Object.assign({}, d)
      for (let i = 0; i < 7; i++) {
        const range = dayScope.value[i]
        if (!eventItem.end || range[0] >= eventItem.end! || !eventItem.start || range[1] <= eventItem.start!) continue
        if (range[0] <= eventItem.start && range[1] >= eventItem.end) {
          eventItem.top = Math.floor(((eventItem.start - range[0]) / MILLISECOND_OF_DAY) * 100) + '%'
          eventItem.bottom = Math.ceil(((range[1] - eventItem.end) / MILLISECOND_OF_DAY) * 100) + '%'
          if (parseInt(eventItem.bottom) + parseInt(eventItem.top) > 97) {
            eventItem.bottom = Math.max(97 - parseInt(eventItem.top), 0) + '%'
          }
        } else if (range[0] >= eventItem.start && range[1] <= eventItem.end) {
          eventItem.top = '0%'
          eventItem.bottom = '0%'
        } else if (range[0] > eventItem.start && range[0] < eventItem.end) {
          eventItem.top = '0%'
          eventItem.bottom = Math.min(97, Math.ceil(((range[1] - eventItem.end) / MILLISECOND_OF_DAY) * 100)) + '%'
        } else if (range[1] > eventItem.start && range[1] < eventItem.end) {
          eventItem.top = Math.max(3, Math.floor(((eventItem.start - range[0]) / MILLISECOND_OF_DAY) * 100)) + '%'
          eventItem.bottom = '0%'
        }
        eventItem.key = index++
        store[i].push(eventItem)
      }
    })
  }

  store.forEach((events) => {
    events.sort((a, b) => {
      return b.end! - b.start! - (a.end! - a.start!)
    })
  })

  return store
})
</script>

<template>
  <div class="ep-calendar">
    <div class="ep-calendar__grid"></div>
    <EpCalendarRows :mode="props.mode" />
    <EpCalendarCols :mode="props.mode" />
    <EpCalendarWeek :events="events"></EpCalendarWeek>
  </div>
</template>

<style>
@import url(../style/index.css);
</style>
