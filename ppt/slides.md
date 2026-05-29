---
theme: seriph
title: AI 활용 2차 TF | 2회차 + 3회차 1교시
info: |
  ## AI 활용 2차 TF — 5차 커리큘럼
  2회차: 자동화 후보 발굴 + Draw Toast + 1차 MD 프롬프트
  3회차 1교시: 프롬프트 6요소 + v1→v2 업그레이드

  정보시스템실 · 2026. 6. 2. ~ 6. 9.
fonts:
  sans: 'Yooshin, Noto Sans KR, sans-serif'
  serif: 'Yooshin, Noto Serif KR, serif'
  mono: 'D2Coding, Consolas, monospace'
css: ./style.css
canvasWidth: 1280
download: true
exportFilename: yooshin-2nd-tf-session-02
mdc: true
transition: slide-left
background: /cover-ai-native.jpg
class: text-center cover-hero
hideInToc: true
layout: cover
---

# AI-native로 가는 길

<div class="cover-sub">

2차 TF · Session 02 + Session 03 Part 1

</div>

<div class="cover-tagline">

자동화 후보 발굴 + <span class="cover-accent">본인 업무 흐름도</span> + 1차 MD 프롬프트

</div>

<div class="abs-bl mx-14 my-12 cover-footer">
정보시스템실 · 2026. 6. 2. ~ 6. 9.
</div>

<!--
[3시간 운영 안내 — 2회차]
- 50분 × 3교시 + 휴식 10분 × 3
- 1교시 NEW: 자동화 후보 발굴 (AI 인터뷰)
- 2교시: Draw Toast 디지털 게임 + 본인 업무 그리기
- 3교시: 흐름도 → 1차 MD 프롬프트 (4단)
- 5차 커리큘럼 핵심: "외울 필요 없음, 한 번 해본 경험"

[3회차 1교시 안내]
- 6/9 화 첫 50분
- Ice Break (NotebookLM 등) + 6요소 + 부서별 v1→v2
-->

---

# 1회차 5줄 복습 — 지난주 핵심 📌

<div class="space-y-3 mt-6 text-lg">

<v-clicks>

<div class="flex items-center gap-3">
<span class="text-3xl">1️⃣</span>
<div>자동완성 — 맥락과 역할이 모든 것을 결정한다</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">2️⃣</span>
<div>의미공간 — AI는 별자리로 단어를 본다 (계산은 약점)</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">3️⃣</span>
<div>작업기억 — 새 대화 = 백지, 매일 첫 출근하는 신입사원</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">4️⃣</span>
<div>마크다운 — AI와 사람이 모두 잘 읽는 공통어</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">⭐</span>
<div>MD 프롬프트 파일 — 복사 한 번에 재사용하는 업무 대행 AI 뼈대</div>
</div>

</v-clicks>

</div>

<div v-click class="mt-4 text-center text-lg opacity-90">
오늘은 <span class="text-blue-500 font-bold">내 업무에서 자동화할 만한 일</span>을 직접 찾아보고,<br>
<span class="text-purple-500 font-bold">흐름도 + 1차 프롬프트</span>까지 만듭니다.
</div>

---

# 큰 그림 — 9시간 뒤 뭐가 달라지나? 🎯

<div class="mt-6 slide-roadmap-table">

| 회차 | 일자 | 주제 | 회차 끝나면 내 손에 |
|:---:|:---:|:---|:---|
| 1회차 | 5/26 (화) | LLM 원리 + MD 프롬프트 | 업무 맥락 정의서 + MD 1개 |
| 2회차 <span class="text-red-500">(오늘)</span> | 6/2 (화) | 후보 발굴 + 흐름도 + 1차 프롬프트 | **자동화 후보 1개 + 흐름도 + 1차 MD 프롬프트** |
| 3회차 | 6/9 (화) | 6요소 정교화 + HTML 도구 완성 | 본인만의 HTML 업무 대행 AI v1 ✨ |

</div>

<div class="slide-roadmap-outcome text-center">
<span class="text-lg opacity-90">9시간 뒤, 교육생분 한 분 한 분의 손에<br>
<span class="text-2xl font-bold text-blue-500">본인 업무를 대신해주는 HTML 1개</span>가 쥐어집니다.</span>

<div class="slide-roadmap-preview-intro text-sm opacity-80">💡 <span class="font-bold">미리보기 — 3회차에 이런 HTML 도구를 직접 만듭니다</span> (클릭하면 새 탭에서 열립니다)</div>

<div class="grid grid-cols-3 gap-2 mt-2 text-xs mx-auto slide-roadmap-tools">
<a href="./tools/04-jeonpyo-buge.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">📊 회계 전표 분개기</a>
<a href="./tools/05-weekly-report.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">📝 사장단 주간보고 요약</a>
<a href="./tools/06-recruit-notice.html" target="_blank" class="block p-2 bg-blue-50 dark:bg-blue-900 rounded hover:bg-blue-100">📋 채용공고 초안</a>
</div>

<div class="mt-3 text-xs opacity-60">⚠ 위 예시는 <span class="font-bold">교육용 placeholder</span> — 3회차에 교육생분 HTML로 교체됩니다</div>
</div>

---

# 본 교육이 하지 않는 일 🚫

<div class="grid grid-cols-1 gap-3 mt-3 text-lg slide-not-cards">

<v-clicks>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-400">

❌ 코딩 — 교육생분이 키보드로 코드를 짤 일은 없습니다.<br>
<span class="text-sm opacity-70">3회차에 AI에게 시키기만 합니다.</span>

</div>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-400">

❌ 새 솔루션 도입 결정 — "○○ AI 도구 사야 할까요?" 는 본 교육 범위가 아닙니다.

</div>

<div class="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">

✅ 우리가 하는 일: 1회차 MD를 <span class="font-bold">자동화 후보 1개</span>와 <span class="font-bold">1차 프롬프트</span>로 확장하기.

</div>

</v-clicks>

</div>

---

# 사용 도구 — 딱 4개 🛠

<div class="mt-6 slide-tools-table">

| 도구 | 용도 | 비용 |
|:---:|:---|:---:|
| 💬 ChatGPT | AI 인터뷰·프롬프트 실행 | Plus 권장 (Free도 가능) |
| 💎 Gemini | 대화·프롬프트 실행 (대체) | Advanced 권장 |
| 🎨 mermaid.live | 흐름도 미리보기 | 0원 |
| 📝 메모장 | MD 파일 만들기 | 0원 |

</div>

<div class="mt-3 text-center text-lg slide-tools-footnote">
모두 <span class="text-blue-500 font-bold">이미 갖고 계시거나 무료로 쓸 수 있는 것</span>.<br>
<span class="opacity-70 text-base">1교시는 ChatGPT·Gemini만, 2교시부터 mermaid.live·메모장 추가.</span>
</div>

---

# ⭐ 2회차 목표 — 오늘 끝나면 이걸 할 수 있다

<div class="slide-goals-list mt-2">

<v-clicks>

<div class="slide-goals-card p-4 rounded-xl bg-blue-50 border-2 border-blue-300">

① 내 업무 중 자동화 후보 1개를 발견할 수 있다 🎯

<div class="slide-goals-sub opacity-70 mt-2">AI 인터뷰로 자기 업무를 끌어내고 후보 3개 중 1개 선정</div>

</div>

<div class="slide-goals-card p-4 rounded-xl bg-purple-50 border-2 border-purple-300">

② 토스트와 같은 방식으로 내 업무 흐름을 그릴 수 있다 🎨

<div class="slide-goals-sub opacity-70 mt-2">mermaid.live에서 5~8노드짜리 가벼운 흐름도</div>

</div>

<div class="slide-goals-card p-4 rounded-xl bg-yellow-50 border-2 border-yellow-400">

③ 흐름도를 보면서 첫 Markdown 프롬프트를 작성할 수 있다 ✂️

<div class="slide-goals-sub opacity-70 mt-2">역할 / 입력 / 처리 / 출력 — 4단 구조</div>

</div>

<div class="slide-goals-card p-4 rounded-xl bg-green-50 border-2 border-green-300">

④ 작성한 프롬프트를 AI에 투입해 첫 결과물을 확인할 수 있다 ✨

<div class="slide-goals-sub opacity-70 mt-2">"내 업무도 되는구나" 감각 ← <span class="font-bold">오늘의 핵심</span></div>

</div>

</v-clicks>

</div>

---
layout: center
class: text-center slide-hero slide-success-scene
---

# 2회차의 진짜 성공 장면 🎬

<div class="text-left bg-gray-900 text-green-300 p-4 rounded-xl font-mono text-sm leading-relaxed mx-auto mt-2">

```
🗓 다음 달 월말 마감 전

  "또 거래내역 100건 전표 끊어야 하는데..."
        ↓
📂 내 PC \ 문서 \ 프롬프트 \ 전표분개.md  열기
        ↓
📋 거래내역을 입력란에 붙여넣기
        ↓
🌐 다음 주에 만들 HTML 도구 클릭
        ↓
✨ 전표 분개 결과표 — 3시간이 15분으로
```

</div>

<div class="mt-6 text-lg opacity-90">
오늘 손에 <span class="text-blue-500 font-bold">흐름도 1장 + 1차 프롬프트 1개</span> — 다음 주에 HTML로 완성합니다.
</div>

---

# 2회차 상세 목차 📑

<div class="mt-4">

| 교시 | 시간 | 큰 주제 | 한 줄 |
|:---:|:---:|:---|:---|
| 1교시 | 13:00 ~ 13:50 | **내 업무 후보 발굴** | "AI와 대화하며 자동화 후보 1개 찾기" |
| ☕ | 13:50 ~ 14:00 | 휴식 10분 | — |
| 2교시 | 14:00 ~ 14:50 | Draw Toast + 본인 업무 그리기 | "토스트와 같은 방식으로 내 업무를" |
| ☕ | 14:50 ~ 15:00 | 휴식 10분 | — |
| 3교시 ⭐ | 15:00 ~ 15:50 | 흐름도 → 1차 MD 프롬프트 | "AI한테 처음 시켜보기" |
| 마무리 | 15:50 ~ 16:00 | 종료 — 정리·과제·예고·Q&A | — |

</div>

---
layout: statement
class: text-center slide-statement
---

# 두 가지 부탁 🙏

<div class="slide-statement-block">

📵 스마트폰은 <span class="text-yellow-500 font-bold">가방 안</span>에,<br>
반드시 <span class="text-yellow-500 font-bold">무음·진동 OFF</span>로 부탁드립니다.

</div>

<div class="slide-statement-block">

💻 실습용 PC는 <span class="text-yellow-500 font-bold">전원 ON</span>,<br>
손에 <span class="text-yellow-500 font-bold">마우스를 쥔 채로</span> 들어주세요.

</div>

<div class="slide-statement-note">
강사가 시연할 때 <span class="font-bold">교육생분도 같이 클릭</span>해 보는 것이 가장 빠른 학습입니다.<br>
2교시 Draw Toast 게임 중에는 ChatGPT/Gemini <span class="font-bold">잠시 쉬어두세요</span> — 토스트 게임에 집중!
</div>

---
layout: section
---

# 1교시 — 내 업무에서 자동화할 만한 일 찾기

<div class="text-4xl mt-4">자동화 후보 발굴</div>

<div class="opacity-60 mt-4 text-xl">

🎯 AI와 대화 30분이면 후보가 나옵니다

</div>

---

# 1회차에서 가져온 것 / 1교시에서 만들 것

<div class="grid grid-cols-2 gap-4 mt-4 text-base">

<div class="slide-card bg-gray-50 dark:bg-gray-800">

**1회차 끝에서 손에 쥔 것**

- MD 프롬프트 개념 이해
- 첫 MD 파일 1개 만들기
- "이게 되긴 되네" 감

</div>

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**1교시 끝에서 손에 쥘 것**

- 자동화 후보 3개 + 1개 확정
- 본인 업무 입력·출력 정의
- "내 일도 자동화할 수 있겠다" 감

</div>

</div>

<div class="mt-4 text-center text-base opacity-90">
오늘 1교시는 <span class="text-blue-500 font-bold">강의 5분 + AI 인터뷰 실습 35분 + 정리 10분</span> 입니다.
</div>

---

# "내 업무 중에 자동화할 만한 게 있을까?" 🤔

<div class="mt-4 text-lg">

혹시 이런 생각 해보신 적 있나요?

<div class="mt-4 space-y-3">

<v-clicks>

<div class="p-3 rounded-lg bg-red-50 dark:bg-red-900 border-l-4 border-red-400">

❌ *"내 일은 너무 특수해서 AI가 못 할 것 같은데..."*

</div>

<div class="p-3 rounded-lg bg-red-50 dark:bg-red-900 border-l-4 border-red-400">

❌ *"엑셀 함수도 잘 못 쓰는데 AI는 무리지..."*

</div>

<div class="p-3 rounded-lg bg-red-50 dark:bg-red-900 border-l-4 border-red-400">

❌ *"어떤 일이 자동화 가능한지 모르겠어..."*

</div>

</v-clicks>

</div>

<div v-click class="mt-4 p-3 bg-green-50 dark:bg-green-900 rounded text-center text-lg">
→ 이걸 <span class="font-bold">30분 안에 정리</span>해 드립니다.<br>
→ 답은 <span class="font-bold">AI한테 물어볼 거예요</span>. 본인은 솔직히 답만 하세요.
</div>

</div>

---

# 자동화 적합도 5가지 기준 (참고)

<div class="mt-4 text-base">

| # | 기준 | 쉬운 말로 |
|:---:|:---|:---|
| 1 | 반복성 | 매주 또는 매달 또 한다 |
| 2 | 양식 고정 | 결과물 모양이 어느 정도 정해져 있다 |
| 3 | 입출력 명확 | "이걸 받아서 → 저걸 만든다"가 또렷하다 |
| 4 | 판단 단순 | 직관·창의성보다 규칙·계산이 더 크다 |
| 5 | 표현 가능 | 결과가 텍스트·표·문서로 나온다 |

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
💡 이 5개는 <span class="font-bold">외울 필요 없습니다</span>. 잠시 후 AI가 알아서 따져줄 거예요.
</div>

---

# 부서별 자동화 예시 4개 — 참고용

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**🏢 기획실 — 사장단 주간보고 요약**

각 부서 보고서 → 1페이지 사장단 요약<br>
매주 월요일 / 약 2시간 소요

</div>

<div class="slide-card bg-purple-50 dark:bg-purple-900">

**🏢 총무부 — 채용공고 자동 작성**

직무·자격요건 입력 → 표준 공고문<br>
신입 공채 + 경력직 수시 / 월 1~3건

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**🏢 회계부 — 거래내역 → 전표 분개**

거래 텍스트 → 차변/대변 분개표<br>
매일 5~20건

</div>

<div class="slide-card bg-yellow-50 dark:bg-yellow-900">

**🏢 업무부 — 사업별 견적서 초안**

사업 정보·항목 → 견적 양식<br>
월 3~10건

</div>

</div>

<div class="mt-4 text-center text-base opacity-90">
본인 부서가 여기 없거나, 다른 일도 가능합니다.<br>
<span class="font-bold">AI 인터뷰에서 본인이 직접 찾으실 거예요.</span>
</div>

---

# ⏱ 실습 ① — AI 인터뷰로 후보 발굴 (35분)

<div class="exercise-instruction">35분 · 1인 1대화 · ChatGPT 또는 Gemini</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**📋 진행 순서**

1. ChatGPT 또는 Gemini 열기 (새 대화)
2. 강사가 나눠준 <a href="https://raw.githubusercontent.com/Baikhojun/yooshin-ai-tf-2026-session-02/main/demo-data/자동화후보_발굴_인터뷰.md" target="_blank" class="text-blue-600 underline">「자동화후보_발굴_인터뷰.md」 (원본 텍스트)</a> 열기
3. 내용 전체를 복사 → AI 대화창에 붙여넣기
4. AI가 한 질문씩 던집니다 → 솔직히 답하기
5. 15~20번 대화 후 후보 3개가 정리됩니다

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**✅ 끝나면 손에 남는 것**

- 본인 부서·업무 정리
- 자동화 후보 3개 (적합도별)
- 가장 추천하는 후보 1개 ⭐

<div class="mt-2 text-xs opacity-80">→ 2교시·3교시에 이 후보 1개로 진행</div>

</div>

</div>

<div class="exercise-lab-banner mt-2">
🆘 정보시스템실 강사 2명이 자리를 돌며 도와드립니다. 막히면 손드세요.
</div>

---

# 💡 실습 중 자주 막히는 지점 — 풀어내는 팁

<div class="grid grid-cols-1 gap-3 mt-4 text-base">

<div class="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500">

🤔 **"딱히 반복 업무가 없어요"**

→ AI에게: *"이번 주 월요일부터 한 일을 시간 순서대로 쭉 나열해 볼게요"*<br>
→ 그중 **같은 종류의 일을 묶으면** = 반복 업무

</div>

<div class="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500">

🤔 **"AI 답이 너무 일반적이에요"**

→ 더 구체적으로: *"회의록"*이 아니라 *"월 1회 부서장 회의 메모 정리"*<br>
→ AI에게: *"더 구체적으로 물어봐 주세요"*

</div>

<div class="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500">

🤔 **"후보 1, 2가 비슷해요"**

→ AI에게: *"이 둘의 차이가 뭔지 정리해 주세요"* 요청

</div>

</div>

---

# 1교시 마무리 + 2교시 예고

<div class="grid grid-cols-2 gap-4 mt-4 text-base">

<div class="slide-card bg-green-50 dark:bg-green-900">

**✅ 지금 손에 있는 것**

- 본인 업무 자동화 후보 3개 (적합도별)
- 그중 **1개 확정** ⭐
- 2교시·3교시에 이걸로 진행

</div>

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**➡ 2교시 예고**

*"이번엔 **토스트로 가볍게 워밍업** 후,*
*방금 고른 자동화 후보 1개를 **그림**으로 그려볼 거예요."*

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
📂 이 파일 — <span class="font-bold">자동화후보_[본인이름].md</span> — 본인 PC에 꼭 저장해 두세요!
</div>

---
layout: center
class: text-center break-slide
---

# ☕ 휴식 10분

<div class="slide-break-body">

2교시 예고<br>
Draw Toast 게임 + 내 업무 흐름도 직접 그리기

</div>

<div class="slide-break-icon">⏰</div>

---
layout: section
---

# 2교시 — 토스트와 같은 방식으로 내 업무를

<div class="text-4xl mt-4">Draw Toast + mermaid.live</div>

<div class="opacity-60 mt-4 text-xl">

🎨 게임 한 번, 본인 업무 한 번 — 두 번 그려봅니다

</div>

---

# Draw Toast — 왜 토스트인가? 🍞

<div class="mt-4 text-lg">

<v-clicks>

<div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900 mb-3">

**목적 ① — "말로는 다 아는데, 생각은 다 다르네?"**

*"토스트 만들면 되죠?"* — 모두 고개 끄덕. 그런데 **그림**을 그리면 결과가 완전히 달라집니다.

</div>

<div class="p-3 rounded-lg bg-purple-50 dark:bg-purple-900 mb-3">

**목적 ② — 복잡한 일 전, 두뇌 스트레칭**

본인 업무 흐름도 같은 어려운 주제 **전** — 손·머리를 먼저 풀어 주는 워밍업.

</div>

<div class="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 mb-3">

**목적 ③ — "박스와 화살표" 맛보기**

식빵·토스터·손·잼을 **선으로 연결** — 오늘 그릴 본인 업무 흐름도와 같은 원리.

</div>

</v-clicks>

</div>

<div v-click class="mt-3 text-center text-lg font-bold">
💡 *"겉으로는 같은 말을 해도 머릿속 생각은 다르다 — 복잡한 일 전에 **그림으로 꺼내 놓고 싱크** 맞추자!"*
</div>

---

# Draw Toast — 규칙 ✅❌

<div class="grid grid-cols-2 gap-4 mt-4 text-base">

<div class="slide-card bg-green-50 dark:bg-green-900 border-l-4 border-green-500">

**✅ 해도 되는 것**

- 카드 드래그 + 화살표
- 본인이 생각하는 순서대로
- 자동 진단 보기
- 다른 사람 갤러리 구경

</div>

<div class="slide-card bg-red-50 dark:bg-red-900 border-l-4 border-red-400">

**❌ 하지 말 것**

- 정답을 찾으려 하기
- 남 그림 비판
- 완벽한 그림 추구
- "외워야 한다"는 부담

</div>

</div>

<div class="mt-4 text-center text-lg opacity-90">
미술 잘 못해도 됩니다. <span class="text-blue-500 font-bold">한 번 해본 경험</span> 자체가 가치입니다.
</div>

---

# 🎮 Draw Toast 게임 — 진행 단계 (15분)

<div class="exercise-instruction">15분 · PC에서 직접 게임 · 강사 따라 진행</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**📋 게임 진행**

1. PC 브라우저로 게임 사이트 접속<br>
   👉 <a href="https://baikhojun.github.io/draw-toast/" target="_blank" class="text-blue-600 font-bold underline">baikhojun.github.io/draw-toast</a>
2. 닉네임 + 타이머 3분 입력 → 시작
3. 카드 클릭 → 캔버스 드래그
4. 화살표로 단계 연결
5. ✅ 완성! → **자동 진단 8타입** 확인
6. 갤러리에서 다른 사람 그림 구경

</div>

<div class="slide-card border border-gray-200 dark:border-gray-600">

**🎯 시간 배분**

| 단계 | 분 |
|---|:---:|
| ① 게임 접속·설명 | 2 |
| ② 그리기 | 3 |
| ③ 자동 진단 확인 | 3 |
| ④ 갤러리 비교 | 4 |
| ⑤ 본인 업무 다리 | 3 |

</div>

</div>

<div class="exercise-lab-banner mt-2">
💡 <span class="font-bold">외울 필요 없습니다</span> — 한 번 해본 경험만 남으면 됩니다
</div>

<!--
[강사 노트 — Draw Toast 게임 진행]
- 게임 URL을 한 번 화면 공유로 보여줘서 학생들이 같이 접속하게
- "닉네임은 본인 부서로 적으세요" 정도만 가이드
- 자동 진단 8타입: 스케일형/시스템형/사람중심형/요리사형/미니멀형/사용자형/공정형/하이브리드형
- "어떤 유형이 맞다/틀리다"가 아니라 "사람마다 다르네!"가 핵심 메시지
-->

---

# Draw Toast → 내 업무로 다리 🌉

<div class="grid grid-cols-2 gap-4 mt-4 text-base">

<div class="slide-card bg-orange-50 dark:bg-orange-900">

**방금 (게임)**

- 박스 = 식빵, 토스터, 잼
- 화살표 = 순서·연결
- 사람마다 다름 (자동 진단으로 확인)

</div>

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**이제 (같은 방식으로)**

- 박스 = **내 일의 입력·결과물**
- 화살표 = **작업 순서**
- 내가 가장 잘 아는 내용

</div>

</div>

<div class="mt-4 text-center text-xl">
이번엔 토스트 말고 <span class="text-purple-500 font-bold">1교시에 고른 본인 업무</span>를 같은 방식으로 그려보세요.
</div>

<div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
⚠ 거창하게 그리지 마세요. <span class="font-bold">5~8개 박스면 충분</span>합니다.<br>
다 그린 다음에 mermaid.live로 옮길 거예요.
</div>

---

# ⏱ 실습 ②a — 종이에 본인 업무 그리기 (5분)

<div class="exercise-instruction">5분 · A4 종이 + 펜 (또는 메모장 그림) · 1인 1장</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**📝 진행**

1. 1교시에 고른 자동화 후보 1개 떠올리기
2. A4 종이 가운데에 박스 하나: **"시작 — 받는 것은?"**
3. 화살표로 단계 잇기
4. 끝에 박스 하나: **"끝 — 만드는 것은?"**
5. 5~8개 박스면 충분 (절대 더 그리지 마세요)

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**✅ 잘 안 그려져도 OK**

- 손그림이라 막막하면 → 메모장에 화살표(`→`) 텍스트로
- 단계가 너무 많으면 → 일부 합치기
- 너무 추상적이면 → "받는 것"을 더 구체적으로

→ 다음 슬라이드에서 AI가 도와줍니다.

</div>

</div>

---

# Mermaid란? + 최소 문법 (외울 필요 X)

<div class="grid grid-cols-2 gap-3 mt-3 text-base">

<div class="slide-card bg-gray-50 dark:bg-gray-800">

**🎨 Mermaid = 텍스트로 그리는 그림**

- PPT·Visio 대신 **메모장 + mermaid.live**
- AI도 Mermaid를 **읽고 쓸 수 있음**
- 오늘은 **flowchart 1종**만

</div>

<div class="slide-card bg-blue-50 dark:bg-blue-900 font-mono text-xs leading-snug">

```
flowchart TD                  ← 위→아래
    A[받는 것]                ← 박스
    B[하는 일]
    C[만드는 것]
    A --> B --> C            ← 화살표
```

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
💡 이게 전부입니다. <span class="font-bold">외울 필요 0%</span>.<br>
mermaid.live에 위 형식대로 쳐 보세요. 안 되면 AI한테 *"내 업무를 위 형식으로 그려줘"* 하면 됩니다.
</div>

---

# 🎬 라이브 시연 — 회계부 거래내역 → 전표 분개

<div class="slide-sub">강사 시연 5분 — 교육생분도 같이 입력</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="slide-card bg-gray-50 dark:bg-gray-800 font-mono text-xs">

**① <a href="https://mermaid.live/" target="_blank" class="text-blue-500 underline">mermaid.live</a> 열기**

**② 왼쪽에 붙여넣기**

```
flowchart TD
    A[거래내역 텍스트]
    B[계정과목 판단]
    C[차변/대변 분개]
    D[부가세 자동 분리]
    E[전표 양식 출력]
    A --> B --> C --> D --> E
```

**③ 오른쪽에 그림이 자동으로 나타남**

</div>

<div class="slide-card bg-blue-50 dark:bg-blue-900 text-sm font-sans">

**확인 포인트**

- `flowchart TD` — 방향
- `[ ]` — 박스
- `-->` — 화살표

<div class="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900 rounded text-xs">
💡 본인 부서 시나리오로 **단어만 바꾸기** → 끝
</div>

<div class="mt-2 text-xs opacity-80">학생 모두 본인 자리에서 동시에 따라 입력</div>

</div>

</div>

<!--
[강사 노트 — 회계부 라이브 시연]
1. mermaid.live 새 탭 열기
2. 5노드 그대로 붙여넣기
3. "A[거래내역 텍스트]"의 텍스트를 본인 업무로 바꿔 보세요 — 1분 대기
4. TD → LR 바꿔 방향 변화 1번만 보여주기
5. 5노드 완성된 그림 캡처 → "이게 오늘 손에 들어가는 것"
-->

---

# ⏱ 실습 ②b — mermaid.live에서 본인 업무 그리기 (20분)

<div class="exercise-instruction">20분 · mermaid.live + 본인 메모장 · 1인 1파일</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**📝 진행**

1. <a href="https://mermaid.live/" target="_blank" class="text-blue-500 underline">mermaid.live</a> 새 탭
2. 종이에 그린 박스들을 텍스트로 옮기기
3. 막히면 AI에 던지기:

```markdown
내 업무를 Mermaid flowchart로 그려줘.
1회차에서 만든 업무 맥락 문서 첨부할게요.
(붙여넣기)
```

4. 다 그리면 .md 파일로 저장
   파일명: **`본인업무_흐름도.md`**

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**✅ 성공 기준**

- [ ] 5~8노드 (8개 넘기지 마세요)
- [ ] 시작과 끝이 명확
- [ ] mermaid.live에서 그림 보임
- [ ] 본인 메모장에 저장

<div class="mt-2 text-xs opacity-80">
괄호·따옴표 짝 안 맞아도 괜찮습니다.<br>
AI에 보여주면 고쳐줘요.
</div>

</div>

</div>

<div class="exercise-lab-banner mt-2">
🆘 정보시스템실 강사 2명이 자리 돌면서 도와드립니다
</div>

---
layout: center
class: text-center break-slide
---

# ☕ 휴식 10분

<div class="slide-break-body">

3교시 예고<br>
방금 그린 흐름도를 보면서<br>
AI한테 **처음 시키는 글**을 써봅니다

</div>

<div class="slide-break-icon">⏰</div>

---
layout: section
---

# 3교시 — 흐름도를 보면서 AI한테 첫 부탁

<div class="text-4xl mt-4">1차 MD 프롬프트 (4단)</div>

<div class="opacity-60 mt-4 text-xl">

✂️ 역할 / 입력 / 처리 / 출력

</div>

---

# 그림이 글이 됩니다 🌉

<div class="grid grid-cols-2 gap-4 mt-4 text-base">

<div class="slide-card bg-orange-50 dark:bg-orange-900">

**내 흐름도 (방금 그린 것)**

- 박스: **받는 것 / 하는 일 / 만드는 것**
- 화살표: **순서**

</div>

<div class="slide-card bg-purple-50 dark:bg-purple-900">

**Markdown 프롬프트 (지금부터 쓸 것)**

- 글: *"이 일을 이렇게 해줘"*
- AI: *"네"*

</div>

</div>

<div class="mt-4 text-center text-xl">
방금 그린 <span class="font-bold">박스 5~8개</span>가 그대로 <span class="text-purple-500 font-bold">프롬프트 4칸</span>으로 변환됩니다.
</div>

---

# MD 프롬프트 4단 구조 (오늘은 이것만)

<div class="mt-4 text-base">

| 4단 | 무엇? | 1회차 6칸과 연결 |
|:---:|:---|:---|
| **① 역할** | 너는 누구인가? | [역할] |
| **② 입력** | 어떤 정보를 줄까? | [데이터] |
| **③ 처리** | 어떻게 해줘? | [작업] + [판단기준] |
| **④ 출력** | 어떤 형식으로 줘? | [출력] + [예시] |

</div>

<div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded text-center text-base">
💡 1회차에 <span class="font-bold">6칸</span>을 채워본 사람은 이미 60% 한 거예요.<br>
오늘은 <span class="font-bold">6칸을 4단으로 묶기만</span> 하면 됩니다.
</div>

---

# 🏢 회계부 — 거래내역 → 전표 분개 (v1)

<div class="exercise-card mt-2">

<div class="exercise-instruction">1차 프롬프트 예시 — 부서별 시나리오 카드(`회계부_전표분개.md`) 참조</div>

<div class="prompt-stack">

```markdown
# 역할
너는 (주)멋진엔지니어링 회계부 전표 분개 담당자야.

# 입력
아래 거래내역(텍스트) 5건:

2026-05-15 / (주)○○문구 / 1,100,000원 / 사무용품 구입
2026-05-15 / 한국통신 / 88,000원 / 5월 전화요금
(거래내역 5건 붙여넣기)

# 처리
1. 각 거래의 계정과목을 판단해줘
2. 차변/대변으로 분개해줘
3. 부가세 10%는 자동으로 분리해줘

# 출력
| 일자 | 거래처 | 계정과목 | 차변 | 대변 | 부가세 | 적요 |
표 형식으로 정리해줘.
```

</div>

</div>

---

# 🏢 기획실 — 사장단 주간보고 요약 (v1)

<div class="exercise-card mt-2">

<div class="exercise-instruction">1차 프롬프트 예시 — `기획실_주간보고.md` 참조</div>

<div class="prompt-stack">

```markdown
# 역할
너는 (주)멋진엔지니어링 기획실 보고서 작성 담당자야.

# 입력
아래 각 부서 주간보고 4개:
(부서명: 보고 내용 형식으로 4건 붙여넣기)

# 처리
1. 각 부서 보고를 [성과 / 이슈 / 다음 주 계획] 3분류로 나눠줘
2. 부서별 핵심을 1~2문장으로 요약해줘
3. 전체 이슈 건수 합계를 마지막에 적어줘

# 출력
| 부서 | 성과 | 이슈 | 다음 주 계획 |
표 + 마지막에 "전체 이슈: ___건" 한 줄
```

</div>

</div>

---

# 🏢 총무부 — 채용공고 자동 작성 (v1)

<div class="exercise-card mt-2">

<div class="exercise-instruction">1차 프롬프트 예시 — `총무부_채용공고.md` 참조</div>

<div class="prompt-stack">

```markdown
# 역할
너는 (주)멋진엔지니어링 총무부 채용 담당자야.

# 입력
- 직무명: ___
- 채용 인원: ___명
- 자격요건 키워드: ___
- 마감일: ___

# 처리
1. 위 정보로 채용공고 본문을 작성해줘
2. [직무 소개] [자격 요건] [우대 사항] [전형 절차] [제출 서류] 5섹션 구조
3. 우리 회사 톤은 "친근하지만 전문적"으로

# 출력
바로 사내 공지로 붙여넣을 수 있는 마크다운 형식
```

</div>

</div>

---

# 🏢 업무부 — 사업별 견적서 초안 (v1)

<div class="exercise-card mt-2">

<div class="exercise-instruction">1차 프롬프트 예시 — `업무부_견적서.md` 참조</div>

<div class="prompt-stack">

```markdown
# 역할
너는 (주)멋진엔지니어링 업무부 견적서 작성 담당자야.

# 입력
- 사업명: ___
- 발주처: ___
- 공종: ___
- 항목 목록 (항목명/수량/단가):
  1) ___
  2) ___

# 처리
1. 각 항목별 소계 = 수량 × 단가
2. 부가세 = 항목 소계 합 × 10%
3. 총공사비 = 소계 합 + 부가세

# 출력
| 항목 | 수량 | 단가 | 소계 |
표 + 하단 [소계 합 / 부가세 / 총공사비] 3줄
```

</div>

</div>

---

# ⏱ 실습 ③ — 본인 1차 프롬프트 + AI 첫 투입 (35분)

<div class="exercise-instruction">35분 · 1인 1프롬프트 · 본인 부서 예시 모방</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**📝 진행**

1. 메모장 새 파일 → **4단 구조 빈칸 채우기**<br>
   `# 역할 / # 입력 / # 처리 / # 출력`
2. 본인 부서 예시(앞 4장 중) 보면서 모방
3. **가짜 데이터 또는 실제 데이터 3~5건** 준비
4. ChatGPT/Gemini에 통째로 붙여넣기
5. 결과 확인 → **부족한 점 3가지 메모**

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**✅ 성공 기준**

- [ ] 4단 모두 채움 (역할·입력·처리·출력)
- [ ] AI가 표 또는 양식으로 출력
- [ ] 70% 이상 맞으면 성공

<div class="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900 rounded text-xs">
첫 결과물은 <span class="font-bold">70%만 맞으면 성공</span>입니다.<br>
부족한 부분은 <span class="font-bold">다음 주(3회차)</span>에 6요소로 업그레이드!
</div>

</div>

</div>

<div class="exercise-lab-banner mt-2">
🆘 강사 자리 돌면서 1:1 코칭
</div>

---

# 오늘 정리 — 5줄로 📌

<div class="space-y-3 mt-6 text-lg">

<v-clicks>

<div class="flex items-center gap-3">
<span class="text-3xl">1️⃣</span>
<div>자동화 후보 3개 — AI 인터뷰로 발견</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">2️⃣</span>
<div>흐름도 1장 — mermaid.live에서 5~8노드</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">3️⃣</span>
<div>1차 Markdown 프롬프트 — 역할/입력/처리/출력</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">4️⃣</span>
<div>AI 첫 결과물 — 부족한 점 3가지 메모까지</div>
</div>

<div class="flex items-center gap-3">
<span class="text-3xl">⭐</span>
<div>"내 업무도 자동화 가능하다" 감각</div>
</div>

</v-clicks>

</div>

<div v-click class="mt-3 text-center text-lg">
🧳 다음 주(3회차)에 이걸 <span class="font-bold">6요소로 정교화</span>하고 <span class="font-bold">HTML 자동화 도구</span>로 완성합니다.
</div>

---

# 과제 안내 📚

<div class="text-base opacity-80 mb-3">기한: 6. 9.(화) 오전 9시까지 · Google Forms 없음</div>

<div class="grid grid-cols-1 gap-3 mt-2 text-base">

<div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**과제 ① — 업무 1개 확정해 오기 (필수)**

오늘 1교시에 선정한 후보 1개를 한 주 동안 실제 일하면서 관찰<br>
<span class="text-sm opacity-80">"매번 어떻게 하고 있는지" 머릿속으로 정리</span>

</div>

<div class="p-3 rounded-lg bg-purple-50 dark:bg-purple-900 border-l-4 border-purple-500">

**과제 ② — Input → Output 메모 가져오기 (필수)**

A4 1장에:
- 받는 것 (입력) 예시 3건 — **실제 형태 그대로**
- 만드는 것 (출력) 예시 1건 — **완성본 1개**

</div>

</div>

<div class="mt-4 text-base">📨 제출: <span class="text-blue-500 font-bold">정보시스템실 상시 문의 채널</span>로 파일 공유 (메일/Teams 등)</div>

---

# 다음 회차 예고 — 3회차 (6/9 화) 🚀

<div class="slide-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 mt-2 text-sm">

<div class="text-base font-bold mb-2">"프롬프트 6요소 정교화 + HTML 자동화 도구 완성"</div>

<div class="grid grid-cols-2 gap-x-4 gap-y-1">

- 🎮 **Ice Break** — AI 신기능 시연 4개 (NotebookLM 등)
- 📝 **1교시**: 1차 → v2 업그레이드 (예시·예외 추가)
- 💻 **2~3교시**: AI에게 HTML 코드 시키기 (정보실 1:1)
- 🎁 끝나면 **본인만의 HTML 1개**가 본인 PC에

</div>

</div>

<div class="slide-banner mt-3">
다음 주 — 오늘 1차 프롬프트가 <span class="font-bold">실제로 작동하는 HTML 도구</span>가 됩니다.
</div>

---
layout: center
class: text-center thanks-slide
---

# 감사합니다 🎉

<div class="slide-thanks-body">

질문은 <span class="text-blue-500 font-bold">정보시스템실 상시 문의 채널</span>로

</div>

<div class="slide-thanks-quote">

"오늘 못 다 들으신 부분이 있어도 3회차 시작 5분 복습에서 다시 짚어 드립니다."

</div>

<div class="slide-thanks-foot">
부담 없이 가세요 😊
</div>

---
layout: cover
class: text-center cover-hero
background: /cover-ai-native.jpg
---

# AI-native로 가는 길

<div class="cover-sub">

3차 TF · Session 03 — 1교시

</div>

<div class="cover-tagline">

프롬프트 <span class="cover-accent">6요소</span> + HTML 자동화 도구 완성

</div>

<div class="abs-bl mx-14 my-12 cover-footer">
정보시스템실 · 2026. 6. 9.
</div>

---

# ☕ Ice Break — AI는 여기까지 합니다 (10분)

<div class="mt-4 text-base">

본격 시작 전, 요즘 AI가 할 수 있는 일 **4가지를 시연**으로 보여드립니다.

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**① NotebookLM**

PDF 50장을 5분 만에 팟캐스트로

</div>

<div class="slide-card bg-purple-50 dark:bg-purple-900">

**② v0.dev (또는 Claude Artifacts)**

한 문장으로 웹 UI 만들기

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**③ Claude Artifacts — 테트리스**

채팅 한 번에 게임 1분 완성

</div>

<div class="slide-card bg-yellow-50 dark:bg-yellow-900">

**④ Suno (시간 되면)**

가사 입력하면 음악 자동 작곡

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded text-center text-base">
*"와 이게 된다고?"* 정도 느끼시면 됩니다. <span class="font-bold">외울 필요 없어요</span>.
</div>

---

# 🎧 ① NotebookLM — 자료를 팟캐스트로

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**URL**: <a href="https://notebooklm.google.com" target="_blank" class="text-blue-600 underline">notebooklm.google.com</a>

📂 PDF·웹페이지·메모를 여러 개 올리면<br>
🎙 두 명의 진행자가 그 내용으로 **8~15분짜리 팟캐스트** 생성<br>
🇰🇷 한국어 지원

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**💡 활용 예시**

- 사업 입찰 자료 → 차에서 들으며 출장 가기
- 회계 규정 PDF → 신입사원 교육 음성
- 사장단 보고서 → 임원이 차 안에서 듣기

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
🎬 <span class="font-bold">라이브 시연 2분</span> — 강사가 화면 공유로 시연
</div>

<!--
[강사 노트 — NotebookLM 시연]
1. notebooklm.google.com 새 탭
2. 미리 준비한 PDF 1~2개 업로드 (회계 규정 짧은 것)
3. "Generate" → "Audio Overview" 클릭
4. 결과 음성 30초 정도만 들려주기
5. "이걸 차에서 들으며 출장 갑니다" 멘트
-->

---

# ✨ ② v0.dev — 한 문장으로 웹 UI

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="slide-card bg-purple-50 dark:bg-purple-900">

**URL**: <a href="https://v0.dev" target="_blank" class="text-blue-600 underline">v0.dev</a>

**입력**:
*"견적서 입력 폼 만들어줘. 항목 추가/삭제 되고 부가세 자동 계산되게."*

**→ 30초 만에 완성**

</div>

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**💡 핵심**

이게 바로 **3회차 2~3교시**에서 우리가 할 일.

대안: Claude Artifacts / Lovable 등 다양

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
🎬 <span class="font-bold">라이브 시연 2분</span>
</div>

---

# 🎮 ③ Claude Artifacts — 채팅 1번에 게임

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="slide-card bg-green-50 dark:bg-green-900">

**URL**: <a href="https://claude.ai" target="_blank" class="text-blue-600 underline">claude.ai</a>

**입력**: *"테트리스 만들어줘"*

**→ 1분 안에 작동하는 테트리스**

</div>

<div class="slide-card bg-yellow-50 dark:bg-yellow-900">

**💡 핵심 메시지**

지금 강사도 매주 새로 만들어 쓰는 도구가 **4~5개**.<br>
**여러분도 다음 주부터 1개씩** 만들면 됩니다.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
🎬 <span class="font-bold">라이브 시연 2분</span> — 테트리스 또는 본인 도구 1개
</div>

---

# 📌 1~2회차 빠르게 복습 (5분)

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**1회차** (5/26)

- AI는 자동완성·맥락·작업기억·마크다운
- 1차 MD 프롬프트 파일 1개 만들기

</div>

<div class="slide-card bg-purple-50 dark:bg-purple-900">

**2회차** (6/2)

- 자동화 후보 1개 발견
- 흐름도 + 1차 프롬프트 + AI 첫 결과물

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**오늘 (3회차)**

- **1교시**: 1차 → 6요소 v2 업그레이드
- **2~3교시**: AI한테 HTML 도구 시키기 (1:1 도움)

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded text-center text-base">
2회차 끝나고 손에 쥔 것: <span class="font-bold">1차 프롬프트 .md 파일 1개 + AI 결과물 메모</span><br>
오늘 이걸 <span class="font-bold">v2로 업그레이드</span>합니다.
</div>

---
layout: section
---

# 6요소 — 1차 프롬프트의 한계 넘기

<div class="text-4xl mt-4">v1 → v2 업그레이드</div>

<div class="opacity-60 mt-4 text-xl">

✂️ 예시 + 예외 2가지만 추가하면 됩니다

</div>

---

# 🤔 지난주 1차 프롬프트 — 어땠나요?

<div class="mt-4 text-base">

자주 듣는 피드백:

<div class="mt-4 space-y-3">

<div class="p-3 rounded-lg bg-red-50 dark:bg-red-900 border-l-4 border-red-400">

❌ *"AI가 표를 만들긴 했는데, 매번 양식이 달라요"*

</div>

<div class="p-3 rounded-lg bg-red-50 dark:bg-red-900 border-l-4 border-red-400">

❌ *"내 머릿속에는 예외 케이스가 있는데, AI가 못 챙겨요"*

</div>

<div class="p-3 rounded-lg bg-red-50 dark:bg-red-900 border-l-4 border-red-400">

❌ *"데이터 일부가 빠지면 그 줄을 그냥 빼버려요"*

</div>

</div>

<div class="mt-4 p-3 bg-green-50 dark:bg-green-900 rounded text-center text-lg">
→ 이걸 **6요소**로 해결합니다.<br>
1차 4단(역할/입력/처리/출력)에 **2가지를 추가**하면 됩니다.
</div>

</div>

---

# 📝 프롬프트 6요소

<div class="mt-4 text-base">

| # | 요소 | v1·v2 |
|:---:|:---|:---|
| ① | **역할 부여** | v1 그대로 |
| ② | **입력 변수 명시** | v1 + 변수명 `{거래처명}` `{금액}` 사용 |
| ③ | **단계별 처리** | v1 그대로 |
| ④ | **출력 형식 명시** | v1 그대로 |
| ⑤ | **예시 1~2개 제공** ← NEW | Few-shot |
| ⑥ | **예외 처리** ← NEW | "만약 ___ 이면 ___ 해줘" |

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
⭐ 핵심은 <span class="font-bold">⑤번과 ⑥번</span> — 첫 결과물 품질이 <span class="font-bold">30% → 80%</span>로 점프
</div>

---

# 🏢 회계부 — v1 → v2 비교

<div class="grid grid-cols-2 gap-3 mt-2 text-xs">

<div class="slide-card bg-orange-50 dark:bg-orange-900">

**[v1] 지난주 작성**

```markdown
# 역할
너는 회계부 분개 담당자야.

# 입력
거래내역 5건...

# 처리
1. 계정과목 판단
2. 차변/대변 분개
3. 부가세 분리

# 출력
| 일자 | 거래처 | ... |
```

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**[v2] 오늘 추가**

```markdown
+ # 예시 (NEW)
+ 입력: "2026-05-10 / OO상사 /
+        1,100,000원 / 사무용품"
+ 출력: 차변 소모품비 1,000,000
+       부가세 100,000

+ # 예외 (NEW)
+ - 금액 빈칸 → [확인필요]
+ - 적요만 있고 거래처 없음
+   → 거래처 [미상] 처리
```

</div>

</div>

<div class="mt-3 text-center text-sm opacity-90">
→ 결과: 부가세 정확도 <span class="font-bold">60% → 100%</span>, 빈칸 처리 명시
</div>

---

# 🏢 기획실 — v1 → v2 비교

<div class="mt-2 text-xs">

**[v2 추가 부분만]**

```markdown
# 예시 (NEW)
원문: "마케팅팀, 5월 셋째 주: 신제품 광고안 3종 작성 완료,
      검토 회의 일정 미정으로 다음 주 진행 예정"
↓
요약:
| 마케팅 | 신제품 광고안 3종 완성 | 검토 회의 일정 미정 | 검토 회의 진행 |

# 예외 (NEW)
- 부서명 누락 → [부서명 확인 필요]
- 보고 내용 3줄 미만 → 그대로 출력 (요약 시도 ❌)
- 같은 부서 보고 2개 → 합쳐서 1개로
- "긴급" 단어 있으면 → (긴급) 표시 + 별도 집계
```

</div>

<div class="mt-3 text-center text-sm opacity-90">
→ 결과: 이슈 건수 자동 합계 + 부서명 누락 안 빠짐
</div>

---

# 🏢 총무부 — v1 → v2 비교

<div class="mt-2 text-xs">

**[v2 추가 부분만]**

```markdown
# 예시 (NEW)
직무: "구조설계 경력 5년", 인원: 1명, 자격: "토목구조기술사 우대"
↓
공고 본문:
[직무 소개] 토목구조 설계 분야 5년 이상 경력자를 모십니다...
[자격 요건] 토목구조 관련 학과 졸업 / 실무 경력 5년 이상
[우대 사항] 토목구조기술사 ...

# 예외 (NEW)
- 마감일이 영업일 기준 7일 미만 → [긴급 채용] 헤더 추가
- 우대사항 빈칸 → 우대사항 섹션 생략
- 신입 공채인지 경력직인지 입력에 없음 → 사용자에게 되묻기
```

</div>

<div class="mt-3 text-center text-sm opacity-90">
→ 결과: 우대사항 빈칸 자연스러움 + 긴급 채용 자동 표시
</div>

---

# 🏢 업무부 — v1 → v2 비교

<div class="mt-2 text-xs">

**[v2 추가 부분만]**

```markdown
# 예시 (NEW)
사업: "○○지구 도로개설공사", 항목:
- 토공: 1식 × 50,000,000원
- 포장: 1식 × 80,000,000원
↓
| 토공 | 1식 | 50,000,000 | 50,000,000 |
| 포장 | 1식 | 80,000,000 | 80,000,000 |
소계: 130,000,000 / 부가세: 13,000,000 / 총공사비: 143,000,000

# 예외 (NEW)
- 단가가 비어있으면 [단가 확인 필요]
- 수량 단위가 "식"/"m²"인지 입력에 없으면 [단위 확인]
- 항목 1개도 없으면 견적서 생성 ❌, 사용자에게 항목 요청
```

</div>

<div class="mt-3 text-center text-sm opacity-90">
→ 결과: 빈 단가 자동 검출 + 단위 자동 확인 + 항목 누락 방지
</div>

---

# ⏱ 실습 ④ — 본인 v1 → v2 업그레이드 (20분)

<div class="exercise-instruction">20분 · 1인 1프롬프트 · 지난주 v1 .md 파일 활용</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**📝 진행**

1. 지난주 만든 v1 .md 파일 열기
2. 본인 부서 예시 슬라이드 (앞 4장) 보면서
   - ⑤ **예시 1~2개** 추가
   - ⑥ **예외 처리 2~3개** 추가
3. **v2를 AI에 다시 투입**
4. v1 결과와 v2 결과 **직접 비교**
5. 강사가 자리 돌면서 1:1 코칭

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**✅ 끝나면 손에 남는 것**

- v1 (역할/입력/처리/출력)
- v2 (+ 예시 + 예외)
- v1 vs v2 결과 비교

<div class="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900 rounded text-xs">
80% 이상의 학생이 *"확 좋아진 게 느껴진다"* 고 답합니다.
</div>

</div>

</div>

<div class="exercise-lab-banner mt-2">
🆘 강사 자리 돌면서 1:1 코칭
</div>

---

# ✨ 흔히 나오는 v1 → v2 개선 사례

<div class="grid grid-cols-1 gap-3 mt-3 text-sm">

<div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">

**📊 회계부 학생 A**

- v1: 거래 5건 중 2건의 부가세를 누락
- v2: **5건 전부 부가세 자동 분리** + 빈칸 [확인필요] 표시

</div>

<div class="p-3 rounded-lg bg-purple-50 dark:bg-purple-900 border-l-4 border-purple-500">

**📝 기획실 학생 B**

- v1: 부서별 요약은 잘 나오지만 "이슈 건수 합계" 빼먹음
- v2: **마지막 줄에 "전체 이슈: 7건" 자동 추가**

</div>

<div class="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500">

**📋 총무부 학생 C**

- v1: 우대사항 빈칸일 때도 "우대사항: 없음" 어색
- v2: **빈칸이면 우대사항 섹션 자체를 생략**

</div>

</div>

<div class="mt-3 text-center text-base">
💡 결국 *"내가 알지만 AI는 모르는 예외 케이스"*를 명시하는 게 핵심
</div>

---

# 🚀 잠시 후 2~3교시 — HTML 자동화 도구 만들기

<div class="mt-4 text-base">

이제 v2 프롬프트가 있으면, AI한테<br>
*"이 프롬프트가 작동하는 HTML 파일 하나 만들어줘"*<br>
→ <span class="font-bold">30초 만에 본인 PC에서 작동하는 도구</span>가 완성됩니다.

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="slide-card bg-blue-50 dark:bg-blue-900">

**📋 진행 방식**

- 정보시스템실 강사 **4명이 1:1**로 도움
- 약 **90분 동안** 본인 도구 1개 완성
- 끝나면 본인 부서 공유 폴더에 업로드

</div>

<div class="slide-card bg-green-50 dark:bg-green-900">

**🎒 준비물**

- **v2 프롬프트** .md 파일
- 가짜 데이터 또는 실제 데이터 5건
- ChatGPT/Gemini 로그인 상태

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded text-center text-base">
☕ <span class="font-bold">휴식 10분</span> 후 다시 시작합니다
</div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setInterval(() => {
    const gotoDialog = document.getElementById('slidev-goto-dialog');
    if (gotoDialog) {
      gotoDialog.remove();
    }
  }, 500);
})
</script>

<style>
div#slidev-goto-dialog {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  width: 0 !important;
  height: 0 !important;
  pointer-events: none !important;
  position: absolute !important;
  z-index: -99999 !important;
}

*, html, body, #slidev-app {
  cursor: default !important;
}
.slidev-cursor {
  display: none !important;
}
</style>
