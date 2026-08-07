import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const modules=[
"Fundamentos da Administração",
"Planejamento Estratégico",
"Gestão Financeira",
"Contabilidade Gerencial",
"Economia para Gestores",
"Empreendedorismo e Modelos de Negócio",
"Operações e Processos",
"Gestão da Qualidade e Projetos",
"Vendas e Negociação",
"Marketing Digital",
"Gestão Comercial e Crescimento",
"Business Intelligence e Dados",
"Marketing Estratégico, Branding e Posicionamento",
"Inteligência Artificial Aplicada aos Negócios",
"Liderança, Gestão de Pessoas e Cultura Organizacional"
];

export default function Formacao(){
  return <div className="appShell">
    <Sidebar active="formacao"/>
    <main className="main">
      <div className="topbar">
        <div>
          <h1>Minha Formação</h1>
          <p>Formação Executiva em Gestão Empresarial</p>
        </div>
        <div className="avatar">A</div>
      </div>

      <section className="panel" style={{marginBottom:18}}>
        <span className="tiny">SEU PROGRESSO</span>
        <div style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"center"}}>
          <div>
            <h2 style={{marginBottom:6}}>Você ainda não começou</h2>
            <p style={{color:"var(--muted)",marginTop:0}}>Comece pelo Módulo 1. Seu progresso será registrado quando conectarmos o banco de dados.</p>
          </div>
          <b style={{fontSize:28,color:"var(--purple)"}}>0%</b>
        </div>
        <div className="progress"><span style={{width:"0%"}}/></div>
      </section>

      <div className="modules">
        {modules.map((m,i)=>
          <div className={"module "+(i===0?"active":"")} key={m}>
            <div>
              <span className="tiny">MÓDULO {String(i+1).padStart(2,"0")}</span>
              <b style={{display:"block",marginTop:5}}>{m}</b>
            </div>
            {i===0
              ? <Link className="btn primary" href="/aula">Começar</Link>
              : <span style={{color:"var(--muted)",fontWeight:800}}>🔒 Bloqueado</span>}
          </div>
        )}
      </div>
    </main>
  </div>
}
