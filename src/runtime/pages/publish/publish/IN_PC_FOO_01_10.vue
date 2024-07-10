<template>
  <div class="inner">
    <div class="title_wrap" :data-layout="props.layoutType">
      <h2>영상정보처리기기 운영/관리 방침</h2>
    </div>
    <div class="policy_wrap_pc">
      <Selectbox
        :options="[
          { val: 'value', txt: '2024-05-17 (3.00v)' },
          { val: 'value', txt: '2024-05-17 (3.00v)' }
        ]" />
      <p>
        주식회사 이니스프리(이하 ‘회사’)는 영상정보처리기기 운영ㆍ관리 방침을 통해 회사에서 처리하는 영상정보가 어떠한 용도와 방식 으로
        이용ㆍ관리되고 있는지 알려드립니다. 또한 회사의 영상정보 처리기기 운영ㆍ관리 방침이 변경되는 경우 변경된 사항에 대해서는 홈페이지를
        통하여 정보주체가 쉽게 확인할 수 있도록 공지 합니다.
      </p>
      <dl>
        <dt>1. 영상정보처리기기의 설치 근거 및 설치 목적</dt>
        <dd>
          <span> 회사는 개인정보보호법 제 25조 제 1항에 따라 다음과 같은 목적으로 영상정보처리기기를 설치ㆍ운영합니다. </span>
          <ul class="bul_list dash">
            <li>시설안전 및 화재 예방</li>
            <li>고객의 안전 확보</li>
            <li>도난방지 등 범죄 예방</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>2. 설치 대수, 설치 위치 및 촬영범위</dt>
        <dd>
          <span> 회사는 영상정보처리기기가 설치된 장소에는 정보주체가 쉽게 알아 볼 수 있도록 안내판을 설치하고 있습니다. </span>
          <div class="table_wrap">
            <table>
              <caption>
                주문내역
              </caption>
              <colgroup>
                <col style="" />
                <col style="" />
                <col style="" />
                <col style="width: 400px" />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>설치장소</th>
                  <th>설치대수</th>
                  <th>설치위치 및 촬영범위</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CCTV</td>
                  <td>이니스프리직영점</td>
                  <td>35대</td>
                  <td>매장 입구 내부 및 창고 등</td>
                </tr>
              </tbody>
            </table>
          </div>
          <span> 개인정보보호법 제 25조 5항에 의거 녹음기능을 제외한 화상정보만 촬영하고 있습니다. </span>
        </dd>
      </dl>
      <dl>
        <dt>3. 관리책임자 및 접근권한자</dt>
        <dd>
          <span> 정보주체의 영상정보를 보호하고 개인영상정보와 관련한 불만을 처리하기 위하여 회사는 관리책임자를 두고 있습니다. </span>
          <div class="table_wrap">
            <table>
              <caption>
                접근권한자
              </caption>
              <colgroup>
                <col style="" />
                <col style="" />
                <col style="" />
                <col style="" />
                <col style="width: 338px" />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>이름</th>
                  <th>직위</th>
                  <th>소속</th>
                  <th>연락처</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>관리책임자</td>
                  <td>정구화</td>
                  <td>Division장</td>
                  <td>영업 Div</td>
                  <td>080-380-0119<br />(수신자 부담)</td>
                </tr>
                <tr>
                  <td>접근권리자</td>
                  <td colspan="4">이니스프리하우스 : 매장별 매니저</td>
                </tr>
              </tbody>
            </table>
          </div>
          <span> 개인정보보호법 제 25조 5항에 의거 녹음기능을 제외한 화상정보만 촬영하고 있습니다. </span>
        </dd>
      </dl>
      <dl>
        <dt>4. 영상정보의 촬영시간, 보관기간, 보관장소 및 처리방법</dt>
        <dd>
          <span>
            개인영상정보의 목적외 이용, 제3자 제공, 파기, 열람 등 요구에 관한 사항을 개인영상정보 관리대장에 기록ㆍ관리하고, 보관기간만료 시
            복원이 불가능한 방법으로 영구 삭제합니다.
          </span>
          <div class="table_wrap">
            <table>
              <caption>
                접근권한자
              </caption>
              <colgroup>
                <col style="" />
                <col style="" />
                <col style="" />
              </colgroup>
              <thead>
                <tr>
                  <th>촬영시간</th>
                  <th>보관기간</th>
                  <th>보관장소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24시간</td>
                  <td>촬영일로부터 최대 30일</td>
                  <td>매장 內 녹화기</td>
                </tr>
              </tbody>
            </table>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>5. 영상정보처리기기 설치 및 관리 등의 위탁에 관한 사항</dt>
        <dd>
          <span>
            회사는 아래와 같이 영상정보처리기기 설치 및 관리 등을 위탁하고 있으며, 관계법령에 따라 위탁 계약시 개인정보가 안전하게 관리될 수
            있도록 필요한 사항을 규정하고 있습니다.
          </span>
          <div class="table_wrap">
            <table>
              <caption>
                접근권한자
              </caption>
              <colgroup>
                <col style="" />
                <col style="" />
              </colgroup>
              <thead>
                <tr>
                  <th>수탁업체</th>
                  <th>연락처</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>에스케이쉴더스 주식회사</td>
                  <td>1588-6400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>6. 개인영상정보의 확인 방법 및 장소에 관한 사항</dt>
        <dd>
          <ul class="bul_list">
            <li>확인 방법: 매장 접근권한자에게 미리 연락하고 매장에 방문 하시면 확인 가능합니다.</li>
            <li>확인 장소: 개인영상정보를 확인하고자 하는 매장</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>7. 정보주체의 영상정보 열람 등 요구에 대한 조치</dt>
        <dd>
          <span>
            정보주체는 회사가 처리하는 자신의 개인영상정보에 대하여 행정안전부령으로 정하는 바에 따라 개인영상정보 열람청구서를 회사에
            제출하는 등의 방법으로 열람을 요구할 수 있습니다. 단, 정보주체가 촬영된 개인영상정보 및 명백히 정보주체의 급박한 생명, 신체,
            재산의 이익을 위하여 필요한 개인영상정보에 한정됩니다.
          </span>
          <p>회사는 개인영상정보에 관하여 열람 또는 존재확인ㆍ삭제를 요구한 경우 지체없이 필요한 조치를 하겠습니다.</p>
        </dd>
      </dl>
      <dl>
        <dt>8. 영상정보처리기기 운영ㆍ관리 방침 변경에 관한 사항</dt>
        <dd>
          <span>
            법령, 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제, 수정이 있을 경우에는 시행하기 최소 7일전에 회사 홈페이지를 통해
            변경사항을 고지하겠습니다.
          </span>
        </dd>
      </dl>
      <dl>
        <dt>9. 영상정보의 안전성 확보조치</dt>
        <dd>
          <span>
            회사는 개인영상정보를 보호하기 위하여 개인영상정보에 대한 접근 권한을 차등부여하고 있으며, 개인영상정보의 위ㆍ변조 방지를 위하여
            개인영상정보의 이용ㆍ제공ㆍ열람ㆍ파기에 대하여 기록하여 관리하고 있습니다.
          </span>
          <p>
            이 외에도 개인영상정보의 안전한 물리적 보관을 위하여 개인영상정보가 보관된 장소에 잠금장치를 설정하고 접근 권한이 없는 인원에
            대해서는 접근을 차단하고 있습니다.
          </p>
        </dd>
      </dl>
      <ul>
        <li>
          <p>[부칙]2014. 4. 15</p>
        </li>
        <li>제1조(시행일) 이 약관은 2014년 4월 22일부터 시행합니다.</li>
      </ul>
      <ul>
        <li>
          <p>[부칙]2015. 5. 26</p>
        </li>
        <li>
          제1조(시행일) 이 방침은 2015년 6월 3일부터 시행한다.
          <Button class="btn_sm_outline" txt="이전 약관보기" />
        </li>
      </ul>
      <ul>
        <li>
          <p>[부칙]2019. 3. 15</p>
        </li>
        <li>
          제1조(시행일) 이 방침은 2019년 3월 22일부터 시행한다.
          <Button class="btn_sm_outline" txt="이전 약관보기" />
        </li>
      </ul>
      <ul>
        <li>
          <p>[부칙]2022. 1. 24</p>
        </li>
        <li>
          제1조(시행일) 이 방침은 2022년 1월 31일부터 시행한다.
          <Button class="btn_sm_outline" txt="이전 약관보기" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})

onMounted(() => {})
</script>

<style lang="scss" scoped>
:deep(.title_wrap) {
  h2 {
    font-weight: 600;
  }
}

:deep(.select) {
  > div {
    width: 320px;
    margin-bottom: 40px;
  }
}

:deep(.bul_list) {
  li {
    margin-left: 0 !important;
    text-indent: 0px !important;
  }
}

.btn_sm_outline {
  margin-top: 1rem;
  border: 1px solid#999 !important;
  :deep(em) {
    padding: 0 1rem;
    color: #999 !important;
    font-size: 1rem;
    font-weight: 600;
  }
}

.table_wrap {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 2px solid #000;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      display: none;
    }
    thead {
      tr {
        th {
          padding: 10px 5px;
          color: #666;
          font-size: 13px;
          font-weight: 500;
          border-bottom: 1px solid #eee;
          border-left: 1px solid #eee;
          background: #f5f5f5;
          text-align: center;
          &:first-of-type {
            border-left: 0;
          }
        }
      }
    }
    tbody {
      tr {
        th {
          padding: 24px 0px;
          color: #666;
          font-size: 16px;
          border-bottom: 1px solid #f5f5f5;
          text-align: center;
          em {
            margin-left: -10px;
            margin-right: 3px;
            color: #ff0000;
          }
        }
        td {
          padding: 20px;
          font-size: 13px;
          font-weight: 400;
          border-bottom: 1px solid #f5f5f5;
          border-left: 1px solid #eee;
          text-align: center;
          &:first-of-type {
            border-left: none;
          }
        }
      }
    }
  }
}
</style>
