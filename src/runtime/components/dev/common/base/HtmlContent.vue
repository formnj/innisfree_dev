<template>
  <div v-if="secure" v-dompurify-html="content"></div>
  <div v-else ref="contentContainer"></div>
</template>

<script setup lang="ts">
import { watch, ref } from '#imports'
import { useUtils } from '@inmModule/composables/useUtils'

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  secure: {
    type: Boolean,
    default: true
  }
})

const { isNotEmpty } = useUtils()

const contentContainer = ref<HTMLDivElement | null>(null)

watch(
  () => props.content,
  () => {
    if (!props.secure && isNotEmpty(props.content)) {
      if (contentContainer.value) {
        contentContainer.value.innerHTML = props.content
        executeScripts(contentContainer.value)
      }
    }
  }
)

const executeScripts = (element: HTMLDivElement) => {
  const scripts = element.querySelectorAll('script')
  scripts.forEach((script) => {
    const newScript = document.createElement('script')
    if (script.src) {
      newScript.src = script.src
    } else {
      newScript.textContent = script.innerHTML
    }
    document.body.appendChild(newScript)
    script.parentNode?.removeChild(script)
  })
}
</script>

<style lang="scss" scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
</style>
