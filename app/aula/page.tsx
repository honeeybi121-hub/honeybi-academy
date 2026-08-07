import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const lessons=[
"Introdução à Administração",
"Funções da Administração",
"Planejamento",
"Organização",
"Direção",
"Controle",
"Tomada de Decisão",
"Eficiência e Eficácia",
"Papéis do Gestor",
"Revisão do Módulo"
];

export default function Aula(){
  return <div className="appShell">
    <Sidebar active="aula"/>
    <main className="main">
      <div className="topbar">
        <div>
          <h1>Módulo 1 · Aula 1</h1>
          <p>Introdução à Administração</p>
        </div>
        <div className="avatar">A</div>
      </div>

      <div className="lessonLayout">
        <aside className="panel lessonList">
          {lessons.map((l,i)=>
            <div className={"lessonItem "+(i===0?"active":"")} key={l}>
              {i===0?"▶":"○"} &nbsp; {String(i+1).padStart(2,"0")} · {l}
            </div>
          )}
        </aside>

        <article className="panel content">
          <span className="tiny">AULA 01</span>
          <h1>Introdução à Administração</h1>
          <p>
            Administração é o processo de planejar, organizar, dirigir e controlar recursos para alcançar objetivos de forma eficiente e eficaz.
          </p>

          <h2>O que você vai aprender</h2>
          <p>
            Nesta aula, você começa pelos fundamentos: por que empresas precisam de gestão, qual é o papel do administrador e como decisões bem estruturadas influenciam resultados.
          </p>

          <div className="note">
            <b>💜 Dica Honeybi</b>
            <p style={{marginBottom:0}}>
              Ao estudar cada conceito, pense em como ele aparece na rotina de uma empresa real. A aplicação prática é o que transforma teoria em gestão.
            </p>
          </div>

          <h2>Exercício de reflexão</h2>
          <p>
            Escolha uma empresa que você conhece e identifique um exemplo de planejamento, organização, direção e controle.
          </p>

          <div style={{display:"flex",justifyContent:"space-between",gap:12,marginTop:24}}>
            <Link className="btn ghost" href="/formacao">← Formação</Link>
            <button className="btn primary">Concluir aula · +10 XP</button>
          </div>
        </article>
      </div>
    </main>
  </div>
}
