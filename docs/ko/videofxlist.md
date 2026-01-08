---
layout: doc
title: 비디오 FX 목록
---

<style scoped>
:deep(div[class*="language-"]) pre,
:deep(div[class*="language-"]) code {
  word-break: break-all !important;
  white-space: pre-wrap !important;
}

:deep(p) code,
:deep(li) code,
:deep(td) code {
  word-break: break-all;
  white-space: pre-wrap;
}

:deep(.vp-doc) {
  word-break: normal;
  overflow-wrap: break-word;
}
</style>

# VEGAS Pro 비디오 FX 목록

## 참고 사항

1. 이 페이지는 VEGAS Pro에서 사용 가능한 모든 **`비디오 FX`**를 요약하여 **`이름`**, **`그룹`**, **`UID`** 및 기타 정보를 제공하여 온라인에서 쉽게 검색하고 탐색할 수 있도록 합니다.

2. 기본적으로 FX는 **`이름`**을 기준으로 오름차순으로 정렬됩니다. 테이블 상단의 필터, 정렬 및 검색 기능을 사용하여 특정 FX 항목을 필터링하고 검색하는 조건을 설정할 수 있습니다.

3. 테이블에 표시된 것처럼, VEGAS의 비디오 효과는 4가지 범주로 나눌 수 있습니다: **`비디오 FX`**, **`전환 FX`**, **`미디어 생성기 FX`**, **`트랙 합성 모드 FX`**. 테이블의 **`유형`** 열은 FX가 프로젝트에 추가될 수 있는 범주를 나타냅니다. 하나의 FX가 여러 FX 범주에 속할 수 있으며 각각에서 다른 특성을 나타낼 수 있습니다. 예를 들어, **`사파이어`**의 **`전환 FX`**는 **`비디오 FX`**, **`전환 FX`**, **`트랙 합성 모드 FX`**에 속할 수 있습니다. **`비디오 FX`**로 추가될 때는 기본적으로 애니메이션이 없지만 키프레임을 지정할 수 있는 **`디졸브 양`**과 같은 추가 진행 매개변수가 포함됩니다. **`전환 FX`**로 사용될 때는 자동 전환 애니메이션을 갖습니다. 이것은 주의해야 할 중요한 차이점입니다.

4. VEGAS 또는 플러그인의 버전에 따라 동일한 FX가 다른 **`UID`**를 가질 수 있습니다. 예를 들어, **`뉴블루`**에는 이전 DXT 버전과 새로운 OFX 버전이 있으며, 테이블에서는 **`NewBlue DXT`**와 **`NewBlue OFX`**로 구분됩니다. 또한 VEGAS Pro 18 이상의 경우, 세 가지 내장 FX인 **`테두리`**, **`테스트 패턴`**, **`채널 혼합`**이 이전 DXT 버전에서 OFX 버전으로 업그레이드되었습니다. 테이블은 가능한 많은 버전의 FX를 수집하기 위해 **`UID`**를 고유 키 및 포함 기준으로 사용합니다. 특히, VEGAS Pro 16 및 이전 버전의 경우, 일부 내장 OFX **`UID`**는 새로운 **`{Svfx:com.vegascreativesoftware:xxx}`** 형식 대신 **`{Svfx:com.sonycreativesoftware:xxx}`** 형식을 따릅니다. 이것은 테이블에서 자세히 설명하지 않으니 적절히 변환하시기 바랍니다.

## 테이블

<VideoFxTable />
