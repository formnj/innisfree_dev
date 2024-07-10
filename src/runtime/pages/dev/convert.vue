<template>
  <section>
    <h2>Convert Page</h2>
    <h3>Java Class 를 Typescript interface 로 변환하는 페이지 입니다.</h3>
    <ol>
      <li>- 형식을 알기 힘든 부분은 any로 처리되어 있습니다. 가급적 any는 각 Dto에 맞게 치환하면 작업 바랍니다.</li>
    </ol>
  </section>
  <section>
    <div class="container">
      <div class="textarea-container">
        <textarea
          v-model="javaInput"
          :placeholder="`여기에 자바 클래스를 입력하세요
ex ---------------------------
public class GuideDto {
  private String value1;
  private String[] value2;
  private Integer value3;
  private Integer[] value4;
  private List<Map<String, Object>> value5;
  private Map<String, Object> value6;
  private TestDto value7;
}
          `"></textarea>
        <textarea
          v-model="tsOutput"
          :placeholder="`여기에 변환된 TypeScript 인터페이스가 표시됩니다
ex ---------------------------
interface GuideDtoInterface {
  value1: string;
  value2: string[];
  value3: number;
  value4: number[];
  value5: any[];
  value6: { [key: string]: any };
  value7: any;
}
        `"></textarea>
      </div>
      <InmButton @click="convertJavaToTypeScript">변환</InmButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { definePageMeta, ref } from '#imports'

definePageMeta({
  layout: 'dev-guide-layout'
})

// 자바 클래스를 TypeScript 인터페이스로 변환하는 함수
function javaToTypeScript(javaClassString: string): string {
  // 정규식을 사용하여 클래스 이름 추출
  const classNameMatch = javaClassString.match(/public\s+class\s+(\w+)/)
  if (!classNameMatch) throw new Error('잘못된 자바 클래스 형식입니다.')

  // 클래스 이름과 인터페이스 이름 설정
  const className = classNameMatch[1]
  const interfaceName = `${className}Interface`

  // 자바 클래스에서 모든 private 속성 추출
  const properties = javaClassString.match(/private\s+[\w<>,\s\[\]]+\s+\w+;/g)
  if (!properties) throw new Error('자바 클래스에 속성이 없습니다.')

  // 자바 타입을 TypeScript 타입으로 매핑하기 위한 객체
  const typeMap: { [key: string]: string } = {
    int: 'number',
    Integer: 'number',
    long: 'number',
    Long: 'number',
    double: 'number',
    Double: 'number',
    float: 'number',
    Float: 'number',
    String: 'string',
    boolean: 'boolean',
    Boolean: 'boolean',
    HashMap: '{ [key: string]: any }',
    Map: '{ [key: string]: any }',
    List: 'any[]',
    ArrayList: 'any[]',
    LinkedList: 'any[]',
    HashSet: 'Set<any>',
    Set: 'Set<any>',
    TreeSet: 'Set<any>'
  }

  // 각 속성을 TypeScript 형식으로 변환
  const tsProperties = properties
    .map((property) => {
      const match = property.match(/private\s+([\w<>,\s\[\]]+)\s+(\w+);/)
      if (!match) return ''
      const type = match[1].replace(/\s/g, '') // 공백 제거
      const name = match[2]

      // 배열 타입 및 객체 타입 확인 및 처리
      let tsType
      if (type.endsWith('[]')) {
        const baseType = type.slice(0, -2)
        tsType = (typeMap[baseType] || 'any') + '[]'
      } else if (
        type.startsWith('List<') ||
        type.startsWith('ArrayList<') ||
        type.startsWith('Set<') ||
        type.startsWith('HashSet<') ||
        type.startsWith('Queue<') ||
        type.startsWith('Deque<') ||
        type.startsWith('LinkedList<') ||
        type.startsWith('TreeSet<')
      ) {
        tsType = 'any[]'
      } else if (type.startsWith('HashMap<') || type.startsWith('Map<')) {
        tsType = '{ [key: string]: any }'
      } else {
        tsType = typeMap[type] || 'any'
      }

      return `  ${name}: ${tsType};`
    })
    .filter(Boolean)

  // TypeScript 인터페이스 문자열 생성
  const tsInterface = `interface ${interfaceName} {\n${tsProperties.join('\n')}\n}`

  return tsInterface
}

const javaInput = ref<string>('')
const tsOutput = ref<string>('')

function convertJavaToTypeScript() {
  try {
    tsOutput.value = javaToTypeScript(javaInput.value)
  } catch (error) {
    tsOutput.value = (error as Error).message
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.textarea-container {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
textarea {
  width: 600px;
  height: 600px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
