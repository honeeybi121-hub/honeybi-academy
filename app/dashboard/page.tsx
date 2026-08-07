import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Dashboard(){
  return <div className="appShell">
    <Sidebar active="painel"/>
    <main className="main">
      <div className="topbar">
        <div>
          <h1>Bem-vindo à Honeybi Academy 👋</h1>
          <p>Sua jornada começa agora.</p>
        </div>
        <div className="avatar">A</div>
      </div>

      <div className="dashGrid">
        <section className="panel">
          <div style={{display:"flex",justifyContent:"space-between",gap:16}}>
            <div>
              <span className="tiny">FORMAÇÃO ATUAL</span>
              <h2>Formação Executiva em Gestão Empresarial</h2>
              <p style={{color:"var(--muted)"}}>15 módulos · Projeto final · Certificado</p>
            </div>
            <b style={{fontSize:28,color:"var(--purple)"}}>0%</b>
          </div>

          <div className="progress"><span style={{width:"0%"}}/></div>

          <Link className="btn primary" style={{marginTop:18}} href="/formacao">
            Começar formação →
          </Link>

          <div className="kpis">
            <div className="kpi"><span>XP TOTAL</span><strong>0</strong></div>
            <div className="kpi"><span>SEQUÊNCIA</span><strong>0 dias</strong></div>
            <div className="kpi"><span>HORAS</span><strong>0h</strong></div>
            <div className="kpi"><span>BADGES</span><strong>0</strong></div>
          </div>
        </section>

        <aside className="panel" id="honey">
          <span className="tiny">🐝 HONEY</span>
          <h2>Prazer em acompanhar sua jornada.</h2>
          <p style={{color:"var(--muted)",lineHeight:1.7}}>
            Em breve, a Honey vai usar seu progresso real para explicar conceitos, criar exercícios e recomendar o próximo passo.
          </p>
          <button className="btn ghost" style={{width:"100%"}}>Honey IA · em breve</button>
        </aside>
      </div>

      <section className="panel" style={{marginTop:18}}>
        <h2>Sua jornada</h2>
        <div className="timeline">
          <div className="timelineItem">
            <span className="badge">1</span>
            <div><b>Comece pelo Módulo 1</b><div className="tiny">Fundamentos da Administração</div></div>
          </div>
          <div className="timelineItem">
            <span className="badge">🔒</span>
            <div><b>Próximos módulos</b><div className="tiny">Serão liberados conforme seu progresso</div></div>
          </div>
          <div className="timelineItem">
            <span className="badge">📝</span>
            <div><b>Projeto Final</b><div className="tiny">Liberado após os módulos</div></div>
          </div>
          <div className="timelineItem">
            <span className="badge">🎓</span>
            <div><b>Certificado</b><div className="tiny">Liberado após a conclusão</div></div>
          </div>
        </div>
      </section>
    </main>
  </div>
}
