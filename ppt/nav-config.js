// 슬라이드별 상단 목차·유형 — useNav().currentPage (1-based)
// 5차 커리큘럼 (2026-06-02 ~ 06-09): 2회차 39장 + 3회차 1교시 16장 = 총 55장
// section: 0=2회차 도입, 1=1교시 후보발굴, 2=2교시 흐름도, 3=3교시 1차 프롬프트, 4=2회차 마무리,
//          5=3회차 Ice Break, 6=3회차 6요소, 7=3회차 마무리
// type: cover | break | thanks | section | hero | dense
export default {
  // ── 2회차 ──
  1: { type: 'cover' },

  // Part 0 — 2회차 도입 (8장)
  2: { type: 'dense', section: 0, topic: '1회차 복습', step: 1, total: 8 },
  3: { type: 'dense', section: 0, topic: '9시간 로드맵', step: 2, total: 8 },
  4: { type: 'dense', section: 0, topic: '하지 않는 일', step: 3, total: 8 },
  5: { type: 'dense', section: 0, topic: '도구 4종', step: 4, total: 8 },
  6: { type: 'dense', section: 0, topic: '2회차 목표', step: 5, total: 8 },
  7: { type: 'hero',  section: 0, topic: '성공 장면', step: 6, total: 8 },
  8: { type: 'dense', section: 0, topic: '상세 목차', step: 7, total: 8 },
  9: { type: 'dense', section: 0, topic: '두 가지 부탁', step: 8, total: 8 },

  // 1교시 — 자동화 후보 발굴 (8장 + 휴식)
  10: { type: 'section', section: 1, topic: '1교시 · 후보 발굴' },
  11: { type: 'dense', section: 1, topic: '1회차→1교시', step: 1, total: 7 },
  12: { type: 'dense', section: 1, topic: '자동화 가능?', step: 2, total: 7 },
  13: { type: 'dense', section: 1, topic: '적합도 5기준', step: 3, total: 7 },
  14: { type: 'dense', section: 1, topic: '부서별 예시 4', step: 4, total: 7 },
  15: { type: 'dense', section: 1, topic: '실습 ① 인터뷰', step: 5, total: 7 },
  16: { type: 'dense', section: 1, topic: '막힘 팁', step: 6, total: 7 },
  17: { type: 'dense', section: 1, topic: '1교시 마무리', step: 7, total: 7 },

  18: { type: 'break' },

  // 2교시 — Draw Toast + FlowBuilder (7장 + 휴식)
  19: { type: 'section', section: 2, topic: '2교시 · 흐름도' },
  20: { type: 'dense', section: 2, topic: 'Draw Toast 목적', step: 1, total: 7 },
  21: { type: 'dense', section: 2, topic: '규칙', step: 2, total: 7 },
  22: { type: 'dense', section: 2, topic: '🎮 Toast 게임', step: 3, total: 7 },
  23: { type: 'dense', section: 2, topic: 'Toast→FlowBuilder', step: 4, total: 7 },
  24: { type: 'dense', section: 2, topic: '🎨 FlowBuilder 소개', step: 5, total: 7 },
  25: { type: 'dense', section: 2, topic: '🎬 FlowBuilder 시연', step: 6, total: 7 },
  26: { type: 'dense', section: 2, topic: '실습 ② FlowBuilder', step: 7, total: 7 },

  27: { type: 'break' },

  // 3교시 — 1차 MD 프롬프트 (8장)
  28: { type: 'section', section: 3, topic: '3교시 · 1차 프롬프트' },
  29: { type: 'dense', section: 3, topic: '그림→글', step: 1, total: 7 },
  30: { type: 'dense', section: 3, topic: '4단 구조', step: 2, total: 7 },
  31: { type: 'dense', section: 3, topic: '🏢 회계 v1', step: 3, total: 7 },
  32: { type: 'dense', section: 3, topic: '🏢 기획 v1', step: 4, total: 7 },
  33: { type: 'dense', section: 3, topic: '🏢 총무 v1', step: 5, total: 7 },
  34: { type: 'dense', section: 3, topic: '🏢 업무 v1', step: 6, total: 7 },
  35: { type: 'dense', section: 3, topic: '실습 ③ v1', step: 7, total: 7 },

  // 2회차 마무리 (4장)
  36: { type: 'dense', section: 4, topic: '5줄 정리', step: 1, total: 3 },
  37: { type: 'dense', section: 4, topic: '과제 안내', step: 2, total: 3 },
  38: { type: 'dense', section: 4, topic: '3회차 예고', step: 3, total: 3 },
  39: { type: 'thanks' },

  // ── 3회차 1교시 ──
  40: { type: 'cover' },

  // 3회차 Ice Break + 복습 (5장)
  41: { type: 'dense', section: 5, topic: 'Ice Break 4개', step: 1, total: 5 },
  42: { type: 'dense', section: 5, topic: '① NotebookLM', step: 2, total: 5 },
  43: { type: 'dense', section: 5, topic: '② v0.dev', step: 3, total: 5 },
  44: { type: 'dense', section: 5, topic: '③ Artifacts', step: 4, total: 5 },
  45: { type: 'dense', section: 5, topic: '1·2회차 복습', step: 5, total: 5 },

  // 6요소 + 부서별 v1→v2 (9장)
  46: { type: 'section', section: 6, topic: '6요소 · v1→v2' },
  47: { type: 'dense', section: 6, topic: 'v1 한계', step: 1, total: 8 },
  48: { type: 'dense', section: 6, topic: '6요소 표', step: 2, total: 8 },
  49: { type: 'dense', section: 6, topic: '🏢 회계 v2', step: 3, total: 8 },
  50: { type: 'dense', section: 6, topic: '🏢 기획 v2', step: 4, total: 8 },
  51: { type: 'dense', section: 6, topic: '🏢 총무 v2', step: 5, total: 8 },
  52: { type: 'dense', section: 6, topic: '🏢 업무 v2', step: 6, total: 8 },
  53: { type: 'dense', section: 6, topic: '실습 ④ v2', step: 7, total: 8 },
  54: { type: 'dense', section: 6, topic: 'v1 vs v2 사례', step: 8, total: 8 },

  // 3회차 1교시 마무리
  55: { type: 'dense', section: 7, topic: '2~3교시 예고', step: 1, total: 1 },
}
