// 슬라이드별 상단 목차·유형 — useNav().currentPage (1-based)
// type: cover | break | thanks | section | hero | dense
export default {
  1: { type: 'cover' },

  2: { type: 'dense', section: 0, topic: '1회차 복습', step: 1, total: 8 },
  3: { type: 'dense', section: 0, topic: '9시간 로드맵', step: 2, total: 8 },
  4: { type: 'dense', section: 0, topic: '하지 않는 일', step: 3, total: 8 },
  5: { type: 'dense', section: 0, topic: '도구 4종', step: 4, total: 8 },
  6: { type: 'dense', section: 0, topic: '2회차 목표', step: 5, total: 8 },
  7: { type: 'hero', section: 0, topic: '성공 장면', step: 6, total: 8 },
  8: { type: 'dense', section: 0, topic: '상세 목차', step: 7, total: 8 },
  9: { type: 'dense', section: 0, topic: '두 가지 부탁', step: 8, total: 8 },

  10: { type: 'dense', section: 1, topic: 'Draw Toast 목적', step: 1, total: 5 },
  11: { type: 'dense', section: 1, topic: '규칙', step: 2, total: 5 },
  12: { type: 'dense', section: 1, topic: '진행 단계', step: 3, total: 5 },
  13: { type: 'dense', section: 1, topic: 'A/B/C 유형', step: 4, total: 5 },
  14: { type: 'hero', section: 1, topic: 'Mermaid 연결', step: 5, total: 5 },

  15: { type: 'section', section: 1, topic: '1교시 · Mermaid' },

  16: { type: 'dense', section: 1, topic: 'Mermaid란?', step: 1, total: 6 },
  17: { type: 'dense', section: 1, topic: 'flowchart 문법', step: 2, total: 6 },
  18: { type: 'dense', section: 1, topic: 'mermaid.live 시연', step: 3, total: 6 },
  19: { type: 'dense', section: 1, topic: '실습 ①', step: 4, total: 6 },
  20: { type: 'dense', section: 1, topic: '흔한 실수', step: 5, total: 6 },
  21: { type: 'dense', section: 1, topic: 'AI 팁', step: 6, total: 6 },

  22: { type: 'break' },

  23: { type: 'section', section: 2, topic: '2교시 · 흐름도' },

  24: { type: 'dense', section: 2, topic: 'mindmap 왜?', step: 1, total: 4 },
  25: { type: 'dense', section: 2, topic: 'mindmap 문법', step: 2, total: 4 },
  26: { type: 'dense', section: 2, topic: '실습 ②', step: 3, total: 4 },
  27: { type: 'dense', section: 2, topic: 'vs flowchart', step: 4, total: 4 },

  28: { type: 'dense', section: 2, topic: 'diagram-spec', step: 1, total: 6 },
  29: { type: 'dense', section: 2, topic: '교대 규칙', step: 2, total: 6 },
  30: { type: 'dense', section: 2, topic: '출장정산 시연', step: 3, total: 6 },
  31: { type: 'dense', section: 2, topic: '시나리오', step: 4, total: 6 },
  32: { type: 'dense', section: 2, topic: 'AI+규격', step: 5, total: 6 },
  33: { type: 'hero', section: 2, topic: '2교시 클라이맥스', step: 6, total: 6 },

  34: { type: 'dense', section: 2, topic: '실습 ③', step: 1, total: 2 },
  35: { type: 'dense', section: 2, topic: '워크시트', step: 2, total: 2 },

  36: { type: 'break' },

  37: { type: 'section', section: 3, topic: '3교시 · 도구 사양' },

  38: { type: 'dense', section: 3, topic: '3요소', step: 1, total: 6 },
  39: { type: 'dense', section: 3, topic: 'MD 6칸 연결', step: 2, total: 6 },
  40: { type: 'dense', section: 3, topic: '분해 예시', step: 3, total: 6 },
  41: { type: 'dense', section: 3, topic: 'micro-tool 관점', step: 4, total: 6 },
  42: { type: 'dense', section: 3, topic: '3요소 실습', step: 5, total: 6 },
  43: { type: 'dense', section: 3, topic: '3요소 실수', step: 6, total: 6 },

  44: { type: 'section', section: 3, topic: 'micro-tool-interviewer' },

  45: { type: 'dense', section: 3, topic: '인터뷰어 개념', step: 1, total: 7 },
  46: { type: 'dense', section: 3, topic: '1회차와 비교', step: 2, total: 7 },
  47: { type: 'dense', section: 3, topic: '라이브 시연', step: 3, total: 7 },
  48: { type: 'dense', section: 3, topic: '화면 스케치', step: 4, total: 7 },
  49: { type: 'dense', section: 3, topic: '실습 ④', step: 5, total: 7 },
  50: { type: 'dense', section: 3, topic: '사양서 템플릿', step: 6, total: 7 },
  51: { type: 'hero', section: 3, topic: '3교시 클라이맥스', step: 7, total: 7 },

  52: { type: 'section', section: 3, topic: '마무리' },

  53: { type: 'dense', section: 3, topic: '5줄 정리', step: 1, total: 3 },
  54: { type: 'dense', section: 3, topic: '과제 안내', step: 2, total: 3 },
  55: { type: 'dense', section: 3, topic: '3회차 예고', step: 3, total: 3 },

  56: { type: 'thanks' },
}
