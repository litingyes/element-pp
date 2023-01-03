<!--
 * @Date: 2023-01-02 21:01:16
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-04 00:27:22
 * @FilePath: /element-pp/packages/components/calendar/src/EpCalendarWeek.vue
-->
<script lang="ts" setup>
import { dateFormat } from '@element-pp/utils'
import type { EventItem } from '@element-pp/utils'
import { ElPopover } from 'element-plus'

interface Props {
  events: EventItem[][]
}
const props = withDefaults(defineProps<Props>(), {
  events: () => [],
})
</script>

<template>
  <ul class="ep-calendar__week">
    <li v-for="i in 7" :key="i" class="ep-calendar__week-day">
      <template v-if="events[i - 1].length">
        <ElPopover
          v-for="event in events[i - 1]"
          :key="event.key"
          trigger="click"
          width="auto"
          placement="right-start"
          popper-class="ep-calendar__week--event-popover"
        >
          <template #reference>
            <div class="ep-calendar__week--event" :style="{ top: event.top, bottom: event.bottom }">
              <span class="ep-calendar__week--event-title">{{ event.title }}</span>
            </div>
          </template>
          <span class="ep-calendar__week--event-title">{{ event.title }}</span>
          <span class="ep-calendar__week--event-time"
            >{{ dateFormat(event.start!, 'yyyy/MM/dd HH:mm') }} - {{ dateFormat(event.end!, 'yyyy/MM/dd HH:mm') }}</span
          >
        </ElPopover>
      </template>
    </li>
  </ul>
</template>
