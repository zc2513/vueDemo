<template>
    <section>
        复用性方法的混入，和组件数据冲突的执行顺序
    </section>
</template>
<script>
// import Vue from 'vue'
/*
//混入方式一、使用extend方法 混入vue组件当中
 var myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('当前方法混入定义!')
        }
    }
}
var Component = Vue.extend({//定义一个使用混入对象的组件
    mixins: [myMixin]
})
var component = new Component() // => "当前方法混入定义!"
export default component;
 */
/* 
//混入方式二、直接创建vue实例混入
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created: function () {
    console.log(1,'混入对象的钩子被调用')
  },
  methods: {
    foo: function () {
      console.log('foo')
    },
    save: function () {
      console.log('save from mixin')
    }
  }
}
new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(2,'组件钩子被调用')
    console.log(this.$data)// => { message: "goodbye", foo: "abc", bar: "def" }
    //1.组件的数据发生冲突时以组件数据优先。
    //=>2.混入对象的钩子将在组件自身钩子之前调用。 执行顺序 1==>2
  },
   methods: {
    bar: function () {
      console.log('bar')
    },
    save: function () {
      console.log('from self')
      //3.将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。 执行顺序 foo=>bar==>合并save以组件save为准==>from self
    }
  }
})
 */
</script>

