<template>
  <div>
    <h1 v-if="label === 1">
      <slot></slot>
    </h1>
    <h2 v-if="label === 2">
      <slot></slot>
    </h2>
    <h3 v-if="label===3">
      <slot></slot>
    </h3>
    <h4 v-if="label===3">
      <slot></slot>
    </h4>
    <h5 v-if="label===3">
      <slot></slot>
    </h5>
    <h6 v-if="label===3">
      <slot></slot>
    </h6>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props:{
    label:{
      type:Number,
      required:true
    }
  }
}
</script>

// 函数式组件
<script>
  Vue.component("anchored-heading",{
    props:{
      lable:{
        type:Number,
        required:true
      }
    },
    render:function(createElement,ctx){
      //createElement函数返回的虚拟节点
      // return　［］
      // var a = b = 1;var a,b没有用var声明
      // var a = 1, b = 2 声明了var a和var b
      return createElement(
        "h" + this.label,//节点标签名称
        this.$slots.default//子节点数组
      )
    }
  })
</script>
