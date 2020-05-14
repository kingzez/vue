import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * Vue 其实就是通过函数实现的一个类
 * new Vue 发生了什么？
 * 调用 _init，初始化操作：
    // 传入 options 的合并
    // 初始化生命周期
    initLifecycle(vm)
    // 初始化事件中心
    initEvents(vm)
    // 初始化渲染
    initRender(vm)
    // 调用 beforeCreate 生命周期
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    // 初始化 props, data, methods, computed, watch，及其 this.xxx 的代理 proxy，响应式处理 observe
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    // 调用 created 生命周期
    callHook(vm, 'created')
    // 挂载 $mount
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // _init 是在 initMixin 方法中定义的
  this._init(options)
}

// 在 Vue 原型链上挂载一些方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
