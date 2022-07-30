/* eslint-disable */
import { Store } from '@/store' // path to store file

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store
  }
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
