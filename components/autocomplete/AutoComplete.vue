<template>
  <!-- <div class="mdc-select mdc-select--outlined" @MDCSelect:change="onChange"> -->
  <div class="material-autocomplete mdc-menu-surface--anchor" ref="menuAnchor">
    <m-text-field v-bind="$attrs" @keydown.down.up="keyDown" :useNativeValidation="false" :valid="error ? false : true" :id="`material-autocomplete-text-field__${name}`" v-model="searchValue" outlined>
      <m-floating-label :for="`material-autocomplete-text-field__${name}`">{{ display }}</m-floating-label>
    </m-text-field>
    <m-text-field-helper-line>
      <m-text-field-helper-text :validationMsg="error ? true : false">
        {{ error || helperText }}
      </m-text-field-helper-text>
    </m-text-field-helper-line>
    <!-- <div class="mdc-menu-surface--anchor" style="top: -19px;"> -->
      <div class="mdc-menu mdc-menu-surface material-autocomplete-menu" ref="menu" @MDCMenu:selected="onMenuSelected">
        <ul class="mdc-list">
          <!-- <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li> -->
          <template  v-if="getOptions().length > 0">
            <li>
              <ul class="mdc-menu__selection-group">
                <li class="mdc-list-item" role="menuitem" :data-value="options" v-for="option in getOptions()" :key="option">
                  <span class="mdc-list-item__text">
                    {{ option }}
                  </span>
                </li>
              </ul>
            </li>
          </template>
          <li v-else-if="isPromisePending" class="mdc-list-item mdc-list-item--disabled">
            <span class="mdc-list-item__text">
              Loading Options
            </span>
          </li>
          <li v-else class="mdc-list-item mdc-list-item--disabled">
            <span class="mdc-list-item__text">
              No Selectable Item
            </span>
          </li>
        </ul>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import TextField from '../text-field/TextField'
import TextFieldHelperText from '../text-field/TextFieldHelperText'
import TextFieldHelperLine from '../text-field/TextFieldHelperLine'
import FloatingLabel from '../floating-label/FloatingLabel'

import {MDCMenu} from '@material/menu';
import {MDCMenuSurface} from '@material/menu-surface';

import { MDCComponent } from '@material/base/component'
import { baseComponentMixin, themeClassMixin } from '../base'

import fuzzy from 'fuzzysearch'
import isPromise from 'is-promise'

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    options: {
      type: [Array, Promise],
      default: () => []
    },
    valid: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    helperText: String,
    display: String,
    error: String,
  },
  mixins: [baseComponentMixin, themeClassMixin],
  methods: {
    keyDown (e) {
      this.mdcMenu.foundation_.adapter_.focusListRoot()
    },
    instantiate () {
      this.mdcMenu = new MDCMenu(this.$refs['menu'])
      this.mdcMenu.setAnchorMargin({top: 56})
      this.mdcMenu.setDefaultFocusState(0)
    },
    onChange (event) {
      this.$emit('change', event.detail)
      this.$emit('model', event.detail.value)
    },
    onMenuSelected(e) {
      this.itemSelected = true
      this.selectedIndex = e.detail.index
      // this.$emit('input', this.getOptions()[e.detail.index])
    },
    getOptions() {
      // method for returning function for getting options
      if (isPromise(this.options)) {
        return this.filteredAsyncOptions
      }
      return this.filteredStaticOptions
    },
    matchText (item) {
      const target = item.toLowerCase()
      const search = this.searchValue.toLowerCase()
      // if (this.mdFuzzySearch) {
      //   return fuzzy(search, target)
      // }
      return target.includes(search)
    },
    filterByString () {
      // filter function which filter options by string
      return this.options.filter(item => this.matchText(item))
    },
    nextItem() {
      if (this.current >= this.mdcMenu.foundation_.adapter_.getMenuItemCount()-1) this.current = 0
      else this.current += 1
    },
    previousItem() {
      if (this.current <= 0) this.current = this.mdcMenu.foundation_.adapter_.getMenuItemCount()-1
      else this.current -= 1
    }
  },
  mounted () {
    // this.updateSlots()
    // this.slotObserver = new MutationObserver(() => this.updateSlots())
    // this.slotObserver.observe(this.$el, {
    //   childList: true,
    //   subtree: true
    // })
    this.instantiate()
  },
  computed: {
    shouldFilter () {
      return this.options[0] && this.searchValue
    },
    filteredStaticOptions () {
      // if (this.isPromise(this.mdOptions)) {
      //   return false
      // }
      const firstItem = this.options[0]
      if (this.shouldFilter) {
        if (typeof firstItem === 'string') return this.filterByString()
        else if (typeof firstItem === 'object') return this.filterByObject()
      }
      return this.options
    },
  },
  watch: {
    searchValue(x) {
      // emit search term
      this.$emit('search', x)

      // open menu if input is not empty
      if (!this.itemSelected) {
        this.mdcMenu.open = x ? true : false
        this.selectedIndex = null
      } else this.itemSelected = false
    },
    value (val) {
      this.searchValue = val
    },
    selectedIndex (x) {
      if (typeof x === 'number')
        this.$emit('input', this.getOptions()[x])
      else
        this.$emit('input', '')
    },
    options: {
      deep: true,
      immediate: true,
      handler () {
        if (isPromise(this.options)) {
          // set pending options
          this.isPromisePending = true
          this.options.then(options => {
            this.filteredAsyncOptions = options
            this.isPromisePending = false
          })
        }
      }
    }
  },
  data() {
    return {
      searchValue: '',
      itemSelected: false,
      selectedIndex: null,

      filteredAsyncOptions: [],
      isPromisePending: false,
    }
  },
  components: { 'm-text-field': TextField, 'm-floating-label': FloatingLabel, 'm-text-field-helper-text': TextFieldHelperText, 'm-text-field-helper-line': TextFieldHelperLine }
}
</script>