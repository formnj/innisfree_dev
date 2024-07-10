<template>
  <div class="picker_wrap">
    <DatePicker v-model="date2" class="date_picker" mode="date" :masks="{ title: 'YYYY년 MMM' }" />
  </div>
</template>
<script setup>
import { DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import { ref } from '#imports'

const date2 = ref(new Date())
</script>
<style lang="scss">
.picker_wrap {
  min-height: 500px;
  position: relative;
  .date_picker {
    border-radius: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &.vc-container {
      .vc-pane-header-wrapper {
        top: 20px;
        .vc-header {
          height: auto;
          padding: 0 20px;
          margin-top: 0;
        }
      }
      .vc-arrow {
        width: 15px;
        height: 15px;
        > svg {
          width: 100%;
          height: 100%;
        }
      }

      .vc-pane-layout {
        .vc-pane {
          min-width: 225px;
          padding: 20px;
        }
        .vc-header {
          height: auto;
          padding: 0 20px;
          margin-top: 0;
          margin-bottom: 15px;
          .vc-title-wrapper {
            button {
              font-family: 'Pretendard';
              line-height: 1;
              span {
                color: #333;
                font-size: 13px;
                font-weight: 400;
              }
            }
          }
        }
        .vc-weeks {
          padding: 0;
          .vc-weekdays {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
            .vc-weekday {
              width: 30px;
              height: 29px;
              padding: 0;
              color: #fff;
              font-size: 11px;
              background: #000;
              border: 1px solid #d6d6d6;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .vc-weekday-1 {
              background: #c40100;
            }
          }
          .vc-week {
            margin-top: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
            > div {
              width: 30px;
              min-height: 29px;
              .vc-highlight {
                border-radius: 0;
                background: #e9eefb;
              }
              .vc-day-content {
                color: #5a5a5a;
                font-size: 11px;
                font-weight: 400;
                border-radius: 0;
                border: 1px solid #d6d6d6;
              }
              &.is-not-in-month {
                .vc-day-content {
                  opacity: 0.4;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
