<template>
  <div>
    <form>
      <div v-for="item of forms" :key="item.guid" v-show="item.type !== 'hidden'">
        <label v-if="['radio'].indexOf(item.type) == -1">
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
        <!-- 单选 -->
        <span v-if="item.type === 'radio'">
          {{item.label.name}}
          <label v-for='radio of item.radios.options' :key='radio.guid'>
            <input type="radio" :value="radio.value" :name="item.radios.name" v-model="formData" />
            {{radio.title}}
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
      if (['radio'].indexOf(item.type) >= 0) {
        switch(item.type) {
          case 'radio':
            item.radios.options.map(option => {
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