import { PropType } from 'vue'

export const props = {
  current: {
    type: [Number, String],
  },
  size: {
    type: [Number, String],
    default: 10,
  },
  total: {
    type: [Number, String],
    default: 0,
  },
  maxShowBtnCount: {
    type: Number,
    default: 3,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  simple: {
    type: Boolean,
    default: true,
  },
  showSizeChanger: {
    type: Boolean,
    default: true,
  },
  showQuickJumper: {
    type: Boolean,
    default: false,
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100],
  },
  showTotal: {
    type: Function as PropType<(total: number, range: Array<number>) => string>,
  },
  onChange: {
    type: Function,
  },
}