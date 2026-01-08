---
layout: doc
title: UltraPaste! 확장
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

# UltraPaste! 확장

<ImageOnDemand alt="아이콘" src="ultrapaste/img001_ultrapaste_icon.png" />

## 개요

이 확장은 VEGAS Pro에 대한 **<u>새로운</u>** 파일 가져오기 방법을 도입합니다. 단 하나의 핫키만으로 거의 모든 유형의 파일을 가져올 수 있습니다: 일반 미디어 파일, 클립보드의 이미지, SRT 자막 파일, 심지어 REAPER 클립보드 데이터까지. `Ctrl + C` 한 다음 `Ctrl + Shift + V`만 누르면 이 파일들을 VEGAS 타임라인으로 빠르게 가져올 수 있습니다.

미디어 파일 가져오기 방법 예시:

<ImageOnDemand alt="미디어 가져오기" src="ultrapaste/img015_ultrapaste_media_import.gif" />

`클립보드 이미지` 기능과 스크린샷 도구의 상호작용:

<ImageOnDemand alt="스크린샷" src="ultrapaste/img016_ultrapaste_screenshot.gif" />

`클립보드 이미지` 기능과 PowerPoint의 상호작용:

<ImageOnDemand alt="파워포인트" src="ultrapaste/img017_ultrapaste_ppt.gif" />

## 설치

현재 확장 버전: v1.03 beta

지원 버전: Sony Vegas Pro 13 - Magix Vegas Pro 22

1.  [릴리스](https://github.com/zzzzzz9125/UltraPaste/releases)에서 최신 .zip 파일을 다운로드하고 압축을 풉니다. `UltraPaste.dll`<small>(`Sony VEGAS Pro 13`의 경우 `UltraPaste_13.dll`)</small>과 `UltraPaste.png`를 선택하여 복사하고, 다음 확장 폴더에 붙여넣습니다:
  - `C:\ProgramData\Vegas Pro\Application Extensions\`
  - 또는 Sony 버전의 경우: `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
  - 확장을 설치하는 방법을 모르신다면 [여기](/ko/#스크립트-또는-확장-설치-일반-단계)를 클릭하세요.

2.  설치 후, `도구 -> UltraPaste!`에서 도킹 가능한 확장 창을 찾을 수 있습니다.

<ImageOnDemand alt="도구 메뉴" src="ultrapaste/img002_ultrapaste_tools_menu.png" />

## 사용법

먼저 가장 상단의 `UltraPaste!`입니다. 이것은 확장의 주요 기능으로, 거의 모든 작업을 이를 통해 완료할 수 있습니다. `옵션 -> 사용자 지정 키보드`에서 키보드 단축키를 할당할 수 있습니다:

<ImageOnDemand alt="키보드 사용자 지정" src="ultrapaste/img003_ultrapaste_keyboard.png" />

`Ctrl + Shift + V`는 개인적으로 추천하는 단축키입니다. 다른 편리한 단축키로 바인딩해도 됩니다. `Ctrl + V`를 바인딩하는 것은 권장하지 않습니다. VEGAS의 기본 붙여넣기 키를 덮어쓰게 됩니다.

이렇게 하면 UltraPaste 키에 대한 단축키가 설정됩니다. 메뉴에 나타나는 모든 원클릭 작업 기능도 이와 같은 방식으로 단축키를 추가할 수 있습니다.

파일 가져오기 로직은 간단합니다: 예를 들어, 데스크톱의 모든 미디어 파일을 선택하고 `Ctrl + C`를 누른 다음, VEGAS에서 `UltraPaste` 단축키를 실행하면 현재 선택된 VEGAS 트랙으로 가져옵니다. 더 나아가, VEGAS에서 루프 영역을 정의했다면 해당 루프 영역의 길이에 따라 파일을 가져올 수 있습니다.

기본 파일 가져오기 외에도, 확장은 다음과 같은 클립보드 데이터 유형을 읽을 수 있습니다:
*   클립보드 이미지
*   일반 텍스트 및 자막 파일
*   REAPER 클립보드 데이터

이 모든 데이터는 올바르게 인식되고 처리됩니다.

<br>

`UltraPaste! - 창`은 확장의 설정 창으로, 여기에서 `UltraPaste`의 동작 로직을 조정할 수 있습니다.

### 일반

<ImageOnDemand alt="일반" src="ultrapaste/img004_ultrapaste_general.png" />

파일 유형 제외: 이 옵션은 확장이 특정 이름 패턴과 일치하는 파일을 제외하도록 합니다. 기본 DOS 표현식을 사용합니다. 예를 들어, 이미지의 `*.sfvp0` 및 `*.sfap0`는 각각 VEGAS Pro의 비디오 프록시 파일과 오디오 프록시 파일입니다. 이 프록시 파일은 실제로 VEGAS에 직접 가져올 수 있지만, 사용자 오작동을 방지하기 위해 기본적으로 제외됩니다. 특정 파일을 가져올 필요가 없다면 이 설정을 직접 조정할 수 있습니다.

<br>

### 클립보드 이미지

<ImageOnDemand alt="클립보드 이미지" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />

`시작 위치`: 파일 가져오기의 시작 위치입니다. `커서`, `재생 커서`, `프로젝트 시작` 세 가지 범주로 나뉩니다. `커서`와 `재생 커서`의 차이는 타임라인을 재생할 때 `커서`는 재생의 시작점일 뿐이지만, `재생 커서`는 타임라인의 실시간 재생 위치라는 점입니다.

`커서를 끝으로 이동`: 붙여넣기 동작을 모방하여, 붙여넣기 후 자동으로 커서를 새 이벤트(들)의 가장 끝으로 이동시킵니다.

`저장 경로`: VEGAS는 파일을 무에서 창조할 수 없으며, 모든 미디어 파일은 실제 위치에 저장되어야 합니다. 클립보드 이미지의 경로를 설정해야 합니다.

*   기본값: `Clipboard\<yyyyMMdd_HHmmss>.png`. 이것은 `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`와 동등합니다. 여기서 `%PROJECTFOLDER%`는 현재 프로젝트 파일의 폴더 경로를 나타냅니다. <small>(프로젝트가 저장되지 않은 경우 바탕 화면 경로가 기본값입니다.)</small>
*   `<yyyyMMdd_HHmmss>`는 파일 저장을 위한 타임스탬프 형식을 나타냅니다. 여기서는 타임스탬프로 변환해야 하는 경로 부분이 `<>`로 둘러싸여 있어야 한다고 엄격히 지정합니다. 그렇지 않으면 확장이 변환하지 않습니다.
    *   다른 타임스탬프 형식화 구문은 다음을 참조하세요: https://learn.microsoft.com/dotnet/api/system.datetime.tostring

<br>

### REAPER 데이터

<ImageOnDemand alt="Reaper 데이터" src="ultrapaste/img006_ultrapaste_reaper_data.png" />

이것은 이 확장의 주요 기능 중 하나입니다: REAPER 클립보드 데이터 가져오기 및 내보내기를 완전히 구현했습니다. REAPER에서 다양한 항목이나 트랙을 선택하고 `Ctrl + C`를 누른 다음, 바로 `Ctrl + Shift + V`로 VEGAS 타임라인에 붙여넣을 수 있습니다.

확장은 두 소프트웨어 간의 다양한 매개변수를 적응시킵니다:
*   `REAPER 항목 속성` → `VEGAS 이벤트 속성`
*   `REAPER 항목/트랙 엔벨로프` → `VEGAS 트랙 엔벨로프`
*   `REAPER 항목 스트레치 마커` → `VEGAS 오디오 이벤트 스트레치 / 비디오 이벤트 속도 엔벨로프`
*   `REAPER 트랙 속성` → `VEGAS 트랙 속성`
*   ...

요약하면, 적응 가능한 것은 거의 모두 적응시켰습니다. REAPER 프로젝트 파일을 선택하고 `Ctrl + C`를 눌러 여러 트랙으로 가져올 수도 있습니다.

VEGAS 이벤트나 트랙을 REAPER 클립보드 데이터로 내보낸 다음, REAPER에서 `Ctrl + V`를 눌러 소프트웨어 간 완전한 상호 운용성을 달성할 수도 있습니다.

<ImageOnDemand alt="Reaper 예제 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />

<ImageOnDemand alt="Reaper 예제 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />

참고: 스크립팅 API 제한으로 인해, VEGAS 버전이 15의 최종 버전 `VP15B416`보다 낮은 경우, 오디오 이벤트 피치와 관련된 모든 매개변수는 VEGAS로 전송될 수 없으며, REAPER 클립보드 데이터로도 출력할 수 없습니다.

`시작 간격 닫기`: REAPER 클립보드 데이터에는 REAPER 프로젝트 내 원본 항목의 절대 위치가 포함됩니다. "시작 간격 닫기"가 꺼져 있으면, 붙여넣기 시작 위치 = REAPER 프로젝트 시작 위치입니다. "시작 간격 닫기"가 켜져 있으면, 붙여넣기 시작 위치 = 첫 번째 항목의 시작 위치입니다.

`비디오 스트림 추가`: 가져온 REAPER 항목에 비디오 스트림을 추가합니다.

<br>

### PSD 이미지

<ImageOnDemand alt="PSD 이미지" src="ultrapaste/img009_ultrapaste_psd.png" />

`모든 레이어 확장`: 여러 레이어를 가진 PSD 이미지를 가져올 때, VEGAS 트랙에서 자동으로 별도로 확장합니다.

`다른 레이어 추가`: 선택된 단일 PSD 레이어에 대해, 그 위와 아래의 다른 모든 레이어를 보충합니다.

<br>

### 자막

<ImageOnDemand alt="자막" src="ultrapaste/img010_ultrapaste_subtitles.png" />

자막은 이 확장의 또 다른 주요 기능입니다. 모든 `일반 텍스트` / `TXT` 파일 / `SRT` 자막 파일 / `LRC` 자막 파일을 복사하여 VEGAS 타임라인에 붙여넣을 수 있습니다.

`생성기 유형`: 자막 생성기의 유형입니다.

`프리셋 이름`: 사용하려는 자막 생성기의 프리셋 이름입니다. 해당 FX 내에서 미리 프리셋을 조정하고 저장해야 합니다.

`ProType Titler` 및 `(레거시) 텍스트`와 같은 DXT 유형 플러그인의 경우, 사용자가 저장한 프리셋만 인식되며 VEGAS의 내장 프리셋은 지원되지 않습니다. <small>(사용하려면 이름을 바꾸고 다시 저장하면 됩니다.)</small>

`영역`: 자막을 VEGAS 영역으로 가져옵니다.

`최대 문자 수`: 한 줄의 문자 수가 지정된 양을 초과하면 자동으로 새 줄로 줄 바꿈합니다. 0은 문자 수 제한 없음을 의미합니다.

`단어 무시`: 선택 해제 시, 확장은 단어의 공백 분리에 대해 최적화합니다. 즉, 전체 단어를 강제로 분리하지 않고 공백에서 줄 바꿈을 시도합니다. 물론, 중국어와 같이 일반적으로 공백을 사용하지 않는 언어의 경우, 이 상자를 직접 선택하면 문자 수에 따라 엄격하게 분할됩니다.

`최대 줄 수`: 자막 블록의 줄 수가 일정량을 초과하면 자동으로 새로운 자막 블록으로 분할합니다. 분할 길이는 원본 블록에서 평균을 냅니다.

`다중 트랙`: 단일 자막 블록 내의 여러 줄을 여러 트랙으로 분할합니다. 참고: 확장은 이러한 여러 트랙에 대해 어떤 위치 조정도 적용하지 않으므로, 이러한 자막은 미리보기 창에서 겹쳐 보이며 수동 조정이 필요합니다.

`기본 길이`: 타임스탬프가 없는 클립보드 일반 텍스트 또는 TXT 파일을 가져올 때의 기본 길이(초 단위)입니다.

<ImageOnDemand alt="자막 영역" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />

<p align="center">팁: 타임라인에 먼저 영역을 정의한 다음 단축키를 누르는 것이 더 편리합니다.</p>

`선택된 이벤트에 프리셋 적용`: 현재 프리셋을 선택된 이벤트에 적용합니다. OFX 효과만 지원합니다. 즉, `ProType Titler` 및 `(레거시) 텍스트`는 지원되지 않습니다.

`T&T를 ProType Titler로 변환`: 선택된 "타이틀 및 텍스트" 이벤트를 `ProType Titler` 이벤트로 원클릭 변환합니다.

<br>

### 미디어

<ImageOnDemand alt="미디어" src="ultrapaste/img012_ultrapaste_media.png" />

`추가 방법`: `시간에 걸쳐`, `트랙에 걸쳐`, `테이크로서` 세 가지 유형으로 나뉩니다. VEGAS의 기본 오른쪽 클릭 드래그 가져오기 메뉴에 있는 세 가지 파일 가져오기 방법과 완전히 일치합니다.

`스트림 유형`: `모두`, `비디오만`, `오디오만`으로 나뉩니다.

`이벤트 길이`: `미디어 길이`, `루프`, `루프 평균`으로 나뉩니다. `루프 평균`은 추가 방법이 `시간에 걸쳐`일 때만 유효합니다.

`이미지 시퀀스 자동 가져오기`: 확장이 사용자가 이미지 시퀀스를 가져오는 것으로 감지되면(예: 선택된 모든 이미지 파일의 명명 로직이 `000000.png - 114514.png`이고 이미지 크기가 동일한 경우), 자동으로 이미지 시퀀스로 가져옵니다.

`누락된 스트림 추가`: 선택된 이벤트에 누락된 스트림을 추가합니다.

<br>

미디어 사용자 지정 가져오기:

<ImageOnDemand alt="미디어 사용자 지정 가져오기" src="ultrapaste/img013_ultrapaste_media_custom.png" />

<p align="center">특정 미디어 파일 이름에 대한 가져오기 규칙 설정</p>

사용자 지정을 통해 특정 미디어 파일 이름에 대한 특별한 가져오기 규칙을 설정할 수 있습니다. 수정 후 `√`를 클릭하면 설정에 저장됩니다. 더 이상 필요하지 않은 설정은 `×`를 눌러 삭제할 수 있습니다.

<small>여기의 UI 로직은 다소 경직되어 있습니다. 파일 규칙 문자열이 키 이름으로 사용됩니다. 따라서 파일 이름을 수정하려면 먼저 삭제한 다음 다시 입력하고 수정해야 합니다. 그렇지 않으면 원본이 제거되지 않습니다.</small>

예를 들어, 여기서의 `1_*(*).wav;1_*(*).flac`은 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui)가 출력하는 스템 파일의 명명 규칙을 나타냅니다. 여기서는 오디오만 가져오고 트랙에 걸쳐 방식으로 가져오도록 요구합니다. 그런 다음 폴더에서 스템 파일을 다중 선택하고 `Ctrl + C`를 누른 다음 `UltraPaste!` 단축키를 눌러 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) 스템을 직접 가져올 수 있습니다.

<br>

### VEGAS 데이터

<ImageOnDemand alt="VEGAS 데이터" src="ultrapaste/img014_ultrapaste_vegas_data.png" />

`VEG 가져오기 유형`: `프로젝트 파일 열기`, `중첩 프로젝트로 가져오기`, `프로젝트에서 미디어 가져오기` 세 가지 범주로 나뉩니다.

`이벤트 속성 붙여넣기`: 클립보드 데이터에 VEGAS 이벤트가 포함된 경우 `선택적 이벤트 속성 붙여넣기`를 실행합니다.

(버전 제한으로 인해 VEGAS Pro 14 및 이하 버전에서는 `선택적 이벤트 속성 붙여넣기`를 사용할 수 없으며 `이벤트 속성 붙여넣기`만 수행할 수 있습니다.)

`스크립트 실행`: 복사된 파일에 `.cs` / `.js` / `.vb` / `.dll` 파일이 포함된 경우 이를 스크립트로 실행하려고 시도합니다. 실행 실패는 직접 오류를 보고하므로, 이 옵션을 활성화할 때는 `.dll` 파일 등을 무작위로 복사하여 붙여넣지 않도록 하십시오.

`혼합 VEGAS 클립보드 데이터 생성`: 일반 사용자에게는 별로 유용하지 않습니다. 그러나 Sony 버전(Sony VEGAS Pro 13 및 이하)과 상위 버전을 모두 사용할 때, 이 원클릭 작업은 클립보드 데이터의 VEGAS 이벤트를 Sony 버전과 Magix 버전 모두에서 붙여넣을 수 있는 버전으로 변환합니다. 실험적 기능으로 완전히 신뢰할 수는 없습니다.
