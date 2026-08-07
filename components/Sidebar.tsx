import Link from "next/link";
import Brand from "./Brand";
export default function Sidebar({active}:{active:string}){
  const items=[
    ["painel","🏠","Meu Painel","/dashboard"],
    ["formacao","📚","Minha Formação","/formacao"],
    ["aula","▶️","Aula Atual","/aula"],
    ["cert","🎓","Certificado","/certificado"]
  ];
  return <aside className="sidebar">
    <Brand/>
    <nav className="sideNav">
      {items.map(([key,icon,label,href])=><Link className={"sideLink "+(active===key?"active":"")} href={href} key={key}>{icon} {label}</Link>)}
      <Link className="sideLink honeyLink" href="/dashboard#honey">🐝 Honey IA <span className="soon">em breve</span></Link>
    </nav>
  </aside>
}
