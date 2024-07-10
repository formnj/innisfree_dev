<template>
  <div class="search_wrap">
    <div class="search">
      <InmInputText :placeholder="props.placeholder" @focus="openSearchLayer" />
      <InmButton class="btn_search" />
    </div>
    <div class="search_layer" :class="{ active: isActive }" @mouseleave="closeSearchLayer">
      <div class="search">
        <InmButton v-if="props.isMobile" class="sam_close">닫기</InmButton>
        <div>
          <InmInputText :placeholder="props.placeholder" />
          <InmButton class="btn_search" />
        </div>
        <ul v-if="props.isMobile" class="icon_menu">
          <li>
            <a href="#none" class="cart"
              >장바구니
              <em>5</em>
            </a>
          </li>
        </ul>
      </div>
      <section>
        <strong
          >최근 검색어
          <InmButton class="btn_txt">전체삭제</InmButton>
        </strong>
        <ul class="latest">
          <li v-for="(searchWord, index) in props.latestSearchWordList" :key="index">
            <div>
              <a :href="searchWord.url">{{ searchWord.word }}</a>
              <InmButton class="btn_del" />
            </div>
          </li>

          <li v-if="props.latestSearchWordList.length === 0" class="no_data">최근 검색어가 없습니다.</li>
        </ul>
      </section>
      <section>
        <strong>카테고리</strong>
        <ul class="category">
          <li v-for="(category, index) in categoryList" :key="index">
            <a :href="category.url">
              <span class="thumb">
                <em><img :src="category.imageUrl" /></em>
              </span>
              <p>{{ category.text }}</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from '#imports'

interface ISearchWord {
  word: string
  url: string
}

interface ISearchCategory {
  imageUrl: string
  text: string
  url: string
}

interface ISearchProps {
  placeholder?: string
  isMobile: boolean
  latestSearchWordList?: Array<ISearchWord>
  categoryList?: Array<ISearchCategory>
}

const props = withDefaults(defineProps<ISearchProps>(), {
  placeholder: '',
  latestSearchWordList: () => [],
  categoryList: () => []
})

const isActive = ref(false)

const openSearchLayer = () => {
  isActive.value = true
}

// const searchLayerFocusing = (event) => {
//   event.target.focus()
// }

const closeSearchLayer = () => {
  isActive.value = false
}
</script>
<style></style>
