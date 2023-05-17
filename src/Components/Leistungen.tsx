import Image from "next/image";
import React from "react";
import dist from "~/../public/dist.jpg";
import cov from "~/../public/cov.jpg";
import mask from "~/../public/mask.jpg";

export const Leistungen = () => {
  return (
    <div className="grid place-items-center gap-y-28 p-8 md:grid-cols-3 md:gap-8">
      <Kachel
        image={cov as HTMLImageElement}
        title="Absicherung"
        text="Absicherung ist entscheidend für den Schutz von Personen, Vermögenswerten und Informationen. Sie umfasst physische Sicherheitsmaßnahmen wie Alarmanlagen und Zugangskontrollen. Ebenso spielt Informationssicherheit eine wichtige Rolle beim Schutz sensibler Daten. Eine ganzheitliche Absicherung minimiert Risiken und gewährleistet Sicherheit und Schutz."
      />
      <Kachel
        image={mask as HTMLImageElement}
        title="Unterweisungen"
        text="Sicherheit ist unser Fokus! Erfahren Sie in unseren Unterweisungen alles über Security. Von Risikoanalysen bis hin zu Zugriffskontrollen - wir vermitteln Ihnen das nötige Wissen, um Ihr Unternehmen bestmöglich zu schützen. Profitieren Sie von maßgeschneiderten Schulungsprogrammen und stärken Sie Ihre Sicherheitsstandards. Kontaktieren Sie uns noch heute für weitere Informationen!"
      />
      <Kachel
        image={dist as HTMLImageElement}
        title="Social Distance"
        text="Halten Sie Distanz, bleiben Sie geschützt! In unseren Unterweisungen zum Social Distance erfahren Sie alles Wichtige. Von Grundlagen bis bewährten Praktiken – wir vermitteln das nötige Wissen für Ihre Sicherheit. Nutzen Sie unsere Schulungsangebote und setzen Sie Richtlinien effektiv um. Kontaktieren Sie uns heute!"
      />
    </div>
  );
};

function Kachel({
  image,
  title,
  text,
}: {
  image: HTMLImageElement;
  title: string;
  text: string;
}) {
  return (
    <div className="card image-full h-96 w-full bg-black shadow-xl">
      <figure>
        <Image src={image} alt="" />
      </figure>
      <div className="card-body flex gap-4">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
