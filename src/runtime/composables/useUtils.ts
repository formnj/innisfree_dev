/**
 * 공통함수 목록
 * - isFunction : 주어진 값이 함수인지 여부를 확인하는 함수.
 * - isEmpty : 주어진 값이 비어있는지 여부를 확인하는 함수.
 * - isEqual : 두 값이 깊이 비교하여 동일한지 확인합니다.
 * - isNotEmpty : 주어진 값이 비어있지 않은지 여부를 확인하는 함수.
 * - getUUID :  UUID(범용 고유 식별자)를 생성하는 함수.
 * - replace : 문자열에서 첫 번째로 일치하는 부분 문자열을 교체합니다.
 * - replaceAll : 문자열에서 일치하는 모든 부분 문자열을 교체합니다.
 * - removeNonNumeric : 주어진 문자열에서 숫자가 아닌 모든 문자를 제거하는 함수.
 * - transformKeys : 주어진 배열의 객체들의 키를 변환하는 함수.
 * - cloneDeep : 객체나 배열을 깊은 복사합니다.
 * - uniq : 배열에서 중복된 값을 제거합니다.
 * - get : 객체에서 안전하게 값을 가져옵니다.
 * - set : 객체의 특정 경로에 값을 설정합니다.
 * - chunk : 배열을 지정된 크기의 덩어리로 나눕니다.
 * - throttle : 함수가 일정 시간 간격으로만 호출되도록 제한합니다.
 * - debounce : 특정 함수의 호출 빈도를 제한하여 성능을 최적화합니다.
 * - defaults : 대상 객체에 기본값을 설정합니다.
 * - setLocalStorage : 로컬 스토리지에 데이터와 만료 정보를 저장합니다.
 * - getLocalStorage : 로컬 스토리지에서 데이터를 가져오며, 만료 시간을 확인하여 만료된 경우 데이터를 삭제합니다.
 *
 * 숫자함수 목록
 * - formatNumber - 숫자를 주어진 소수점 자리까지 포맷합니다.
 * - formatCurrency - 숫자를 통화 형식으로 포맷합니다.
 * - addComma - 숫자에 천 단위 구분자를 추가합니다.
 * - roundToDecimalPlaces - 숫자를 주어진 소수점 자리까지 반올림합니다.
 *
 * 날짜함수 목록
 * - parseDate : 문자열을 Date 객체로 변환합니다.
 * - formatDateToYYYYMMDD :  날짜를 'YYYY-MM-DD' 형식의 문자열로 반환합니다.
 * - formatTimeToHHMMSS : 시간을 'HH:MM:SS' 형식의 문자열로 반환합니다.
 * - dateDiffInDays : 두 날짜 간의 차이를 일 단위로 계산합니다.
 * - addDaysToDate : 날짜에 특정 일수를 더합니다.
 * - addMonthsToDate : 날짜에 특정 개월 수를 더합니다.
 * - addYearsToDate : 날짜에 특정 연도 수를 더합니다.
 * - isToday : 주어진 날짜가 오늘인지 확인합니다.
 * - getLastDayOfMonth : 주어진 날짜가 속한 달의 마지막 날을 반환합니다.
 */

interface OriginalObject {
  [key: string]: any
}
interface KeyMap {
  [key: string]: string
}

interface StorageOptions {
  maxAge?: number // 초 단위로 만료 시간을 설정
  expires?: string // 특정 날짜에 만료 (ISO 문자열 형식)
  today?: boolean // 오늘 자정까지만 데이터 유지
  days?: number // 지정된 일수만큼 데이터 유지
}

export const useUtils = () => {
  /**
   * 주어진 값이 비어있는지 여부를 확인하는 함수.
   *
   * @param value - 비어있는지 확인할 값.
   * @returns 값이 비어있는 경우 true, 그렇지 않은 경우 false.
   *
   * @example
   * console.log(isEmpty("")); // true
   * console.log(isEmpty([])); // true
   * console.log(isEmpty({})); // true
   * console.log(isEmpty(null)); // true
   * console.log(isEmpty(undefined)); // true
   * console.log(isEmpty("hello")); // false
   * console.log(isEmpty([1, 2, 3])); // false
   * console.log(isEmpty({ key: "value" })); // false
   */
  function isEmpty(value: any): boolean {
    if (value == null) return true

    if (typeof value === 'string' || value instanceof String) return value.length === 0

    if (Array.isArray(value)) return value.length === 0

    if (typeof value === 'object') return Object.keys(value).length === 0

    return false
  }

  /**
   * 주어진 값이 비어있지 않은지 여부를 확인하는 함수.
   *
   * @param value - 비어있는지 확인할 값.
   * @returns 값이 비어있지 않은 경우 true, 비어있는 경우 false.
   *
   * @example
   * console.log(isNotEmpty("")); // false
   * console.log(isNotEmpty([])); // false
   * console.log(isNotEmpty({})); // false
   * console.log(isNotEmpty(null)); // false
   * console.log(isNotEmpty(undefined)); // false
   * console.log(isNotEmpty("hello")); // true
   * console.log(isNotEmpty([1, 2, 3])); // true
   * console.log(isNotEmpty({ key: "value" })); // true
   */
  function isNotEmpty(value: any): boolean {
    return !isEmpty(value)
  }

  /**
   * 두 값이 깊이 비교하여 동일한지 확인합니다.
   * @param a 비교할 첫 번째 값
   * @param b 비교할 두 번째 값
   * @returns 두 값이 동일하면 true, 그렇지 않으면 false
   * @example
   * const obj1 = { a: 1, b: { c: 2 } };
   * const obj2 = { a: 1, b: { c: 2 } };
   * const areEqual = isEqual(obj1, obj2); // true
   */
  function isEqual(a: any, b: any): boolean {
    if (a === b) return true

    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
      return false
    }

    const keysA = Object.keys(a)
    const keysB = Object.keys(b)

    if (keysA.length !== keysB.length) return false

    for (const key of keysA) {
      if (!keysB.includes(key) || !isEqual(a[key], b[key])) {
        return false
      }
    }

    return true
  }

  /**
   * 주어진 값이 함수인지 여부를 확인하는 함수.
   *
   * @param value - 타입을 확인할 값.
   * @returns 값이 함수인 경우 true, 그렇지 않은 경우 false.
   *
   * @example
   * console.log(isFunction(function() {})); // true
   * console.log(isFunction(() => {})); // true
   * console.log(isFunction(123)); // false
   * console.log(isFunction("hello")); // false
   */
  function isFunction(value: any) {
    return typeof value === 'function'
  }

  /**
   * UUID(범용 고유 식별자)를 생성하는 함수.
   * 이 함수는 특정 패턴의 문자열을 생성하고, 무작위 비트를 적용하여
   * UUID 형식의 고유 식별자를 반환합니다.
   *
   * @returns UUID 형식의 고유 식별자 문자열.
   *
   * @example
   * console.log(getUUID()); // 예: "a3bb189e-8bf9-3888-9912-ace4e6543002"
   */
  function getUUID(): string {
    return `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, (c: string) =>
      ((parseInt(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & 15)) >> (parseInt(c) / 4)).toString(16)
    )
  }

  /**
   * 주어진 문자열에서 숫자가 아닌 모든 문자를 제거하고,
   * 필요한 경우 앞부분의 '0'을 제거하는 함수.
   * 옵션에 따라 음수를 표현할 수 있음.
   *
   * @param str - 숫자가 아닌 문자를 제거할 대상 문자열.
   * @param allowNegative - 음수 허용
   * @returns 숫자만 포함된 새로운 문자열. 앞부분의 '0'은 필요한 경우 제거됨.
   *
   * @example
   * console.log(removeNonNumeric("abc123")); // "123"
   * console.log(removeNonNumeric("00123abc")); // "123"
   * console.log(removeNonNumeric("a0b0c0")); // "0"
   * console.log(removeNonNumeric("-00123abc",  true)); // "-123"
   * console.log(removeNonNumeric("a-0b0c0", true )); // "0"
   */
  function removeNonNumeric(str: string, allowNegative?: boolean) {
    let numericString = str.replace(/\D/g, '')

    // 음수를 허용하는 경우
    if (allowNegative && str.includes('-')) {
      numericString = '-' + numericString
    }

    // 앞부분의 '0'을 제거
    if (numericString.length > 1 && numericString[0] === '0' && numericString[1] !== '.') {
      numericString = numericString.replace(/^0+/, '')
    }

    // 빈 문자열이 되는 경우 '0'으로 반환
    if (numericString === '-' || numericString === '') {
      numericString = '0'
    }

    return numericString
  }

  /**
   * 주어진 배열의 객체들의 키를 변환하는 함수.
   *
   * @param array - 키를 변환할 객체들의 배열.
   * @param keyMap - 기존 키를 새로운 키로 매핑하는 객체.
   * @returns 키가 변환된 새로운 객체들의 배열.
   *
   * @example
   * const originalArray = [{ name: '까꿍이', brith: '2019.11.15', breed: '실버푸들', fullName :'킹엘리자베스테일러문까꿍' }];
   * const keyMap = { name: '이름', brith: '생일', breed: '품종' , fullName: '전체이름'};
   * const transformedArray = transformKeys(originalArray, keyMap);
   * console.log(transformedArray); // [{이름: '까꿍이', 생일: '2019.11.15', 품종: '실버푸들', 전체이름: '킹엘리자베스테일러문까꿍'}]
   */
  function transformKeys(array: OriginalObject[], keyMap: KeyMap): OriginalObject[] {
    return array.map((item) => {
      const newItem: OriginalObject = {}
      for (const key in item) {
        if (Object.hasOwn(item, key)) {
          const newKey = keyMap[key] || key
          newItem[newKey] = item[key]
        }
      }
      return newItem
    })
  }

  /**
   * 객체나 배열을 깊은 복사합니다.
   * @param obj 복사할 객체
   * @returns 깊은 복사된 객체
   * @example
   * const obj = { a: 1, b: { c: 2 } };
   * const deepClone = cloneDeep(obj);
   */
  function cloneDeep<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
  }

  /**
   * 배열에서 중복된 값을 제거합니다.
   * @param array 중복 제거할 배열
   * @returns 중복 제거된 배열
   * @example
   * const array = [1, 2, 2, 3, 4, 4, 5];
   * const uniqueArray = uniq(array);
   */
  function uniq<T>(array: T[]): T[] {
    return [...new Set(array)]
  }

  /**
   * 객체에서 안전하게 값을 가져옵니다.
   * @param obj 검색할 객체
   * @param path 검색할 경로 (점 표기법)
   * @param defaultValue 기본값 (없을 경우)
   * @returns 검색된 값 또는 기본값
   * @example
   * const obj = { a: { b: { c: 3 } } };
   * const value = get(obj, 'a.b.c'); // 3
   * const defaultValue = get(obj, 'a.b.x', 'default'); // 'default'
   */
  function get<T>(obj: T, path: string, defaultValue?: any): any {
    const keys = path.split('.')
    let result: any = obj
    for (const key of keys) {
      result = result ? result[key] : undefined
      if (result === undefined) {
        return defaultValue
      }
    }
    return result
  }

  /**
   * 객체의 특정 경로에 값을 설정합니다.
   * @param obj 값을 설정할 객체
   * @param path 설정할 경로 (점 표기법)
   * @param value 설정할 값
   * @returns 값을 설정한 객체
   * @example
   * const obj = { a: { b: { c: 3 } } };
   * set(obj, 'a.b.c', 4);
   * set(obj, 'a.b.d', 5);
   */
  function set<T>(obj: T, path: string, value: any): T {
    const keys = path.split('.')
    let current: any = obj
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = value
      } else {
        current[key] = current[key] || {}
        current = current[key]
      }
    })
    return obj
  }
  /**
   * 배열을 지정된 크기의 덩어리로 나눕니다.
   * @param array 나눌 배열
   * @param size 덩어리 크기
   * @returns 나눠진 배열 덩어리
   * @example
   * const array = [1, 2, 3, 4, 5, 6, 7, 8];
   * const chunks = chunk(array, 2); // [[1, 2], [3, 4], [5, 6], [7, 8]]
   */
  function chunk<T>(array: T[], size: number): T[][] {
    const result: T[][] = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  /**
   * 함수가 일정 시간 간격으로만 호출되도록 제한합니다.
   * - 일정 시간 간격으로 실행.
   * - 연속된 호출 중 지정된 시간 간격마다 한 번만 실행됨.
   * - 사용 예시: 스크롤 이벤트나 리사이즈 이벤트 핸들링.
   * @param func 스로틀할 함수
   * @param limit 호출 간격 (밀리초)
   * @returns 스로틀된 함수
   * @example
   * const throttledFunc = throttle(() => {
   *   console.log('Throttled!');
   * }, 300);
   * window.addEventListener('scroll', throttledFunc);
   */
  function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle: boolean
    return function (this: any, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  /**
   * 특정 함수의 호출 빈도를 제한하여 성능을 최적화합니다.
   * - 마지막 호출 후 일정 시간 후에 실행.
   * - 연속된 호출 중 마지막 호출만 실행됨.
   * - 사용 예시: 입력 폼에서 사용자가 입력을 멈춘 후 서버에 요청을 보내는 경우.
   * @param func 디바운스할 함수
   * @param wait 대기 시간 (밀리초)
   * @returns 디바운스된 함수
   * @example
   * const debouncedFunc = debounce(() => {
   *   console.log('Debounced!');
   * }, 300);
   *
   * @input="debouncedFunc";
   */
  function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>
    return function (this: any, ...args: Parameters<T>) {
      const later = () => {
        clearTimeout(timeout)
        func.apply(this, args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  /**
   * 대상 객체에 기본값을 설정합니다.
   * @param target 기본값을 설정할 대상 객체
   * @param defaults 기본값을 가진 객체
   * @returns 기본값이 설정된 대상 객체
   * @example
   * const target = { a: 1 };
   * const defaultValues = { a: 3, b: 2 };
   * const result = defaults(target, defaultValues); // { a: 1, b: 2 }
   */
  function defaults<T extends object, U extends object>(target: T, defaults: U): T & U {
    const result: any = { ...target }

    for (const key in defaults) {
      if (result[key] === undefined) {
        result[key] = defaults[key]
      }
    }

    return result
  }

  interface StoredItem {
    value: string // 저장할 값
    expiry: string // 만료 시간 (ISO 문자열 형식)
  }
  /**
   * 로컬 스토리지에 데이터와 만료 정보를 저장합니다.
   * @param key 로컬 스토리지에 저장할 키
   * @param value 저장할 값
   * @param options 만료 옵션 (`maxAge` 또는 `expires`)
   * @example
   * 데이터 저장: 'testKey'로 데이터 저장하고, 오늘 자정까지 유지
   * setLocalStorage('testKey', 'testValue', {today: true});
   * 데이터 저장: 'testKey2'로 데이터 저장하고, 5일 동안 유지
   * setLocalStorage('testKey2', 'anotherTestValue', {days: 5});
   */
  function setLocalStorage(key: string, value: string, options: StorageOptions): void {
    const now = new Date()

    let expiryDate = now
    if (options.today) {
      expiryDate.setHours(23, 59, 59, 999) // 오늘 자정 설정
    } else if (options.days !== undefined) {
      expiryDate.setDate(now.getDate() + options.days) // 지정된 일수만큼 더함
      expiryDate.setHours(23, 59, 59, 999) // 그 날의 자정
    } else if (options.expires) {
      expiryDate = new Date(options.expires)
    } else if (options.maxAge) {
      expiryDate = new Date(now.getTime() + options.maxAge * 1000)
    } else {
      throw new Error('Expiry option must be provided')
    }

    const item: StoredItem = {
      value: value,
      expiry: expiryDate.toISOString()
    }
    localStorage.setItem(key, JSON.stringify(item))
  }

  /**
   * 로컬 스토리지에서 데이터를 가져오며, 만료 시간을 확인하여 만료된 경우 데이터를 삭제합니다.
   * @param key 로컬 스토리지에서 조회할 키
   * @returns 저장된 데이터 또는 null (만료된 경우)
   * @example
   * 데이터 가져오기: 'testKey'의 데이터 가져오기
   * const value = getLocalStorage('testKey');
   * console.log(value); // 'string 형태의 value' 또는 null
   */
  function getLocalStorage(key: string): string | null {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
      return null
    }

    const item: StoredItem = JSON.parse(itemStr)
    const now = new Date()

    if (now > new Date(item.expiry)) {
      localStorage.removeItem(key)
      return null
    }

    return item.value
  }

  /**
   * 문자열에서 첫 번째로 일치하는 부분 문자열을 교체합니다.
   * @param str 원본 문자열
   * @param search 검색할 문자열 또는 정규 표현식
   * @param replacement 교체할 문자열
   * @returns 교체된 문자열
   * @example
   * const result = replace("Hello World", "World", "까꿍이");
   * console.log(result); // "Hello 까꿍이"
   *
   * const resultWithRegex = replace("Hello World", /World/, "까꿍이");
   * console.log(resultWithRegex); // "Hello 까꿍이"
   *
   */
  function replace(str: string, search: string | RegExp, replacement: string): string {
    return str.replace(search, replacement)
  }

  /**
   * 문자열에서 일치하는 모든 부분 문자열을 교체합니다.
   * @param str 원본 문자열
   * @param search 검색할 문자열 또는 정규 표현식
   * @param replacement 교체할 문자열
   * @returns 교체된 문자열
   * @example
   * const result = replaceAll("Hello World, World", "World", "까꿍이");
   * console.log(result); // "Hello 까꿍이, 까꿍이"
   *
   * const resultWithCustomRegex = replaceAll("Hello World, World, Script", /World|Script/, "이니스프리");
   * console.log(resultWithCustomRegex); // "Hello 이니스프리, 이니스프리, 이니스프리"
   */
  function replaceAll(str: string, search: string | RegExp, replacement: string): string {
    if (typeof search === 'string') {
      // 문자열로 검색하는 경우
      return str.split(search).join(replacement)
    } else {
      // 정규 표현식으로 검색하는 경우
      return str.replace(new RegExp(search, 'g'), replacement)
    }
  }

  /**
   * 문자열을 숫자로 변환합니다.
   * @param str 변환할 문자열
   * @returns 변환된 숫자
   * @throws {Error} 유효하지 않은 숫자 문자열이 제공된 경우
   * @example
   * const number = parseNumber('1234.56');
   * console.log(number); // 1234.56
   */
  function parseNumber(str: string): number {
    const num = parseFloat(str)
    if (isNaN(num)) {
      console.error(`Invalid number string: ${str}`)
      throw new Error(`Invalid number string: ${str}`)
    }
    return num
  }

  /**
   * 숫자를 주어진 소수점 자리까지 포맷합니다.
   * @param num 포맷할 숫자 또는 문자열
   * @param decimalPlaces 소수점 자리수
   * @returns 포맷된 숫자 문자열
   * @throws {Error} 유효하지 않은 숫자 문자열이 제공된 경우
   * @example
   * const formattedNumber = formatNumber('1234.567', 2);
   * console.log(formattedNumber); // '1234.57'
   */
  function formatNumber(num: number | string, decimalPlaces: number): string {
    const parsedNum = typeof num === 'string' ? parseNumber(num) : num
    return parsedNum.toFixed(decimalPlaces)
  }

  /**
   * 숫자를 통화 형식으로 포맷합니다.
   * @param amount 포맷할 금액 (숫자 또는 문자열)
   * @param currency 통화 단위 (기본값: 'KRW')
   * @param locale 로케일 (기본값: 'ko-KR')
   * @returns 포맷된 금액 문자열
   * @throws {Error} 유효하지 않은 숫자 문자열이 제공된 경우
   * @example
   * const formattedKRW = formatCurrency('1234.567');
   * console.log(formattedKRW); // '₩1,235'
   *
   * const formattedUSD = formatCurrency('1234.567', 'USD', 'en-US');
   * console.log(formattedUSD); // '$1,234.57'
   *
   * const formattedCNY = formatCurrency('1234.567', 'CNY', 'zh-CN');
   * console.log(formattedCNY); // '¥1,234.57'
   */
  function formatCurrency(amount: number | string, currency: string = 'KRW', locale: string = 'ko-KR'): string {
    const parsedAmount = typeof amount === 'string' ? parseNumber(amount) : amount
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(parsedAmount)
  }

  /**
   * 숫자에 천 단위 구분자를 추가합니다.
   * @param num 포맷할 숫자 또는 문자열
   * @returns 천 단위 구분자가 추가된 숫자 문자열
   * @throws {Error} 유효하지 않은 숫자 문자열이 제공된 경우
   * @example
   * const formattedNumber = addComma('1234567.89');
   * console.log(formattedNumber); // '1,234,567.89'
   */
  function addComma(num: number | string): string {
    const parsedNum = typeof num === 'string' ? parseNumber(num) : num
    return parsedNum.toLocaleString()
  }

  /**
   * 숫자를 주어진 소수점 자리까지 반올림합니다.
   * @param num 반올림할 숫자 또는 문자열
   * @param decimalPlaces 소수점 자리수
   * @returns 반올림된 숫자
   * @throws {Error} 유효하지 않은 숫자 문자열이 제공된 경우
   * @example
   * const roundedNumber = roundToDecimalPlaces('1234.567', 2);
   * console.log(roundedNumber); // 1234.57
   */
  function roundToDecimalPlaces(num: number | string, decimalPlaces: number): number {
    const parsedNum = typeof num === 'string' ? parseNumber(num) : num
    const factor = Math.pow(10, decimalPlaces)
    return Math.round(parsedNum * factor) / factor
  }

  /**
   * 문자열을 Date 객체로 변환합니다.
   * @param dateStr 변환할 날짜 문자열
   * @returns 변환된 Date 객체
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const date = parseDate('2024-05-29');
   * console.log(date); // Date 객체 출력
   */
  function parseDate(dateStr: string): Date {
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) {
      console.error(`Invalid date string: ${dateStr}`)
      throw new Error(`Invalid date string: ${dateStr}`)
    }
    return date
  }

  /**
   * 날짜를 'YYYY-MM-DD' 형식의 문자열로 반환합니다.
   * @param date 변환할 날짜 (Date 객체 또는 문자열)
   * @param delimiter 구분자 문자열 (기본값: '-')
   * @returns 지정된 구분자를 사용한 'YYYY-MM-DD' 형식의 문자열
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const formattedDate = formatDateToYYYYMMDD(new Date(), '.');
   * console.log(formattedDate); // '2024.05.29' 같은 형식의 문자열 출력
   */
  function formatDateToYYYYMMDD(date: Date | string, delimiter: string = '-'): string {
    const dateObj = typeof date === 'string' ? parseDate(date) : date

    const year = dateObj.getFullYear()
    const month = String(dateObj.getMonth() + 1).padStart(2, '0')
    const day = String(dateObj.getDate()).padStart(2, '0')
    return `${year}${delimiter}${month}${delimiter}${day}`
  }

  /**
   * 두 날짜 간의 차이를 일 단위로 계산합니다.
   * @param date1 첫 번째 날짜 (Date 객체 또는 문자열)
   * @param date2 두 번째 날짜 (Date 객체 또는 문자열)
   * @returns 두 날짜 간의 차이 (일수)
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const daysDifference = dateDiffInDays('2024-05-29', '2024-06-04');
   * console.log(daysDifference); // 6
   */
  function dateDiffInDays(date1: Date | string, date2: Date | string): number {
    const dateObj1 = typeof date1 === 'string' ? parseDate(date1) : date1
    const dateObj2 = typeof date2 === 'string' ? parseDate(date2) : date2

    const diffTime = Math.abs(dateObj2.getTime() - dateObj1.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  /**
   * 날짜에 특정 일수를 더합니다.
   * @param date 기준 날짜 (Date 객체 또는 문자열)
   * @param days 추가할 일수
   * @returns 일수가 추가된 날짜
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const newDate = addDaysToDate('2024-05-29', 5);
   * console.log(newDate); // 2024-06-03
   */
  function addDaysToDate(date: Date | string, days: number): Date {
    const dateObj = typeof date === 'string' ? parseDate(date) : date

    const result = new Date(dateObj)
    result.setDate(result.getDate() + days)
    return result
  }

  /**
   * 날짜에 특정 개월 수를 더합니다.
   * @param date 기준 날짜 (Date 객체 또는 문자열)
   * @param months 추가할 개월 수
   * @returns 개월 수가 추가된 날짜
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const newDate = addMonthsToDate('2024-05-29', 2);
   * console.log(newDate); // 2024-07-29
   */
  function addMonthsToDate(date: Date | string, months: number): Date {
    const dateObj = typeof date === 'string' ? parseDate(date) : date

    const result = new Date(dateObj)
    result.setMonth(result.getMonth() + months)
    return result
  }

  /**
   * 날짜에 특정 연도 수를 더합니다.
   * @param date 기준 날짜 (Date 객체 또는 문자열)
   * @param years 추가할 연도 수
   * @returns 연도 수가 추가된 날짜
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const newDate = addYearsToDate('2024-05-29', 1);
   * console.log(newDate); // 2025-05-29
   */
  function addYearsToDate(date: Date | string, years: number): Date {
    const dateObj = typeof date === 'string' ? parseDate(date) : date

    const result = new Date(dateObj)
    result.setFullYear(result.getFullYear() + years)
    return result
  }

  /**
   * 시간을 'HH:MM:SS' 형식의 문자열로 반환합니다.
   * @param date 변환할 날짜 (Date 객체 또는 문자열)
   * @returns 'HH:MM:SS' 형식의 문자열
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const formattedTime = formatTimeToHHMMSS('2024-05-29T14:30:15');
   * console.log(formattedTime); // '14:30:15'
   */
  function formatTimeToHHMMSS(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseDate(date) : date

    const hours = String(dateObj.getHours()).padStart(2, '0')
    const minutes = String(dateObj.getMinutes()).padStart(2, '0')
    const seconds = String(dateObj.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  /**
   * 주어진 날짜의 요일을 반환합니다.
   * @param date 확인할 날짜 (Date 객체 또는 문자열)
   * @returns 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const dayOfWeek = getDayOfWeek('2024-05-29');
   * console.log(dayOfWeek); // 3 (수요일)
   */
  function getDayOfWeek(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseDate(date) : date
    return dateObj.getDay()
  }

  /**
   * 주어진 날짜가 오늘인지 확인합니다.
   * @param date 확인할 날짜 (Date 객체 또는 문자열)
   * @returns 오늘이면 true, 그렇지 않으면 false
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const today = isToday('2024-05-29');
   * console.log(today); // true 또는 false
   */
  function isToday(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? parseDate(date) : date

    const today = new Date()
    return dateObj.getDate() === today.getDate() && dateObj.getMonth() === today.getMonth() && dateObj.getFullYear() === today.getFullYear()
  }

  /**
   * 주어진 날짜가 속한 달의 마지막 날을 반환합니다.
   * @param date 기준 날짜 (Date 객체 또는 문자열)
   * @returns 해당 달의 마지막 날
   * @throws {Error} 유효하지 않은 날짜 문자열이 제공된 경우
   * @example
   * const lastDay = getLastDayOfMonth('2024-05-29');
   * console.log(lastDay); // 2024-05-31
   */
  function getLastDayOfMonth(date: Date | string): Date {
    const dateObj = typeof date === 'string' ? parseDate(date) : date

    const year = dateObj.getFullYear()
    const month = dateObj.getMonth()
    const lastDay = new Date(year, month + 1, 0)
    return lastDay
  }
  return {
    isFunction,
    getUUID,
    removeNonNumeric,
    transformKeys,
    isEmpty,
    isNotEmpty,
    isEqual,
    cloneDeep,
    uniq,
    get,
    set,
    chunk,
    throttle,
    debounce,
    defaults,
    getLocalStorage,
    setLocalStorage,
    replace,
    replaceAll,
    formatNumber,
    formatCurrency,
    addComma,
    roundToDecimalPlaces,
    formatDateToYYYYMMDD,
    dateDiffInDays,
    addDaysToDate,
    addMonthsToDate,
    addYearsToDate,
    formatTimeToHHMMSS,
    getDayOfWeek,
    isToday,
    getLastDayOfMonth
  }
}
