import React from "react";
import NinaPoppy from "../images/Eukanuba_Companion_Portrett-N+P-240209-140-Enhanced-NR-Edit.jpg-WEB.jpg";
import NinaPoppy2 from "../images/ninapoppy1.jpg";
import Selvportrett from "../images/Selvportrett-hagen-Poppy231110-9-Enhanced-NR.psd-v1.jpg-web.jpg";
import Brie from "../images/Brie_Photoshoot-long.jpg";

export default function Home() {
  return (
    <body>
      <div className="bg-taupe px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Text column */}
        <div className="w-full lg:w-2/3 p-8">
          <h2 className="text-cream">Dyrefotograf i Vestfold</h2>
          <h3 className="mb-6 text-cream">Fanger magiske øyeblikk av ditt dyr</h3>
          <p>
            Jeg er overbevist om at dyrene våre alltid kommer inn i livene våre av en spesiell grunn. De følger oss i en viss tid, inspirerer oss og
            lærer oss om livet og den ubetingede kjærligheten. Vi lærer gjensidig tillit, opplever de vakreste eventyrene og hva det betyr å gi slipp.
          </p>
          <p>
            De beriker livene våre på alle områder. Derfor ønsker vi ikke bare å nyte den for korte tiden vi får tilbringe med dem fullt ut, men også å
            sørge for at vi aldri glemmer dem. Verken hvordan hjertene våre på fire poter så ut, eller deres personlighetstrekk, de felles eventyrene og hva de betyr for oss.
          </p>
          <p>
            Bilder er imidlertid ikke bare det som hjelper oss med å huske alt dette. De kan også gjøre alt det vi føler inni oss synlig for deg og for andre. Litt magisk, hvis du spør meg.
          </p>
          <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Kontakt meg for å lage magiske øyeblikk</button>
        </div>

        {/* Image column */}
        <div className="w-full lg:w-1/3 p-8">
          <img src={NinaPoppy} alt="Bilde" className="rounded-md" />
        </div>
      </div>

      <div className=" bg-blush px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Image column */}
        <div className="w-full lg:w-1/3 p-8">
          <img src={NinaPoppy2} alt="Bilde" className="rounded-md" />
        </div>
        {/* Text column */}
        <div className="w-full lg:w-2/3 p-8">
          <h3 className="mb-6 text-[#21262B]">Vårt Fokus</h3>
          <p className="text-[#21262B]">
            De siste årene har jeg fokusert på å bevare det spesielle båndet mellom deg og din hund, og jeg trives med å skape en stemning og historie rundt bildene. Det å kunne fange alle
            følelsene av kjærlighet og tillit, den varmen og forståelsen mellom deg og din hund, og gjøre dem synlige for deg, er virkelig det vakreste for meg. Selvfølgelig tar vi også portretter, actionbilder og karakterbilder av hunden din alene under en fotoshoot hvis det er det du ønsker, og ingen blir presset til å ta fellesbilder.
          </p>
          <p className="text-[#21262B]">
            Likevel er jeg virkelig lidenskapelig opptatt av å fotografere menneske og hund som et team. Derfor kan du være trygg på at jeg, med min erfaring fra de siste årene, vil gi deg den nødvendige tryggheten og veiledningen. Du kan se frem til en avslappet og vennlig atmosfære der du føler deg komfortabel foran kameraet mitt. For det er
            bare på denne måten ekte og uanstrengte øyeblikk kan oppstå og bli fanget av meg for deg.
          </p>
        </div>
      </div>
      <div className="w-full">
        <img src={Brie} alt="Bilde" className="" />
      </div>

      <div className="bg-taupe px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Text column */}
        <div className="w-full lg:w-2/3 p-8">
          <h2 className="text-cream">Hvem er jeg?</h2>
          <h3 className="mb-6 text-cream">Mitt navn er Nina Wiik!</h3>
          <p>
            Crazy dog mom, tech nerd, fotoentuist og alltid på jakt etter det perfekte øyeblikket, fantastiske plasser og evig søken etter ny kunnskap! Du finner meg somregel med en aussie
            ved min side, og gjerne et kamera i hånden!
          </p>
          <p>
            Jeg har alltid vært interessert i fotografering og jeg fikk mitt første kamera når jeg var 14 år. Og siden da har jeg løpt rundt å tatt bilder av alt og alle. På den tiden
            drev jeg aktivt med hest og konkurranseridning, så det var mye hest og hestekonkurranser som ble knipset igjennom kameraet, i tillegg til min første hund Chana, som var en nydelig
            golden retriever tispe vi hadde på den tiden.
          </p>
          <p>
            Jeg har alltid vært på leting etter de perfekte plassene å ta bilder, slik at man lage noe magisk utav det. Jeg leter etter små og vakre øyeblikk som jeg har lyst å vise deg gjennom
            bildene mine, og jeg elsker hvordan man kan leke med lyset for å oppnå akuratt dette.
          </p>
          <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Bli bedre kjent med meg</button>
        </div>

        {/* Image column */}
        <div className="w-full lg:w-1/3 p-8">
          <img src={Selvportrett} alt="Bilde" className="rounded-md" />
        </div>
      </div>
    </body>
  );
}
