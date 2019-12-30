<template>
  <div>
    <form>
      <div v-for="item of forms" :key="item.guid" v-show="item.type !== 'hidden'">
        <label v-if="['radio', 'checkbox'].indexOf(item.type) == -1">
          {{item.label.name}} 
          <input 
            :type="item.type ? item.type : 'text'" 
            :placeholder="item.placeholder" 
            v-if="['file'].indexOf(item.type) === -1&& !item.readonly" 
            :autofocus='item.autofocus' 
            :disabled='item.disabled'
            :value="item.value"
            :size='item.size'
            :maxlength="item.maxLength"
            :minlength="item.minLength"
            :pattern="item.pattern"
            :spellcheck="item.spellcheck"
            :autocomplete="item.autocomplete"
            :name="item.name"
          />
          <input 
            :type="item.type ? item.type : 'text'" 
            :placeholder="item.placeholder" 
            v-if="item.readonly" 
            :autofocus='item.autofocus' 
            :disabled='item.disabled'
            :value="item.value"
            :size='item.size'
            :maxlength="item.maxLength"
            :minlength="item.minLength"
            :pattern="item.pattern"
            :spellcheck="item.spellcheck"
            :autocomplete="item.autocomplete"
            readonly
          />
          <!-- 文件上传 -->
          <input type="file" v-if="item.type === 'file'" accept="item.mime" />
        </label>
        <!-- 单选、多选 -->
        <span v-if="['radio', 'checkbox'].indexOf(item.type) >= 0">
          {{item.label.name}}
          <label v-for='option of item.list.options' :key='option.guid'>
            <input :type="item.type" :value="option.value" :name="item.name" />
            {{option.title}}
          </label>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import guid from '@dllcn/js-shortid'
export default {
  name: 'AdForm',
  data () {
    return {
      formData: {

      }
    }
  },
  created () {
    this.forms.map(item => {
      if (['radio', 'checkbox'].indexOf(item.type) >= 0) {
        switch(item.type) {
          case 'radio':
          case 'checkbox':
            item.list.options.map(option => {
              option.guid = guid.gen()
            })
            break;
        }
      }
      item.guid = guid.gen()
    })
  },
  props: {
    forms: Array
  }
}
</script>

<style>

</style>