export const useUtilsValid = () => {
  /**
   * 이메일 주소의 유효성을 검사합니다.
   * @param email 유효성을 검사할 이메일 주소
   * @returns 유효한 이메일 주소이면 true, 그렇지 않으면 false
   * @example
   * const isValid = isEmail('test@example.com');
   * console.log(isValid); // true
   */
  function isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  /**
   * URL의 유효성을 검사합니다.
   * @param url 유효성을 검사할 URL
   * @returns 유효한 URL이면 true, 그렇지 않으면 false
   * @example
   * const isValid = isURL('https://www.example.com');
   * console.log(isValid); // true
   */
  function isURL(url: string): boolean {
    try {
      new URL(url)
      return true
    } catch (_) {
      return false
    }
  }

  /**
   * 전화번호의 유효성을 검사합니다.
   * @param phoneNumber 유효성을 검사할 전화번호
   * @returns 유효한 전화번호이면 true, 그렇지 않으면 false
   * @example
   * const isValid = isPhoneNumber('010-1234-5678');
   * console.log(isValid); // true
   */
  function isPhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/
    return phoneRegex.test(phoneNumber)
  }

  /**
   * 주어진 문자열이 유효한 날짜인지 확인합니다.
   * @param dateStr 확인할 날짜 문자열
   * @returns 유효한 날짜이면 true, 그렇지 않으면 false
   * @example
   * const isValid = isDate('2024-05-29');
   * console.log(isValid); // true
   */
  function isDate(dateStr: string): boolean {
    const date = new Date(dateStr)
    return !isNaN(date.getTime())
  }

  /**
   *  집전화 번호의 유효성을 검사합니다.
   * @param phoneNumber 유효성을 검사할 집전화 번호
   * @returns 유효한 집전화 번호이면 true, 그렇지 않으면 false
   * @example
   * const isValid = isTelNumber('02-123-4567');
   * console.log(isValid); // true
   * const isValid = isTelNumber('031-1234-5678');
   * console.log(isValid); // true
   */
  function isTelNumber(phoneNumber: string): boolean {
    const landlineRegex = /^(0[2-6]{1}|0[3-9]{1}[0-9]{1})-\d{3,4}-\d{4}$/
    return landlineRegex.test(phoneNumber)
  }

  /**
   * 비밀번호의 유효성을 검사합니다.
   * 비밀번호는 영문 소문자, 숫자, 특수문자 중 최소 2가지 이상의 문자 조합이어야 하며, 길이는 8자에서 16자 사이여야 합니다.
   * @param password 유효성을 검사할 비밀번호
   * @returns 비밀번호가 유효하면 true, 그렇지 않으면 false
   * @example
   * const isValid = isPassword('abc123!@#');
   * console.log(isValid); // true
   * const isValid = isPassword('abcdefg');
   * console.log(isValid); // false
   */
  function isPassword(password: string): boolean {
    if (password.length < 8 || password.length > 16) {
      return false
    }

    const lowerCaseRegex = /[a-z]/
    const numberRegex = /\d/
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/

    const hasLowerCase = lowerCaseRegex.test(password)
    const hasNumber = numberRegex.test(password)
    const hasSpecialChar = specialCharRegex.test(password)

    // 최소 2가지 이상의 문자 조합 확인
    const validCombinationCount = [hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length
    return validCombinationCount >= 2
  }

  return {
    isEmail,
    isURL,
    isPhoneNumber,
    isTelNumber,
    isDate,
    isPassword
  }
}
