:root{
  --purple:#6C4CF1;--purple2:#8A72FF;--dark:#1D1D1F;--muted:#6E6E73;
  --bg:#F8F9FC;--border:#E8E9F0;--white:#fff;--success:#22C55E;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--dark);background:var(--white)}
a{text-decoration:none;color:inherit}
.container{width:min(1160px,calc(100% - 40px));margin:auto}
.brand{display:flex;align-items:center;gap:10px;font-weight:850;font-size:19px}
.logo{width:38px;height:38px;border-radius:13px;background:linear-gradient(135deg,var(--purple),var(--purple2));display:grid;place-items:center;color:#fff;box-shadow:0 12px 28px rgba(108,76,241,.25)}
.navbar{height:76px;border-bottom:1px solid rgba(232,233,240,.8);background:rgba(255,255,255,.9);backdrop-filter:blur(18px);position:sticky;top:0;z-index:20}
.navrow{height:100%;display:flex;align-items:center;justify-content:space-between;gap:24px}
.navlinks{display:flex;gap:26px;color:var(--muted);font-size:14px}
.actions{display:flex;gap:10px}
.btn{display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--border);background:#fff;border-radius:14px;padding:12px 18px;font-weight:800;font-size:14px;cursor:pointer}
.btn.primary{background:var(--purple);border-color:var(--purple);color:#fff;box-shadow:0 12px 28px rgba(108,76,241,.22)}
.btn.primary:hover{background:#5938e8}.btn.ghost:hover{background:#fafafa}
.hero{padding:88px 0 78px;background:radial-gradient(circle at 20% 8%,rgba(138,114,255,.16),transparent 30%),linear-gradient(#fff,#fbfaff)}
.heroGrid{display:grid;grid-template-columns:1.06fr .94fr;gap:60px;align-items:center}
.eyebrow{display:inline-flex;background:#F0EDFF;color:#5938e8;border-radius:999px;padding:8px 12px;font-weight:800;font-size:13px}
.hero h1{font-size:66px;line-height:1.02;letter-spacing:-3px;margin:20px 0 22px}
.grad{background:linear-gradient(135deg,#5636E8,#9A84FF);-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{font-size:19px;line-height:1.68;color:var(--muted);max-width:630px}
.heroBtns{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}.micro{display:flex;gap:18px;flex-wrap:wrap;color:var(--muted);font-size:13px;margin-top:24px}
.mock{background:#fff;border:1px solid var(--border);border-radius:30px;padding:18px;box-shadow:0 32px 90px rgba(53,39,113,.14)}
.mockInner{background:var(--bg);border-radius:22px;padding:22px}.tiny{font-size:12px;color:var(--muted)}
.courseBox{background:#fff;border:1px solid var(--border);border-radius:18px;padding:18px;margin-top:16px}
.progress{height:9px;background:#eeeafd;border-radius:999px;overflow:hidden;margin-top:12px}.progress span{display:block;height:100%;background:linear-gradient(90deg,var(--purple),var(--purple2))}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:12px}.stat{background:#fff;border:1px solid var(--border);border-radius:15px;padding:13px}.stat b{display:block;font-size:20px;margin-top:5px}
.section{padding:86px 0}.section.alt{background:var(--bg)}.sectionHead{text-align:center;max-width:780px;margin:0 auto 40px}.sectionHead h2{font-size:42px;letter-spacing:-1.6px;margin:0 0 12px}.sectionHead p{margin:0;color:var(--muted);line-height:1.7}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.card{background:#fff;border:1px solid var(--border);border-radius:22px;padding:24px}.cardIcon{width:48px;height:48px;border-radius:14px;background:#F0EDFF;display:grid;place-items:center;font-size:22px;margin-bottom:16px}.card p{color:var(--muted);font-size:14px;line-height:1.6}
.cta{background:linear-gradient(135deg,#241B4F,#633FE9);color:#fff;border-radius:30px;padding:54px;text-align:center}.cta h2{font-size:42px;margin:0 0 12px;letter-spacing:-1.5px}.cta p{max-width:650px;margin:0 auto 24px;color:#ddd7ff;line-height:1.7}
footer{border-top:1px solid var(--border);padding:40px 0;color:var(--muted);font-size:13px}

/* app */
.appShell{display:grid;grid-template-columns:250px 1fr;min-height:100vh;background:var(--bg)}
.sidebar{background:#fff;border-right:1px solid var(--border);padding:22px 16px;position:sticky;top:0;height:100vh}.sidebar .brand{margin:0 8px 28px}
.sideNav{display:grid;gap:6px}.sideLink{padding:12px 14px;border-radius:13px;color:var(--muted);font-size:14px;font-weight:700}.sideLink:hover,.sideLink.active{background:#F0EDFF;color:#5636E8}.honeyLink{margin-top:14px}.soon{font-size:10px;background:#f6f3ff;padding:3px 6px;border-radius:999px}
.main{padding:32px}.topbar{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:24px}.topbar h1{margin:0;font-size:34px;letter-spacing:-1.2px}.topbar p{margin:6px 0 0;color:var(--muted)}.avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--purple),var(--purple2));display:grid;place-items:center;color:#fff;font-weight:850}
.panel{background:#fff;border:1px solid var(--border);border-radius:22px;padding:22px}.dashGrid{display:grid;grid-template-columns:1.5fr .8fr;gap:18px}.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:16px}.kpi{background:#fff;border:1px solid var(--border);border-radius:16px;padding:16px}.kpi span{font-size:12px;color:var(--muted)}.kpi strong{display:block;font-size:24px;margin-top:5px}
.timeline{display:grid;gap:10px;margin-top:14px}.timelineItem{display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)}.badge{width:34px;height:34px;border-radius:11px;background:#F0EDFF;display:grid;place-items:center}
.modules{display:grid;gap:10px}.module{background:#fff;border:1px solid var(--border);border-radius:15px;padding:15px;display:flex;justify-content:space-between;gap:14px;align-items:center}.module.active{background:#f9f7ff;border-color:#cfc5ff}
.lessonLayout{display:grid;grid-template-columns:310px 1fr;gap:18px}.lessonList{display:grid;gap:8px}.lessonItem{border:1px solid var(--border);background:#fff;border-radius:13px;padding:12px;font-size:14px;font-weight:700}.lessonItem.active{background:#f8f6ff;border-color:#cec4ff}
.video{aspect-ratio:16/9;background:linear-gradient(135deg,#201848,#6C4CF1);border-radius:18px;display:grid;place-items:center;color:#fff;font-size:54px}.content h1{font-size:36px;letter-spacing:-1px}.content h2{font-size:24px;margin-top:28px}.content p{color:#444;line-height:1.8}.note{background:#f8f6ff;border:1px solid #ddd6ff;border-radius:15px;padding:16px}
.cert{background:#fffdf8;border:8px double #ead8a5;border-radius:10px;padding:50px;text-align:center;max-width:860px;margin:auto}.cert h1{font-family:Georgia,serif;font-size:44px;color:#2c235d}.seal{width:98px;height:98px;border-radius:50%;background:radial-gradient(circle,#f8dc83,#d1a02a);display:grid;place-items:center;margin:22px auto;font-size:40px;border:6px solid #fae7aa}

/* auth */
.auth{min-height:100vh;display:grid;grid-template-columns:1fr 1fr}.authLeft{display:flex;align-items:center;justify-content:center;background:var(--bg);padding:30px}.authCard{width:min(470px,100%);background:#fff;border:1px solid var(--border);border-radius:28px;padding:32px;box-shadow:0 28px 80px rgba(53,39,113,.12)}.authCard h1{font-size:36px;margin:22px 0 8px}.authCard p{color:var(--muted)}.field{display:grid;gap:8px;margin-top:16px}.field label{font-size:13px;font-weight:800}.field input{height:50px;border:1px solid var(--border);border-radius:14px;padding:0 14px;outline:none}.field input:focus{border-color:var(--purple)}.authRight{background:linear-gradient(145deg,#251a5d,#6C4CF1);color:#fff;padding:60px;display:flex;align-items:center}.authRight h2{font-size:48px;line-height:1.05;letter-spacing:-2px;margin:0 0 18px}.authRight p{font-size:18px;line-height:1.7;color:#ddd7ff}

@media(max-width:950px){.navlinks{display:none}.heroGrid{grid-template-columns:1fr}.cards{grid-template-columns:1fr 1fr}.appShell{grid-template-columns:1fr}.sidebar{display:none}.dashGrid,.lessonLayout,.auth{grid-template-columns:1fr}.authRight{display:none}.kpis{grid-template-columns:1fr 1fr}}
@media(max-width:620px){.container{width:min(100% - 24px,1160px)}.hero{padding-top:54px}.hero h1{font-size:43px;letter-spacing:-1.9px}.lead{font-size:16px}.cards,.stats,.kpis{grid-template-columns:1fr}.section{padding:62px 0}.sectionHead h2{font-size:34px}.main{padding:18px}.cta{padding:38px 20px}.cta h2{font-size:32px}}
