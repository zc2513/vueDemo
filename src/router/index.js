import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import watchDemo from "@/components/watchDemo";
import watchDemo1 from "@/components/watchDemo.1";
import excel from "@/components/excel";
import erweima from "@/components/erweima";
import detectaphone from "@/components/detectaphone";

import elementUi from "@/components/element/table";
import tablestyle from "@/components/element/tablecomponent/tablestyle";
import tableEven from "@/components/element/tablecomponent/tableEven";
import tableselect from "@/components/element/tablecomponent/tableselect";
import tableradio from "@/components/element/tablecomponent/tableradio";
import tableJson from "@/components/element/tablecomponent/tableJson";

import childParentTransfer from "@/components/componentransferData/transferValue/childParentTransfer";
import equalComponent from "@/components/componentransferData/transferValue/equalComponent";
import parentChildTransfer from "@/components/componentransferData/transferValue/parentChildTransfer";
// 组件传值
import components from "@/components/componentransferData/components";

import bround from "@/components/demo/bround";
import vif from "@/components/demo/vif";
import vfor from "@/components/demo/vfor";
import input from "@/components/demo/input";
import slot from "@/components/demo/slot";

import transition from "@/components/transition/transition";

import extend from "@/components/extend/extend";

import directive from "@/components/directive/directive";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/watch",
      component: watchDemo
    },
    {
      path: "/watch1",
      component: watchDemo1
    },
    {
      path: "/excel",
      component: excel
    },
    {
      path: "/erweima",
      component: erweima
    },
    {
      path: "/detectaphone",
      component: detectaphone
    },
    {
      path: "/bround",
      component: bround,
      children:[
          {
            path: "vif",
            component: vif
          },
          {
            path: "vfor",
            component: vfor
          },
          {
            path: "input",
            component: input
          },
          {
            path: "slot",
            component: slot
          },
      ]
    },
    {
      path: "/elementUi",
      component: elementUi,
      children: [
        {
          path: "tablestyle",
          component: tablestyle
        },
        {
          path: "tableEven",
          component: tableEven
        },
        {
          path: "tableselect",
          component: tableselect
        },
        {
          path: "tableradio",
          component: tableradio
        },
        {
          path: "tableJson",
          component: tableJson
        }
      ]
    },
    {
      path: "/components",
      component: components,
      children: [
        {
          path: "childParentTransfer",
          component: childParentTransfer
        },
        {
          path: "equalComponent",
          component: equalComponent
        },
        {
          path: "parentChildTransfer",
          component: parentChildTransfer
        }
      ]
    },
    {
        path:"/transition",
        component: transition
    },
    {
        path:"/extend",
        component: extend
    },
    {
        path:"/directive",
        component: directive
    },
  ]
});
Vue.component('button-counter', {//全局组件注册
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">全局组件点击+1 {{ count }} .</button>'
})
