<template lang='html'>
  <div class="SearchWrapper">
    <div class="Search">
      <div class="SearchHeader">
        <BaseSearch class="SearchHeaderSearch"
                    :autofocus="true"
                    :placeholder="'Type something'"
                    :value="search"
                    @changeValue="search = $event.value"/>
        <BaseButton text="Home" @clickButton="$router.push({ name: 'Home' })"/>
      </div>
      <div class="SearchMain">
        <div v-if="search.length <= 1"
             class="SearchMainText">                                            <!-- Введите текст -->
          <h1>
            Type something...
          </h1>
        </div>
        <div v-else-if="loading"
             class="SearchMainLoader">                                          <!-- Загрузка -->
          <BaseLoader class="SearchMainLoaderLoader"/>
        </div>
        <div v-else-if="search.length"
             class="SearchMainResults">                                         <!-- Результат -->
          <router-link v-for="(result, index) of results" :key="index"
                       class="SearchMainResult"
                       tag="div"
                       :to="result.path">
            <p><code>{{ index + 1 }}. </code>{{ result.name }}</p>
            <code style="width: 50%">{{ result.path }}</code>
          </router-link>
        </div>
        <div v-else
             class="SearchMainText">                                            <!-- Не найдено -->
          <h1>
            Nothing was found...
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import BaseLoader from '@/components/base/loaders/BaseLoader.vue'
import BaseButton from '@/components/base/button/BaseButton.vue'
import BaseSearch from '@/components/base/input/BaseSearch.vue'

export default Vue.extend({
  name: 'Search',
  components: { BaseSearch, BaseButton, BaseLoader },
  data () {
    return {
      loading: false,
      search: ''
    }
  },
  props: {
    from: {
      type: String,
      default: undefined
    }
  },
  computed: {
    results () {
      this.loading = true

      const search = this.search.toLowerCase()
      const result = this.search.length >= 2 ?
          [
            ...this.$router.options.routes.filter(route =>
                route.name?.toLowerCase().includes(search) ||
                route.path?.toLowerCase().includes(search) ||
                route.meta?.title?.toLowerCase().includes(search) ||
                route.meta?.description?.toLowerCase().includes(search) ||
                route.meta?.keywords?.toLowerCase().includes(search)
            )
          ] : undefined
      this.loading = false
      return result
    }
  },
  created () {
    if (this.from) {
      this.search = this.from
    }
  }
})
</script>

<style lang='scss' scoped>
.SearchWrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .Search {
    display: flex;
    flex-direction: column;

    width: 512px;
    height: 355px;

    background: #3C3F41;
    border: 1px solid #323232;
    box-sizing: border-box;
    .SearchHeader {
      width: 100%;
      height: 54px;

      padding: 16px;

      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      column-gap: 12px;
      .SearchHeaderSearch {
        width: 100%;
      }
    }
    .SearchMain {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #313335;
      padding: 16px;
      .SearchMainResults {
        width: 100%;
        height: 100%;
        row-gap: 16px;
        display: flex;
        flex-direction: column;
        .SearchMainResult {
          width: 100%;
          height: 55px;
          background: #3C3F41;
          border: 1px solid #323232;
          box-sizing: border-box;
          border-radius: 2px;
          display: flex;
          padding-left: 16px;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>