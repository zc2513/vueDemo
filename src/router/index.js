import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import watchDemo from "@/components/watchDemo";
import watchDemo1 from "@/components/watchDemo.1";
import excel from "@/components/excel";
import erweima from "@/components/erweima";
import detectaphone from "@/components/detectaphone";
import bround from "@/components/demo/bround";
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
      component: bround
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
    }
  ]
});
