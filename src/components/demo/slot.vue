<template>
    <section>
        <div>
            <slot-test>
                <h4 slot="name">直接写在组件内的东西都属于slot插槽中展示的内容</h4>
                <p>
                    我是插槽内容1，哈哈哈哈
                </p>
                <p>
                    我是插槽内容2，哈哈哈哈
                </p>
                <p slot='testp'></p>
            </slot-test>
        </div>
        <div class="title2" >
            插槽is，简单使用---通过插槽发布内容
            <div class="test_box">
                <button v-for="tab in tabs" v-bind:key="tab" 
                        v-bind:class="['tab-button', { active: currentTab === tab }]"
                        v-on:click="currentTab = tab"
                        >{{ tab }}</button>
                <component v-bind:is="currentTabComponent" class="tab"></component>
                <h4 style="color:#c00;">已解决展示--</h4>
                <keep-alive>
                    <component v-bind:is="currentTabComponent" class="tab"></component>
                </keep-alive>
            </div>             
        </div>
    </section>
</template>
<script>
export default {
    components:{
        'slot-test':{
            template:`
                <div class="test_box">
                    <h2 style='color:#00c;'>slot插槽测试</h2>
                    <slot name='name'></slot>
                    <slot>插槽的默认内容 当插槽没有输入内容的时候会显示</slot>
                    <slot name='testp'>插槽的默认内容，在指定的有名插槽下不会有效</slot>
                </div>
            `
        },
        'slot-home':{
            template: '<div>Home component</div>'
        },
        'slot-posts':{
            data(){
                return{
                    posts: [
                        { 
                            id: 1, 
                            title: '问题',
                            content: '<p>1.样式保留问题\n如果直接点击了其它项，都会初始一个新的组件，因此当前页面的点击不会被保留， 当前组件是会被重新初始化，当点击了其它项，再点击回来，需要我们从新点击才能回到之前点击的页面</p>'
                        },
                        { 
                            id: 2, 
                            title: '解决问题叙述',
                            content: '<p>当在组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。</p>'
                        },
                        { 
                            id: 3, 
                            title: '解决方法',
                            content: '<p>使用<keep-alive>元素将动态组件包裹起来</br>vue为了解决这个问题，提供了一个 <keep-alive>标签，它的主要作用是：失活的组件将会被缓存</p>'
                        }
                    ],
                    selectedPost: null
                }                
            },
            template: `<div class="posts-tab clearfix">
                            <ul class="posts-sidebar">
                                <li v-for="post in posts"
                                    v-bind:key="post.id"
                                    v-bind:class="{ selected: post === selectedPost }"
                                    v-on:click="selectedPost = post"
                                    v-text='post.title'
                                    >
                                </li>
                            </ul>
                            <div class="selected-post-container">
                                <div v-if="selectedPost" class="selected-post">
                                    <h3>{{ selectedPost.title }}</h3>
                                    <div v-html="selectedPost.content"></div>
                                </div>
                                <strong v-else>
                                    点击左边的博客标题来查看。
                                </strong>
                            </div>
                        </div>`,
        },
        'slot-archive':{
            template: '<div>Archive component</div>'
        }
    },
    data(){
        return{
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive'],
        }
    },
    computed:{
        currentTabComponent: function () {
            return 'slot-' + this.currentTab.toLowerCase();
        }
    }
}
</script>
<style lang="scss" scoped>
    .test_box{
        padding: 10px;
        background-color: pink;
    }
    .title2{
        height: 40px;
        color: #00c;
        line-height: 40px;
        font-size: 18px;
        text-align: center;
        .tab-button {
            padding: 6px 10px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border: 1px solid #ccc;
            cursor: pointer;
            background: #f0f0f0;
            margin-bottom: -1px;
            margin-right: -1px;
        }
        .tab-button:hover {
            background: #e0e0e0;
        }
        .tab-button.active {
            background: #e0e0e0;
        }
        .tab {
            border: 1px solid #ccc;
            padding: 10px;
        }
    }
</style>
<style>
    .posts-sidebar {
        float: left;
        width: 40%;
        margin: 0;
        padding: 0 10px 0 0;
        list-style-type: none;
        border-right: 1px solid #ccc;
    }
    .posts-sidebar li {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
    }
    .posts-sidebar li:hover {
        background: #eee;
    }
    .posts-sidebar li.selected {
        background: lightblue;
    }
    .selected-post-container {
        float: right;
        width: 58%;
        padding-left: 10px;
    }
    .selected-post > :first-child {
        margin-top: 0;
        padding-top: 0;
    }
</style>


