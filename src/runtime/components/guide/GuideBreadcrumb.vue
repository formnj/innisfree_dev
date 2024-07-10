<template>
  <section>
    <h2>Breadcrumb</h2>
    <div class="design_box">
      <InmBreadcrumb :menu-list="breadcrumbData" />
    </div>
    <pre class="code_box"><code>&lt;InmBreadcrumb :menu-list="breadcrumbData" /&gt;</code></pre>
  </section>
</template>
<script setup lang="ts">
import { breadcrumbData } from '@inmModule/test/data/dev/dummyData'
</script>
