<template>
    <div>
        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>
    </div>
</template>
<script>
var _ = require('lodash');
import axios from 'axios'
export default {
    data(){
        return{
            question: '',
            answer: '在你提出问题之前我不能给你答复'
        }
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = '等着你停止打字…'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('。') === -1) {
                this.answer = '问题通常包含一个问号. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var that = this
            axios.get('https://yesno.wtf/api').then(function (response) {
                that.answer = _.capitalize(response.data.answer)
            }).catch(function (error) {
                that.answer = 'Error! Could not reach the API. ' + error
            })
        }
    }
}


// 引入包：npm i --save lodash    https://www.lodashjs.com/
// npm i axios -s
</script>
