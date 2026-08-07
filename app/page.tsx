import Link from "next/link";
import Brand from "@/components/Brand";

const topics=[
["📊","Gestão Empresarial","Estratégia, processos, indicadores e tomada de decisão."],
["💰","Finanças","Margem, fluxo de caixa e planejamento financeiro."],
["📈","Marketing & Vendas","Posicionamento, aquisição, conversão e relacionamento."],
["🤖","Inteligência Artificial","IA aplicada à produtividade, decisões e automações."],
["👥","Liderança","Desenvolvimento de pessoas, cultura e alta performance."],
["🚀","Crescimento","Visão integrada para transformar aprendizado em execução."]
];

export default function Home(){
 return <>
  <header className="navbar"><div className="container navrow">
   <Brand/>
   <nav className="navlinks"><a href="#formacao">Formação</a><a href="#metodo">Como funciona</a><a href="#sobre">Sobre</a></nav>
   <div className="actions"><Link className="btn ghost" href="/login">Entrar</Link><Link className="btn primary" href="/cadastro">Começar agora</Link></div>
  </div></header>
  <main>
   <section className="hero"><div className="container heroGrid">
    <div>
      <span className="eyebrow">✦ Formação executiva + IA aplicada</span>
      <h1>Aprenda a administrar empresas <span className="grad">como um CEO.</span></h1>
      <p className="lead">Uma formação completa em gestão empresarial, liderança e inteligência artificial, com 15 módulos, projeto final e uma experiência criada para transformar conhecimento em resultado real.</p>
      <div className="heroBtns"><Link className="btn primary" href="/cadastro">🚀 Começar agora</Link><a className="btn ghost" href="#formacao">Conhecer a formação</a></div>
      <div className="micro"><span>✓ 15 módulos</span><span>✓ Projeto final</span><span>✓ Certificado de conclusão</span></div>
    </div>
    <div className="mock"><div className="mockInner">
      <span className="tiny">MEU PAINEL</span><h2>Continue de onde parou</h2>
      <div className="courseBox"><div style={{display:"flex",justifyContent:"space-between",gap:12}}><div><b>Formação Executiva</b><div className="tiny" style={{marginTop:5}}>Sua formação começa aqui</div></div><b style={{color:"var(--purple)"}}>0%</b></div>
      <div className="progress"><span style={{width:"0%"}}/></div><Link className="btn primary" style={{width:"100%",marginTop:16}} href="/login">Entrar para começar →</Link></div>
      <div className="stats"><div className="stat"><span className="tiny">XP</span><b>0</b></div><div className="stat"><span className="tiny">Sequência</span><b>0 dias</b></div><div className="stat"><span className="tiny">Horas</span><b>0h</b></div><div className="stat"><span className="tiny">Badges</span><b>0</b></div></div>
    </div></div>
   </div></section>

   <section className="section alt" id="formacao"><div className="container">
    <div className="sectionHead"><h2>Uma formação para entender o negócio por inteiro.</h2><p>Da estratégia à execução, desenvolva competências essenciais para administrar, liderar e tomar decisões melhores.</p></div>
    <div className="cards">{topics.map(([i,t,p])=><div className="card" key={t}><div className="cardIcon">{i}</div><h3>{t}</h3><p>{p}</p></div>)}</div>
   </div></section>

   <section className="section" id="metodo"><div className="container">
    <div className="sectionHead"><h2>Aprenda. Pratique. Evolua.</h2><p>Uma experiência que combina conteúdo, aplicação prática, progresso e certificação.</p></div>
    <div className="cards">
      <div className="card"><h3>01 · Aprenda</h3><p>Aulas objetivas, conteúdo estruturado e exemplos empresariais.</p></div>
      <div className="card"><h3>02 · Aplique</h3><p>Exercícios, desafios e um projeto estratégico final.</p></div>
      <div className="card"><h3>03 · Evolua</h3><p>Progresso, XP, conquistas e acompanhamento da sua jornada.</p></div>
    </div>
   </div></section>

   <section className="section alt" id="sobre"><div className="container"><div className="cta">
     <h2>Transforme conhecimento em crescimento.</h2>
     <p>Construa uma visão completa de negócios e desenvolva competências para administrar empresas com mais clareza, estratégia e confiança.</p>
     <Link className="btn" style={{background:"#fff",color:"#5636E8"}} href="/cadastro">Quero começar →</Link>
   </div></div></section>
  </main>
  <footer><div className="container">Honeybi Academy · Formação livre · Transformar conhecimento em empresas extraordinárias.</div></footer>
 </>
}
