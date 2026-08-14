[Uploading index.html…]()
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#392821">
<title>YE PLATFORM v0.8</title>
<style>
*{box-sizing:border-box} :root{
 --brown:#392821;--brown2:#271b17;--gold:#d6ad72;--cream:#f6f0e9;--paper:#fff;
 --ink:#282321;--muted:#796f6a;--line:#e9ded3;--rose:#f7e5e6;--green:#e6f3ea;--blue:#e7eef8;
 --shadow:0 14px 38px rgba(58,40,33,.08)
}
html,body{margin:0;min-height:100%;font-family:Pretendard,"Noto Sans KR",Arial,sans-serif;background:var(--cream);color:var(--ink)}
button,input,select,textarea{font:inherit}.hidden{display:none!important}button{cursor:pointer}
.login{min-height:100vh;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 70% 18%,#fff,#f2e8de 56%,#e4d5c7)}
.login-card{width:min(440px,100%);background:#fff;padding:38px;border:1px solid var(--line);border-radius:30px;box-shadow:var(--shadow)}
.logo{width:70px;height:70px;border-radius:22px;background:var(--brown);display:grid;place-items:center;color:var(--gold);font-weight:900;font-size:27px}
.eyebrow{font-size:12px;letter-spacing:.16em;font-weight:900;color:#a2784e;margin:9px 0}
h1{font-size:34px;margin:8px 0 4px} .muted{color:var(--muted)} .small{font-size:12px;color:var(--muted)}
.form-label{display:block;font-weight:800;margin-top:16px}.control{width:100%;margin-top:7px;padding:13px 14px;border:1px solid var(--line);border-radius:13px;background:#fff;outline:none}
.control:focus{border-color:var(--gold);box-shadow:0 0 0 4px #d6ad7225}.primary,.secondary,.ghost{border:0;border-radius:13px;padding:13px 16px;font-weight:900}
.primary{background:var(--brown);color:#fff}.secondary{background:#eee9e4;color:var(--brown)}.ghost{background:#fff;border:1px solid var(--line);color:var(--brown)}
.full{width:100%}.login-card .primary,.login-card .secondary{margin-top:13px}
.msg{min-height:18px;color:#b33d35;font-size:13px}
.app{display:grid;grid-template-columns:330px 1fr;min-height:100vh}
aside{height:100vh;position:sticky;top:0;background:linear-gradient(180deg,var(--brown),var(--brown2));color:#fff;padding:18px 15px;overflow-y:auto}
.brand{display:flex;align-items:center;gap:12px;padding:7px 9px 20px}.brand .logo{width:44px;height:44px;border-radius:14px;font-size:16px;flex:none}
.brand strong{display:block;font-size:20px}.brand span{font-size:12px;color:#c7b9b1}
nav{display:grid;gap:3px} nav button{border:0;background:transparent;color:#e8dfda;text-align:left;padding:11px 14px;border-radius:14px;font-weight:800}
nav button:hover,nav button.active{background:#ffffff14;color:#fff}.group{display:flex!important;justify-content:space-between}.sub{display:grid;gap:1px;padding:2px 0 8px 17px}
.sub button{font-size:14px;color:#cbbdb5;padding:9px 13px}.profile{margin-top:22px;border:1px solid #ffffff1c;padding:14px;border-radius:16px;display:grid;gap:3px}
.profile span{font-size:12px;color:#c9bbb3}.profile button{margin-top:8px;border:0;border-radius:11px;padding:10px;background:#ffffff12;color:#fff}
main{min-width:0}header{height:92px;position:sticky;top:0;z-index:20;background:#fffdfbdc;backdrop-filter:blur(12px);border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:17px 30px}
header h2{font-size:28px;margin:0}#content{padding:28px;max-width:1600px;margin:auto}
.hero{display:flex;justify-content:space-between;gap:20px;background:linear-gradient(135deg,#fff,#f9eee5);border:1px solid #eee0d2;border-radius:27px;padding:25px;box-shadow:var(--shadow)}
.hero h3{font-size:28px;margin:4px 0 7px}.hero-note{min-width:300px;background:var(--brown);color:#fff;border-radius:18px;padding:18px}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:17px 0}.metric{background:#fff;border:1px solid #eee5dc;border-radius:20px;padding:18px;box-shadow:var(--shadow)}
.metric span{font-size:13px;color:var(--muted)}.metric b{display:block;font-size:25px;margin-top:8px}
.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.span2{grid-column:span 2}.span4{grid-column:span 4}
.panel{background:#fff;border:1px solid #eee5dc;border-radius:21px;padding:20px;box-shadow:var(--shadow)}.panel h3{margin:0 0 14px}.section-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px}
.section-head h3{margin:0}.text-btn{border:0;background:transparent;color:#9a7047;font-weight:900}
.list{display:grid;gap:8px}.row{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:13px 14px;background:#faf7f3;border-radius:14px}.row small{color:var(--muted)}
.badge{padding:6px 9px;border-radius:999px;font-size:11px;font-weight:900;background:var(--rose);white-space:nowrap}.badge.green{background:var(--green)}.badge.blue{background:var(--blue)}
.check{display:flex;align-items:center;gap:9px;padding:10px 0;border-bottom:1px dashed var(--line)}.check input{width:18px;height:18px}
.progress{height:10px;background:#eee7e1;border-radius:999px;overflow:hidden}.progress i{height:100%;display:block;background:linear-gradient(90deg,var(--gold),#b68148)}
.page-head{display:flex;justify-content:space-between;gap:16px;align-items:end;margin-bottom:18px}.page-head h3{font-size:24px;margin:0 0 4px}
.toolbar{display:flex;gap:9px;flex-wrap:wrap}.toolbar .control{width:auto;margin:0;min-width:170px}.table-wrap{overflow:auto;border:1px solid var(--line);border-radius:16px}
table{border-collapse:collapse;width:100%;min-width:720px;background:#fff}th,td{text-align:left;padding:13px 14px;border-bottom:1px solid #eee8e2;font-size:14px}th{background:#faf7f3;color:#665e59}
.empty{text-align:center;padding:46px 20px;color:var(--muted)}.empty b{display:block;color:var(--ink);font-size:18px;margin-bottom:6px}
.quickcards{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}.action-card{border:1px solid var(--line);background:#fff;border-radius:17px;padding:17px;text-align:left}.action-card b{display:block;margin-bottom:5px}.action-card span{font-size:13px;color:var(--muted)}
.modal{position:fixed;inset:0;z-index:100;background:#291e19b0;display:grid;place-items:center;padding:18px}.modal-card{width:min(680px,100%);max-height:88vh;overflow:auto;background:#fff;border-radius:25px;padding:23px;box-shadow:var(--shadow)}
.modal-head{display:flex;justify-content:space-between;align-items:center}.modal-head h3{margin:0}.x{border:0;background:transparent;font-size:25px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 13px}
.toast{position:fixed;right:22px;bottom:22px;z-index:150;background:var(--brown);color:#fff;padding:13px 17px;border-radius:14px;box-shadow:var(--shadow)}
.mobile{display:none}
@media(max-width:1200px){.cards{grid-template-columns:repeat(2,1fr)}.grid{grid-template-columns:repeat(2,1fr)}.span4{grid-column:span 2}.quickcards{grid-template-columns:repeat(2,1fr)}}
@media(max-width:780px){.app{display:block}aside{position:fixed;left:-350px;width:330px;z-index:80;transition:.22s}aside.open{left:0}.mobile{display:inline-block}header{height:76px;padding:13px 15px}header h2{font-size:21px}#content{padding:15px}.hero{display:block}.hero h3{font-size:22px}.hero-note{min-width:0;margin-top:14px}.cards,.grid,.quickcards{grid-template-columns:1fr}.span2,.span4{grid-column:span 1}.form-grid{grid-template-columns:1fr}.page-head{align-items:start;flex-direction:column}.toolbar{width:100%}.toolbar .control{width:100%}}

/* v0.8 : 기존 YE OPS의 조밀한 경영 대시보드 스타일 반영 */
:root{--serif:"Noto Serif KR","Nanum Myeongjo",Georgia,serif}
body{font-size:14px}
.app{grid-template-columns:242px 1fr}
aside{padding:14px 12px}
.brand{padding:6px 7px 18px}.brand strong{font-size:17px}.brand span{font-size:11px}
nav button{padding:9px 11px;font-size:13px;border-radius:11px}.sub{padding-left:12px}.sub button{font-size:12px;padding:8px 10px}
header{height:86px;padding:15px 28px}header h2{font-size:23px}
#content{padding:24px 28px}
.hero{padding:28px 32px;border-radius:22px;background:linear-gradient(115deg,#fff9f2,#f0ddbd)}
.hero h3{font-family:var(--serif);font-weight:500;font-size:31px;line-height:1.45;letter-spacing:-.02em}
.hero-note{min-width:270px;padding:16px}
.metric{padding:16px;border-radius:16px}.metric span{font-size:12px}.metric b{font-family:var(--serif);font-size:24px;font-weight:600}
.panel{padding:18px;border-radius:17px}.panel h3{font-size:16px}
.row{padding:11px 12px}.row b{font-size:13px}.row small{font-size:11px}
.page-head h3{font-family:var(--serif);font-size:24px;font-weight:500}
.action-card{padding:14px;border-radius:14px}.action-card b{font-size:13px}.action-card span{font-size:11px}
th,td{padding:11px 12px;font-size:12px}
.cards{gap:12px;margin:15px 0}.grid{gap:13px}.quickcards{gap:10px}
.ops-kicker{font-size:10px;letter-spacing:.13em;color:#aa7947;font-weight:900;text-transform:uppercase;margin-bottom:7px}
.ops-hero-title{font-family:var(--serif);font-size:32px;font-weight:500;line-height:1.45;margin:0}
.flow-chart{height:220px;display:flex;gap:16px;align-items:flex-end;padding:24px 10px 4px;border-bottom:1px solid var(--line)}
.flow-month{flex:1;display:grid;grid-template-rows:1fr auto;gap:8px;height:100%;min-width:55px}
.flow-bars{display:flex;gap:4px;align-items:flex-end;justify-content:center;height:100%}
.flow-bar{width:12px;border-radius:5px 5px 0 0;min-height:3px}.flow-bar.sales{background:#b8864f}.flow-bar.exp{background:#ddd3c7}
.flow-label{text-align:center;font-size:10px;color:var(--muted)}
.flow-legend{display:flex;justify-content:flex-end;gap:14px;margin-top:10px;font-size:10px;color:var(--muted)}
.dot{width:8px;height:8px;border-radius:2px;display:inline-block;margin-right:5px}.dot.sales{background:#b8864f}.dot.exp{background:#ddd3c7}
.alert-stack{display:grid;gap:8px}.alert-line{display:grid;grid-template-columns:36px 1fr auto;align-items:center;gap:10px;padding:10px;border:1px solid var(--line);border-radius:12px;background:#fff}
.alert-num{width:32px;height:32px;border-radius:10px;background:#fae9df;color:#ad694b;display:grid;place-items:center;font-family:var(--serif);font-size:16px}
.customer-sheet{display:grid;grid-template-columns:260px 1fr;gap:14px}.customer-side{background:#faf7f3;border-radius:16px;padding:17px}.customer-main{display:grid;gap:12px}
.customer-name{font-family:var(--serif);font-size:25px;margin:0 0 4px}
.detail-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.detail-box{padding:12px;border:1px solid var(--line);border-radius:12px;background:#fff}.detail-box span{display:block;color:var(--muted);font-size:10px}.detail-box b{display:block;margin-top:4px;font-size:13px}
.mini-table{width:100%;border-collapse:collapse}.mini-table td{padding:8px;border-bottom:1px solid #eee8e2;font-size:11px}
@media(max-width:780px){.app{display:block}.customer-sheet{grid-template-columns:1fr}.detail-grid{grid-template-columns:repeat(2,1fr)}#content{padding:14px}.hero h3,.ops-hero-title{font-size:24px}}

</style>
</head>
<body>
<section id="login" class="login">
 <div class="login-card">
  <div class="logo">YE</div><p class="eyebrow">BUSINESS · LIFE · AI</p><h1>YE PLATFORM</h1>
  <p class="muted">예에스테틱과 유니의 통합 운영 플랫폼</p>
  <label class="form-label">이메일<input id="email" class="control" type="email" autocomplete="email"></label>
  <label class="form-label">비밀번호<input id="password" class="control" type="password" autocomplete="current-password"></label>
  <button id="loginBtn" class="primary full">로그인</button>
  <button id="previewBtn" class="secondary full">대시보드 미리보기</button>
  <p id="loginMsg" class="msg"></p>
 </div>
</section>

<div id="app" class="app hidden">
<aside id="side">
 <div class="brand"><div class="logo">YE</div><div><strong>YE PLATFORM</strong><span>통합 운영 시스템</span></div><button id="closeSide" class="x mobile" style="margin-left:auto;color:#fff">×</button></div>
 <nav>
  <button data-page="home">🏠 홈</button>
  <button class="group">🩷 예에스테틱 <span>⌄</span></button>
  <div class="sub">
   <button data-page="shop">대시보드</button><button data-page="appointments">예약관리</button><button data-page="customers">고객관리</button>
   <button data-page="consultations">피부상담</button><button data-page="treatments">관리기록</button><button data-page="photos">전후사진</button>
   <button data-page="passes">이용권관리</button><button data-page="programs">프로그램관리</button><button data-page="products">제품관리</button>
   <button data-page="inventory">재고관리</button><button data-page="sales">매출관리</button><button data-page="expenses">지출관리</button>
   <button data-page="settlement">자동결산</button><button data-page="marketing">마케팅</button><button data-page="reviews">리뷰관리</button><button data-page="documents">문서관리</button>
  </div>
  <button class="group">👩 유니 <span>⌄</span></button>
  <div class="sub">
   <button data-page="yuni">유니 대시보드</button><button data-page="goals">목표관리</button><button data-page="monthly">월간계획</button>
   <button data-page="weekly">주간계획</button><button data-page="today">오늘의 계획</button><button data-page="projects">프로젝트</button>
   <button data-page="calendar">캘린더</button><button data-page="habits">습관관리</button><button data-page="gratitude">감사일기</button>
   <button data-page="budget">유니 가계부</button><button data-page="sns">SNS 정보함</button>
  </div>
  <button data-page="assistant">🤖 AI 비서</button><button data-page="settings">⚙ 설정</button>
 </nav>
 <div class="profile"><strong id="profileName">최윤희</strong><span id="profileRole">최고관리자</span><button id="logoutBtn">로그아웃</button></div>
</aside>
<main>
 <header><button id="openSide" class="ghost mobile">☰</button><div><p id="area" class="eyebrow">YE PLATFORM</p><h2 id="title">홈 · 오늘의 브리핑</h2></div><button id="quickBtn" class="primary">＋ 빠른 등록</button></header>
 <section id="content"></section>
</main>
</div>

<div id="modal" class="modal hidden"><div class="modal-card"><div class="modal-head"><h3 id="modalTitle">등록</h3><button id="closeModal" class="x">×</button></div><div id="modalBody"></div></div></div>
<div id="toast" class="toast hidden"></div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
const CONFIG={url:"https://lvfaomlpcrrnffncvffy.supabase.co",key:"sb_publishable_4ZGSNTPI3zW-j-SYp4pHrA_quzvTIPG"};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let client=null,user=null,preview=false,currentPage='home';
let D={customers:[],appointments:[],programs:[],products:[],sales:[],expenses:[],sales6:[],expenses6:[],passes:[],tasks:[],goals:[],projects:[],habits:[],gratitude:[],budget:[],consultations:[],treatments:[],contacts:[]};

const demo={
 customers:[{name:"김○○",phone:"010-****-1234",grade:"VIP",last:"8월 6일"},{name:"이○○",phone:"010-****-7788",grade:"재방문",last:"8월 7일"},{name:"박○○",phone:"010-****-5901",grade:"신규",last:"오늘"}],
 appointments:[{time:"10:00",name:"김○○",program:"레디언스필",status:"예약확정"},{time:"13:00",name:"이○○",program:"페이스핏톡스",status:"예약확정"},{time:"16:00",name:"박○○",program:"장벽재생관리",status:"예약대기"}],
 tasks:["오늘 예약 고객 사전 확인","장기 미방문 고객 2명 연락","인스타 릴스 업로드","벨벳크림 재고 확인"],
 alerts:["이용권 종료 예정 고객 4명","재고 부족 제품 2개","장기 미방문 고객 5명"],
 projects:["예에스테틱 통합운영","SNS 콘텐츠 시스템","개인 목표관리"]
};

const names={home:"홈 · 오늘의 브리핑",shop:"예에스테틱 대시보드",appointments:"예약관리",customers:"고객관리",consultations:"피부상담",treatments:"관리기록",photos:"전후사진",passes:"이용권관리",programs:"프로그램관리",products:"제품관리",inventory:"재고관리",sales:"매출관리",expenses:"지출관리",settlement:"자동결산",marketing:"마케팅",reviews:"리뷰관리",documents:"문서관리",yuni:"유니 대시보드",goals:"목표관리",monthly:"월간계획",weekly:"주간계획",today:"오늘의 계획",projects:"프로젝트",calendar:"캘린더",habits:"습관관리",gratitude:"감사일기",budget:"유니 가계부",sns:"SNS 정보함",assistant:"AI 비서",settings:"설정"};

function won(v){return "₩"+Number(v||0).toLocaleString("ko-KR")}
function metric(label,value){return `<div class="metric"><span>${label}</span><b>${value}</b></div>`}
function badge(text,kind=""){return `<span class="badge ${kind}">${text}</span>`}
function list(items){return `<div class="list">${items.map(x=>`<div class="row"><div><b>${x.t}</b>${x.s?`<br><small>${x.s}</small>`:""}</div>${x.b?badge(x.b,x.k||""):""}</div>`).join("")}</div>`}
function toast(t){$("#toast").textContent=t;$("#toast").classList.remove("hidden");setTimeout(()=>$("#toast").classList.add("hidden"),2200)}
function todayISO(){return new Date().toISOString().slice(0,10)}
function dateLabel(){return new Intl.DateTimeFormat("ko-KR",{year:"numeric",month:"long",day:"numeric",weekday:"long"}).format(new Date())}
function monthsAgoISO(n){const d=new Date();d.setMonth(d.getMonth()-n);d.setDate(1);return d.toISOString().slice(0,10)}
function monthKey(d){return String(d||"").slice(0,7)}
function daysUntil(date){if(!date)return 99999;return Math.ceil((new Date(date+"T00:00:00")-new Date(todayISO()+"T00:00:00"))/86400000)}
function daysSince(date){if(!date)return 99999;return Math.floor((new Date(todayISO()+"T00:00:00")-new Date(date+"T00:00:00"))/86400000)}
function monthFlowData(){
 const arr=[]; const now=new Date();
 for(let i=5;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);const key=d.toISOString().slice(0,7);arr.push({key,label:(d.getMonth()+1)+"월",sales:0,exp:0})}
 D.sales6.forEach(x=>{const m=arr.find(a=>a.key===monthKey(x.sale_date));if(m)m.sales+=Number(x.net_amount||0)});
 D.expenses6.forEach(x=>{const m=arr.find(a=>a.key===monthKey(x.expense_date));if(m)m.exp+=Number(x.amount||0)});
 return arr;
}
function flowChart(){
 const data=preview?[{label:"3월",sales:420,exp:220},{label:"4월",sales:510,exp:240},{label:"5월",sales:630,exp:270},{label:"6월",sales:570,exp:250},{label:"7월",sales:760,exp:310},{label:"8월",sales:390,exp:190}]:monthFlowData();
 const max=Math.max(1,...data.flatMap(x=>[x.sales,x.exp]));
 return `<div class="flow-chart">${data.map(x=>`<div class="flow-month"><div class="flow-bars"><i class="flow-bar sales" style="height:${Math.max(3,x.sales/max*100)}%"></i><i class="flow-bar exp" style="height:${Math.max(3,x.exp/max*100)}%"></i></div><div class="flow-label">${x.label}</div></div>`).join("")}</div><div class="flow-legend"><span><i class="dot sales"></i>매출</span><span><i class="dot exp"></i>비용</span></div>`;
}
function alertCounts(){
 const lowPass=D.passes.filter(p=>Number(p.remaining_sessions||0)<=2).length;
 const expiring=D.passes.filter(p=>{const d=daysUntil(p.end_date);return d>=0&&d<=30}).length;
 const inactive=D.customers.filter(c=>daysSince(c.last_visit_date||c.first_visit_date)>30).length;
 const birthdays=D.customers.filter(c=>c.birth_date&&String(c.birth_date).slice(5,7)===todayISO().slice(5,7)).length;
 const lowStock=D.products.filter(p=>Number(p.current_stock||0)<=Number(p.safety_stock||0)).length;
 const unpaid=D.sales6.filter(s=>s.payment_status!=="결제완료"&&Number(s.outstanding_amount||0)>0).length;
 const rebook=D.customers.filter(c=>c.next_recommended_date&&daysUntil(c.next_recommended_date)<=0).length;
 return {lowPass,expiring,inactive,birthdays,lowStock,unpaid,rebook};
}


async function safe(table,queryBuilder){
 try{
  let q=client.from(table).select("*");
  if(queryBuilder)q=queryBuilder(q);
  const {data,error}=await q;
  if(error){console.warn(table,error.message);return []}
  return data||[];
 }catch(e){console.warn(table,e);return []}
}

async function loadAll(){
 if(!client||!user||preview)return;
 const t=todayISO(), six=monthsAgoISO(5);
 D.customers=await safe("customers",q=>q.eq("is_deleted",false).order("created_at",{ascending:false}).limit(300));
 D.appointments=await safe("appointments",q=>q.eq("appointment_date",t).eq("is_deleted",false).order("start_time"));
 D.programs=await safe("programs",q=>q.eq("is_deleted",false).eq("is_active",true).order("name"));
 D.products=await safe("products",q=>q.eq("is_deleted",false).eq("is_active",true).order("name"));
 D.sales6=await safe("sales",q=>q.gte("sale_date",six).eq("is_deleted",false).order("sale_date"));
 D.expenses6=await safe("expenses",q=>q.gte("expense_date",six).eq("is_deleted",false).order("expense_date"));
 D.sales=D.sales6.filter(x=>x.sale_date===t);
 D.expenses=D.expenses6.filter(x=>x.expense_date===t);
 D.passes=await safe("customer_passes",q=>q.eq("is_deleted",false).eq("status","사용중"));
 D.consultations=await safe("consultations",q=>q.eq("is_deleted",false).order("consultation_date",{ascending:false}).limit(300));
 D.treatments=await safe("treatment_records",q=>q.eq("is_deleted",false).order("treatment_date",{ascending:false}).limit(500));
 D.contacts=await safe("customer_contacts",q=>q.order("contact_date",{ascending:false}).limit(500));
 D.tasks=await safe("yuni_tasks",q=>q.eq("user_id",user.id).eq("task_date",t).order("created_at"));
 D.goals=await safe("yuni_goals",q=>q.eq("user_id",user.id).order("created_at",{ascending:false}));
 D.projects=await safe("yuni_projects",q=>q.eq("user_id",user.id).order("created_at",{ascending:false}));
 D.habits=await safe("yuni_habits",q=>q.eq("user_id",user.id).eq("is_active",true));
 D.gratitude=await safe("yuni_gratitude",q=>q.eq("user_id",user.id).eq("entry_date",t));
 D.budget=await safe("yuni_budget_entries",q=>q.eq("user_id",user.id).eq("entry_date",t));
}

function home(){
 const hour=new Date().getHours(), greet=hour<12?"좋은 아침입니다":hour<18?"좋은 오후입니다":"오늘도 수고 많으셨습니다";
 const ap=preview?demo.appointments:D.appointments.map(a=>({time:(a.start_time||"").slice(0,5),name:(D.customers.find(c=>c.id===a.customer_id)?.name||"예약 고객"),program:(D.programs.find(p=>p.id===a.program_id)?.name||"관리"),status:a.status}));
 const tasks=preview?demo.tasks:D.tasks.map(x=>x.title);
 const sales=D.sales.reduce((s,x)=>s+Number(x.net_amount||0),0), expenses=D.expenses.reduce((s,x)=>s+Number(x.amount||0),0);
 const done=D.tasks.filter(x=>x.status==="완료").length, pct=D.tasks.length?Math.round(done/D.tasks.length*100):0;
 return `<div class="hero"><div><p class="eyebrow">${dateLabel()}</p><h3>${greet}, 유니원장님 😊</h3><p class="muted">오늘 필요한 예에스테틱 업무와 유니 계획을 한 화면에서 확인하세요.</p></div><div class="hero-note"><b>🤖 오늘의 우선순위</b><p>예약 준비 → 고객 후속 연락 → SNS → 재고 → 개인 계획 순으로 확인해보세요.</p></div></div>
 <div class="cards">${metric("오늘 예약",`${ap.length}건`)}${metric("오늘 매출",preview?"₩620,000":won(sales))}${metric("오늘 지출",preview?"₩85,000":won(expenses))}${metric("오늘 할 일",`${tasks.length}건`)}${metric("이용권 사용중",preview?"4건":`${D.passes.length}건`)}${metric("등록 고객",preview?"128명":`${D.customers.length}명`)}${metric("목표",preview?"72%":`${D.goals.length}개`)}${metric("알림",preview?"3건":`${D.products.filter(p=>Number(p.current_stock)<=Number(p.safety_stock)).length}건`)}</div>
 <div class="grid">
  <div class="panel span2"><div class="section-head"><h3>📅 오늘 예약</h3><button class="text-btn" onclick="render('appointments')">전체 보기</button></div>${ap.length?list(ap.map(x=>({t:`${x.time} · ${x.name}`,s:x.program,b:x.status,k:x.status==="예약확정"?"green":""}))):`<div class="empty"><b>오늘 예약이 없습니다.</b>예약관리에서 첫 예약을 등록해보세요.</div>`}</div>
  <div class="panel"><div class="section-head"><h3>✅ 오늘 해야 할 일</h3><button class="text-btn" onclick="openForm('task')">＋ 등록</button></div>${tasks.length?`<div>${(preview?tasks:D.tasks).map(x=>preview?`<label class="check"><input type="checkbox"> ${x}</label>`:`<label class="check"><input type="checkbox" ${x.status==="완료"?"checked":""} onchange="toggleTask('${x.id}',this.checked)"> ${x.title}</label>`).join("")}</div>`:`<div class="empty"><b>오늘 할 일이 없습니다.</b>놓치기 쉬운 일을 바로 등록해보세요.</div>`}</div>
  <div class="panel"><h3>🤖 AI 추천</h3>${list([{t:"이용권 종료 고객 확인",s:"재등록 안내 대상 체크",b:"고객"},{t:"장기 미방문 고객",s:"안부 메시지 발송 권장",b:"연락"},{t:"오늘 SNS",s:"콘텐츠 한 건 업로드",b:"SNS"}])}</div>
  <div class="panel"><h3>🩷 예에스테틱 한눈에</h3>${list([{t:"신규·최근 고객",s:preview?"최근 3명":`${D.customers.slice(0,7).length}명 표시`,b:"고객"},{t:"재고 부족",s:preview?"2개":`${D.products.filter(p=>Number(p.current_stock)<=Number(p.safety_stock)).length}개`,b:"재고"},{t:"사용 중 이용권",s:preview?"4건":`${D.passes.length}건`,b:"이용권",k:"green"}])}</div>
  <div class="panel"><h3>👩 유니 한눈에</h3>${list([{t:"진행 중 목표",s:preview?"3개":`${D.goals.filter(g=>g.status!=="완료").length}개`,b:"목표"},{t:"프로젝트",s:preview?"3개":`${D.projects.length}개`,b:"진행"},{t:"오늘 습관",s:preview?"5개":`${D.habits.length}개`,b:"습관"}])}</div>
  <div class="panel span2"><h3>📊 오늘 진행률</h3><p class="muted">오늘 할 일 완료율</p><div class="progress"><i style="width:${preview?40:pct}%"></i></div><p><b>${preview?40:pct}%</b> · ${preview?"4건 중 2건 진행":`${D.tasks.length}건 중 ${done}건 완료`}</p></div>
  <div class="panel"><h3>🔔 놓치면 안 되는 것</h3>${list((preview?demo.alerts:["재고 부족 제품 확인","이용권 종료 예정 확인","장기 미방문 고객 확인"]).map(x=>({t:x,b:"확인"})))}</div>
  <div class="panel"><h3>🌙 오늘의 성과</h3>${list([{t:"완료 업무",s:preview?"2건":`${done}건`,b:"성과",k:"green"},{t:"오늘 순현금흐름",s:preview?"₩535,000":won(sales-expenses),b:"경영"},{t:"감사일기",s:(preview||D.gratitude.length)?"작성됨":"미작성",b:"유니"}])}</div>
 </div>`;
}

function pageHead(title,desc,action=""){return `<div class="page-head"><div><h3>${title}</h3><p class="muted">${desc}</p></div>${action}</div>`}
function table(headers,rows){if(!rows.length)return `<div class="panel empty"><b>아직 등록된 내용이 없습니다.</b>오른쪽 상단 등록 버튼으로 첫 기록을 만들어보세요.</div>`;return `<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c??""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`}

function shopDashboard(){
 const month=todayISO().slice(0,7);
 const ms=(preview?6200000:D.sales6.filter(x=>monthKey(x.sale_date)===month).reduce((s,x)=>s+Number(x.net_amount||0),0));
 const me=(preview?1830000:D.expenses6.filter(x=>monthKey(x.expense_date)===month).reduce((s,x)=>s+Number(x.amount||0),0));
 const ac=alertCounts();
 const todayAp=preview?3:D.appointments.length;
 return `${pageHead("경영 대시보드","매출·비용·고객·목표와 놓치면 안 되는 항목을 한눈에 봅니다.",`<button class="ghost">CSV</button><button class="primary" onclick="openForm('appointment')">＋ 빠른 등록</button>`)}
 <div class="hero"><div><div class="ops-kicker">YE AESTHETIC BUSINESS</div><p class="ops-hero-title">오늘도 고객 한 분 한 분의<br>아름다운 변화를 기록해 보세요.</p><p class="muted">예약부터 관리, 이용권, 매출과 지출까지 하나의 흐름으로 연결됩니다.</p></div><div class="hero-note"><b>빠른 업무</b><p style="margin-bottom:8px"><button class="ghost full" onclick="openForm('appointment')">예약 등록 →</button></p><p style="margin-bottom:8px"><button class="ghost full" onclick="render('sales')">매출 보기 →</button></p><p><button class="ghost full" onclick="render('passes')">이용권 확인 →</button></p></div></div>
 <div class="cards">${metric("이번 달 매출",won(ms))}${metric("이번 달 총비용",won(me))}${metric("예상 순이익",won(ms-me))}${metric("사용 중 이용권",preview?"4개":`${D.passes.length}개`)}</div>
 <div class="grid">
  <div class="panel span2"><div class="ops-kicker">최근 6개월</div><h3>매출과 비용 흐름</h3>${flowChart()}</div>
  <div class="panel"><div class="section-head"><div><div class="ops-kicker">오늘 일정</div><h3>${todayAp}건의 예약</h3></div><button class="text-btn" onclick="render('appointments')">전체 보기 →</button></div>${todayAp?list((preview?demo.appointments:D.appointments).slice(0,5).map(a=>({t:preview?`${a.time} · ${a.name}`:`${(a.start_time||"").slice(0,5)} · ${D.customers.find(c=>c.id===a.customer_id)?.name||"고객"}`,s:preview?a.program:D.programs.find(p=>p.id===a.program_id)?.name||"",b:a.status||"예약"}))):`<div class="empty"><b>오늘 예약이 없습니다.</b>예약을 등록해 주세요.</div>`}</div>
  <div class="panel span2"><div class="ops-kicker">자동 확인</div><h3>놓치면 안 되는 항목</h3><div class="alert-stack">
   ${[[ac.lowPass,"이용권 2회 이하","잔여 횟수가 적은 고객"],[ac.expiring,"30일 이내 만료","이용권 종료 전 안내"],[ac.inactive,"30일 이상 미방문","안부·재방문 연락"],[ac.birthdays,"이번 달 생일","생일 고객 챙기기"],[ac.lowStock,"재고 부족","안전재고 이하 제품"],[ac.unpaid,"결제 미완료","미수금 확인"],[ac.rebook,"재예약 필요","권장일이 지난 고객"]].map(x=>`<div class="alert-line"><div class="alert-num">${preview?0:x[0]}</div><div><b>${x[1]}</b><br><small>${x[2]}</small></div><span>›</span></div>`).join("")}
  </div></div>
  <div class="panel"><div class="section-head"><div><div class="ops-kicker">${month.replace("-","년 ")}월</div><h3>목표 달성 현황</h3></div><button class="text-btn" onclick="render('goals')">전체 보기 →</button></div><div style="height:120px;display:grid;place-items:center"><div style="font-family:var(--serif);font-size:42px;color:#8a624c">${preview?61:(D.goals[0]?.current_value&&D.goals[0]?.target_value?Math.min(100,Math.round(Number(D.goals[0].current_value)/Number(D.goals[0].target_value)*100)):0)}%</div></div><div class="progress"><i style="width:${preview?61:0}%"></i></div></div>
 </div>`;
}
function appointments(){
 const src=preview?demo.appointments:D.appointments.map(a=>({id:a.id,time:(a.start_time||"").slice(0,5),name:D.customers.find(c=>c.id===a.customer_id)?.name||"고객",program:D.programs.find(p=>p.id===a.program_id)?.name||"",status:a.status,raw:a}));
 const rows=src.map(a=>[a.time,a.name,a.program,badge(a.status,a.status==="방문완료"?"green":a.status==="예약확정"?"blue":""),preview?"":(a.status==="방문완료"?`<button class="ghost" onclick="openCustomer('${a.raw.customer_id}')">고객 보기</button>`:`<button class="primary" onclick="openComplete('${a.id}')">방문완료</button>`)]);
 return `${pageHead("예약 관리","예약 등록부터 방문완료·관리기록·이용권·결제까지 이어집니다.",`<button class="primary" onclick="openForm('appointment')">＋ 예약 등록</button>`)}<div class="cards">${metric("오늘 예약",`${src.length}건`)}${metric("방문 완료",`${src.filter(x=>x.status==="방문완료").length}건`)}${metric("변경·취소",`${src.filter(x=>["변경","취소"].includes(x.status)).length}건`)}</div>${table(["시간","고객","프로그램","상태","관리"],rows)}`;
}
function customers(){
 const src=preview?demo.customers:D.customers;
 const rows=src.map(c=>[c.name,c.phone||"",c.customer_grade||c.grade||"일반",c.last_visit_date||c.last||"",`<button class="ghost" onclick="${preview?"toast('실제 로그인 후 고객 이력이 연결됩니다.')":`openCustomer('${c.id}')`}">통합 기록</button>`]);
 return `${pageHead("고객 관리","고객 한 명의 예약·상담·관리·이용권·매출을 한 화면에서 확인합니다.",`<button class="primary" onclick="openForm('customer')">＋ 고객 등록</button>`)}${table(["고객명","연락처","등급","최근방문","관리"],rows)}`;
}
function openCustomer(id){
 const c=D.customers.find(x=>x.id===id);if(!c)return toast("고객 정보를 찾을 수 없습니다.");
 const aps=D.appointments.filter(x=>x.customer_id===id);
 const passes=D.passes.filter(x=>x.customer_id===id);
 const sales=D.sales6.filter(x=>x.customer_id===id);
 const cons=D.consultations.filter(x=>x.customer_id===id);
 const trs=D.treatments.filter(x=>x.customer_id===id);
 const contacts=D.contacts.filter(x=>x.customer_id===id);
 const total=sales.reduce((s,x)=>s+Number(x.net_amount||0),0);
 openModal("고객 통합 기록",`<div class="customer-sheet">
  <div class="customer-side"><div class="ops-kicker">CUSTOMER 360</div><h3 class="customer-name">${c.name}</h3><p class="muted">${c.phone||"연락처 없음"}</p>
   <div class="detail-grid" style="grid-template-columns:1fr 1fr"><div class="detail-box"><span>등급</span><b>${c.customer_grade||"일반"}</b></div><div class="detail-box"><span>최근방문</span><b>${c.last_visit_date||"-"}</b></div><div class="detail-box"><span>누적매출</span><b>${won(total)}</b></div><div class="detail-box"><span>이용권</span><b>${passes.length}개</b></div></div>
   <button class="primary full" style="margin-top:14px" onclick="closeModal();openForm('appointment','${id}')">＋ 다음 예약</button>
  </div>
  <div class="customer-main">
   <div class="detail-grid"><div class="detail-box"><span>예약</span><b>${aps.length}건</b></div><div class="detail-box"><span>피부상담</span><b>${cons.length}건</b></div><div class="detail-box"><span>관리기록</span><b>${trs.length}건</b></div><div class="detail-box"><span>연락기록</span><b>${contacts.length}건</b></div><div class="detail-box"><span>이용권 잔여</span><b>${passes.reduce((s,x)=>s+Number(x.remaining_sessions||0),0)}회</b></div><div class="detail-box"><span>다음 권장일</span><b>${c.next_recommended_date||"-"}</b></div></div>
   <div class="panel" style="box-shadow:none"><h3>최근 관리·예약</h3><table class="mini-table">${[...trs.slice(0,3).map(x=>`<tr><td>${x.treatment_date}</td><td>관리기록</td><td>${x.skin_response||x.director_note||""}</td></tr>`),...aps.slice(0,3).map(x=>`<tr><td>${x.appointment_date}</td><td>예약</td><td>${x.status}</td></tr>`)].join("")||`<tr><td>아직 기록이 없습니다.</td></tr>`}</table></div>
   <div class="panel" style="box-shadow:none"><h3>이용권</h3><table class="mini-table">${passes.map(x=>`<tr><td>${x.pass_name}</td><td>${x.remaining_sessions||0}회 남음</td><td>${x.end_date||"-"}</td></tr>`).join("")||`<tr><td>사용 중 이용권이 없습니다.</td></tr>`}</table></div>
  </div></div>`);
}
function simplePage(title,desc,items,action=""){
 return `${pageHead(title,desc,action)}<div class="quickcards">${items.map(x=>`<div class="action-card"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>`;
}
function consultations(){return simplePage("피부상담","피부 고민과 상담내용을 고객별로 기록합니다.",[["피부 타입","건성·지성·복합성·민감성"],["핵심 고민","모공·여드름·기미·장벽·탄력"],["생활습관","수면·식습관·홈케어"],["추천 관리","프로그램과 관리주기"],["추천 홈케어","제품과 사용방법"],["상담 메모","원장 상담내용 누적"]],`<button class="primary" onclick="toast('고객을 선택한 상담 등록 화면을 다음 단계에서 연결합니다.')">＋ 상담 등록</button>`)}
function treatments(){return simplePage("관리기록","방문 후 실제 관리내용을 남깁니다.",[["관리 프로그램","오늘 받은 관리"],["사용 기기","페이스핏톡스 등"],["사용 제품","관리실 사용제품"],["피부 반응","관리 전후 반응"],["홈케어 안내","고객에게 전달한 내용"],["다음 권장일","재방문 권장 시점"]],`<button class="primary" onclick="toast('관리기록 입력 폼을 다음 단계에서 연결합니다.')">＋ 관리기록</button>`)}
function photos(){return simplePage("전후사진","고객 피부사진을 날짜별로 비교합니다.",[["정면","정면 사진 보관"],["좌측","왼쪽 얼굴"],["우측","오른쪽 얼굴"],["근접","모공·트러블 근접"],["BEFORE","관리 전"],["AFTER","관리 후"]],`<button class="primary" onclick="toast('Supabase Storage 사진 업로드를 다음 단계에서 연결합니다.')">＋ 사진 업로드</button>`)}
function passes(){const rows=(preview?[{pass_name:"집중 개선 A",customer:"김○○",remaining_sessions:8,end_date:"2026-09-30",status:"사용중"}]:D.passes).map(x=>[x.customer||D.customers.find(c=>c.id===x.customer_id)?.name||"고객",x.pass_name||"",`${x.remaining_sessions||0}회`,x.end_date||"",badge(x.status||"사용중","green")]);return `${pageHead("이용권관리","구매·사용·잔여횟수·만료일을 관리합니다.")}${table(["고객","이용권","잔여","종료일","상태"],rows)}`}
function programs(){const rows=(preview?[{name:"레디언스필",duration_minutes:90,regular_price:500000},{name:"페이스핏톡스",duration_minutes:100,regular_price:450000}]:D.programs).map(x=>[x.name,x.duration_minutes+"분",won(x.regular_price),won(x.vip_price||0)]);return `${pageHead("프로그램관리","관리 프로그램의 시간·가격·원가를 관리합니다.")}${table(["프로그램","시간","정상가","VIP가"],rows)}`}
function products(){const rows=(preview?[{name:"PDRN 메디포뮬러 앰플",brand:"에스테인",sale_price:130000,current_stock:4,safety_stock:2},{name:"ATP NAD+ 벨벳크림",brand:"에스테인",sale_price:310000,current_stock:1,safety_stock:2}]:D.products).map(x=>[x.name,x.brand||"",won(x.sale_price),`${x.current_stock||0}${x.stock_unit||"개"}`,Number(x.current_stock)<=Number(x.safety_stock)?badge("부족"):badge("정상","green")]);return `${pageHead("제품관리","판매제품과 관리실 제품을 관리합니다.",`<button class="primary" onclick="openForm('product')">＋ 제품 등록</button>`)}${table(["제품명","브랜드","판매가","재고","상태"],rows)}`}
function inventory(){return `${pageHead("재고관리","입고·판매·관리실 사용·샘플·폐기를 한눈에 확인합니다.")}<div class="cards">${metric("전체 제품",preview?"9종":`${D.products.length}종`)}${metric("재고 부족",preview?"2종":`${D.products.filter(p=>Number(p.current_stock)<=Number(p.safety_stock)).length}종`)}${metric("오늘 입고","0건")}${metric("오늘 사용","0건")}</div>${products().split('</div>',1)[0]||""}`}
function sales(){const rows=(preview?[{sale_date:todayISO(),sale_type:"관리",net_amount:450000,payment_status:"결제완료"},{sale_date:todayISO(),sale_type:"제품",net_amount:170000,payment_status:"결제완료"}]:D.sales).map(x=>[x.sale_date,x.sale_type,won(x.net_amount),won(x.outstanding_amount||0),badge(x.payment_status||"미결제",x.payment_status==="결제완료"?"green":"")]);return `${pageHead("매출관리","관리·이용권·제품 매출을 통합 관리합니다.")}${table(["날짜","구분","매출","미수금","상태"],rows)}`}
function expenses(){const rows=(preview?[{expense_date:todayISO(),category:"소모품",description:"관리 소모품",amount:85000,payment_method:"카드"}]:D.expenses).map(x=>[x.expense_date,x.category,x.description||"",won(x.amount),x.payment_method||""]);return `${pageHead("지출관리","샵 운영비를 분류해 기록합니다.",`<button class="primary" onclick="openForm('expense')">＋ 지출 등록</button>`)}${table(["날짜","분류","내용","금액","결제수단"],rows)}`}
function settlement(){const sales=D.sales.reduce((s,x)=>s+Number(x.net_amount||0),0), ex=D.expenses.reduce((s,x)=>s+Number(x.amount||0),0);return `${pageHead("자동결산","매출과 지출을 자동으로 합산해 순이익을 확인합니다.")}<div class="cards">${metric("오늘 매출",preview?"₩620,000":won(sales))}${metric("오늘 지출",preview?"₩85,000":won(ex))}${metric("순이익",preview?"₩535,000":won(sales-ex))}${metric("목표달성","72%")}</div><div class="panel"><h3>월 결산 리포트</h3><p class="muted">월별 매출·지출·제품매출·이용권매출·순이익을 PDF/Excel로 내보내는 기능을 다음 단계에서 연결합니다.</p></div>`}
function marketing(){return simplePage("마케팅","채널별 콘텐츠 기획과 게시일정을 관리합니다.",[["인스타그램","릴스·캐러셀·캡션"],["스레드","공감형 글·댓글 소통"],["네이버 블로그","검색형 피부정보"],["네이버 플레이스","소식·소개글"],["당근","지역 고객 콘텐츠"],["카카오채널","고객 안내 메시지"]],`<button class="primary" onclick="render('assistant')">🤖 AI 콘텐츠 만들기</button>`)}
function reviews(){return simplePage("리뷰관리","리뷰 확인·답변·재활용 콘텐츠를 관리합니다.",[["답변 대기","새 리뷰 확인"],["답변 완료","응대 기록"],["베스트 리뷰","SNS 재활용"],["키워드 분석","고객이 많이 언급한 장점"],["후기 요청","관리 후 요청 대상"],["리뷰 전환","리뷰→예약 기여"]])}
function documents(){return simplePage("문서관리","상담지·동의서·메뉴판·제품자료를 보관합니다.",[["고객문서","상담지·동의서"],["운영문서","메뉴판·가격표"],["제품자료","브로슈어·교육자료"],["세금자료","영수증·증빙"],["마케팅자료","포스터·원본 이미지"],["기타자료","PDF·Word·Excel"]],`<button class="primary" onclick="toast('Storage 파일 업로드를 다음 단계에서 연결합니다.')">＋ 파일 업로드</button>`)}

function yuniDashboard(){return `${pageHead("유니 대시보드","목표·계획·프로젝트·습관·가계부를 한눈에 봅니다.")}<div class="cards">${metric("진행 목표",preview?"3개":`${D.goals.length}개`)}${metric("오늘 할 일",preview?"4건":`${D.tasks.length}건`)}${metric("프로젝트",preview?"3개":`${D.projects.length}개`)}${metric("습관",preview?"5개":`${D.habits.length}개`)}</div><div class="grid"><div class="panel span2"><h3>오늘의 계획</h3>${(preview?demo.tasks:D.tasks.map(t=>t.title)).map(t=>`<label class="check"><input type="checkbox"> ${t}</label>`).join("")||'<div class="empty">오늘 할 일이 없습니다.</div>'}</div><div class="panel"><h3>프로젝트</h3>${list((preview?demo.projects:D.projects.map(p=>p.title)).slice(0,4).map(x=>({t:x,b:"계속"})))}</div><div class="panel"><h3>오늘 기록</h3>${list([{t:"감사일기",s:(preview||D.gratitude.length)?"작성됨":"미작성",b:"기록"},{t:"오늘 가계부",s:preview?"2건":`${D.budget.length}건`,b:"가계부"}])}</div></div>`}
function goals(){const rows=(preview?[{title:"올해 핵심 목표",goal_type:"annual",status:"진행중",due_date:"2026-12-31"}]:D.goals).map(x=>[x.title,x.goal_type||"",x.due_date||"",badge(x.status||"진행중","green")]);return `${pageHead("목표관리","연간·월간 목표를 만들고 계획과 연결합니다.",`<button class="primary" onclick="openForm('goal')">＋ 목표 등록</button>`)}${table(["목표","구분","기한","상태"],rows)}`}
function todayPlan(){const rows=(preview?demo.tasks.map((x,i)=>({title:x,priority:i==0?"높음":"보통",status:"미완료"})):D.tasks).map(x=>[x.title,x.priority||"보통",badge(x.status||"미완료",x.status==="완료"?"green":"")]);return `${pageHead("오늘의 계획","오늘 해야 하는 일을 우선순위대로 관리합니다.",`<button class="primary" onclick="openForm('task')">＋ 할 일</button>`)}${table(["할 일","우선순위","상태"],rows)}`}
function projects(){const rows=(preview?demo.projects.map((x,i)=>({title:x,progress:[68,45,30][i],status:"진행중"})):D.projects).map(x=>[x.title,`${x.progress||0}%`,x.due_date||"",badge(x.status||"진행중","green")]);return `${pageHead("프로젝트","장기 업무를 프로젝트 단위로 관리합니다.",`<button class="primary" onclick="openForm('project')">＋ 프로젝트</button>`)}${table(["프로젝트","진행률","마감일","상태"],rows)}`}
function monthly(){return simplePage("월간계획","이번 달 목표와 주요 일정을 한 화면에서 정리합니다.",[["이번 달 목표","가장 중요한 결과 3가지"],["예에스테틱","매출·고객·마케팅"],["유니","개인 목표·생활 계획"],["콘텐츠","SNS 게시계획"],["재무","사업·개인 자금 점검"],["월말 회고","잘한 점과 다음 달 개선"]])}
function weekly(){return simplePage("주간계획","이번 주 해야 할 일을 목표와 연결합니다.",[["이번 주 TOP 3","가장 중요한 업무"],["예약·고객","샵 운영 일정"],["콘텐츠","SNS 제작·게시"],["개인 일정","가족·공부·약속"],["습관","이번 주 반복 목표"],["주간 회고","완료·이월·개선"]])}
function calendar(){return simplePage("캘린더","예에스테틱과 유니 일정을 한 달력에서 확인합니다.",[["예에스테틱 예약","샵 예약 일정"],["유니 일정","개인 일정"],["프로젝트 마감","업무 기한"],["콘텐츠 게시","SNS 예정일"],["결제·납부","고정 지출"],["중요 기념일","생일·약속"]])}
function habits(){const rows=(preview?[{title:"물 마시기",frequency:"daily"},{title:"영어 10분",frequency:"daily"}]:D.habits).map(x=>[x.title,x.frequency||"daily",badge("진행중","green")]);return `${pageHead("습관관리","매일 반복할 습관을 체크합니다.")}${table(["습관","주기","상태"],rows)}`}
function gratitude(){return `${pageHead("감사일기","하루의 좋은 순간을 기록합니다.",`<button class="primary" onclick="openForm('gratitude')">＋ 오늘 기록</button>`)}<div class="panel"><h3>오늘의 감사</h3><p class="muted">${preview?"1. 고객님과 좋은 대화를 나눈 것<br>2. 오늘 계획을 시작한 것<br>3. 가족과 함께한 시간":D.gratitude.length?[D.gratitude[0].gratitude_1,D.gratitude[0].gratitude_2,D.gratitude[0].gratitude_3].filter(Boolean).join("<br>"):"아직 오늘의 감사일기를 작성하지 않았습니다."}</p></div>`}
function budget(){const rows=(preview?[{entry_date:todayISO(),entry_type:"지출",category:"생활",description:"식비",amount:32000}]:D.budget).map(x=>[x.entry_date,x.entry_type,x.category||"",x.description||"",won(x.amount)]);return `${pageHead("유니 가계부","개인 수입과 지출을 사업 자금과 분리해 관리합니다.",`<button class="primary" onclick="openForm('budget')">＋ 내역 등록</button>`)}${table(["날짜","구분","분류","내용","금액"],rows)}`}
function sns(){return simplePage("SNS 정보함","아이디어와 참고자료를 채널별로 모아둡니다.",[["인스타","릴스·캐러셀 아이디어"],["스레드","공감형 글감"],["블로그","검색 키워드"],["유튜브","영상 아이디어"],["후킹 문구","첫 3초 소재"],["저장자료","참고 링크·메모"]],`<button class="primary" onclick="toast('SNS 메모 저장을 다음 단계에서 연결합니다.')">＋ 아이디어 저장</button>`)}
function assistant(){return `${pageHead("AI 비서","예에스테틱과 유니의 정보를 바탕으로 업무를 정리하는 공간입니다.")}<div class="quickcards">${["오늘 해야 할 일 정리해줘","오늘 예약 고객 브리핑","장기 미방문 고객 찾아줘","이번 달 매출 요약해줘","인스타 릴스 초안 만들어줘","오늘 성과를 정리해줘"].map(x=>`<button class="action-card" onclick="toast('AI API 연결 후 실행됩니다.')"><b>🤖 ${x}</b><span>클릭 한 번으로 실행할 AI 명령</span></button>`).join("")}</div><div class="panel" style="margin-top:16px"><h3>AI 채팅</h3><textarea class="control" rows="5" placeholder="예: 오늘 무엇부터 해야 할까?"></textarea><button class="primary" style="margin-top:10px" onclick="toast('AI API는 다음 단계에서 안전하게 연결합니다.')">전송</button></div>`}
function settings(){return `${pageHead("설정","계정과 시스템 연결상태를 확인합니다.")}<div class="grid"><div class="panel"><h3>Supabase</h3>${list([{t:"Project URL",s:CONFIG.url,b:"연결됨",k:"green"},{t:"Publishable Key",s:"브라우저용 키 적용",b:"정상",k:"green"}])}</div><div class="panel"><h3>로그인 계정</h3>${list([{t:"현재 사용자",s:user?.email||"미리보기 모드",b:user?"로그인":"미리보기",k:user?"green":""},{t:"권한",s:"owner / 최고관리자",b:"관리"}])}</div></div>`}

const renders={home,shop:shopDashboard,appointments,customers,consultations,treatments,photos,passes,programs,products,inventory,sales,expenses,settlement,marketing,reviews,documents,yuni:yuniDashboard,goals,monthly,weekly,today:todayPlan,projects,calendar,habits,gratitude,budget,sns,assistant,settings};
function render(p){currentPage=p;$("#title").textContent=names[p];$("#area").textContent=p==="home"?"YE PLATFORM":(["yuni","goals","monthly","weekly","today","projects","calendar","habits","gratitude","budget","sns"].includes(p)?"유니":(["assistant","settings"].includes(p)?"YE PLATFORM":"예에스테틱"));$("#content").innerHTML=(renders[p]||home)();$$("[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===p));if(innerWidth<781)$("#side").classList.remove("open")}

function customerOptions(){return `<option value="">고객 선택</option>${D.customers.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")}`}
function programOptions(){return `<option value="">프로그램 선택</option>${D.programs.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")}`}
function openModal(title,body){$("#modalTitle").textContent=title;$("#modalBody").innerHTML=body;$("#modal").classList.remove("hidden")}
function closeModal(){$("#modal").classList.add("hidden")}
function openForm(type,presetCustomer=''){
 if(preview){toast("실제 계정으로 로그인하면 저장할 수 있습니다.");return}
 const f={
 customer:["고객 등록",`<label class="form-label">고객명<input id="f_name" class="control"></label><label class="form-label">연락처<input id="f_phone" class="control"></label><label class="form-label">등급<select id="f_grade" class="control"><option>일반</option><option>신규</option><option>재방문</option><option>VIP</option></select></label><button class="primary full" style="margin-top:18px" onclick="saveForm('customer')">저장</button>`],
 appointment:["예약 등록",`<div class="form-grid"><label class="form-label">고객<select id="f_customer" class="control">${customerOptions()}</select></label><label class="form-label">프로그램<select id="f_program" class="control">${programOptions()}</select></label><label class="form-label">날짜<input id="f_date" type="date" class="control" value="${todayISO()}"></label><label class="form-label">시간<input id="f_time" type="time" class="control"></label><label class="form-label">상태<select id="f_status" class="control"><option>예약대기</option><option selected>예약확정</option><option>방문완료</option></select></label><label class="form-label">예약금<input id="f_deposit" type="number" class="control" value="30000"></label></div><button class="primary full" style="margin-top:18px" onclick="saveForm('appointment')">저장</button>`],
 expense:["지출 등록",`<div class="form-grid"><label class="form-label">날짜<input id="f_date" type="date" class="control" value="${todayISO()}"></label><label class="form-label">분류<select id="f_category" class="control"><option>제품매입</option><option>소모품</option><option>광고비</option><option>임대료</option><option>관리비</option><option>교육비</option><option>기타</option></select></label><label class="form-label">금액<input id="f_amount" type="number" class="control"></label><label class="form-label">결제수단<select id="f_method" class="control"><option>카드</option><option>현금</option><option>계좌이체</option></select></label></div><label class="form-label">내용<input id="f_desc" class="control"></label><button class="primary full" style="margin-top:18px" onclick="saveForm('expense')">저장</button>`],
 product:["제품 등록",`<div class="form-grid"><label class="form-label">제품명<input id="f_name" class="control"></label><label class="form-label">브랜드<input id="f_brand" class="control"></label><label class="form-label">판매가<input id="f_price" type="number" class="control"></label><label class="form-label">현재재고<input id="f_stock" type="number" class="control" value="0"></label><label class="form-label">안전재고<input id="f_safe" type="number" class="control" value="2"></label></div><button class="primary full" style="margin-top:18px" onclick="saveForm('product')">저장</button>`],
 task:["오늘 할 일",`<label class="form-label">할 일<input id="f_title" class="control"></label><label class="form-label">우선순위<select id="f_priority" class="control"><option>높음</option><option selected>보통</option><option>낮음</option></select></label><button class="primary full" style="margin-top:18px" onclick="saveForm('task')">저장</button>`],
 goal:["목표 등록",`<label class="form-label">목표<input id="f_title" class="control"></label><div class="form-grid"><label class="form-label">구분<select id="f_type" class="control"><option>annual</option><option>monthly</option><option>weekly</option></select></label><label class="form-label">마감일<input id="f_due" type="date" class="control"></label></div><button class="primary full" style="margin-top:18px" onclick="saveForm('goal')">저장</button>`],
 project:["프로젝트 등록",`<label class="form-label">프로젝트명<input id="f_title" class="control"></label><label class="form-label">설명<textarea id="f_desc" class="control" rows="4"></textarea></label><label class="form-label">마감일<input id="f_due" type="date" class="control"></label><button class="primary full" style="margin-top:18px" onclick="saveForm('project')">저장</button>`],
 gratitude:["감사일기",`<label class="form-label">감사한 일 1<input id="f_g1" class="control"></label><label class="form-label">감사한 일 2<input id="f_g2" class="control"></label><label class="form-label">감사한 일 3<input id="f_g3" class="control"></label><label class="form-label">오늘의 기록<textarea id="f_ref" class="control" rows="4"></textarea></label><button class="primary full" style="margin-top:18px" onclick="saveForm('gratitude')">저장</button>`],
 budget:["가계부 등록",`<div class="form-grid"><label class="form-label">구분<select id="f_type" class="control"><option>지출</option><option>수입</option></select></label><label class="form-label">분류<input id="f_category" class="control"></label><label class="form-label">금액<input id="f_amount" type="number" class="control"></label><label class="form-label">내용<input id="f_desc" class="control"></label></div><button class="primary full" style="margin-top:18px" onclick="saveForm('budget')">저장</button>`]
 }[type]; if(f){openModal(f[0],f[1]);if(type==="appointment"&&presetCustomer&&$("#f_customer"))$("#f_customer").value=presetCustomer}
}


function openComplete(id){
 const a=D.appointments.find(x=>x.id===id);if(!a)return;
 const c=D.customers.find(x=>x.id===a.customer_id);
 const p=D.programs.find(x=>x.id===a.program_id);
 const passes=D.passes.filter(x=>x.customer_id===a.customer_id&&Number(x.remaining_sessions||0)>0);
 openModal("방문 완료 · 관리 기록",`<p><b>${c?.name||"고객"}</b> · ${p?.name||"관리"}</p>
 <div class="form-grid"><label class="form-label">이용권 사용<select id="c_pass" class="control"><option value="">사용 안 함</option>${passes.map(x=>`<option value="${x.id}">${x.pass_name} · ${x.remaining_sessions}회 남음</option>`).join("")}</select></label>
 <label class="form-label">결제금액<input id="c_amount" type="number" class="control" value="${Number(a.expected_balance||0)}"></label>
 <label class="form-label">결제수단<select id="c_method" class="control"><option>카드</option><option>현금</option><option>계좌이체</option></select></label>
 <label class="form-label">다음 권장일<input id="c_next" type="date" class="control"></label></div>
 <label class="form-label">피부 반응<textarea id="c_skin" class="control" rows="3"></textarea></label>
 <label class="form-label">홈케어 안내<textarea id="c_home" class="control" rows="3"></textarea></label>
 <button class="primary full" style="margin-top:16px" onclick="completeAppointment('${id}')">방문 완료 처리</button>`);
}
async function completeAppointment(id){
 const a=D.appointments.find(x=>x.id===id);if(!a)return;
 const passId=$("#c_pass").value||null, amount=Number($("#c_amount").value||0), next=$("#c_next").value||null;
 const {data:tr,error:trErr}=await client.from("treatment_records").insert({
  customer_id:a.customer_id,appointment_id:a.id,program_id:a.program_id||null,pass_id:passId,
  treatment_date:a.appointment_date,start_time:a.start_time,skin_response:$("#c_skin").value,
  homecare_guide:$("#c_home").value,next_recommended_date:next,created_by:user.id,updated_by:user.id
 }).select().single();
 if(trErr){toast("관리기록 오류: "+trErr.message);return}
 if(passId){
  const ps=D.passes.find(x=>x.id===passId);const before=Number(ps?.remaining_sessions||0),after=Math.max(0,before-1);
  const {error:pe}=await client.from("customer_passes").update({used_sessions:Number(ps?.used_sessions||0)+1,remaining_sessions:after,status:after<=0?"사용완료":"사용중",updated_by:user.id}).eq("id",passId);
  if(!pe)await client.from("pass_usages").insert({customer_pass_id:passId,customer_id:a.customer_id,treatment_record_id:tr.id,program_id:a.program_id||null,usage_date:a.appointment_date,used_sessions:1,remaining_before:before,remaining_after:after,usage_type:"사용",created_by:user.id});
 }
 if(amount>0){
  const {data:sale,error:se}=await client.from("sales").insert({customer_id:a.customer_id,sale_date:a.appointment_date,sale_type:"관리",appointment_id:a.id,treatment_record_id:tr.id,customer_pass_id:passId,program_id:a.program_id||null,gross_amount:amount,net_amount:amount,outstanding_amount:0,payment_status:"결제완료",created_by:user.id,updated_by:user.id}).select().single();
  if(!se&&sale)await client.from("payments").insert({sale_id:sale.id,customer_id:a.customer_id,payment_date:a.appointment_date,payment_method:$("#c_method").value,amount,created_by:user.id});
 }
 await client.from("appointments").update({status:"방문완료",completed_at:new Date().toISOString(),updated_by:user.id}).eq("id",id);
 if(next)await client.from("customers").update({last_visit_date:a.appointment_date,next_recommended_date:next,updated_by:user.id}).eq("id",a.customer_id);
 closeModal();toast("방문 완료 · 관리기록 · 이용권 · 매출이 반영되었습니다.");await loadAll();render("appointments");
}

async function saveForm(type){
 if(!client||!user)return;
 let table,payload;
 if(type==="customer"){table="customers";payload={name:$("#f_name").value.trim(),phone:$("#f_phone").value.trim(),customer_grade:$("#f_grade").value,created_by:user.id,updated_by:user.id}}
 if(type==="appointment"){table="appointments";payload={customer_id:$("#f_customer").value,program_id:$("#f_program").value||null,appointment_date:$("#f_date").value,start_time:$("#f_time").value,status:$("#f_status").value,deposit_amount:Number($("#f_deposit").value||0),created_by:user.id,updated_by:user.id}}
 if(type==="expense"){table="expenses";payload={expense_date:$("#f_date").value,category:$("#f_category").value,description:$("#f_desc").value,amount:Number($("#f_amount").value||0),payment_method:$("#f_method").value,created_by:user.id,updated_by:user.id}}
 if(type==="product"){table="products";payload={name:$("#f_name").value.trim(),brand:$("#f_brand").value.trim(),sale_price:Number($("#f_price").value||0),current_stock:Number($("#f_stock").value||0),safety_stock:Number($("#f_safe").value||0)}}
 if(type==="task"){table="yuni_tasks";payload={user_id:user.id,title:$("#f_title").value.trim(),task_date:todayISO(),priority:$("#f_priority").value,status:"미완료"}}
 if(type==="goal"){table="yuni_goals";payload={user_id:user.id,title:$("#f_title").value.trim(),goal_type:$("#f_type").value,due_date:$("#f_due").value||null,status:"진행중"}}
 if(type==="project"){table="yuni_projects";payload={user_id:user.id,title:$("#f_title").value.trim(),description:$("#f_desc").value,due_date:$("#f_due").value||null,status:"진행중",progress:0}}
 if(type==="gratitude"){table="yuni_gratitude";payload={user_id:user.id,entry_date:todayISO(),gratitude_1:$("#f_g1").value,gratitude_2:$("#f_g2").value,gratitude_3:$("#f_g3").value,reflection:$("#f_ref").value}}
 if(type==="budget"){table="yuni_budget_entries";payload={user_id:user.id,entry_date:todayISO(),entry_type:$("#f_type").value,category:$("#f_category").value,description:$("#f_desc").value,amount:Number($("#f_amount").value||0)}}
 if(!table)return;
 const {error}=await client.from(table).insert(payload);
 if(error){toast("저장 오류: "+error.message);return}
 closeModal();toast("저장되었습니다.");await loadAll();render(type==="customer"?"customers":type==="appointment"?"appointments":type==="expense"?"expenses":type==="product"?"products":type==="task"?"today":type==="goal"?"goals":type==="project"?"projects":type==="gratitude"?"gratitude":"budget")
}
async function toggleTask(id,checked){if(!client||preview)return;const {error}=await client.from("yuni_tasks").update({status:checked?"완료":"미완료",completed_at:checked?new Date().toISOString():null}).eq("id",id).eq("user_id",user.id);if(error)return toast(error.message);await loadAll();render(currentPage)}

async function enter(){ $("#login").classList.add("hidden");$("#app").classList.remove("hidden");await loadAll();render("home")}
async function start(){
 client=window.supabase.createClient(CONFIG.url,CONFIG.key);
 $("#loginBtn").onclick=async()=>{const {data,error}=await client.auth.signInWithPassword({email:$("#email").value.trim(),password:$("#password").value});if(error){$("#loginMsg").textContent=error.message;return}user=data.user;preview=false;await enter()};
 $("#previewBtn").onclick=async()=>{preview=true;user=null;await enter()};
 $("#logoutBtn").onclick=async()=>{if(client&&!preview)await client.auth.signOut();location.reload()};
 $("#openSide").onclick=()=>$("#side").classList.add("open");$("#closeSide").onclick=()=>$("#side").classList.remove("open");
 $$(".group").forEach(b=>b.onclick=()=>b.nextElementSibling.classList.toggle("hidden"));
 $$("[data-page]").forEach(b=>b.onclick=()=>render(b.dataset.page));
 $("#closeModal").onclick=closeModal;
 $("#quickBtn").onclick=()=>openModal("빠른 등록",`<div class="quickcards"><button class="action-card" onclick="closeModal();openForm('appointment')"><b>📅 예약 등록</b><span>오늘 예약 추가</span></button><button class="action-card" onclick="closeModal();openForm('customer')"><b>👩 고객 등록</b><span>신규 고객 추가</span></button><button class="action-card" onclick="closeModal();openForm('expense')"><b>💸 지출 등록</b><span>운영비 기록</span></button><button class="action-card" onclick="closeModal();openForm('task')"><b>✅ 오늘 할 일</b><span>유니 계획 추가</span></button></div>`);
 const {data}=await client.auth.getSession();if(data.session){user=data.session.user;preview=false;await enter()}
}
start();
</script>
</body></html>
