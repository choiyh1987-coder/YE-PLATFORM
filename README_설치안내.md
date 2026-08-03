# YE PLATFORM v0.1 통합 기반

포함 화면: 로그인, 홈, 오늘의 브리핑, 예에스테틱 전체 메뉴, 지출관리, 유니 전체 메뉴, AI 비서, 설정, 모바일 메뉴, 빠른 등록.

현재는 전체 구조와 디자인을 확인하는 첫 실제 웹 버전입니다. `화면 먼저 보기`로 확인할 수 있습니다.

실제 Supabase 로그인을 사용하려면 `배포용/config.js`에 새 `ye_aesthetic` 프로젝트의 Project URL과 Publishable Key를 입력합니다. Secret 또는 service_role 키는 넣지 않습니다.

유니용 데이터베이스는 `YE_PLATFORM_yuni_upgrade_v0.1.sql`을 같은 Supabase 프로젝트의 SQL Editor에서 실행합니다.

Netlify에는 `배포용` 폴더를 업로드하거나 GitHub 저장소 최상단에 그 안의 파일들을 올립니다.

다음 단계에서 예약·고객·오늘 할 일·목표·프로젝트의 실제 저장 기능과 아침/저녁 브리핑 자동 집계를 연결합니다.
