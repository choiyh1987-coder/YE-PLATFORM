const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];let client=null;const ap=[['10:00','김○○','레디언스필'],['13:00','이○○','페이스핏톡스'],['16:00','박○○','장벽재생관리']];function card(a,b){return `<div class="card metric"><span>${a}</span><b>${b}</b></div>`}function home(){
 const hour=new Date().getHours();
 const greeting=hour<12?"좋은 아침입니다":hour<18?"좋은 오후입니다":"오늘도 정말 수고하셨습니다";
 const mode=hour<12?"아침 브리핑":hour<18?"실시간 운영 현황":"저녁 성과 브리핑";
 return `<div class="hero dense-hero"><div><p class="eyebrow">${mode.toUpperCase()}</p><h3>${greeting}, 유니원장님 😊</h3><p class="muted">오늘 해야 할 일과 예에스테틱·유니 현황을 한 화면에서 확인하세요.</p></div><div class="hero-note"><strong>AI 오늘의 우선순위</strong><p>① 예약 고객 준비 ② 장기 미방문 고객 연락 ③ SNS 업로드 ④ 재고 확인 ⑤ 감사일기</p></div></div>

 <div class="cards dashboard-kpis">
 ${card("오늘 예약","3건")}
 ${card("오늘 예상매출","₩620,000")}
 ${card("오늘 지출","₩85,000")}
 ${card("오늘 할 일","4건")}
 ${card("이번 달 매출","₩8,420,000")}
 ${card("이번 달 순이익","₩5,960,000")}
 ${card("목표 달성률","72%")}
 ${card("확인 알림","3건")}
 </div>

 <div class="dashboard-grid">
   <div class="panel span-2"><div class="section-head"><h3>📅 오늘 예약</h3><button class="text-btn" onclick="render('appointments')">전체 보기</button></div>
   ${list(demo.appointments.map(a=>({title:`${a.time} · ${a.name}`,sub:a.program,badge:a.status,green:a.status==="예약확정"})))}</div>

   <div class="panel"><h3>✅ 오늘 해야 할 일</h3><div class="checks">${demo.tasks.map(t=>`<label class="check"><input type="checkbox"> ${t}</label>`).join("")}</div></div>

   <div class="panel"><h3>🤖 AI 추천</h3>${list([
     {title:"이용권 종료 예정 고객",sub:"4명에게 재등록 안내 권장",badge:"고객"},
     {title:"장기 미방문 고객",sub:"오늘 2명 안부 메시지 권장",badge:"연락"},
     {title:"오늘 콘텐츠",sub:"모공관리 릴스 초안 활용",badge:"SNS"}
   ])}</div>

   <div class="panel"><h3>🩷 예에스테틱 현황</h3>${list([
     {title:"신규 고객",sub:"이번 달 6명",badge:"+2"},
     {title:"재방문율",sub:"이번 달 기준",badge:"68%",green:true},
     {title:"재고 부족",sub:"벨벳크림 외 1개",badge:"2개"}
   ])}</div>

   <div class="panel"><h3>👩 유니 현황</h3>${list([
     {title:"이번 달 핵심목표",sub:"진행률 72%",badge:"계속하기",green:true},
     {title:"진행 중 프로젝트",sub:"3개",badge:"확인"},
     {title:"오늘 습관",sub:"5개 중 2개 완료",badge:"40%"}
   ])}</div>

   <div class="panel span-2"><h3>📊 오늘 진행률</h3><p class="muted">예약·업무·습관·콘텐츠를 종합한 오늘의 달성률입니다.</p><div class="progress"><i></i></div><p><strong>40%</strong> · 남은 핵심 업무 3건</p></div>

   <div class="panel"><h3>🔔 놓치면 안 되는 알림</h3>${list(demo.alerts.map(a=>({title:a,badge:"확인"})))}</div>

   <div class="panel"><h3>📂 최근 프로젝트</h3>${list(demo.projects.map((p,i)=>({title:p,sub:`진행률 ${[68,45,30][i]}%`,badge:"계속"})))}</div>

   <div class="panel span-2 evening-card"><h3>🌙 오늘의 성과</h3><p class="muted">저녁에는 완료 예약, 매출, 지출, 목표 달성률과 감사일기가 자동으로 이곳에 정리됩니다.</p>
   <div class="mini-stats"><span><b>완료 예약</b> 0건</span><span><b>오늘 매출</b> ₩0</span><span><b>완료 업무</b> 0건</span><span><b>감사일기</b> 미작성</span></div></div>
 </div>`;
}
function briefing(){return `<div class="hero"><div><p class="eyebrow">TODAY BRIEFING</p><h3>오늘 무엇을 해야 하는지 정리했어요.</h3><p class="muted">아침에는 우선순위를, 저녁에는 오늘의 성과를 보여줍니다.</p></div><div class="note"><b>AI 추천 순서</b><p>① 예약 준비 ② 고객 후속 연락 ③ SNS 업로드 ④ 재고 확인 ⑤ 감사일기</p></div></div><div class="cards">${card('예약 고객','3명')}${card('중요 업무','4건')}${card('미완료 알림','3건')}${card('오늘 예상매출','₩620,000')}</div><div class="grid"><div class="card panel"><h3>아침 브리핑</h3><div class="list"><div class="item">10시 김○○ 고객<span class="badge">상담 확인</span></div><div class="item">장기 미방문 고객<span class="badge">2명 연락</span></div><div class="item">SNS 업로드<span class="badge">릴스 초안</span></div></div></div><div class="card panel"><h3>저녁 성과 기록</h3><div class="checks">${['완료한 예약과 매출 확인','오늘 처리한 업무 체크','새 아이디어 저장','감사한 일 3가지 기록'].map(t=>`<label><input type="checkbox"> ${t}</label>`).join('')}</div></div></div>`}const names={shop:'예에스테틱 대시보드',appointments:'예약관리',customers:'고객관리',consultations:'피부상담',treatments:'관리기록',photos:'전후사진',passes:'이용권관리',programs:'프로그램관리',products:'제품관리',inventory:'재고관리',sales:'매출관리',expenses:'지출관리',settlement:'자동결산',marketing:'마케팅',reviews:'리뷰관리',documents:'문서관리',worklog:'업무일지',orders:'발주관리',alerts:'알림센터',yuni:'유니 대시보드',goals:'목표관리',monthly:'월간계획',weekly:'주간계획',today:'오늘의 계획',projects:'프로젝트',calendar:'캘린더',habits:'습관관리',gratitude:'감사일기',budget:'유니 가계부',sns:'SNS 정보함',books:'독서노트',travel:'여행관리',archive:'자료보관함',memo:'메모',assistant:'AI 비서',settings:'설정'};function placeholder(p){return `<div class="card placeholder"><div><div class="emoji">✨</div><p class="eyebrow">YE PLATFORM</p><h3>${names[p]}</h3><p class="muted">다음 단계에서 실제 등록·검색·수정 기능을 Supabase와 연결합니다.</p></div></div>`}function render(p){$('#title').textContent=p==='home'?'홈':p==='briefing'?'오늘의 브리핑':names[p];$('#content').innerHTML=p==='home'?home():p==='briefing'?briefing():placeholder(p);$$('[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===p));if(innerWidth<761)$('#side').classList.remove('open')}function show(){ $('#login').classList.add('hidden');$('#app').classList.remove('hidden');render('home')}async function start(){const c=window.YE_CONFIG||{};if(c.url&&c.key&&window.supabase)client=window.supabase.createClient(c.url,c.key);$('#demoBtn').onclick=show;$('#loginBtn').onclick=async()=>{if(!client){$('#msg').textContent='Supabase 연결 전입니다. 화면 먼저 보기를 눌러주세요.';return}const {error}=await client.auth.signInWithPassword({email:$('#email').value,password:$('#password').value});if(error)$('#msg').textContent=error.message;else show()};$$('[data-page]').forEach(b=>b.onclick=()=>render(b.dataset.page));$$('.group').forEach(b=>b.onclick=()=>b.nextElementSibling.classList.toggle('hidden'));$('#open').onclick=()=>$('#side').classList.add('open');$('#close').onclick=()=>$('#side').classList.remove('open');$('#quick').onclick=()=>$('#modal').classList.remove('hidden');$('#closeModal').onclick=()=>$('#modal').classList.add('hidden');$('#logout').onclick=()=>location.reload();if(client){const {data}=await client.auth.getSession();if(data.session)show()}}start();