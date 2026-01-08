---
layout: doc
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

# VEGAS Pro 문제 해결 가이드: 일반적인 문제 및 해결책
<p align="right"><strong>버전: 2026.01&ensp;&ensp;저자: <a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>

::: warning
이 페이지는 [중국어 원본](/zh/)을 AI 번역한 것이며 아직 완전한 인간 검토를 거치지 않았습니다. 모호한 부분이 있다면 프로젝트의 [Issues](https://github.com/zzzzzz9125/VegTips/issues) 페이지에 지적하거나, 직접 수정하여 Pull Request를 보낼 수 있습니다.

당분간 VEGAS Pro 관련 구체적인 문제에 대한 직접적인 개인 문의는 받지 않습니다. 질문이 있으면 [다른 공개 포럼](#xvii-vegas-커뮤니티-및-포럼)에 올려 도움을 받으십시오. 다른 포럼의 좋은 해결책을 수집하여 여기에 정리할 수도 있습니다.
:::

## 0. 머리말

- 이 글은 초보자를 위한 기본 튜토리얼이 아닙니다. VEGAS Pro의 다양한 문제를 해결하기 위한 안내서이므로 기본적인 소프트웨어 조작법을 광범위하게 다루지 않습니다. 이 글은 정식 라이선스 소프트웨어 사용을 지지합니다. 합법적 라이선스 구매 정보는 문서 끝의 [소프트웨어 구매 경로](#xvi-소프트웨어-구매-경로) 섹션을 참조하십시오.

- 이 글은 20,000단어가 넘으며 VEGAS Pro의 일반적인 문제와 해결책을 다룹니다. 처음 중국 웹사이트 Bilibili에 게시된 후 요약 번역되어 온라인으로 볼 수 있는 이 문서로 정리되었습니다. 누락된 부분이 있으면 [이 게시물](https://www.vegascreativesoftware.info/us/forum/posts--150586/)에 지적할 수 있습니다.

- 이 가이드를 참조할 때는 목차를 사용하여 문제 카테고리를 찾고, **`Ctrl + F`** 검색 기능을 활용하여 키워드나 오류 코드를 검색하여 더 빠르게 해결하십시오. 이 글에서 언급된 경로는 일반적으로 환경 변수를 사용하여 표현됩니다(예: **`%localappdata%\VEGAS Pro\`**). **경로 텍스트를 Windows 파일 탐색기의 주소 표시줄에 복사하여 붙여넣고 `Enter`를 누르면 빠르게 이동할 수 있습니다.** 이 글에서는 특정 버전의 특정 빌드 번호를 언급할 때가 있습니다(예: `23 build 302`, 여기서 `302`는 빌드 번호). VEGAS 시작 시 로딩 화면에서 현재 빌드 번호를 볼 수 있습니다. **<u>밑줄</u>**로 표시된 내용에는 하이퍼링크가 포함되어 있습니다.

- 이 글은 **CC BY-NC-SA 4.0** 라이선스에 따라 사용이 허가됩니다. 이 내용을 어떠한 형태로든 복제, 개작 또는 사용할 때는 **저작자 표시, 비영리, 동일조건변경허락** 원칙을 준수해 주십시오. 자세한 내용은 [전체 라이선스 텍스트](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko)를 읽어보십시오.

<br>

## I. VEGAS 환경 설정 최적화에 관하여

**"최적화 가이드"는 더 이상 여기에 나열되지 않습니다. VEGAS Pro에 긍정적인 최적화를 제공한다는 보장이 없으며, 일부 정보는 오래되어 오해의 소지가 있을 수 있기 때문입니다.**

**MAGIX 공식에 따르면, 평균 사용자에게 가장 적합하다고 간주되는 기본 설정을 유지하는 것이 가장 좋습니다.**

**모든 경우에 적합한 환경 설정은 없습니다. 다른 곳에서 소위 "최적화 가이드"를 찾더라도 특정 상황에 맞게 수정하십시오.**

**또한, 직접적으로 타인이 "최적화된 환경설정"이라고 주장하는 레지스트리 파일이나 환경설정 파일을 사용하는 것은 권장하지 않습니다.**

<br>

## II. VEGAS 환경설정, 캐시 디렉토리, 프리셋 등에 관하여

### VEGAS 환경설정 및 캐시 디렉토리

참고: 다음 경로는 **환경 변수 표기법 `% %`** 을 사용합니다. 경로 텍스트를 Windows 파일 탐색기의 주소 표시줄에 복사하여 붙여넣고 `Enter`를 누르면 빠르게 이동할 수 있습니다. 실제 경로도 참고용으로 제공됩니다.

- 주요 VEGAS 캐시 디렉토리: **`%localappdata%\VEGAS Pro\`**
  - 즉, `C:\Users\<사용자 이름>\AppData\Local\VEGAS Pro\`
  - 다른 버전은 독립성을 위해 별도의 폴더에 저장됩니다(예: **`%localappdata%\VEGAS Pro\23.0\`**).

<br>

VEGAS 환경설정의 경우:
- 구버전(VP18 및 이전)은 레지스트리 경로 **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<버전>\Metrics\Application\`** 에 저장되며, 수동 편집이 어렵습니다. 백업을 위해 레지스트리 편집기(`regedit`)를 사용하여 해당 레지스트리 경로 아래의 모든 내용을 수동으로 백업할 수 있습니다.

- 신버전(VP19 이후)은 캐시 디렉토리 파일 **`%localappdata%\VEGAS Pro\<버전>\persist.prefs`** 에 저장됩니다. 파일 내용은 `XML` 형식으로, 수동 편집이 더 쉽습니다. 이 파일을 복사하여 백업할 수 있습니다.

<br>

VEGAS 관련 설정 및 수동 백업을 위한 프리셋 파일이 포함된 다른 디렉토리:

- 저장된 FX 프리셋, 플러그인 체인 프리셋, FX 즐겨찾기, 렌더링 템플릿 등: `%appdata%\VEGAS\`
  즉, `C:\Users\<사용자 이름>\AppData\Roaming\VEGAS\`

- VEGAS 창 레이아웃, 키보드 설정 등: `%appdata%\VEGAS Pro\`
  즉, `C:\Users\<사용자 이름>\AppData\Roaming\VEGAS Pro\`

- 저장된 OFX 플러그인 FX 프리셋: `%userprofile%\Documents\OFX Presets\`
  즉, `C:\Users\<사용자 이름>\Documents\OFX Presets\`
  또는 OneDrive 경로: `C:\Users\<사용자 이름>\OneDrive\Documents\OFX Presets\`

VP13 및 이전 버전은 Sony 폴더 내에 캐시 디렉토리가 있습니다(예: **`%localappdata%\Sony\VEGAS Pro\`** 등).

**기타 중요 경로는 다음을 참조하십시오: [https://www.vegascreativesoftware.info/us/tutorials/posts--139290/](https://www.vegascreativesoftware.info/us/tutorials/posts--139290/)**

<br>

### VEGAS 플러그인 체인 프리셋 사용, 가져오기 및 내보내기

`Sony Preset Manager`를 설치하고 사용하십시오.

- 다운로드 링크: https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe

<!-- 2. 그림과 같이:

<ImageOnDemand button-text="Load image" alt="플러그인 체인" src="vegtips/image001_plugin_chain.png" />

<p align="center">VEGAS 프리셋 관리자 v0.2 사용 예시</p> -->

<br>

### VEGAS 내부 환경설정 접근

- VP18 이상: **`Shift`** 키를 누른 상태로 상단 메뉴 **`옵션 -> 내부`** 로 이동합니다.

- VP18 이하: **`Shift`** 키를 누른 상태로 상단 메뉴 **`옵션 -> 환경설정`** 으로 이동한 후 **`내부`** 탭으로 전환합니다.

<br>

## III. 버그로 인한 크래시, 정지, 오류 팝업에 대한 해결책

(여기 제공된 해결책은 일반적인 문제 해결 단계입니다. 모든 문제를 해결하지는 않을 수 있습니다.)

### 1. GPU 가속 비활성화

**`환경설정 -> 비디오`** 에서 **`비디오 처리의 GPU 가속`** 아래에 있는 **`끄기`** 를 선택합니다. 이 옵션은 주로 비디오 FX가 GPU 가속을 사용할지 여부를 관리합니다. GPU 가속은 FX 미리보기 및 렌더링을 더 부드럽게 만들 수 있지만, **낮은 VEGAS 버전에서는 버그가 더 많고 크래시를 유발하기 쉽습니다**. 문제 해결 시 먼저 **GPU 가속을 비활성화**해 보십시오. 최신 VEGAS 버전(예: `22 build 250`)의 경우 GPU 성능이 좋고 다른 문제가 없다면 여전히 활성화하는 것이 좋습니다.

<br>

### 2. VEGAS 오류 보고 팝업 비활성화

일반적인 시나리오: VEGAS 실행 시 / **`파일 -> 렌더링`** 클릭 시 즉시 오류 팝업이 나타납니다.

<ImageOnDemand button-text="이미지 로드" alt="문제 보고" src="vegtips/image002_problem_report.png" />

**이 경우 항상 먼저 `문제 세부 정보 표시`를 선택하여 오류 내용을 확인하십시오.**

때로는 오류 보고 기능 자체가 문제일 수 있습니다. 완전히 비활성화하면 도움이 될 수 있습니다.

오류 보고 팝업을 비활성화하는 두 가지 방법:

- **VEGAS 설치 디렉토리에서 `ErrorReportClient.exe` 파일을 찾아 이름을 바꿉니다.**

- VEGAS 설치 디렉토리에서 **`PRSConfig.exe`** 를 찾아 실행하고 **`비활성화됨`** 을 선택합니다.

두 방법 중 하나를 사용하면 VEGAS 오류 보고 팝업이 비활성화됩니다.

때로는 문제가 지속될 수 있습니다. 그렇다면 다시 활성화하고 오류 내용 분석에 집중하십시오. **오류 내용은 때로 유용한 단서를 제공할 수 있습니다. [특정 오류에 대한 문제 해결 아이디어](#8-특정-오류에-대한-문제-해결-아이디어)를 참조하십시오.**

<br>

### 3. VEGAS 재설치

VEGAS 재설치는 소프트웨어 자체가 완전히 설치되지 않았거나 프로그램 파일이 손상된 문제만 해결하므로 거의 필요하지 않습니다. 재설치만으로는 환경설정이 재설정되지 않습니다.

<br>

### 4. 하드웨어 드라이버 재설치

소프트웨어 문제는 때로 하드웨어 드라이버로 인해 발생할 수 있습니다. 오디오 문제의 경우 사운드 카드 드라이버를 재설치해 보십시오. 비디오 문제의 경우 그래픽 카드 드라이버를 재설치해 보십시오.

<br>

### 5. 환경설정 재설정

이해할 수 없는 문제를 겪을 때, 예를 들어 **가져온 오디오가 완전히 잡음인 경우**, 때로는 **환경설정 재설정**으로 해결할 수 있습니다.

**재설정하면 다음과 같은 내용이 지워집니다: [현재 VEGAS 버전의 모든 환경설정 및 캐시].**

표준 방법: `Ctrl + Shift`를 누른 상태로 VEGAS를 실행합니다. "재설정하시겠습니까?" 프롬프트가 나타납니다. `모든 캐시된 애플리케이션 데이터 삭제`를 선택하고 `예`를 클릭합니다.

<ImageOnDemand button-text="이미지 로드" alt="재설정" src="vegtips/image003_reset.png" />

<p align="center">재설정하시겠습니까? (Y/N)</p>

그러나 이렇게 재설정하면 이전 환경설정의 백업이 생성되지 않습니다. 원래 환경설정이 완전히 지워지므로 약간의 위험이 있습니다. 따라서 재설정 전에 환경설정을 백업하는 것을 권장합니다. [VEGAS 환경설정 및 캐시 디렉토리](#vegas-환경설정-및-캐시-디렉토리)를 참조하십시오.

<br>

### 6. Microsoft Visual C++ 및 .NET Framework 런타임 설치

Microsoft Visual C++ 재배포 가능 패키지: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

.NET Framework 복구 도구: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

### 7. 다른 버전 사용해 보기

**VEGAS 버전이 귀하의 PC에 적합한지는 다소 무작위적입니다.**

가장 안정적인 버전은 일반적으로 VP13으로 간주됩니다. 안정성과 기능성의 균형을 원한다면 **VP18**을 권장합니다. 최신 버전이 안정적이라고 보장되지 않습니다. `21 build 300`의 비디오 엔진 업데이트 이후 VEGAS의 느린 비디오 디코딩 및 렌더링 문제가 점차 해결되고 있습니다. 이 개선은 VP22 최종 버전까지 계속됩니다. **현재 가장 권장하는 것은 VP22 최종 버전(`22 build 250`)으로, 상당한 개선이 이루어졌습니다.** 최신 VP23은 여전히 매우 안정적이지 않습니다.

VEGAS Pro / VEGAS Post 출시 기록: https://www.vegascreativesoftware.info/us/forum/posts--104998/

<br>

### 8. 특정 오류에 대한 문제 해결 아이디어

이 글의 거의 모든 방법(특히 [VEGAS 소프트웨어 작동 Q&A](#iv-vegas-소프트웨어-작동-q-a) 장의 방법)을 시도했는데도 오류가 지속되면 이 섹션의 접근 방식을 시도해 보십시오. `0xC0000005`와 같은 일부 오류는 고정된 명확한 원인이 없습니다. 이러한 오류를 만나서 여기에 있는 대부분의 해결책이 효과가 없는 것은 완전히 정상입니다. 온라인에서 오류 코드를 검색하면 많은 해결책이 나오지만, 실제로 효과가 있는 것을 찾는 것은 바늘 찾기와 같을 수 있습니다. 이 섹션은 일반적인 문제 해결 아이디어를 제공합니다:

1.  **오류 세부 정보 찾기.** 오류 보고가 [활성화](#2-vegas-오류-보고-팝업-비활성화)된 경우 팝업에서 `문제 세부 정보 표시`를 선택하십시오. 오류 보고가 비활성화된 경우에도 때로는 오류 세부 정보를 얻을 수 있습니다. 이 두 출처는 다른 또는 추가 정보를 제공할 수 있으므로 둘 다 확인하는 것이 좋습니다.

2.  **오류 세부 정보 분석.** 두 가지 핵심 포인트를 찾으십시오: 오류 모듈과 오류 코드. 오류 모듈은 `Fault Module` 줄에 있습니다.

    - 오류 모듈이 다른 소프트웨어의 구성 요소를 가리키면 해당 소프트웨어를 제거해 보십시오.
    - VEGAS 구성 요소를 가리키면 VEGAS를 재설치하거나 버전을 전환해 보십시오.
    - 시스템 구성 요소를 가리키면 확실하지 않습니다.

    오류 코드는 `0x` 다음에 오는 8자리 16진수 숫자입니다. 예를 들어:

    - `0xC06D007F`: 비디오 플러그인 문제를 고려하십시오. OFX 플러그인을 OFX 폴더에서 이동하십시오.
    - `0xE0434352`: .NET 구성 요소 문제를 고려하십시오. .NET Framework 복구를 시도하거나, 확장 로딩 문제를 고려하십시오. 확장을 확장 폴더에서 이동하십시오.

    기타 단서: 오류 내용에서 특정 플러그인 또는 `OFX` 키워드를 명시적으로 언급하면 비디오 플러그인 문제도 고려하십시오.

    위의 방법 중 어느 것도 효과가 없다면, 온라인에서 오류 코드를 검색하여 다양한 해결책을 찾아야 합니다. 일부 문제는 심지어 시스템 재설치를 해야만 해결될 수 있습니다.

<br>

## IV. VEGAS 소프트웨어 작동 Q&A

Q: VEGAS 소프트웨어 인터페이스를 어떻게 **한국어로 현지화**합니까?

A: VEGAS 프로그램 내부에는 `영어, 독일어, 프랑스어, 포르투갈어, 스페인어, 폴란드어, 중국어, 일본어, 한국어` 9가지 언어가 포함되어 있습니다. 그러나 공식 웹사이트에서 제공하는 설치 프로그램은 국제 언어 버전으로, 나열된 처음 5가지 언어만 포함하며 **한국어는 포함되지 않습니다**. 현지화 경로는 세 가지입니다:

1.  **한국어 설치 프로그램 사용.** [구매](#xvi-소프트웨어-구매-경로) 전에 언어 지원 목록을 확인하여 한국어가 포함되어 있는지 확인하십시오. 예를 들어, 현재 공식 웹사이트 버전에는 한국어가 포함되어 있지 않지만, 한국 대리점 및 Steam 버전에는 한국어가 포함되어 있습니다. 그렇지 않으면 후자의 두 가지 방법을 시도해야 합니다.

2.  **다른 사용자가 만든 현지화 팩 사용.**

3.  **레지스트리 수정.** 레지스트리 수정은 VEGAS에 내장된 한국어를 활성화할 수 있지만, 처음 두 가지 방법에 비해 이 내장 한국어는 불완전하거나 부정확할 수 있습니다.

**수동 레지스트리 수정 단계:**

**VEGAS가 이미 설치된 상태에서** `Win + R`을 눌러 `regedit`를 입력하여 레지스트리 편집기를 엽니다. VEGAS 언어 설정은 다음 레지스트리 키의 `ULangID` 값에 있습니다:

- VP20 이상:

```text
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Pro\23.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\Error Reporting Client\1.0\Lang
```

- VP19 이하:
```text
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\VEGAS Pro\19.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Error Reporting Client\1.0\Lang
```

여기서 `23.0` 및 `19.0`은 현재 VEGAS 메이저 버전을 나타냅니다. 첫 번째 줄이 주 인터페이스 언어 설정이지만 네 가지 모두 변경하는 것이 좋습니다.

<ImageOnDemand button-text="이미지 로드" alt="언어 레지스트리" src="vegtips/image004_language_reg.png" />

영어 버전을 설치한 경우, `ULangID`의 기본값은 16진수 `409`(10진수 `1033`)일 가능성이 높습니다. 한국어로 변경하려면 **16진수 `412`(10진수 `1042`)**로 변경하십시오.

<small>
다른 언어 ID는 Microsoft 문서를 참조하십시오: <a href="https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid">https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid</a><br>
</small>

**레지스트리를 변경한 후 VEGAS가 `오류 코드: -1`로 시작되지 않으면**, VEGAS 설치 디렉토리의 `language` 폴더로 이동합니다(기본값: `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`, 여기서 `23.0`은 버전). **`local_xx_XX.cfg` 파일**(예: 미국 영어의 경우 `local_en_US.cfg`) **을 `local_ko_KR.cfg`로 이름을 바꿉니다**.

<small>
또 다른 유용한 도구: <code>Vegas Language Changer</code>: <a href="https://github.com/IZH318/Vegas-Language-Changer">https://github.com/IZH318/Vegas-Language-Changer</a>
</small>

같은 원칙이 ACID Pro와 같은 다른 MAGIX 소프트웨어에도 적용됩니다.

VEGAS를 성공적으로 시작한 후 내장 비디오 FX의 이름이 여전히 영어로 표시되면 [플러그인 캐시 지우기](#비디오-플러그인-q-a)를 시도해 볼 수 있습니다.

<br>

Q: 설치 중 오류: **설치를 계속하려면 PC를 다시 시작해야 합니까**?
`Setup has detected that the system is currently waiting for a reboot to complete a previous installation or update. To avoid problems, please reboot your system before installing.`

<ImageOnDemand button-text="이미지 로드" alt="설치 재부팅 문제" src="vegtips/image005_install_reboot.png" />

A: 먼저 PC를 다시 시작해 보십시오. 작동하지 않으면 레지스트리를 수정해야 합니다. 레지스트리 편집기를 열고 **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`** 로 이동하여 **`PendingFileRenameOperations`** 값을 **삭제**한 후 PC를 다시 시작하십시오.





<br>

Q: 오류: **`설치 중 오류 발생 -2147163964. 모듈 xxxxx.dll을 등록할 수 없음`**.

<ImageOnDemand button-text="이미지 로드" alt="설치 DLL 등록 문제" src="vegtips/image006_install_dll.png" />

A: **PC를 다시 시작하고 다시 설치**하면 일반적으로 해결됩니다. 지속되면 **다른 버전을 설치**해 보십시오.

<br>

Q: VEGAS가 아무리 해도 시작되지 않고, **로딩 창도 표시되지 않음**?

A: 이전 문제: **VEGAS 프로세스가 백그라운드에서 멈춰 있습니다**. **작업 관리자를 열고 모든 VEGAS 관련 프로세스를 찾아 종료한 후 VEGAS를 다시 실행해 보십시오.**

<br>

Q: VEGAS 시작 시 "**GPU 가속 비디오 처리 초기화 중...**" 단계에서 **크래시/정지**됩니까?

A: 먼저 그래픽 카드 드라이버를 다시 설치해 보십시오. 작동하지 않으면 이 레지스트리 수정을 시도해 보십시오. 레지스트리 편집기를 열고 **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** 아래의 **`IntelOpenCL64.dll`** 값과 **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`** 아래의 **`IntelOpenCL32.dll`** 값을 찾습니다. 두 값의 데이터를 **`0`에서 `1`로 변경**한 후 VEGAS를 다시 시작하십시오.





<br>

Q: VEGAS 시작 시 "**비디오 플러그인 팩토리...**" 단계에서 **크래시/정지 (오류 코드 `0xC06D007F`)** 됩니까?

A: 이 단계에서는 비디오 플러그인을 로드합니다. 종종 OFX 비디오 플러그인 스캔 문제입니다. OFX 경로로 이동: **`C:\Program Files\Common Files\OFX\Plugins\`, 이 폴더에서 잠재적으로 문제가 있는 플러그인을 이동한 후 VEGAS 시작을 시도해 보십시오**. 정상적으로 시작되면 파일을 다시 이동하거나 플러그인을 재설치할 수 있습니다. 특정 오류 세부 정보가 있으면 플러그인 이름과 관련된 키워드를 찾아보십시오.
**<small>(Red Giant Universe 플러그인을 우선 확인하십시오. 많은 사용자의 시작 시 크래시를 유발합니다.)</small>**

<br>

Q: VEGAS 시작 시 "**VST 플러그인 스캔 중...**" 단계에서 **정지/크래시/정지**됩니까?

A: **시작 시 VST 스캔 비활성화**를 시도해 보십시오. VEGAS **바로가기 -> 속성**을 마우스 오른쪽 버튼으로 클릭합니다. **`대상`** 필드 끝에 **` /NOVSTGROVEL`** 을 추가합니다(**슬래시 앞 공백에 주의**). 그런 다음 이 바로가기를 사용하여 VEGAS를 실행합니다. 정상적으로 시작되면 [VST 경로](#xi-오디오-플러그인-관련)에서 문제가 있는 플러그인을 이동하고 별도로 저장할 수 있습니다.

<ImageOnDemand button-text="이미지 로드" alt="NOVSTGROVEL" src="vegtips/image007_novstgrovel.png" />

<br>

Q: VEGAS 시작 시 "**DirectX 플러그인 초기화 중...**" 단계에서 **정지/크래시/정지**됩니까?

A: 마찬가지로, **시작 시 DirectX 플러그인 스캔 비활성화**를 시도해 보십시오. 명령은 **` /NODXGROVEL`** 입니다.

<br>

Q: VEGAS 시작 시 "**UI 초기화 중...**" 단계에서 **크래시/정지 (오류 코드 `0xE0434352`)** 되거나, **주 창이 나타난 직후** 즉시 됩니까?

A: 확장 문제일 가능성이 있습니다. **`C:\ProgramData\VEGAS Pro\Application Extensions\`** 및 기타 [확장 폴더](#xii-스크립트-확장-관련)에서 파일을 삭제해 보십시오. 모두 삭제하거나 어떤 확장이 문제인지 격리해 볼 수 있습니다.

<br>

Q: VEGAS 시작 오류: **`스크립팅 호스트를 초기화할 수 없음`** / 기타 **.NET Framework** 일반 오류 (예: **`0xE0434352`**)?

A: VEGAS 스크립트는 .NET Framework에 의존합니다. .NET Framework 복구 도구를 실행해 보십시오: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

Q: VEGAS 시작 시 "**창 생성 중...**" 단계에서 **크래시/정지 (오류 코드 `0xC0000005`, 오류 모듈 `C:\WINDOWS\SYSTEM32\ntdll.dll`)** 됩니까?

A: **`제어판 -> 프로그램 -> 프로그램 및 기능`** 으로 이동하여 **MSVC 1450 런타임**이 설치되어 있는지 확인하십시오. 즉, **x86 및 x64용 `Microsoft Visual C++ 2015-2022 Redistributable`의 14.50 버전**입니다. Microsoft는 VEGAS를 크래시시키는 버전의 이러한 런타임을 배포했습니다. 이 버전은 **Visual Studio 2026**과 함께 자동으로 설치되며 다른 이유로 설치될 수도 있습니다. 이는 Microsoft 문제이며 Microsoft의 완전한 수정을 기다리고 있습니다. 일부 영향을 받은 사용자는 런타임만 제거하는 것이 효과가 없을 수 있음을 발견했습니다. 다음은 임시 해결 방법입니다 (**DLL을 깊이 파고들고 싶지 않다면 마지막 단계로 건너뛰고 제가 제공한 `x64` `vcomp140.dll`을 사용하십시오**):

1. Visual Studio 다운로드 페이지로 이동합니다: [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/), Visual Studio 2022 빌드 도구를 찾아 다운로드합니다(파일 이름 `vs_BuildTools.exe`).

2. 설치 중에 추가 구성 요소에 대한 프롬프트가 표시되면 `개별 구성 요소`로 이동하고 `MSVC`를 검색하여 **`MSVC v143 - VS 2022 C++ x64/x86 빌드 도구(최신)`** 을 선택하고 계속 설치합니다.

<ImageOnDemand button-text="이미지 로드" alt="MSVC 143 설치" src="vegtips/image008_msvc143.png" />

3. 설치 후 MSVC 설치 경로로 이동합니다: `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`. `v143` 및 `14.44.35112`와 같은 폴더가 있을 것입니다(설치한 버전에 따라 다름). `14.44.35112`와 비슷한 것이 대상입니다.

4. `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP`로 이동하여 **`vcomp140.dll`** 을 찾아 복사하고 VEGAS 설치 디렉토리에 붙여넣습니다. VEGAS를 다시 시작합니다.

<small>
<code>x64</code> <code>vcomp140.dll</code> 다운로드 링크: <a href="/downloads/fixes/vcomp140.dll">vcomp140.dll</a><br>
<code>ARM</code> Windows를 사용하는 경우 <code>x64</code>가 아닌 <code>ARM</code> 폴더를 선택하십시오. <code>ARM</code>이 무엇인지 모른다면 아마도 <code>x64</code> 사용자일 것입니다. <code>x64</code> 버전을 사용하십시오.<br>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--149890/#ca943290">https://www.vegascreativesoftware.info/us/forum/posts--149890/#ca943290</a><br>
</small>

<br>

Q: VEGAS를 연 후 **잡음/소리 없음/...** 이 있습니까?

A: **`제어판 -> 하드웨어 및 소리 -> 소리`** 로 이동하여 현재 재생 장치에 대한 `속성`을 엽니다. `고급` 탭의 `독점 모드` 아래에서 `응용 프로그램이 이 장치를 독점적으로 제어할 수 있도록 허용`을 선택 취소하거나, `기본 형식`을 `2 채널, 24비트, 44100Hz`로 변경하십시오. 작동하지 않으면 **사운드 카드 드라이버를 다시 설치**해 보십시오.

<ImageOnDemand button-text="이미지 로드" alt="오디오 장치" src="vegtips/image009_sound_device.png" />

<br>

Q: **특정 프로젝트 파일을 열면 크래시/오류**가 발생합니까?

A: 프로젝트에서 사용되는 **임의의 미디어 파일 이름을 변경**하여 프로젝트가 찾을 수 없도록 해 보십시오. 다시 열 때 **"미디어 오프라인" 프롬프트를 무시**하십시오. 성공적으로 연 후 **파일 이름을 다시 변경하거나 교체**하십시오.





<br>

Q: **여러 VEGAS 인스턴스를 열면 크래시**가 발생합니까?

A: 특정 창 레이아웃으로 인해 모든 VEGAS 버전에서 발생할 수 있습니다. 미리보기 창이 **도킹 해제된(부동)** 상태일 때 발생할 가능성이 더 큽니다. 임시 해결 방법: **새 VEGAS 인스턴스를 열기 전에 이전 인스턴스의 미리보기 창을 닫거나 도킹**하여 잠재적인 크래시를 피하십시오.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--148817/">https://www.vegascreativesoftware.info/us/forum/posts--148817/</a><br>
</small>

<br>

Q: **VEGAS 시작 후 WebView 오류 (`msedgewebview2.exe`, 또는 `WebView2 초기화 실패` 등)** 가 발생합니까?

A: VEGAS Hub 기능은 Microsoft Edge WebView를 사용합니다. **Hub가 필요하지 않으면 메뉴 `보기 -> 창`을 통해 해당 창을 닫기만 하면 됩니다**. [VEGAS 캐시 디렉토리](#vegas-환경설정-및-캐시-디렉토리)의 `WebView2` 폴더를 삭제해 볼 수도 있습니다: **`%localappdata%\VEGAS Pro\23.0\WebView2`** (여기서 `23.0`은 VEGAS 버전).

<br>

Q: **[VP19]** 잠시 작업한 후 VEGAS 창이 갑자기 **그래픽 손상, UI 오류, 느려지고 계속할 수 없게 되어** 재시작을 강요합니까?

A: 이는 **구빌드(예: `19 build 341`)의 VP19 특정 문제**입니다. **`19 build 651`로 업데이트**하여 해결하십시오.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--131391/">https://www.vegascreativesoftware.info/us/forum/posts--131391/</a><br>
</small>

<br>

Q: **[VP19, VP20]** VEGAS가 로딩 화면 직후 즉시 크래시되고, **오류 팝업 없음**?

A: VEGAS 빌드 번호를 확인하십시오. `19 build 648` 이하 또는 `20 build 402` 이하입니까?

이 범위의 버전에는 **로딩 후 직접 크래시**를 유발하는 치명적인 버그가 있으며, **인터넷 연결을 끊거나 시스템 날짜를 변경해야만 열 수 있습니다**.

해결책은 **VP19를 `19 build 651` 이상으로, VP20을 `20 build 403` 이상으로 업데이트**하는 것입니다. (참고: VP19 최종은 `19 build 651`, VP20 최종은 `20 build 411`.)

<br>

Q: **[`22 build 122` 이상]** VEGAS가 실행되지 않고 로딩 화면도 없습니까?

A: Windows 업데이트 문제입니다. vc_redist.x86.exe 및 vc_redist.x64.exe를 다운로드하여 실행하여 C++ 런타임을 복구하십시오: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

피드백에 따르면 OBS와 같은 다른 소프트웨어를 업데이트해야 할 수도 있습니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--147255/">https://www.vegascreativesoftware.info/us/forum/posts--147255/</a><br>
</small>

<br>

Q: <sup>**프랑스어 버전**</sup> 프랑스어 버전 VEGAS Pro가 시작 시 크래시됩니까?

A: 이는 **프랑스어 버전에 특정된 문제**입니다. 유일한 해결책은 **제거하고 영어 버전을 다시 설치**하는 것입니다. MAGIX는 이를 수정하려 했지만 명확한 해결책이 없습니다. 이 문제를 재현할 수 있는 사용자는 MAGIX 지원팀에 연락하는 것이 좋습니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--147150/#ca926950">https://www.vegascreativesoftware.info/us/forum/posts--147150/#ca926950</a><br>
</small>

<br>

## V. 파일 가져오기 관련

### 파일 가져오기 실패/오류 가져오기/녹색 깜박임에 대한 일반적인 문제 해결:

#### 1. 레거시 AVC 및 HEVC 디코딩 활성화/비활성화

- VP18 이상: **`환경설정 -> 파일 I/O`, `레거시 AVC 디코딩` 및 `레거시 HEVC 디코딩` 활성화/비활성화**.

- VP15-17: [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 `Reader` 검색, 찾기:
  - `Use So4 Audio Reader for Intermediate/HEVC`
  - `Enable So4 Compound Reader for AVC/M2TS`
  - `Enable Mx Compound Reader for HEVC/ProRes` <sup>VP17 전용</sup>

  `TRUE` = `새 디코더 사용`, `FALSE` = `이전 디코더 사용`. 기본값은 `TRUE`입니다. 이를 변경해 보십시오.

- VP14 이하는 이전 디코더만 사용하며 전환할 수 없습니다.

`21 build 300` 이후 "레거시"와 "새" 디코더의 의미가 바뀌었습니다. 원래 "레거시 AVC/HEVC 디코더"는 이제 새로운 기본 디코더가 되었습니다. 원래 "새 AVC 디코더"는 "레거시 AVC 디코더"가 되었고, 원래 "새 HEVC 디코더"는 "실험적 HEVC 디코더"가 되었습니다.

디코딩 문제(예: 미디어가 **완전히 녹색 또는 검은색으로 변함**, **비디오 스트림 없음**, 심지어 **오디오 디코딩 문제**)의 경우 **이 두 레거시 디코더를 활성화 또는 비활성화**해 보십시오.

작동하지 않으면 아래의 **`하드웨어 디코더`** 옵션을 전환해 보십시오(레거시 디코딩 비활성화가 필요할 수 있음).

<br>

#### 2. 리샘플 비활성화

`파일 -> 속성`, `리샘플` 아래에서 **`리샘플 사용 안 함`** 을 선택합니다.

리샘플 비활성화는 **프레임 관련 문제**를 해결합니다. 리샘플이 활성화된 경우(예: 60fps 프로젝트의 30fps 영상), **VEGAS는 원본 프레임 사이에 프레임 블렌딩을 생성**합니다(프레임별로 스크러빙할 때 **두 프레임 간의 크로스페이드**로 표시됨). **이는 프레임 생성 오류를 일으켜 깜박임(녹색/검은색 깜박임)을 유발할 수 있습니다. 일반적으로 비활성화하는 것이 좋습니다.**

VP13 이전 버전에서는 **`프로젝트 속성`에서 직접 프로젝트의 리샘플 설정을 수정할 수 없습니다**. 대신 타임라인에서 이벤트를 선택하고 **`마우스 오른쪽 버튼 클릭 -> 스위치 -> 리샘플 사용 안 함`** 을 선택합니다.

<br>

#### 3. 해당 코덱 설치

예를 들어 QuickTime 형식에는 설치 시 QuickTime 플러그인을 선택하여 QuickTime 7.7.9를 설치해야 합니다.

K-Lite 코덱 팩 설치 여부는 여전히 논쟁 중입니다. 공식 포럼의 일부 사용자는 "VEGAS의 내장 코덱과 충돌할 수 있다"고 말하며 설치하지 말 것을 권고합니다.

<br>

#### 4. 미디어 파일 재인코딩

위의 방법으로 **가져오기 실패/디코딩 문제/가져온 후 심각한 지연**이 해결되지 않으면 파일을 재인코딩해 보십시오. 권장 설정: 비디오 코덱 AVC, 오디오 코덱 AAC, 컨테이너 mp4, 고정 프레임 속도. 오디오에만 문제가 있는 경우 **오디오를 wav 파일로 추출**한 후 다시 가져와 원본 비디오와 그룹화(G)할 수 있습니다.

<br>

#### 5. 환경설정 재설정

일반적인 시나리오: **가져온 오디오가 완전히 잡음**. 이 경우 **[환경설정 재설정](#5-환경설정-재설정)** 을 시도해 보십시오.

<br>

### 파일 가져오기 Q&A

Q: **폴더에서 파일을 VEGAS로 끌어다 놓을 수 없고**, `열기` 버튼만 사용할 수 있습니까?

A: VEGAS가 **관리자 권한으로 실행 중**이면 끌어다 놓기가 비활성화됩니다. 해결 방법은 **관리자 권한 없이 VEGAS를 실행**하는 것입니다.

참고: **VEGAS 포터블 버전(표시됨 `Portable`)을 사용하는 경우** 관리자 권한으로 시작해야 할 수 있으며, 끌어다 놓기를 방지합니다. 일부 "해결책"은 레지스트리를 통해 UAC를 비활성화하는 것을 포함하지만 **권장되지 않습니다**. **일반 버전으로 전환하고 포터블 버전을 사용하지 않는 것이 좋습니다.**

**포터블 VEGAS의 문제: 관리자 권한 필요; 여러 인스턴스 실행 불가; 시스템 환경 변수 인식 안 됨; 일부 플러그인(예: [Voukoder](#권장-렌더링-플러그인-voukoder))은 수동 커넥터 배치 필요. 가능하면 피하십시오.**

<br>

Q: 가져오기 시도 시 오류: **`경고: 하나 이상의 파일을 여는 중 오류가 발생했습니다. 파일을 열 수 없습니다. 파일이 존재하고 파일/폴더에 대한 액세스 권한이 있는지 확인하십시오.`**

A: VEGAS **설치 경로**가 **오직 [반각 영문자(반각 공백 포함)]만 포함하는지** 확인하십시오. 중국어와 같은 다른 문자가 포함되어 있으면 **VEGAS를 제거하고 반각 영문자만 포함하는 경로에 다시 설치**하십시오.

<br>

Q: **mkv 파일을 가져오고 싶지만** 할 수 없습니다.

A: VP17 이상에서는 **`환경설정 -> 파일 I/O`, `MKV 리더 활성화`**, VEGAS를 다시 시작하고 다시 시도할 수 있습니다.

이 기능에는 버그가 많으므로 가져오기가 여전히 실패할 수 있습니다. 그렇다면 다른 소프트웨어로 미리 변환하십시오.

참고: `21 build 187` 이상은 기본적으로 mkv 가져오기를 지원하며 수동 활성화가 필요하지 않습니다.

또한: mkv 파일 변환에 관하여

비디오 파일에는 두 가지 레이어가 있습니다: 내부 인코딩 스트림과 외부 컨테이너. 가져오기 실패는 지원되지 않는 스트림 또는 컨테이너로 인한 것일 수 있습니다.

**AVC(H.264)** 스트림과 **mkv** 컨테이너가 있는 파일의 경우 VEGAS는 **지원되지 않는 컨테이너**로 인해 가져올 수 없지만 **내부 AVC 스트림은 지원됩니다**. 변환할 때 스트림이 아닌 컨테이너만 변경할 수 있습니다. [FFmpeg](https://ffmpeg.org/)을 사용하면 `ffmpeg -i input.mkv -c:v copy output.mp4` 명령이 이를 수행합니다. GUI 변환기(예: [`HandBrake`](https://handbrake.fr/))에서는 이를 종종 `복사` 또는 `리먹스`라고 합니다. 빠르며 권장됩니다.

**VP9** 스트림과 **mkv** 컨테이너가 있는 파일의 경우 스트림과 컨테이너 모두 지원되지 않습니다(VEGAS는 VP9를 지원하지 않음). 컨테이너를 mp4로 변환해도 작동하지 않습니다. **스트림과 컨테이너를 모두 재인코딩**해야 합니다. 예를 들어 YouTube에서 다운로드한 mkv 파일은 VP9 비디오를 가질 수 있습니다. [MediaInfo](https://mediaarea.net/en/MediaInfo)와 같은 도구를 사용하여 코덱을 확인하십시오.

<br>

Q: **OBS**로 녹화된 비디오를 VEGAS로 가져오면 **길이가 잘못되고 매우 짧음**?

A: OBS가 조각난 MP4를 녹화에 사용할 때 발생하며 VEGAS가 제대로 디코딩할 수 없습니다. **OBS 설정에서 출력 형식을 변경하십시오**. 기존 영상의 경우 스트림 복사 방법을 사용하십시오. 예: `ffmpeg -i input.mp4 -c copy output.mp4`.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--144992/">https://www.vegascreativesoftware.info/us/forum/posts--144992/</a><br>
</small>

<br>

Q: **특정 코덱이 있는 일부 mov 파일을 가져올 수 없음**?

A: 먼저 QT Lite 또는 QuickTime이 설치되어 있는지 확인하십시오. 일반적으로 **QT Lite 4.1.0**을 권장합니다. VP17 이상의 경우 새 디코더는 ProRes mov 파일을 지원하지만 다른 QuickTime 코덱은 기본적으로 더 이상 지원되지 않습니다. 다른 QuickTime mov 파일을 가져오려면 **`환경설정 -> 사용 중단된 기능`, `QuickTime 플러그인 활성화`** 가 필요합니다.

참고: Apple의 `QuickTime 7.7.9`를 설치하는 경우 설치 중 `QuickTime 플러그인`이 선택되었는지 확인하십시오.

**VP23 이후 VEGAS는 실질적으로 QuickTime 호환성을 포기했으며 QuickTime 인코딩된 mov 파일을 더 이상 가져오거나 렌더링할 수 없습니다.**

<br>

Q: 원래 **알파 채널(mov 또는 png)이 있는 미디어 파일**을 가져온 후 VEGAS에서 **알파 투명도가 올바르게 표시되지 않음**?

A: VEGAS에서 **미디어 파일 또는 이벤트 마우스 오른쪽 버튼 클릭 -> 속성**, `미디어` 탭으로 전환, `알파 채널` 찾기, **`직접(매트 없음)`** 으로 변경.
<small>
(참고: <code>알파 채널</code>의 경우, <b><code>정의되지 않음</code> 또는 <code>없음</code>을 선택하지 않는 한</b> 알파 채널이 표시되어야 합니다.)
</small>

**`프로젝트 미디어`** 창에서 여러 파일에 대해 이 속성을 수정할 수도 있습니다.

<br>

Q: **TikTok과 같은 웹 플랫폼**에서 IDM과 같은 도구를 사용하여 직접 다운로드한 비디오(**오디오 코덱 `AAC LC SBR (HE-AAC)`**), VEGAS로 가져올 때 **무작위 오디오 오류, 잡음** 또는 **잘못된 모노로 인식됨**?

A: 이는 **완전히 VEGAS 소프트웨어 버그**이며 최신 버전(`23 build 302`)까지 수정되지 않았습니다. **테스트 결과 이전의 모든 방법이 실패했습니다. 유일한 해결책은 오디오를 추출/재인코딩하여 별도로 가져오는 것입니다.** TikTok 앱을 통해 다운로드한 비디오는 영향을 받지 않습니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--140457/#ca884682">https://www.vegascreativesoftware.info/us/forum/posts--140457/#ca884682</a><br>
</small>

<br>

Q: 4:3 비디오/이미지 가져오기 **가로로 늘어남** 16:9. 수정 방법?

A: `4:3` 미디어가 특정 자동 구성으로 `16:9` 프로젝트로 가져올 때 발생합니다. 수정: **미디어 마우스 오른쪽 버튼 클릭 -> 속성 -> 미디어 탭**, `픽셀 종횡비` 찾기, `1.3333`에서 `1`로 변경한 후 `스트림` 섹션 옆의 저장 버튼<sup>(`향후 자동 감지를 위해 비디오 프로필에 설정 저장`)</sup>을 클릭합니다. 이렇게 하면 향후 `4:3` 가져오기가 자동으로 늘어나지 않습니다. **`프로젝트 미디어`** 창에서 여러 파일에 대해 수행할 수도 있습니다.

<ImageOnDemand button-text="이미지 로드" alt="비디오 프로필 버튼" src="vegtips/image010_profile_button.png" />



"**비디오 프로필 저장 시 알 수 없는 오류 발생**"이 표시되는 경우:

1. **`Win + R`** 을 눌러 `실행`을 엽니다.

2. 입력(`23.0`은 VEGAS 버전, 경로 주위에 영문 따옴표 `""` 포함):
  - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>
  - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>
  - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>

3. `확인`을 클릭하지 말고 **`Ctrl + Shift + Enter`** 를 눌러 관리자 권한으로 파일을 엽니다. `4:3`의 기본 가져오기 프로필을 수동으로 편집하여 모든 `1.3333333333` 값을 `1`로 변경한 후 저장합니다.
  - 참고: 관리자 권한 없이 열면 메모장이 원본 파일에 쓰는 대신 `다른 이름으로 저장`을 프롬프트합니다.

<ImageOnDemand button-text="이미지 로드" alt="비디오 프로필 편집 1" src="vegtips/image011_profile_edit_1.png" />

<ImageOnDemand button-text="이미지 로드" alt="비디오 프로필 편집 2" src="vegtips/image012_profile_edit_2.png" />

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--128760/">https://www.vegascreativesoftware.info/us/forum/posts--128760/</a><br>
</small>

<br>

## VI. 소프트웨어 작동 및 표시 Q&A

Q: **비디오 미리보기 창에 아무것도 표시되지 않음**?

<ImageOnDemand button-text="이미지 로드" alt="트리머 또는 미리보기?" src="vegtips/image013_trimmer_or_preview.png" />

A: **`트리머`** 창으로 전환했는지 확인하십시오. 그렇다면 **`비디오 미리보기` 창으로 다시 전환하십시오**. 이전 버전(VP14 이하)의 분리된 `트리머` 및 `미리보기` 창 레이아웃을 선호하는 경우 메뉴 **`보기 -> 창 레이아웃`** 으로 이동하여 **`소스 창 레이아웃`** 을 선택하십시오.

<br>

Q: 실수로 **xxxx 창을 닫음/드래그 아웃**. 어떻게 **되찾음/도킹합니까**?

A: 메뉴 **`보기 -> 창`** 으로 이동하여 필요한 창을 활성화하십시오. VEGAS 창 레이아웃은 높은 수준으로 사용자 정의 가능합니다. 도킹된 창은 드래그하여 뺄 수 있습니다. 도킹 해제된 창은 **`Ctrl`** 을 누른 상태로 드래그하여 도킹할 수 있습니다. VP23 이후 창은 타임라인의 위, 아래, 왼쪽, 오른쪽에 도킹할 수 있습니다. 이전 버전은 타임라인 위에만 도킹을 지원합니다.

<br>

Q: **팬/자르기 버튼/FX 버튼/xxxx 버튼** 클릭 **창이 열리지 않음**?/**xxxx 창 사라짐**?

A: 일반적으로 창이 실수로 Windows 작업 표시줄 아래로 드래그되어 다시 올릴 수 없습니다.

쉬운 수정: **해당 버튼을 클릭한 후 즉시 `Alt + 스페이스바`를 누르고 `이동`을 선택한 후 창을 위로 드래그하십시오**. 또는 Windows 작업 표시줄을 일시적으로 숨긴 후 드래그하십시오. 마지막 수단으로 `보기 -> 기본 레이아웃 복원`을 시도해 보십시오.

<ImageOnDemand button-text="이미지 로드" alt="창 이동" src="vegtips/image014_window_move.gif" />

<br>

Q: FX를 추가했지만 미리보기 창에서 **FX가 완전히 표시되지 않고 왼쪽/오른쪽으로 분할되어 나타남**?

<ImageOnDemand button-text="이미지 로드" alt="분할 화면 보기" src="vegtips/image015_split_screen.png" />

A: 그림과 같이 **`분할 화면 보기`** 가 활성화되었는지 확인하십시오.

<br>

Q: 무언가를 클릭했고 단일 비디오 트랙이 **A/B 트랙으로 분할됨**. 어떻게 복원합니까?

<ImageOnDemand button-text="이미지 로드" alt="AB 트랙" src="vegtips/image016_ab_track.png" />

A: 일반적으로 이는 이벤트 가장자리를 두 번 클릭할 때 발생합니다. **이벤트 가장자리를 다시 두 번 클릭**하여 수정하십시오.

작동하지 않으면 트랙 헤더(왼쪽에 `레벨` 및 버튼이 있음)에서 **마우스 오른쪽 버튼 클릭 -> 트랙 레이어 확장**을 선택하고 이 옵션을 선택 취소하십시오.

VP18+에서 우발적 트리거를 방지하려면 **`환경설정 -> 일반`** 으로 이동하여 맨 아래로 스크롤하고 **`이벤트 가장자리 더블클릭으로 확장 편집 모드 전환`** 을 비활성화하십시오.

<br>

Q: **미디어 생성기** 창이 열려 있는 상태에서 **실행 취소(`Ctrl + Z`)** 를 누르면 미디어 생성기 효과가 **미리보기에서 사라짐**?

A: **미디어 생성기의 편집 창**에 포커스가 있을 때 **실행 취소(`Ctrl + Z`)** 를 누르면 미디어 생성기의 **`프레임 크기`** 및 **`지속 시간`** 매개변수가 비정상적인 값으로 변경될 수 있습니다. 이 경우 `Ctrl + Z`를 반복해서 눌러도 도움이 되지 않을 수 있습니다.

두 매개변수 모두 미디어 생성기 창의 왼쪽 상단에 있습니다. 수동으로 **미디어 생성기의 `프레임 크기`와 `지속 시간`을 원래 값으로 변경**해야 합니다. 기본적으로 `프레임 크기`는 프로젝트 크기와 일치하고(예: `1920*1080`), `지속 시간`은 기본적으로 5초입니다(또는 `시간 및 프레임` 눈금에서 `00:00:05.00`).

- 또 다른 관련 사소한 버그: 미디어 생성기의 `프레임 크기`와 `지속 시간`을 수정한 후 타임라인에서 두 번째 미디어 생성기의 편집 창을 즉시 열면 두 번째 생성기가 첫 번째 생성기의 `프레임 크기`와 `지속 시간` 매개변수를 상속할 수 있습니다.

<br>

Q: **일부 FX 창** (예: (레거시) 텍스트, TV 시뮬레이터 FX, 기타 DXT 플러그인) **불완전하게 표시됨**?

A:

1. **sserife.fon** 글꼴을 설치하십시오.
    - 다운로드 링크: https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon

2. 글꼴 설치가 도움이 되지 않으면 **`제어판 -> 지역 -> 관리 -> 시스템 로캘 변경`** 으로 이동하십시오. **`베타: 전 세계 언어 지원을 위해 Unicode UTF-8 사용`** 이 **선택되지 않았는지** 확인하십시오. 아래 그림과 같이.

<ImageOnDemand button-text="이미지 로드" alt="Windows Unicode 설정" src="vegtips/image017_unicode_settings.png" />

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--138828/">https://www.vegascreativesoftware.info/us/forum/posts--138828/</a><br>
</small>

<br>

Q: 프로젝트 속성 / 사용자 정의 렌더링 템플릿 / 환경설정 창이 **너무 커서 완전히 표시되지 않고 확인을 클릭할 수 없음**?

<ImageOnDemand button-text="이미지 로드" alt="창 너무 큼" src="vegtips/image018_window_too_large.png" />

A: VEGAS 창 크기는 Windows 표시 설정에 따라 확대/축소됩니다. 높은 DPI 확대/축소는 VEGAS 창을 매우 크게 만들어 극단적인 확대/축소에서 잘려 나간 표시를 유발할 수 있습니다. "확인"을 클릭하려면 **`Enter` 키**를 누를 수 있습니다. 전체 창을 표시해야 하는 경우 창을 열기 전에 Windows 설정에서 **화면 DPI 확대/축소를 100%로 변경**한 후 다시 변경해야 합니다. 또는 **VEGAS의 DPI 확대/축소를 개별적으로 100%로 설정**: VEGAS 실행 파일 또는 바로가기 마우스 오른쪽 버튼 클릭 -> `속성 -> 호환성 -> 높은 DPI 설정 변경`. **`확대/축소 수행:`을 `응용 프로그램`으로 설정**.

<ImageOnDemand button-text="이미지 로드" alt="높은 DPI - 응용 프로그램" src="vegtips/image019_high_dpi_application.png" />

<br>

Q: 다른 소프트웨어에서 **VEGAS로 다시 전환**한 후 정상으로 돌아가기 전에 **버퍼링이 오래 걸림**?

A: **`환경설정 -> 일반`**, `애플리케이션이 비활성 상태일 때 미디어 파일 닫기` 선택 취소. 참고: 이 옵션이 비활성화된 경우 **VEGAS는 미디어 파일을 계속 사용하여 VEGAS 외부에서 원본 파일을 수정/삭제할 수 없게 합니다**. (VEGAS 내에서 교체/삭제에는 영향을 미치지 않습니다.)

<br>

Q: **`프로젝트 미디어` 창**에서 비디오를 타임라인으로 **드래그하려고 하는데 실수로 "트리밍"이 시작됨**?

A: 오래된 성가신 문제: 비디오 이미지에서 드래그하면 "트리밍"이 트리거됩니다.

표준 수정: **`Ctrl + Z`를 눌러 실행 취소한 후 비디오 썸네일 아래의 파일 이름으로 드래그하고 이미지 자체가 아닙니다.**

VP21에 **`호버 스크럽 우회`** 버튼이 추가되었습니다. 활성화하면 오작동을 방지할 수 있지만 호버로 비디오를 미리 보는 기능(썸네일만 보기)을 잃게 됩니다.

<ImageOnDemand button-text="이미지 로드" alt="호버 스크럽 우회" src="vegtips/image020_bypass_hover_scrub.png" />

<p align="center">사실 이 버튼은 VP20에 추가되었지만 VP20에서는 효과가 없었습니다.</p>

<br>

Q: **VEGAS에서 재생할 때 스페이스바를 누르면 커서가 시작점으로 돌아갑니다. 현재 위치에서 일시 정지하도록 스페이스를 원합니다.**

A: VEGAS에서 "일시 정지"는 "재생 중지, 커서 유지"를 의미하고 "중지"는 "재생 중지, 커서 시작점으로 돌아감"을 의미합니다.

VP22 이하에서는 기본적으로 **`Enter`는 "일시 정지", `스페이스바`는 "중지"** 입니다. `21 build 108` 이하에서는 **`환경설정 -> 일반 -> 재생/일시 정지 대신 재생/중지에 스페이스바 및 F12 사용`** 을 통해 교환할 수 있었습니다.

`21 build 187` 이후 이 옵션은 미리보기 창 아래의 **전송 표시줄**로 이동했으며 재생/일시 정지/중지 버튼과 함께 있습니다. 표시되지 않으면 오른쪽의 세 점을 확장하십시오.

<ImageOnDemand button-text="이미지 로드" alt="커서 전송" src="vegtips/image021_cursor_transport.png" />

VP23 업데이트 이후 기본 동작이 변경되었습니다: **`Enter`는 "중지", `스페이스바`는 "일시 정지"** 입니다. 옵션은 `재생/일시 정지 대신 재생/중지에 스페이스바 및 F12 사용`이 되었으며 `환경설정 -> 일반` 및 전송 표시줄 모두에서 사용할 수 있습니다.

<br>

Q: **팬/자르기 키프레임 복사 시 크래시**?

A: Windows 11 업데이트 문제입니다. **`22 build 250`로 업그레이드**하면 해결됩니다.

- 이전 VEGAS의 임시 해결 방법: **VEGAS 실행 파일/바로가기 마우스 오른쪽 버튼 클릭 -> `속성 -> 호환성`, `호환 모드` 아래에서 `Windows 8` 선택**.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--148746/">https://www.vegascreativesoftware.info/us/forum/posts--148746/</a><br>
</small>

<br>

Q: <sup>VP22+</sup> **타임라인에서 왼쪽 드래그가 이제 이벤트를 선택하고 시간 범위를 선택할 수 없음**?

A: VP22 이후 왼쪽 드래그는 타임라인에서 이벤트를 선택하고 오른쪽 드래그는 시간 범위를 선택합니다. 이전 논리에 익숙하다면 **`환경설정 -> 편집 -> 선택 편집 도구로 전환하려면 마우스 오른쪽 버튼 사용`** 을 선택하여 왼쪽/오른쪽 버튼 기능을 교환할 수 있습니다. Reaper의 기본 논리와 유사합니다.
<small>
이전 버전에서 발생하는 경우 먼저 편집 도구가 올바르게 선택되었는지 확인하십시오(<code>D</code> 키 두 번 누르기).
</small>

이 업데이트는 또한 새로운 오프셋 값으로 인해 실제 이벤트 선택 영역이 마우스로 그린 영역보다 약간 작은 사소한 문제를 도입했습니다. [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 **`Default SelectionMode Offset`** 을 검색하고 **`0`** 으로 변경하십시오.

<br>

## VII. 미리보기 관련

### 미리보기 깜박임 녹색/검정, 영상 오류 등에 대한 일반적인 문제 해결

1. 먼저 **[GPU 가속 비활성화](#1-gpu-가속-비활성화)**, **[리샘플 비활성화](#2-리샘플-비활성화)**, **[레거시 디코더 활성화/비활성화](#1-레거시-avc-및-hevc-디코딩-활성화비활성화)** 를 시도해 보십시오.

2. 미리보기 창의 왼쪽 상단에서 미리보기 품질을 전환하여 정상화되는지 확인하십시오(예: `최고(전체)`).

3. **특정 플러그인 버그**: 문제를 일으킬 수 있는 비디오 FX를 제거해 보십시오.

4. 모든 원본 미디어 파일을 재인코딩하고 교체하십시오.

5. 설명할 수 없는 미리보기 깜박임/오류는 실망스럽습니다. 위의 방법이 실패하면 운이 없을 수 있습니다.

<br>

### 미리보기 Q&A

Q: **FX 추가 / 자막 텍스트 수정 / FX 편집** 후 **미리보기 창이 업데이트되지 않음**. 변경 사항은 **FX 창을 닫은 후에만 나타남**?

A: 이 문제는 **특정 Nvidia 드라이버 버전**에서 나타납니다. 해결책은 다음과 같습니다:

1. **[GPU 가속 비활성화](#1-gpu-가속-비활성화)**. 간단하고 효과적입니다. **(내장 GPU 가속 사용도 작동합니다.)**

2. **GPU 가속을 활성화한 상태로 유지하면서** 해결하려면 OpenGL 설정을 수정하십시오.

    [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 **`Enable OpenCL/GL Interop`** 를 검색하고 **`FALSE`** 로 설정하십시오.

    또는 **Nvidia 제어판**에서 설정을 변경하십시오:

    **NVIDIA 제어판**을 열고 왼쪽에서 **`3D 설정 관리`** 를 클릭하고 오른쪽에서 **`프로그램 설정`** 탭으로 전환합니다. `추가`를 클릭하고 VEGAS 실행 파일을 선택하고 **`OpenGL GDI 호환성`** 을 `전역 설정 사용`에서 **`호환성 우선`** 으로 변경합니다. VEGAS를 다시 시작합니다. (여러 VEGAS 버전이 있는 경우 각각 별도로 설정하십시오.)

<ImageOnDemand button-text="이미지 로드" alt="NVIDIA OpenGL GDI 호환성" src="vegtips/image022_nvidia_opengl.png" />

3. Nvidia 드라이버를 `522.30` 이하로 롤백하거나 최신으로 업데이트하십시오. 다시 설치할 때 **"사용자 정의" 설치를 선택**하고 **`깨끗한 설치 수행`** 을 선택하십시오. 이렇게 하면 모든 드라이버 설정이 기본값으로 재설정되므로 **권장되지 않습니다**.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--138196/">https://www.vegascreativesoftware.info/us/forum/posts--138196/</a><br>
</small>

<br>

## VIII. 렌더링 관련

### 권장 렌더링 플러그인: Voukoder

VEGAS의 내장 렌더링 템플릿을 사용할 때 **해상도, 프레임 속도, 비트레이트 등을 지속적으로 조정해야 하는 경우가 많습니다**. 프로젝트 속성과 일치시키고 원하는 품질을 얻기 위해서입니다. 그러나 **해상도/프레임 속도를 프로젝트 속성에 자동으로 일치시키고 비트레이트 제어를 위한 고급 CRF/CQP 매개변수를 지원하는** 렌더링 플러그인이 있어 **수동 매개변수 조정을 덜 신경쓰면서** 렌더링할 수 있습니다. 이 플러그인은 **Voukoder**입니다.

<ImageOnDemand button-text="이미지 로드" alt="Voukoder Classic" src="vegtips/image023_voukoder_classic.png" />

두 버전: Voukoder Classic 및 Voukoder Pro.

- Voukoder Classic은 무료이며 VP12-VP22를 지원하지만 원작자 Vouk에 의해 삭제되었습니다.

  GitHub의 사용자 백업:
  - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
  - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)
  Voukoder 코어(예: `Voukoder 13.4.1`)와 커넥터(예: `connector-vegas22-1.0.0.msi`)를 모두 설치해야 합니다.
- Voukoder Pro는 현재 유료입니다. 공식 사이트: [https://www.voukoder.org/](https://www.voukoder.org/).
  - Voukoder Pro 1은 한때 무료였지만 Voukoder Pro 2는 유료가 되었으며 각 메이저 버전마다 별도로 구매해야 합니다.

다른 유사한 플러그인으로는 [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) 및 [MagicYUV](https://www.magicyuv.com/)가 있습니다. 자주 사용하지 않으며 더 고급 사용자에게 적합할 수 있습니다.

<br>

### 렌더링 크래시/정지/오류에 대한 일반적인 문제 해결

- 렌더링 크래시: 렌더링 중 VEGAS가 **갑자기 하얗게 변하고 오류와 함께 크래시**됩니다.

- 렌더링 정지: **진행률 표시줄이 멈춤**, 작업 관리자의 CPU/GPU 사용률이 낮음, **"취소" 클릭이 작동하지 않음**, 작업 관리자를 통해 VEGAS를 강제 종료해야 합니다.

- 렌더링 오류: 렌더링된 비디오에 **깜박이는 프레임/녹색 화면**이 있습니다.

**렌더링 전에 다음을 확인하십시오:**

- 프로젝트 속성 및 렌더링 템플릿에 문제가 있는 값이 없습니다. 예: **필드 순서가 프로그레시브**, **너비/높이가 4로 나누어짐** (일부 인코더는 4x4 블록 사용), **프레임 속도가 일반적** (특히 이상한 소수점, 표준 `23.976`, `29.97`, `59.94` 제외).

- **렌더링 템플릿이 프로젝트 속성과 정확히 일치합니다**. 불일치는 Sapphire 플러그인 위치 오프셋과 같은 문제를 일으킬 수 있습니다.

- 내장 템플릿에서 비트레이트를 수정할 때 **최대 비트레이트가 평균보다 큼**, 같지 않음.

1.  렌더링 크래시 시 **오류 팝업**이 있는 경우 [VEGAS 오류 보고 팝업 비활성화](#2-vegas-오류-보고-팝업-비활성화)를 참조하십시오.

2.  **[GPU 가속 비활성화](#1-gpu-가속-비활성화).**

3.  **렌더링 템플릿에서 인코더 변경.**

<ImageOnDemand button-text="이미지 로드" alt="렌더링 인코더" src="vegtips/image024_render_encoder.png" />

<p align="center">사용 가능한 인코더는 GPU에 따라 다릅니다.</p>

4.  정지 지점 주변의 영역 수정: FX 삭제, 이벤트 트리밍 등.

5.  다른 렌더링 형식 사용(예: wmv).
  - 참고: 기본 wmv 템플릿: **해상도 `1440*1080`, 픽셀 종횡비 `1.3333`**. 최종 종횡비는 16:9이지만 이러한 매개변수로 직접 렌더링하면 문제가 발생할 수 있습니다. 수동으로 **해상도 `1920*1080`, 픽셀 종횡비 `1`** 로 변경하십시오.

6.  **<sup>권장</sup> [Voukoder](#권장-렌더링-플러그인-voukoder) 사용 렌더링.**

7.  **<sup>권장</sup> 중첩 및 렌더링.**
  - 새 프로젝트를 만들고 **원래 .veg 파일을 직접 끌어다 놓습니다**. 프록시 생성 후 직접 렌더링합니다. 중첩 렌더링은 더 느립니다. 저사양 PC는 어려울 수 있습니다.

8.  세그먼트 렌더링.
  - 정지의 경우 **프로젝트를 작은 세그먼트로 분할하여 별도로 렌더링한** 후 새 프로젝트를 만들어 **모든 세그먼트를 결합하고 다시 렌더링**합니다.
  - 무작위 렌더링 오류의 경우(예: 첫 번째 렌더링이 전반부에 문제, 두 번째 렌더링이 후반부에 문제) 두 렌더링에서 좋은 부분을 결합할 수 있습니다.

9.  **이미지 시퀀스 렌더링**. 정지된 지점에서 렌더링을 시작합니다. **이렇게 하면 적어도 렌더링된 파일이 보존됩니다.** 마지막으로 **이미지 시퀀스를 VEGAS로 다시 가져와 비디오로 렌더링**합니다. 각 시퀀스 렌더링 후 **새 폴더에 출력**하여 덮어쓰지 않도록 합니다. VEGAS는 항상 `000000`부터 번호를 매기기 시작합니다.

<ImageOnDemand button-text="이미지 로드" alt="이미지 시퀀스 가져오기" src="vegtips/image025_import_image_sequence.png" />

<p align="center">이미지 시퀀스 가져오기. 비디오 파일처럼 작동하며 프레임 속도를 설정할 수 있습니다.</p>

10. **[Voukoder](#권장-렌더링-플러그인-voukoder) 사용, 템플릿 사용자 정의, 출력 컨테이너를 mkv로 설정**, 정지된 지점에서 렌더링합니다.
  - 다른 형식과 달리 **mkv 파일은 렌더링 정지/크래시 후에도 재생 및 가져오기가 가능하게 유지됩니다**. **참고: 낮은 VEGAS 버전은 mkv를 직접 가져올 수 없습니다.**

11. 다른 사람에게 렌더링 요청.
  - `파일 -> 내보내기 -> .veg`를 사용하여 프로젝트 미디어를 새 폴더로 수집합니다. 압축하여 신뢰할 수 있는 다른 VEGAS 사용자에게 보냅니다.

**요약:** 렌더링 문제의 경우 먼저 **방법 1, 2, 3**을 시도해 보십시오. 실패하면 **방법 6 및 7**을 우선적으로 시도하십시오. 다른 방법은 참고용입니다. 방법 **8, 9, 10, 11**은 최후의 수단입니다.

<br>

#### 실패한 렌더링에서 파일 복구

앞서 언급했듯이 **이미지 시퀀스** 및 **mkv 컨테이너**만 실패 후 렌더링 진행 상황을 보존합니다. 다른 형식(mp4, mov, avi, wmv)은 캐시 파일을 남기지만 직접 재생/가져오기가 불가능합니다. 재생 시 손상이 표시될 수 있습니다. 그러나 비디오 복구 소프트웨어는 때로 **동일한 템플릿으로 성공적으로 렌더링된 참조 비디오 샘플**을 사용하여 이러한 실패한 캐시 파일을 수정할 수 있습니다. [Digital Video Repair](https://risingresearch.com/ko/dvr/) (무료) 및 [Wondershare Repairit](https://repairit.wondershare.com/) (유료, 더 나은 결과)를 테스트했습니다. 다른 것을 시도해 볼 수 있습니다.

<br>

### 렌더링 Q&A

Q: **`다른 이름으로 렌더링`** (VP23+에서 **`렌더링`** 이라고 함)을 클릭하여 템플릿 목록을 열면 **오류/크래시**가 발생합니까?

A: **오류 팝업**이 있는 경우 먼저 **[오류 보고 비활성화](#2-vegas-오류-보고-팝업-비활성화)** 를 시도해 보십시오.

실패하면 코덱 경로 **`...<VEGAS 설치 경로>\FileIO Plug-Ins\`** 의 모든 폴더를 일시적으로 이동하고 VEGAS를 다시 시작한 후 텍스트 이벤트를 삽입하고 `다른 이름으로 렌더링` 클릭이 여전히 크래시되는지 확인하십시오. 그렇지 않으면 코덱을 점진적으로 다시 이동하고, VEGAS를 다시 시작하고, 각 이동 후 `다른 이름으로 렌더링`을 테스트하여 **문제가 있는 코덱 식별**합니다. 발견되면 해당 폴더를 다시 넣지 않아 해당 코덱 사용을 피하십시오. 이렇게 하면 VEGAS가 특정 형식을 가져오기/렌더링하지 못할 수 있습니다. (`mxavcaacplug`를 우선적으로 확인하십시오.)

<br>

Q: 즉시 렌더링 오류: **`미디어 파일 xxx.mp4 생성 중 오류 발생. 오류 원인을 확인할 수 없습니다.`**

A: 사용자 정의 렌더링 템플릿에서 **`점진적 다운로드 활성화`** 선택 취소. 또는 **[Voukoder](#권장-렌더링-플러그인-voukoder)** 를 시도해 보십시오.

<br>

Q: 즉시 렌더링 오류: **`미디어 파일 xxx.mp4 생성 중 오류 발생. 오류 0x80660008 (메시지 누락)`**

A: **NVIDIA NVENC 인코더**를 사용 중이고 **그래픽 드라이버 버전이 > `590`** 이면 **VP22 이하의 내장 렌더링 템플릿이 NVENC를 호출할 수 없으며**, **다른 인코더가 있는 템플릿을 선택해야 합니다**. 현재 해결책: **드라이버를 `581.57` 이하로 다운그레이드**하거나 **VEGAS를 VP23 이상으로 업그레이드**하십시오. **[Voukoder의](#권장-렌더링-플러그인-voukoder)** NVENC 인코더를 사용해도 오류가 발생하지 않습니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--150382/">https://www.vegascreativesoftware.info/us/forum/posts--150382/</a><br>
</small>

<br>

Q: **m2ts 렌더링** 시도 시 오류: **`COM 개체를 초기화할 수 없습니다.`**

A: **Win11 24H2**부터 Microsoft는 VEGAS 및 기타 소프트웨어가 의존하는 **AC-3 코덱**을 제거했습니다. **Win11 24H2 이상의 새 설치**에서는 이 코덱이 누락되어 VEGAS가 **m2ts 파일의 AC-3 오디오 디코딩 실패** 및 **m2ts 렌더링 실패**를 초래합니다. [**이 영어 튜토리얼**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390)을 참조하여 AC-3 코덱을 다시 추가하거나 **VP22 최종(`22 build 250`) 이상으로 업그레이드**하십시오. 여기에는 새로운 AC-3 코덱이 포함되어 있습니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--147963/">https://www.vegascreativesoftware.info/us/forum/posts--147963/</a><br>
</small>

<br>

Q: 렌더링 중간에 **중지하고 싶지만 부분적으로 렌더링된 비디오 파일을 유지**하고 싶습니다.

A: **SeMW 확장** 렌더링 표시 창에 이 기능이 있습니다.

<ImageOnDemand button-text="이미지 로드" alt="SeMW 렌더링 프롬프트" src="vegtips/image026_render_semw.png" />

SeMW 확장 공식 사이트: https://www.semw-software.com/en/extensions/

참고: 테스트 결과 이 기능은 **"렌더링 취소 불가" 정지 문제를 해결하지 못합니다**. 그 경우 작업 관리자를 통해 VEGAS를 종료해야 합니다.

<br>

Q: **알파 채널이 있는 mov 파일**을 렌더링하는 방법은 무엇입니까?

A:

- **QuickTime 플러그인 <small>(VP22 이하. 정적 이미지에 대한 압축 효과가 좋고 파일 크기가 작습니다.)</small>**

  1.  QT Lite 또는 QuickTime을 설치하십시오. **`QT Lite 4.1.0`** 을 권장합니다. 새 VP의 경우 **`환경설정 -> 사용 중단된 기능 -> QuickTime 플러그인 활성화`** 도 필요합니다.

  2.  렌더링 템플릿 목록에서 왼쪽에 `QuickTime`을 선택합니다. 오른쪽에서 임의의 템플릿을 선택하고 `템플릿 사용자 정의`를 클릭하고 그림과 같이 매개변수를 조정합니다:

<ImageOnDemand button-text="이미지 로드" alt="알파 QuickTime 렌더링" src="vegtips/image027_render_alpha_quicktime.png" />

  3.  템플릿 저장 및 렌더링.

  호환성이 나쁘기 때문에 QuickTime 형식은 `사용 중단된 기능` 아래에 나열됩니다. 테스트 결과 많은 QuickTime mov 파일을 VEGAS로 가져오면 문제가 발생할 수 있습니다(읽기 실패, 지연). 또한 가져올 때 알파 채널이 기본적으로 표시되지 않습니다. 수동 변경이 필요합니다. 호환성을 위해 Apple ProRes를 권장합니다.

  **VP23 이후 VEGAS는 실질적으로 QuickTime 호환성을 포기했으며 QuickTime 인코딩된 mov 파일을 더 이상 가져오거나 렌더링할 수 없습니다.**

- **Apple ProRes 템플릿 <small>(VP18+. 템플릿이 존재하지 않으면 이 방법을 사용할 수 없습니다.)</small>**

  그림과 같이:

<ImageOnDemand button-text="이미지 로드" alt="알파 ProRes 렌더링" src="vegtips/image028_render_alpha_prores.png" />

- **[Voukoder](#권장-렌더링-플러그인-voukoder)<small>(VP18+, Voukoder Classic 버전 12.0+.)</small>**

  Voukoder 템플릿에서 **`알파 채널이 있는 4:4:4 10비트`** 로 표시된 템플릿을 찾아 렌더링합니다. 또는 사용자 정의: 출력 컨테이너 `QuickTime (.mov)`, 비디오 인코더 `ProRes KS` 또는 `QuickTime Animation`.

<br>

Q: 미리보기 또는 렌더링된 파일이 원본 미디어와 비교하여 **색상 차이/불일치**가 있습니까?

A1: VP17 이하에서는 프로젝트 속성 및 렌더링 템플릿의 **색상 공간** 설정이 **색상 이동**을 유발할 수 있습니다.

세 가지 해결책:

1.  **[Voukoder](#권장-렌더링-플러그인-voukoder) 사용, 색상 공간을 변환하는 `필터`가 있는 템플릿 생성.**

<ImageOnDemand button-text="이미지 로드" alt="Voukoder 색상 공간" src="vegtips/image040_voukoder_color_space.png" />

2.  VP18+로 업그레이드합니다. 새 VP에서 이전 프로젝트를 열 때 `파일->속성`의 `픽셀 형식`을 `레거시 8비트(비디오 레벨)`에서 **`8비트(전체 범위)`** 로 변경하고 **이전 VP에서 생성된 렌더링 템플릿을 사용하지 마십시오**.

3.  미디어 파일에 `레벨` FX 프리셋 **`컴퓨터 RGB에서 스튜디오 RGB로`** 를 적용합니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--142942/">https://www.vegascreativesoftware.info/us/forum/posts--142942/</a><br>
</small>

<br>

A2: 소스가 **HDR 영상**인 경우 **프로젝트 속성 `색상 공간` <sup>그림 1</sup>** 을 소스 <sup>그림 2</sup>와 일치하도록 변경하십시오. 이렇게 하면 전체 프로젝트가 10비트 색상 깊이로 전환되어 렌더링이 8비트보다 느려집니다.

<ImageOnDemand button-text="이미지 로드" alt="프로젝트 HDR 색상 공간" src="vegtips/image029_color_space_hdr_project.png" />

<ImageOnDemand button-text="이미지 로드" alt="영상 HDR 색상 공간" src="vegtips/image030_color_space_hdr_footage.png" />

또는 프로젝트 색상 공간을 변경하지 않고 소스 영상에 색상 공간 변환 LUT를 적용합니다. 내장 `LUT 필터` FX 또는 새로운 `색상 등급` 기능을 사용합니다. 핵심은 소스 색상 공간을 `Rec.709` 표준으로 변환하는 LUT를 찾는 것입니다. 이렇게 하면 HDR 디테일이 손실되므로 HDR 출력을 계획하지 않았다면 처음부터 HDR 영상을 녹화하지 마십시오.

<br>

Q: 렌더링된 비디오에 **색상 변화(빨강이 보라, 파랑이 노랑 등)** 가 있습니까?

<ImageOnDemand button-text="이미지 로드" alt="BGRA 색상" src="vegtips/image031_bgra_color.png" />

A: AMD GPU 드라이버 문제입니다. 시도해 보십시오:

- **[GPU 가속 비활성화](#1-gpu-가속-비활성화).**
- AMD 드라이버를 **23.7.2** 이하로 롤백하거나 **23.11.1** 이상으로 업데이트하십시오.
- `21 build 187` 이상으로 업그레이드하면 이 문제가 해결됩니다.
- **렌더링 전**에 내장 **`채널 혼합` FX를 비디오 출력 버스에 추가하고 프리셋 `RGBA -> BGRA` 선택.**

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--142292/">https://www.vegascreativesoftware.info/us/forum/posts--142292/</a><br>
</small>

<br>

Q: **[VP18 이하] `2304`보다 높은 비디오(예: 세로 4K)를 렌더링할 수 없음**?

A: 이전 버전에서는 기본 템플릿의 대화 상자에서 높이를 `2304` 이상으로 설정하려고 하면 자동으로 `2304`로 되돌아갑니다. 가장 쉬운 해결책은 원하는 프로젝트 속성을 설정한 후 **[Voukoder](#권장-렌더링-플러그인-voukoder)** 를 사용하는 것입니다.

다음은 기본 템플릿을 사용하는 "버그 활용" 방법입니다:

1.  렌더링 대화 상자에서 사용자 정의 치수를 허용하는 템플릿을 선택합니다. 예: **`MAGIX AVC` 또는 `MAGIX HEVC`**. 오른쪽에서 가까운 템플릿을 선택하고 `템플릿 사용자 정의`를 클릭합니다.

2.  높이를 제외한 모든 매개변수를 원하는 값으로 수정하고 **상단의 템플릿 이름을 변경하지만 아직 저장 버튼을 클릭하지 마십시오**.

3.  이제 높이를 원하는 > `2304` 값으로 변경합니다. 입력 후 **`Enter` 또는 `Tab`을 누르거나 다른 곳을 클릭하지 마십시오. 커서가 높이 필드에서 깜박이는 상태를 유지한 후 템플릿 이름 옆의 저장 버튼을 클릭합니다**.

4.  **저장 후 `취소`를 클릭합니다**. 저장한 템플릿으로 자동 이동하지 않지만 템플릿이 목록에 추가된 것을 알 수 있습니다.

5.  이 새 템플릿을 사용하십시오. 저장 후 `확인`을 클릭하면 `*`가 있는 템플릿으로 이동하는데, 이것은 잘못된 것입니다. 목록에서 `*`가 없는 것을 사용하십시오.

- 참고: 이 방법은 인코더의 최대 제한(예: NVENC의 경우 `4096*4096`)을 초과할 수 없습니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--149413/#ca939692">https://www.vegascreativesoftware.info/us/forum/posts--149413/#ca939692</a><br>
</small>

<br>

Q: 렌더링 후 프로젝트 재생을 시도하면 오류: **`재생 시작 중 오류 발생. 이 장치에 대해 활성화된 요청이 없습니다.`**

A: VEGAS는 렌더링 후 마이크 권한을 요청합니다. 마이크가 연결되어 있지만 VEGAS에 권한이 없으면 오류가 발생합니다. 수정: **Windows 설정에서 VEGAS에 대한 마이크 권한 활성화**. 또는 `환경설정 -> 오디오 장치`에서 오디오 장치를 전환하거나 `모두 기본값`을 클릭한 후 다시 렌더링하여 영구적으로 수정되는지 확인합니다. (한 번 전환은 임시적입니다.) 최후의 수단으로 사운드 카드 드라이버를 다시 설치하십시오.

<br>

Q: **[Voukoder](#권장-렌더링-플러그인-voukoder)** (또는 내장 템플릿)으로 렌더링된 비디오는 로컬에서 괜찮지만 YouTube/기타 사이트에 전체 해상도로 업로드하면 **가로 줄무늬**가 표시됩니까?

A: Voukoder는 프로젝트 속성을 자동으로 일치시킵니다. VP17 이하에서는 기본 프로젝트 템플릿의 `필드 순서`가 `상위 필드 우선`(인터레이스)으로 설정되어 있습니다. 로컬 플레이어는 디인터레이싱을 지원하므로 괜찮아 보입니다. YouTube와 같은 사이트는 지원하지 않을 수 있어 인터레이스 줄무늬를 표시합니다. Voukoder의 경우 렌더링 전 **`프로젝트 속성`에서 `필드 순서`를 `프로그레시브(필드 없음)`으로 변경**하십시오. 내장 템플릿의 경우 **이름에 `i`가 있는 템플릿을 피하고 `p`가 있는 템플릿을 선택**하십시오.

<br>

Q: **내장 렌더링 템플릿에 이미지 시퀀스 옵션이 없음**?

A: 이 버그는 VP19에서 수정되었습니다. 이전 버전의 경우 다음을 시도해 보십시오(보장되지 않음):

1.  HEIF 이미지 확장 설치/재설치: [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg).

2.  이미지 시퀀스 렌더링 스크립트 사용.
  - 다운로드 링크: https://www.vegascreativesoftware.info/us/forum/posts--133068/?page=3#ca863786

3.  다른 형식(`.mov`)으로 렌더링한 후 [FFmpeg](https://ffmpeg.org/)를 사용하여 변환합니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--133068/">https://www.vegascreativesoftware.info/us/forum/posts--133068/</a><br>
</small>

<br>

Q: 렌더링 템플릿에서 **`wav` 및 `avi` 템플릿 출력 형식이 `.wdp` 로 변경됨**?

A: 알려진 유일한 효과적인 수정은 **Windows 업데이트 도구를 통해 Windows를 다시 설치**하는 것입니다.

- 업데이트 도구: https://www.microsoft.com/software-download

시스템을 최신 버전으로 업데이트하며 몇 시간이 걸립니다. 이 방법은 대부분의 설치된 소프트웨어, 파일 및 설정을 유지합니다.

정확한 수리 원리는 불분명합니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--83436/">https://www.vegascreativesoftware.info/us/forum/posts--83436/</a><br>
</small>

<br>

Q: **[Win7 VP18+]** **`다른 이름으로 렌더링` 클릭 즉시 오류**: **`미디어 파일 생성 중 오류 발생. 오류 0x80131501 (메시지 누락)`**

<ImageOnDemand button-text="이미지 로드" alt="Win7 렌더링" src="vegtips/image032_render_win7.png" />

A: 일반적으로 Win7은 **최대 VP17까지만 지원**합니다. Win7의 VP18+는 이 오류를 발생시킵니다.

해결 방법이 있습니다: 새 VP 설치 디렉토리의 렌더링 구성 요소 DLL을 이전 VP18 빌드의 것으로 교체합니다.

안정성에 영향을 줄 수 있으므로 Win10으로 업그레이드하는 것이 좋습니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--128221/">https://www.vegascreativesoftware.info/us/forum/posts--128221/</a><br>
</small>

`18 build 284` `RenderAsDialog.dll` 다운로드 링크: [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll)

<br>

## IX. 자막 Q&A

Q: 자막 파일이 가져오기되지 않음 / 가져오기 시 **깨진 텍스트**?

A: 자막 파일을 메모장으로 열고 **UTF-8 인코딩으로 다른 이름으로 저장**한 후 가져오십시오.

<br>

Q: "**타이틀 및 텍스트**"를 사용하여 텍스트 편집. 올바른 글꼴을 선택했지만 **미리보기 창의 글꼴이 변경되지 않고 글꼴을 전환할 수 없음**?

A: 이는 "타이틀 및 텍스트" 문제입니다. 글꼴 호환성이 좋지 않습니다.

해결책:
- **Word 문서에서 먼저 글꼴 스타일을 설정한 후 VEGAS 타이틀 및 텍스트에 복사하여 붙여넣기.**
  - 모든 리치 텍스트 편집기를 사용할 수 있습니다.

- 또는 **(레거시) 텍스트** 또는 **ProType Titler**를 사용하십시오. 이들은 이 문제가 덜 발생합니다.
  - 새 VP에서는 `환경설정 -> 사용 중단된 기능`에서 활성화합니다.

- 일부 경우 Windows Unicode 설정이 원인일 수 있습니다. **`제어판 -> 지역 -> 관리 -> 시스템 로캘 변경`** 으로 이동하여 **`베타: 전 세계 언어 지원을 위해 Unicode UTF-8 사용`** 이 **선택되지 않았는지** 확인하십시오.

<ImageOnDemand button-text="이미지 로드" alt="Windows Unicode 설정" src="vegtips/image017_unicode_settings.png" />

VP20에서 "타이틀 및 텍스트" 기능 "**자막 속성 전송**"도 영향을 받아 이 기능을 사용할 수 없는 일부 글꼴이 있습니다.

<br>

Q: 메뉴 **`삽입 -> 파일에서 자막 삽입`** **삽입 창이 열리지 않고 응답 없음**?

A: 비교적 드문 버그로, 수정되지 않은 것으로 보입니다. 어느 날은 작동하고 다음 날은 멈출 수 있습니다. 현재 알려진 유일한 해결책은 **[환경설정 재설정](#5-환경설정-재설정)** 입니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--137861/">https://www.vegascreativesoftware.info/us/forum/posts--137861/</a><br>
</small>

<br>

Q: "**크레딧 롤**" 사용, 텍스트 편집 시 **VEGAS 정지/크래시**?

A: Microsoft 입력 방법 문제. **Microsoft 입력 방법 설정에서 `호환성`을 찾아 `이전 버전의 Microsoft 입력 방법 사용` 활성화**.

<br>

Q: 텍스트 파일을 "**크레딧 롤**"로 가져오면 **깨진 텍스트**가 표시됩니까?

A: 텍스트 파일을 메모장으로 열고 **ANSI 인코딩으로 다른 이름으로 저장**한 후 가져오십시오.

<br>

Q: 고해상도 화면에서 "**ProType Titler**" 사용 시 **UI 오류/읽을 수 없을 정도로 작은 텍스트**가 발생합니까?

<ImageOnDemand button-text="이미지 로드" alt="PPT Titler UI 문제" src="vegtips/image033_protype_titler_ui_issue.png" />

A: 시스템 확대/축소 >= 150%일 때 DPI 확대/축소 문제. VEGAS 실행 파일/바로가기 마우스 오른쪽 버튼 클릭 -> `속성 -> 호환성 -> 높은 DPI 설정 변경`. **`확대/축소 수행:`을 `시스템(고급)`으로 설정**.

<ImageOnDemand button-text="이미지 로드" alt="높은 DPI - 시스템 고급" src="vegtips/image034_high_dpi_system_enhanced.png" />

<br>

Q: **[VP20, VP21]** 타이틀 및 텍스트의 **"자막 속성 전송" 기능 오류(그림과 같이)**?

<ImageOnDemand button-text="이미지 로드" alt="자막 속성 전송" src="vegtips/image035_subtitles_transfer.png" />

A: 이 문제는 텍스트 상자에 **혼합 형식(다른 글꼴, 크기 등)이 포함되어** 전송할 수 없는 경우 발생합니다. **먼저 텍스트 형식을 통일**한 후 기능을 사용해 보십시오. **VP21 최종 빌드 315에서 이 문제가 수정되었습니다.** 이전 버전(VP20 이전 포함)은 유사한 기능을 가진 제가 작성한 스크립트를 사용할 수 있으며 오류가 없지만 혼합 형식 전송도 지원하지 않습니다. 스크립트 설치 경로는 [스크립트](#xii-스크립트-확장-관련)를 참조하십시오.

- [자막 속성 전송] 스크립트 다운로드: https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs

  - 사용법: 트랙에서 단일 "타이틀 및 텍스트" 이벤트를 선택하고 스크립트를 실행하여 동일한 트랙의 다른 자막 이벤트를 해당 속성과 일치시킵니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--145461/">https://www.vegascreativesoftware.info/us/forum/posts--145461/</a><br>
</small>

<br>

**추가 참고:** (VP18+) `텍스트 미디어 삽입`의 기본 도구를 변경하는 방법:

VEGAS에는 세 가지 주요 텍스트 도구가 있습니다: 타이틀 및 텍스트, (레거시) 텍스트, ProType Titler. `트랙 마우스 오른쪽 버튼 클릭 -> 텍스트 미디어 삽입`은 기본적으로 "타이틀 및 텍스트"를 사용합니다. 다른 두 가지를 사용하려면 "미디어 생성기"에서 드래그해야 하며 번거로울 수 있습니다. 기본값을 변경하는 방법은 다음과 같습니다:

[내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 `Text Media Generator GUID`를 검색합니다. 값을 선호하는 도구의 GUID로 변경합니다(기본값은 타이틀 및 텍스트).

GUID:
- 타이틀 및 텍스트: `{Svfx:com.vegascreativesoftware:titlesandtext}`
- (레거시) 텍스트: `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
- ProType Titler: `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`

GUID를 알면 이를 모든 미디어 생성기 FX의 GUID로 설정하여 "텍스트 미디어 삽입"이 해당 생성기를 직접 생성하도록 만들 수 있습니다.

<br>

## X. 비디오 플러그인 관련

VEGAS 비디오 플러그인은 두 가지 범주로 나뉩니다: VEGAS 전용으로 개발된 DirectX Transform(DXT) 플러그인과 범용 표준인 OpenFX(OFX) 플러그인입니다. 이전 플러그인은 DXT일 수 있습니다(예: NewBlue 2012, Neat Video 3.1.1). 새로운 플러그인은 일반적으로 OFX입니다. 일부 레거시 VEGAS FX(예: 소프트 콘트라스트 FX, ProType Titler)도 DXT 플러그인입니다.

VEGAS Pro 비디오 FX 목록은 VEGAS Pro에서 사용 가능한 모든 **`비디오 FX`** 를 요약하여 **`이름`**, **`그룹`**, **`UID`** 및 기타 정보를 제공하며 온라인에서 쉽게 검색하고 탐색할 수 있습니다. **[여기로 이동하십시오.](./videofxlist)**

<br>

### VEGAS 플러그인 캐시 파일

- 스캔 캐시: `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
- 이름 캐시: `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
- 썸네일 캐시: `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`

여기서 `23.0`은 VEGAS 버전입니다. 플러그인 캐시는 스캔된 플러그인/FX 정보를 저장합니다. VEGAS가 "비디오 플러그인 팩토리 생성 중..."에서 멈추는 것은 **플러그인 캐시를 재생성**하고, 새로운 플러그인을 스캔하는 것입니다.

<br>

### OFX 관련 경로

- **공통 OFX 경로**: `C:\Program Files\Common Files\OFX\Plugins\`
- **VEGAS 전용 OFX 경로**: `...<VEGAS 설치 경로>\OFX Video Plug-Ins\`

참고: OFX 플러그인은 플러그인 코어와 OFX 인터페이스 파일로 구성될 수 있습니다. OFX 경로는 인터페이스 파일용입니다. 없으면 VEGAS가 플러그인을 **스캔하지 않습니다**. 공통 OFX 경로 플러그인은 다른 OFX 지원 소프트웨어(Premiere Pro, DaVinci Resolve)에서도 스캔됩니다. VEGAS 전용 경로는 해당 VEGAS 버전에서만 스캔됩니다.

OFX 인터페이스 파일 구조:
```
<OFX 경로>/
├── xxx.ofx.bundle/
│ └── Contents/
│ ├── Presets/
│ │ ├── PresetPackage.xml
│ │ ├── PresetPackage.ko-KR.xml
│ │ └── ...
│ ├── Resources/
│ │ ├── xxx.xml
│ │ ├── xxx.ko-KR.xml
│ │ └── ...
│ └── Win64/
│ └── xxx.ofx
└── yyy.ofx.bundle/
 └── ...
```

`Win64\xxx.ofx`는 OFX 인터페이스 파일입니다. `Presets\PresetPackage.xml`에는 내장 프리셋이 포함되어 있습니다. `Resources\xxx.xml`은 언어 번역 파일입니다.

참고: OFX 경로 편집에는 관리자 권한이 필요한 경우가 많습니다. `xml` 파일의 경우 `Visual Studio Code`를 권장하며 저장 시 관리자 권한을 요청합니다.

언어 파일 수정 후 위에서 언급한 **플러그인 이름 캐시**를 삭제하고 VEGAS를 다시 시작하여 변경 사항을 확인하십시오.

사용자가 저장한 OFX 플러그인 FX 프리셋: `%userprofile%\Documents\OFX Presets\`

<br>

### DXT 관련 정보

- **내장 DXT 경로**: `...<VEGAS 설치 경로>\Video Plug-Ins\`

엄밀히 말하면, DXT 플러그인은 OFX처럼 강제된 폴더가 없습니다. 이들은 `regsvr32 xxx.dll`을 통해 등록이 필요한 DLL 파일입니다. 이를 통해 외부 DXT 플러그인을 어디에나 배치하고 등록하여 VEGAS가 인식하도록 할 수 있습니다. [Route Animation](https://www.vegascreativesoftware.info/us/forum/posts--105615/) (`RouteAnimationX64.dll`)과 같은 수동 등록 플러그인에 유용합니다.

<br>

### 비디오 플러그인 Q&A

Q: 레지스트리를 통해 VEGAS를 다른 언어로 변경했지만 **내장 플러그인 이름이 여전히 영어**입니다. 수정 방법은 무엇입니까?

A: 위에서 언급한 **플러그인 이름 캐시를 삭제**하고 VEGAS를 다시 시작하십시오. 또는 단순히 **[환경설정 재설정](#5-환경설정-재설정)** 하십시오.

<br>

Q: **이미 플러그인을 제거했지만** **여전히 VEGAS FX 목록에 나타나고**, 클릭하면 크래시됩니까?

A: **OFX 경로의 해당 파일**이 정리되었는지 확인하십시오. 정리되었는데도 나타나면 **VEGAS 플러그인 캐시 파일을 삭제**해 보십시오.

<br>

Q: **비디오 FX/전환 FX/미디어 생성기 FX 창에서 특정 FX로 이동하면 즉시 크래시**됩니까?

A: 이는 일반적으로 **썸네일 로딩 크래시**입니다. 직접적인 해결책은 없으며 피할 수만 있습니다. 해당 플러그인 시리즈가 필요하지 않으면 OFX 파일(공통 경로의 외부, VEGAS 내장의 전용 경로)을 찾아 제거하십시오. 여전히 플러그인 시리즈를 원하지만 해당 FX는 원하지 않으면 **`xml` 번역 파일을 편집**하여 끝으로 이동시켜 실수로 선택하는 것을 피하십시오.
<small>또는 <b>FX 검색 확장 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>을 대안으로 사용할 수 있습니다.</small>

<br>

Q: **플러그인 검색 상자를 사용하면 흰색 화면/정지**가 되어 사용할 수 없습니까?

A: 많은 플러그인이 설치된 상태에서 이전 VEGAS 버전은 검색 사용 시 종종 정지하며 회복하는 데 시간이 오래 걸립니다. **VP18에서 이 문제가 수정되었으므로** 원활한 검색을 위해 VP18+로 업그레이드하는 것이 좋습니다.
<small>또는 <b>FX 검색 확장 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>을 대안으로 사용할 수 있습니다.</small>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ZZBfTb2Ubg?si=vkKTf8trYe8t6RR5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

Q: **내장 AI FX 사용 시 VEGAS 딥 러닝 모델 구성 요소 설치 요청**?
`이 플러그인을 사용하시려면 추가 데이터가 필요합니다. 서비스 센터 계정에 로그인하신 뒤 내 제품 섹션에서 딥 러닝 모델 구성 요소를 다운로드하십시오.`

A: 새로운 내장 AI FX의 경우 **해당 버전의 딥 러닝 모델을 별도로 설치**해야 합니다.

<small>
공식 AI 딥 러닝 모델 다운로드: <a href="https://www.vegascreativesoftware.info/us/forum/posts--104782/">https://www.vegascreativesoftware.info/us/forum/posts--104782/<br></a>
</small>

<br>

Q: 내장 **`LUT 필터` FX가 선택한 `.cube` 파일을 인식할 수 없음**?

A: `.cube` 파일의 **전체 경로가 [반각 영문자]만 포함하는지** 확인하십시오. 중국어와 같은 다른 문자가 포함되어 있으면 **반각 영문자만 포함하는 경로로 파일을 이동**한 후 다시 선택하십시오.

<br>

Q: **일부 Sapphire 플러그인 FX가 알파 채널을 무시하고 아래 배경을 덮음**?

A: 그림과 같이 FX의 `도움말`에 들어가 개별적으로 `GPU` 가속을 비활성화하십시오.

<ImageOnDemand button-text="이미지 로드" alt="Sapphire 알파 문제" src="vegtips/image036_sapphire_alpha.png" />

작동하지 않으면 **VEGAS 자체의 `GPU 가속`을 비활성화**하십시오.

<br>

Q: 독립 실행형 Mocha는 작동하지만 **VEGAS를 통해 호출된 OFX 플러그인 버전 Mocha가 크래시됨**?

A: **그래픽 드라이버를 롤백/업데이트**해 보십시오.

<br>

Q: **[VP21]** **`3D LUT Creator` 플러그인** 추가 시 **크래시/정지**?

A: 이전 VEGAS 버전에서 이 FX를 플러그인 체인으로 저장한 후 VP21에서 체인을 적용할 수 있습니다. 이 버그는 VP22에서 수정되었습니다.

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--144354/">https://www.vegascreativesoftware.info/us/forum/posts--144354/</a><br>
</small>

<br>

## XI. 오디오 플러그인 관련

VEGAS 오디오 플러그인은 두 가지 범주로 나뉩니다: DirectX 플러그인(이전) 및 VST 플러그인(현재 표준). VEGAS 내장 "접두사 없음" 및 `ExpressFX` 시리즈 오디오 FX(DirectX임)를 제외한 모든 다른 오디오 플러그인은 VST입니다. VP16+에 내장된 `eFX` 시리즈도 VST입니다. 이전 VEGAS는 VST2를 지원합니다. VP20+는 VST3도 지원합니다. 어떤 VEGAS 버전도 VSTi를 지원하지 않습니다.

<br>

### VST 관련 경로

- **공통 VST 경로**: `C:\Program Files\VSTPlugins\`

<small>
다른 소프트웨어가 공통 VST 경로를 변경한 경우 VEGAS는 이를 따릅니다. 레지스트리 키 <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>, 값 <code>VSTPluginsPath</code>를 확인할 수 있습니다.
</small>

- **VEGAS 전용 VST 경로 (VP16+)**: `...<VEGAS 설치 경로>\MAGIX Plugins\`

<br>

`환경설정 -> VST 효과`에서 VST 경로를 수동으로 설정할 수도 있습니다. 이전 VEGAS는 3개 경로로 제한됩니다. VP20+에는 제한이 없습니다.

<br>

사용자가 저장한 VST 플러그인 FX 프리셋:
- `%userprofile%\Documents\VST2 Presets\`
- `%userprofile%\Documents\VST3 Presets\`

<br>

Q: VEGAS 환경설정을 통하지 않고 외부에서 VST 경로를 편집하는 방법은 무엇입니까?

A: 레지스트리 키로 이동:
- `HKEY_CURRENT_USER\Software\VEGAS Creative Software\VEGAS Pro\23\Metrics\x64\VstCache\SearchPaths` <sup>VP20+</sup>
- `HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\19.0\Metrics\VstCache\SearchPaths` <sup>VP19-</sup>
- 여기서 `23`/`19.0`은 VEGAS 버전입니다.

`Path 1`, `Path 2` 등이 있으며 환경설정의 VST 경로에 해당합니다.

<ImageOnDemand button-text="이미지 로드" alt="VST 레지스트리" src="vegtips/image037_vst_reg.png" />

`CheckSum`은 VEGAS가 재스캔이 필요한지 확인하는 용도입니다. 무시해도 됩니다. `Path`(절대 경로 문자열) 및 `Flags`(`3` = 스캔, `0` = 스캔 안 함)에 집중하십시오. 필요에 따라 수정하십시오.

VST 스캔에 문제가 있고 환경설정을 통한 재스캔이 도움이 되지 않으면 `VstCache` 아래의 `Mappings` 하위 키를 삭제한 후 VEGAS를 다시 시작하여 재스캔할 수 있습니다.

<br>

### 오디오 플러그인 Q&A

Q: 새 버전에서 **32비트 VST 플러그인**을 스캔할 수 없습니까?

A: **`환경설정 -> 오디오 -> 32비트 VST 플러그인 지원 활성화(실험)`**.

<br>

Q: 새 버전에서 일부 **VST 플러그인 GUI가 불완전하게 표시됨**?

A: VST2 특정으로 보입니다. 플러그인에 VST3 버전이 있으면 **VST3 버전을 사용**하십시오.

<br>

Q: **DirectX 플러그인이 오디오 FX 목록에 표시되지 않음**/**표시되지만 추가 시 무효**/**플러그인이 데모 버전이 되어 추가 시 경고음 발생**?

A: **VEGAS를 제거**한 후 **`C:\Program Files (x86)\VEGAS\Shared Plug-Ins\Audio_x64\`** (VP13-: `C:\Program Files (x86)\Sony\Shared Plug-Ins\Audio_x64\`)의 모든 파일을 삭제한 후 **VEGAS를 다시 설치**하십시오. (여러 VEGAS 버전이 있는 경우 하나만 제거하면 됩니다. 제거는 나중에 다시 설치할 수 있도록 하기 위한 것입니다.)

<small>
참조: <a href="https://www.vegascreativesoftware.info/us/forum/posts--143986/">https://www.vegascreativesoftware.info/us/forum/posts--143986/</a><br>
</small>

<br>

Q: 마스터 버스에 **리미터 FX(내장 `eFX_Limiter` 또는 기타 VST 리미터)** 추가 후 모든 오디오 트랙에 **팬 엔벨로프 및 엔벨로프 포인트** 추가 시 **찰칵거림/지퍼 노이즈** 발생?

A: **팬 엔벨로프 포인트 유형이 `부드러운` 또는 `날카로운`일 때 발생하는 이상한 버그**입니다. 수정: **엔벨로프 포인트 유형을 다른 것으로 변경**하십시오.

<br>

## XII. 스크립트/확장 관련

VEGAS는 `C#`(또는 `JScript`, `Visual Basic`)로 사용자 정의 스크립트를 지원하여 워크플로를 최적화합니다.

- **스크립트**: 사용자가 수동으로 실행해야 합니다. 기능이 비교적 단순합니다.

- **확장**: VEGAS 시작 시 자동으로 실행될 수 있습니다. 더 복잡한 기능을 가능하게 하며, VEGAS 내에 도킹 가능한 창 생성과 같은 기능을 포함합니다.

<small>
이 섹션은 설치 문제만 다룹니다. 튜토리얼은 다음을 참조하십시오: <a href="https://www.vegascreativesoftware.info/us/forum/posts--104563/">https://www.vegascreativesoftware.info/us/forum/posts--104563/</a><br>
</small>

<br>

**유효한 스크립트 설치 경로:**

```text{1}
C:\ProgramData\VEGAS Pro\Script Menu\
C:\ProgramData\VEGAS Pro\23.0\Script Menu\
%userprofile%\Documents\Vegas Script Menu\
%appdata%\VEGAS Pro\Script Menu\
%appdata%\VEGAS Pro\23.0\Script Menu\
%localappdata%\VEGAS Pro\Script Menu\
%localappdata%\VEGAS Pro\23.0\Script Menu\
...<VEGAS 설치 경로>\Script Menu\
```

<br>

**유효한 확장 설치 경로:**

```text{1}
C:\ProgramData\VEGAS Pro\Application Extensions\
C:\ProgramData\VEGAS Pro\23.0\Application Extensions\
%userprofile%\Documents\Vegas Application Extensions\
%appdata%\VEGAS Pro\Application Extensions\
%appdata%\VEGAS Pro\23.0\Application Extensions\
%localappdata%\VEGAS Pro\Application Extensions\
%localappdata%\VEGAS Pro\23.0\Application Extensions\
```

<br>

여기서 `23.0`은 VEGAS 버전입니다. 첫 번째 경로(`C:\ProgramData\...`)가 가장 권장됩니다. 참고: `ProgramData`는 기본적으로 숨겨진 폴더입니다. Sony 시대(VP13-) 경로의 경우 `VEGAS Pro` 위에 **`Sony`** 폴더를 추가합니다. 예: `C:\ProgramData\Sony\VEGAS Pro\Script Menu\`.

<br>

역사적 API 변경으로 인해 SonicFoundry 시대, Sony 시대(VP13-) 및 MAGIX 시대(VP14+) VEGAS용 스크립트/확장은 직접 호환되지 않습니다. 매우 오래된 SonicFoundry 시대는 `SonicFoundry.Vegas` 네임스페이스를 사용합니다. 비교적 오래된 Sony 시대는 `Sony.Vegas`를 사용합니다. 현대 MAGIX 시대는 `ScriptPortal.Vegas`를 사용합니다. 소스 코드 파일(`.cs`, `.js`, `.vb`)의 경우 텍스트 편집기에서 네임스페이스를 수동으로 편집할 수 있습니다. 사전 컴파일된 `.dll` 파일의 경우 소스 프로젝트를 수정하고 다시 컴파일해야 합니다.

<br>

### 스크립트 또는 확장 설치 일반 단계

예를 들어 확장을 사용합니다. 스크립트도 유사합니다. 다른 경로는 [위 목록](#xii-스크립트-확장-관련)을 참조하십시오.

1.  `C:\ProgramData\VEGAS Pro\`를 복사하여 파일 탐색기의 주소 표시줄에 붙여넣어 이동합니다.

2.  `Application Extensions` 폴더가 존재하는지 확인합니다. 없으면 정확한 이름으로 생성합니다. 폴더에 들어갑니다.

3.  확장에 필요한 모든 `.dll` 파일을 복사하여 여기에 직접 붙여넣습니다. 예: `C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`.
    *   일부 스크립트/확장에는 `16*16` `.png` 아이콘 파일이 포함될 수 있습니다. 선택적으로 배치할 수 있습니다. 아이콘은 VEGAS 메뉴/도구 모음에서 식별용으로 나타납니다.

4. 일부 스크립트/확장에 추가 설치 프로그램이 필요한 경우 제공된 설치 단계를 따르십시오.

<br>

## XIII. 프로젝트 파일 백업 및 복구

**가장 중요한 조언 먼저:**

<p align="center"><big><b>자주 <code>Ctrl + S</code>를 누르는 좋은 습관을 들이십시오!</b></big></p>

이 섹션은 **저장 후 프로젝트 파일이 사라지거나 손상된 경우**, **저장 전 소프트웨어 크래시** 등 프로젝트 파일을 복구해야 하는 상황을 돕습니다.

<br>

### 1. 프로젝트 옆의 `.veg.bak` 파일

이것은 **저장 직전**의 프로젝트 저장 파일입니다. 복구하려면 `.veg.bak` 파일을 `.veg`로 **이름을 바꾸고** VEGAS에서 엽니다. 수동으로 거의 저장하지 않는다면 이 백업이 매우 오래되었을 수 있습니다.

<br>

### 2. VEGAS 기본 5분 자동 저장

VEGAS는 크래시 복구를 위해 5분마다 자동 저장합니다.

표준 복구 방법: 크래시 후 **원래 프로젝트를 직접 열지 마십시오**. **VEGAS를 실행하고 새 빈 프로젝트를 시작합니다**. VEGAS는 "**프로젝트 복구 가능**"을 표시해야 합니다. 거기서 복구하십시오.

이 방법은 다소 번거롭습니다. 원래 프로젝트를 직접 열면 프롬프트가 나타나지 않습니다. 그런 다음 원래 프로젝트를 수정하면 **자동 저장 파일을 덮어쓸 수 있어** 이 방법으로 복구가 불가능해질 수 있습니다. 따라서 **자동 저장 파일을 수동으로 찾는 것**을 권장합니다.

간단한 방법: **[VEGAS 캐시 디렉토리](#vegas-환경설정-및-캐시-디렉토리)** (**`%localappdata%\VEGAS Pro\`**)로 이동 <small>(또는 단순히 **`C:`에서 `autosave` 검색**)</small>, 날짜별로 정렬, `.veg` 또는 `.veg.bak` 파일을 찾고, 복사하여 꺼내서, [1](#_1-프로젝트-옆의-veg-bak-파일)과 같이 `.veg`로 **이름을 바꾸고**, 열고, 확인한 후 다른 곳에 저장합니다.

기본 자동 저장 간격은 5분입니다. 변경하려면 [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 `msAutoSaveInterval`을 검색하십시오. 기본값은 `300000`밀리초입니다. 원하는 대로 변경하십시오.

<br>

### 3. 고급 저장 (VP16+)

**현재 가장 권장하는** 프로젝트 복구 방법이지만 사전 설정이 필요합니다.

장점:

- 백업 파일이 **프로젝트와 동일한 디렉토리**에 저장되므로 캐시 디렉토리를 검색할 필요가 없습니다.

- 백업 간격을 쉽게 조정할 수 있습니다.

<ImageOnDemand button-text="이미지 로드" alt="고급 저장" src="vegtips/image038_advanced_save.png" />

<p align="center">메뉴: <b><code>도구 -> 고급 저장</code></b>.</p>

두 가지 기능: 실시간 저장 및 고급 백업.

- **`실시간 저장`**: **모든 작업 후 저장**하여 프로젝트 파일이 **항상 최신 상태**임을 보장합니다.
  - 모든 작업 후 저장하므로 **대규모 프로젝트에서 심각한 지연을 유발할 수 있으므로 권장하지 않습니다**.

- **`고급 백업`**: 추가 `.veg` 백업 파일을 생성합니다.

  여러 단계: **분/시간/일별/실시간**.

  - `분 백업`: **`x`분마다** 1개의 `.veg` 백업을 저장하고, **지난 1시간 이내의 백업만 유지**합니다. 오래된 백업은 자동 삭제됩니다.

  - `시간 백업`: **`x`시간마다** 1개의 `.veg` 백업을 저장하고, **지난 10시간 이내의 백업만 유지**합니다. 오래된 것은 자동 삭제됩니다.

  - `일별 백업`: **매일 VEGAS 열기/닫기 시** 1개의 `.veg` 백업을 저장합니다. 최대 `x`개의 백업을 유지합니다. 초과 시 가장 오래된 것이 삭제됩니다.

  - `실시간 백업`: **모든 작업 후 별도의 `.veg` 파일로 백업**합니다. 최대 `x`개의 백업을 유지합니다. 초과 시 가장 오래된 것이 삭제됩니다. "실시간 저장"처럼 **대규모 프로젝트에서 지연을 유발할 수 있으므로 권장하지 않습니다**.

참고: 이러한 백업 단계는 **독립적**입니다.

- `분 백업`은 지정된 디렉토리의 `MinorBackups` 폴더로 이동합니다.

- `시간 백업`은 `MajorBackups`로 이동합니다.

- `일별 백업`은 `CriticalBackups`로 이동합니다.

- `실시간 백업`은 `RealtimeBackups`로 이동합니다. `실시간 백업` 활성화 시 다른 단계는 비활성화됩니다.

**`고급 백업` 활성화는 기본 [5분 자동 저장](#_2-vegas-기본-5분-자동-저장) 기능을 비활성화합니다.**

다른 질문이 있으면 **고급 저장 창 오른쪽 상단의 물음표를 클릭하여 도움말 문서를 확인**하십시오.

<br>

### 4. 증분 저장 사용 (VP18+)

VP18부터 제공되는 증분 저장, 단축키 **`Ctrl + Alt + S`**. 다른 이름으로 저장과 유사하지만 더 편리합니다. **자동으로 증분 번호가 있는 새 파일로 저장**하여 원본을 덮어쓰지 않습니다. `옵션 -> 키보드 사용자 정의`를 통해 단축키를 다시 매핑할 수 있습니다.

<br>

### ~~5. 주기적으로 프로젝트 파일을 수동으로 백업~~ 

<br>

## XIV. 프로젝트 버전 다운그레이드

일반적으로 새 VEGAS는 이전 프로젝트 파일을 호환성 있게 열 수 있습니다. 이전 VEGAS는 새 프로젝트 파일을 열 수 없습니다. 이 섹션은 프로젝트 버전을 다운그레이드하는 방법을 제공합니다.

<br>

### 1. VEGAS 프로젝트 파일 버전 다운그레이드 도구

<ImageOnDemand button-text="이미지 로드" alt="MSVPVF" src="vegtips/image039_msvpvf.png" />

원본 프로젝트 링크: https://sr.ht/~mrpapersonic/msvpvf/

이 도구는 프로젝트 파일 내부의 버전 식별자를 수정하여 다운그레이드합니다. 그러나 프로젝트 구조를 조정하지는 않습니다. 따라서 버전 식별자가 낮아져도 파일이 종종 손상된 것으로 표시되어 열리지 않습니다. 저자는 "세대" 개념을 소개하며, 다운그레이드 호환성은 동일 세대 내에만 존재한다고 제안합니다: VEGAS 프로젝트는 세대 간에 다운그레이드될 수 없으며, 동일 세대 내에서만 가능합니다. 저자의 개념과 제 테스트에 따르면, 세대 경계는 대략 다음과 같습니다: `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`. <small>(사소한 빌드 번호 차이는 더 많은 분할을 만들 수 있으므로 이는 근사치입니다.)</small> 중간 범위는 상당히 파편화되어 이 도구의 실용성이 제한적이지만, 특정 버전 쌍에 대해서는 작동합니다.

제가 컴파일한 **VEGAS 프로젝트 파일 버전 다운그레이드 도구** 다운로드: https://github.com/zzzzzz9125/msvpvf/releases/

다음 방법은 진정한 버전 다운그레이드가 아니라 프로젝트 내용 전송입니다.

<br>

### 2. 버전 간 복사-붙여넣기 방법

VEGAS는 여러 인스턴스를 지원합니다. 다른 인스턴스의 프로젝트 간에 이벤트를 복사-붙여넣기할 수 있습니다. 여러 버전을 실행하여 VEGAS 버전 간에 내용을 복사-붙여넣기하는 데 사용할 수 있습니다.

이 방법은 위 도구보다 더 넓은 범위에서 작동하지만 **이벤트**만 복사하며 전체 트랙과 해당 속성은 복사하지 않습니다.

<br>

### 3. 버전 간 플러그인 체인 방법

2장의 [VEGAS 플러그인 체인 프리셋 사용, 가져오기 및 내보내기](#vegas-플러그인-체인-프리셋-사용-가져오기-및-내보내기)를 참조하십시오. 플러그인 체인을 저장하여 한 프로젝트/버전에서 다른 프로젝트/버전으로 오디오/비디오 FX 체인을 전송할 수 있습니다. 플러그인 체인은 다양한 위치의 FX를 지원하지만 일괄 적용할 수 없습니다. 체인마다 개별적으로 저장/로드해야 합니다. 종종 방법 2와 함께 사용됩니다: 방법 2는 이벤트를 전송하고, 방법 3은 트랙 FX를 전송합니다.

버전 다운그레이드는 불가피하게 호환성 문제를 일으키며, 주로 두 가지 영역에서 발생합니다:

- **새로운 기능.** 예: VP21의 "조정 이벤트"는 이전 버전에서 빈 이벤트가 됩니다. VP20의 업데이트된 VST 엔진은 해당 VST FX를 이전 버전에서 인식할 수 없게 만듭니다.

- **내부 API 또는 GUID 변경.** 예: VP13(Sony)과 VP14(MAGIX)는 분기점입니다. 서로 복사-붙여넣기할 수 없습니다. VP17은 모든 내장 OFX의 GUID 접두사를 `sonycreativesoftware`에서 `vegascreativesoftware`로 변경하여 해당 FX를 이전 버전에서 인식할 수 없게 만듭니다.

버전 업그레이드는 일반적으로 이러한 문제가 없습니다.

<br>

## XV. 기타 Q&A

Q: VEGAS가 가져온 미디어 옆에 **`.sfk` 파일**을 생성합니다. **숨기는** 방법이 있습니까?

A:

- **이전 버전**: 없음. `.sfk`는 오디오 피크 파일입니다. VEGAS에는 `.sfk` 파일을 다른 곳에 저장하는 **설정이 없습니다**. 미디어 파일 옆에 있어야 합니다. 수동으로 삭제하면 프로젝트를 다시 열 때 재생성됩니다.  
  <small><s>심지어 Sound Forge는 직접 피크 파일을 숨길 수 있는데 Vegas는 못합니다. 이건 좀...</s></small>

- **새 버전(`21 build 300`+)**: `환경설정 -> 일반`, 두 가지 새 옵션: **`.sfk 파일을 생성하지 않아 피크 데이터 저장`** 및 `새 .sfk 파일 숨기기`. 두 번째만 선택하면 새 `.sfk` 파일이 숨겨집니다("숨겨진 파일 표시"가 활성화된 경우 보임). 첫 번째를 선택하면 **`.sfk` 생성이 완전히 방지됩니다** (프로젝트 열 때 피크 데이터 재생성, 일반적으로 괜찮음), **권장**.

<br>

Q: 오디오/비디오 가져온 후 **오디오 파형이 보이지 않고 "피크 사용 불가" 표시**, 하지만 오디오 재생됨?

A: **미디어 파일이 관리자 권한이 필요한 폴더에 있는 경우**, VEGAS가 `.sfk` 파일을 생성할 수 없어 **`피크 사용 불가`** 가 발생합니다. 해결책: **미디어 파일을 관리자 권한이 필요하지 않은 폴더로 이동**하십시오.

<small>
또한 <code>.sfk</code>, <code>.sfl</code>, <code>.sfap0</code>, <code>.sfvp0</code> 파일에 대한 정보는 다음을 참조하십시오: <a href="https://vegasaur.com/sweeper">https://vegasaur.com/sweeper</a><br>
</small>

<br>

## XVI. 소프트웨어 구매 경로

1.  VEGAS 공식 웹사이트: https://www.vegascreativesoftware.com/us/

  - 최신 버전만 판매합니다. 두 가지 주요 에디션: Standard(접미사 없음, 이전 `Edit`) 및 `Suite` (추가 소프트웨어/플러그인 포함). 영구 라이선스(일회 구매) 또는 구독(365일)으로 이용 가능합니다. 이전 라이선스를 소유한 경우 업그레이드 할인도 지원합니다. 하나의 라이선스는 두 대의 장치를 활성화합니다. MAGIX 계정에서 장치를 비활성화할 수 있습니다(쿨다운 있음).

  - 공식 설치 프로그램 링크: https://www.vegascreativesoftware.info/us/forum/posts--104782/

2. 한국 지역 대리점：https://pluginshop.co.kr/products/vegas-pro-22-%EC%98%81%EC%83%81%ED%8E%B8%EC%A7%91-%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-12%EC%9B%94-9%EC%9D%BC%EA%B9%8C%EC%A7%80-%EC%84%B8%EC%9D%BC



3.  일부 지역 대리점, 예: 일본: https://www.sourcenext.com/product/vegas/video/vegas-edit/
  - 공식 사이트보다 저렴하지만 일본어 사용을 강제할 수 있습니다.

4. Steam 에디션: https://store.steampowered.com/app/4006040/
  - VP23 미국에서 $199. 그러나 Steam 에디션은 **여러 인스턴스를 허용하지 않으며**, 언어 변경을 위한 수동 레지스트리 변경을 지원하지 않으며, 텍스트-음성/음성-텍스트 및 VEGAS Hub와 같은 클라우드 서비스가 없습니다.

5.  [Humble Bundle](https://www.humblebundle.com/), [Fanatical](https://www.fanatical.com/)과 같은 사이트에서 가끔 심할인 번들.

  - 약 $20-30. 일반적으로 VEGAS Pro 버전 **현재 최신보다 두 버전 뒤**를 포함하며 번들 콘텐츠도 포함합니다. 또한 공식 업그레이드 할인 자격도 있습니다. 예: 최신이 21일 때 19를 판매합니다. 판매는 빈번하지 않고 짧으며, 번들 콘텐츠가 다양합니다.

모든 경로에는 무작위 할인이 있습니다. 현재 거래는 이 스레드를 따르십시오: https://www.vegascreativesoftware.info/us/forum/posts--109642/

<br>

## XVII. VEGAS 커뮤니티/포럼



VEGAS Pro 공식 포럼: [https://www.vegascreativesoftware.info/us/vegas-pro-forum/](https://www.vegascreativesoftware.info/us/vegas-pro-forum/)

VEGAS Pro Reddit: [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
