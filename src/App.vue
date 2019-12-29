<template>
  <div>
    <ad-form :forms='forms'></ad-form>
  </div>
</template>

<script>
import AdForm from './components/AdForm.vue'
export default {
  components: {
    AdForm
  },
  data(){
    return {
      forms: [
        {
          label: { 
            name: '颜色选择器' 
          },
          type: 'color',
          placeholder: '请选择颜色',
        },
        {
          label: { 
            name: '日期选择器' 
          },
          type: 'date',
          placeholder: '请选择日期'
        },
        {
          label: { 
            name: '日期时间选择器' 
          },
          type: 'datetime',
          placeholder: '请选择日期时间'
        },
        {
          label: { 
            name: '日期时间选择器本地' 
          },
          type: 'datetime-local',
          placeholder:'请选择日期时间'
        },
        {
          label: { 
            name: '邮箱' 
          },
          type: 'email',
          placeholder: '请输入邮箱'
        },
        {
          label: { 
            name: '文件' 
          },
          type: 'file',
          placeholder: '请选择文件'
        },
        {
          label: { 
            name: '隐藏域' 
          },
          type: 'hidden',
          placeholder: '这是隐藏域'
        },
        {
          label: { 
            name: '图片' 
          },
          type: 'image',
          placeholder: '请选择图片',
          mime: 'image/*'
        },
        {
          label: { 
            name: '月份选择器' 
          },
          type: 'month',
          placeholder: '请选择月份'
        },
        {
          label: { 
            name: '密码' 
          },
          type: 'password',
          placeholder: '请输入密码'
        },
        {
          label: { 
            name: '数字输入框' 
          },
          type: 'number',
          placeholder: '请输入数字'
        },
        {
          label: { 
            name: '单选' 
          },
          type: 'radio',
          list: {
            defaltValue: 'msft',
            name: 'co',
            options: [
              { title: 'Microsoft', value: 'msft' },
              { title: 'Google', value: 'gogl' },
              { title: 'Amazon', value: 'amaz' },
              { title: 'Facebook', value: 'facb' }
            ]
          }
        },
        {
          label: {
            name: '多选'
          },
          type: 'checkbox',
          list: {
            defaltValue: ['apple', 'orange'],
            options: [
              { title: 'Apple', value: 'apple' },
              { title: 'Orange', value: 'orange' },
              { title: 'Banne', value: 'banne' },
              { title: 'CocaCola', value: 'coca' }
            ]
          }
        },
        {
          label: { 
            name: '滑块' 
          },
          type: 'range',
          placeholder: '这是滑块'
        },
        {
          label: { 
            name: '搜索' 
          },
          type: 'searchs',
          placeholder: '请输入关键词',
          readonly: false
        },
        {
          label: { 
            name: '电话' 
          },
          type: 'tel',
          placeholder: '请输入电话号码'
        },
        {
          label: { 
            name: '文本框' 
          },
          type: 'text',
          placeholder: '请输入文本',
          readonly: true,
        },
        {
          label: { 
            name: '时间' 
          },
          type: 'time',
          placeholder: '请选择时间'
        },
        {
          label: { 
            name: '网址' 
          },
          type: 'url',
          placeholder: '请输入网址'
        },
        {
          label: { 
            name: '周' 
          },
          type: 'week',
          placeholder: '请选择周'
        }
      ]
    }
  }
}
</script>

<style>

</style>