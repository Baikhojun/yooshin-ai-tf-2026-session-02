# 유신 AI 활용 2차 TF — 2회차 자료

> **AI 활용 관리부서 자체 교육 / 3회차 9시간 코스 — 2회차**  
> 정보시스템실 · 2026-06-02

[![Deploy](https://github.com/Baikhojun/yooshin-ai-tf-2026-session-02/actions/workflows/deploy.yml/badge.svg)](https://github.com/Baikhojun/yooshin-ai-tf-2026-session-02/actions/workflows/deploy.yml)

---

## 📺 슬라이드 (라이브 데모)

**👉 [https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/)**

| 주소 | 용도 |
|------|------|
| `/` | 일반 슬라이드 뷰 |
| `/presenter` | 발표자 모드 |
| `/overview` | 슬라이드 개요 |
| `/notes` | 스피커 노트 |

**1회차 자료**: [yooshin-ai-tf-2026](https://github.com/Baikhojun/yooshin-ai-tf-2026)

---

## 🚀 7명 위원 자동화 프로그램 (3회차 데모)

> 각 위원의 흐름도 + 1차 MD 프롬프트를 기반으로 만든 **단일 HTML 자동화 도구 7종**  
> 슬라이드 [**40p cover 카드**](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/40) 에서도 클릭하여 실행 가능

| # | 담당자 | 부서 | 자동화 업무 | 🔗 데모 실행 |
|---|---|---|---|---|
| 1 | **금교현** | 기획실 | 실행예산 1·2·3단계 검토 + COO/CEO 결재 자동 판별 | [▶ 열기](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/programs/01_금교현_실행예산검토.html) |
| 2 | **이태정** | 총무부 인사팀 | ERP 인사발령 자동 분류 + 회계부 5시트 엑셀 | [▶ 열기](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/programs/02_이태정_급여변동자료.html) |
| 3 | **김혜강** | 총무부 인사팀 | 해외파견 인원 ↔ ERP 귀임휴가 자동 대조 | [▶ 열기](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/programs/03_김혜강_귀임휴가검토.html) |
| 4 | **사공훈** | 업무부 | 선금/기성/준공 청구서 5단계 위저드 | [▶ 열기](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/programs/04_사공훈_청구서작성.html) |
| 5 | **성국현** | 업무부 | 공동도급사 안내 메일 6단계 마법사 (mailto/.eml) | [▶ 열기](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/programs/05_성국현_도급사메일.html) |
| 6 | **이학준** | 총무부 | 사무용품 정산 9단계 (결과표 8종, 차이원인 11종 분류) | [▶ 열기](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/programs/06_이학준_사무용품정산.html) |
| 7 | **임준영** | 회계부 | 달러계좌 대체전표 자동 분개 (적요→계정과목 20종 매핑) | [▶ 열기](https://baikhojun.github.io/yooshin-ai-tf-2026-session-02/programs/07_임준영_달러전표.html) |

**공통 기술 스택** (CDN 기반, 로컬 더블클릭 실행 가능):  
TailwindCSS · Chart.js · SheetJS (XLSX) · jsPDF · Font Awesome · LocalStorage 이력 저장

**공통 기능**: 다크/라이트 모드 · 글래스모피즘 UI · 한국어 100% · 반응형 · 샘플 데이터 하드코딩 · 엑셀/PDF/인쇄 출력

---

## 🎯 2회차 목표

- **Draw Toast** 아이스브레이커 → Mermaid flowchart · mindmap
- **출장비 정산** 시나리오로 업무 흐름도 (`diagram-spec`)
- **micro-tool-interviewer** → HTML 도구 사양서 1건

---

## 📂 폴더 구조

```
yooshin-ai-tf-2026-session-02/
├── ppt/                    # Slidev 슬라이드 (~56장)
├── demo-data/              # 시연·실습 가공 데이터
├── Cursor/                 # 설계·본문 MD
└── .github/workflows/      # GitHub Pages 배포
```

---

## 🛠 로컬 실행

```powershell
cd ppt
npm install
npm run dev
```

---

## 🔐 보안

- 회사명: **(주)멋진엔지니어링** (가공명)
- Google Forms **미사용** — 과제는 정보시스템실 상시 문의 채널

---

## License

[MIT License](./LICENSE)

<!-- ci trigger -->
