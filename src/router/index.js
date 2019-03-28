import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import watchDemo from "@/components/watchDemo";
import watchDemo1 from "@/components/watchDemo.1";
import excel from "@/components/excel";
import erweima from "@/components/erweima";
import detectaphone from "@/components/detectaphone";
import route from "@/components/route";

import elementUi from "@/components/element/table";
import tablestyle from "@/components/element/tablecomponent/tablestyle";
import tableEven from "@/components/element/tablecomponent/tableEven";
import tableselect from "@/components/element/tablecomponent/tableselect";
import tableradio from "@/components/element/tablecomponent/tableradio";
import tableJson from "@/components/element/tablecomponent/tableJson";
import moreTable from "@/components/element/tablecomponent/moreTable";
import nav from "@/components/element/nav";
import sliderNav from "@/components/element/nav/sliderNav";
import upfile from "@/components/element/file/upfile";


import fileReander from "@/components/element/file/fileReander";



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

// 表单验证

import validateForm from "@/components/form/validateForm";
// import gpy from "@/components/gpydemo/gpy";

Vue.use(Router);

const router = new Router({
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
      component: watchDemo1,
      beforeEnter: (to, from, next) => {
        console.log("to", to);
        console.log("from", from);
        next();
      }
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
      children: [
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
        }
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
        },
        {
          path: "moreTable",
          component: moreTable
        }
      ]
    },
    {
      path: "/nav",
      component: nav,
      children: [
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
          path: "sliderNav",
          component: sliderNav
        }
      ]
    },
    {
      path: '/upfile',
      component: upfile
    },
    {
      path: '/fileReander',
      component: fileReander
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
      path: "/transition",
      component: transition
    },
    {
      path: "/extend",
      component: extend,
      meta: { senddata: "我是混入式extend路线元字段数据--meta" }
    },
    {
      path: "/directive",
      component: directive,
      meta: { senddata: "我是directive路线元字段数据--meta" }
    },
    {
      path: "/route/:id?",
      component: route,
      meta: { senddata: "我是路线元字段数据--meta" },
      beforeEnter: (to, from, next) => {
        if (confirm("级别二--组件配置内路由拦截")) {
          next();
        } else {
          alert("取消进入");
          next(false);
        }
      }
    },
    {
      path: "/validateForm",
      component: validateForm
    },
    // {
    //   path:'/gpy',
    //   component:gpy
    // }
  ]
});
router.beforeEach((to, from, next) => {
    console.log('级别一--第一个拦截，-全局路由拦截 --执行next()才会有下面的路由页面展示')
    const { matched } = to;
    console.log('matched--一级', matched)
    next()
})
router.afterEach((to, from) => {
    console.log('在挂钩后注册全局，但与守卫不同，这些挂钩不会获得next功能并且不会影响导航：')
})
export default router;
