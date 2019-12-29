<template>
  <div>
    <form>
      <div v-for="item of forms" :key="item.guid" v-show="item.type !== 'hidden'">
        <label>
          {{item.label.name}} 
          <input 
            :type="item.type ? item.type : 'text'" 
            :placeholder="item.placeholder" 
            v-if="item.type !== 'file' && !item.readonly" 
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
          <input type="file" v-if="item.type === 'file'" accept="item.mime" />
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdForm',
  data () {
    return {
    }
  },
  props: {
    forms: Array
  }
}
</script>

<style>

</style>