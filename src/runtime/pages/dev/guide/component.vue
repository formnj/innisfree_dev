<template>
  <div class="page-container">
    <h1 class="page-title">공통컴포넌트 가이드</h1>

    <div class="content">
      <GuideInputText id="GuideInputText"></GuideInputText>

      <GuideInputPassword id="GuideInputPassword"></GuideInputPassword>

      <GuideTextarea id="GuideTextarea"></GuideTextarea>

      <GuideInputCheckbox id="GuideInputCheckbox"></GuideInputCheckbox>

      <GuideInputRadio id="GuideInputRadio"></GuideInputRadio>

      <GuideInputValidation id="GuideInputValidation"></GuideInputValidation>

      <GuideSelect id="GuideSelect"></GuideSelect>

      <GuideButton id="GuideButton"></GuideButton>

      <GuideImage id="GuideImage"></GuideImage>

      <GuideQuantity id="GuideQuantity"></GuideQuantity>

      <GuideStartScore id="GuideStartScore"></GuideStartScore>

      <GuideDropDown id="GuideDropDown"></GuideDropDown>

      <GuideHtmlContent id="GuideHtmlContent"></GuideHtmlContent>

      <GuideInfiniteScroll id="GuideInfiniteScroll"></GuideInfiniteScroll>

      <GuidePagination id="GuidePagination"></GuidePagination>

      <GuideTab id="GuideTab"></GuideTab>

      <GuideModal id="GuideModal"></GuideModal>

      <GuideUseModal id="GuideUseModal"></GuideUseModal>

      <GuideUseToast id="GuideUseToast"></GuideUseToast>

      <GuideSwiper id="GuideSwiper"></GuideSwiper>

      <GuideTooltip id="GuideTooltip"></GuideTooltip>

      <GuideUseTooltip id="GuideUseTooltip"></GuideUseTooltip>

      <GuideHash id="GuideHash"></GuideHash>

      <GuideSticker id="GuideSticker"></GuideSticker>

      <GuideLayout id="GuideLayout"></GuideLayout>
      <div :class="['floating-menu', { collapsed: isCollapsed }]">
        <button class="toggle-button" @click="toggleMenu">
          {{ !isCollapsed ? '>' : '<' }}
        </button>

        <div v-if="!isCollapsed" class="menu-content">
          <ul>
            <li><a href="#GuideInputText">InputText</a></li>
            <li><a href="#GuideInputPassword">InputPassword</a></li>
            <li><a href="#GuideTextarea">Textarea</a></li>
            <li><a href="#GuideInputCheckbox">InputCheckbox</a></li>
            <li><a href="#GuideInputRadio">InputRadio</a></li>
            <li><a href="#GuideInputValidation">InputValidation</a></li>
            <li><a href="#GuideButton">Button</a></li>
            <li><a href="#GuideImage">Image</a></li>
            <li><a href="#GuideQuantity">Quantity</a></li>
            <li><a href="#GuideStartScore">StartScore</a></li>
            <li><a href="#GuideDropDown">DropDown</a></li>
            <li><a href="#GuideHtmlContent">HtmlContent</a></li>
            <li><a href="#GuideInfiniteScroll">InfiniteScroll</a></li>
            <li><a href="#GuidePagination">Pagination</a></li>
            <li><a href="#GuideTab">Tab</a></li>
            <li><a href="#GuideModal">Modal</a></li>
            <li><a href="#GuideUseModal">useModal</a></li>
            <li><a href="#GuideUseToast">useToast</a></li>
            <li><a href="#GuideSwiper">Swiper</a></li>
            <li><a href="#GuideTooltip">Tooltip</a></li>
            <li><a href="#GuideUseTooltip">useTooltip</a></li>
            <li><a href="#GuideHash">GuideHash</a></li>
            <li><a href="#GuideSticker">GuideSticker</a></li>
            <li><a href="#GuideLayout">Layout Guide</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  GuideInputText,
  GuideInputPassword,
  GuideInputRadio,
  GuideInputCheckbox,
  GuideInputValidation,
  GuideTab,
  GuideModal,
  GuideSelect,
  GuideButton,
  GuideDropDown,
  GuideTextarea,
  GuideUseToast,
  GuideQuantity,
  GuideStartScore,
  GuideImage,
  GuideTooltip,
  GuideHtmlContent,
  GuidePagination,
  GuideInfiniteScroll,
  GuideSwiper,
  GuideUseModal,
  GuideUseTooltip,
  GuideLayout,
  GuideHash,
  GuideSticker
} from '@inmModule/components/guide'
import { definePageMeta, ref } from '#imports'

definePageMeta({
  layout: 'dev-guide-layout'
})

const isCollapsed = ref(true)
const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>
<style scoped>
.page-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
  background: linear-gradient(90deg, #4caf50, #2196f3);
  color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.floating-menu {
  position: fixed;
  top: 100px;
  right: 0;
  width: 200px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 1000;
}
.floating-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.floating-menu li {
  margin-bottom: 10px;
}

.floating-menu a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.floating-menu a:hover {
  text-decoration: underline;
}

.floating-menu.collapsed {
  transform: translateX(150px);
}
.guide-section {
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.toggle-button {
  position: sticky;
  top: 10px;
  right: -30px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1100;
}

.menu-content {
  padding-top: 40px;
}
</style>
