declare const __DEV__: boolean

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
