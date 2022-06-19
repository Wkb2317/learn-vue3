// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): void
}

// 声明变量/函数/类
declare let wkbName: string
declare let wkbAge: number
declare let wkbHeight: number

// 声明文件
declare module '*.jpg'
declare module '*.png'

// 声明命名空间
declare namespace $ {
  export function ajax()
}
