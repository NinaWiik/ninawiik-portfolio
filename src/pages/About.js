import React from 'react';
import NinaPoppy from '../images/nina.jpg';
import NinaPoppy2 from '../images/iomain.jpg';
import Selvportrett from '../images/poppymain.jpg';
import IoGreen from "../images/iotop1.jpg";

export default function About() {
  return (
    <body>
      <div className="bg-taupe px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Text column */}
        <div className="w-full lg:w-2/3 p-8">
          <h2 className="text-cream">Bli kjent med meg</h2>
          <h3 className="mb-6 text-cream">Hei! Mitt navn er Nina!</h3>
          <p>

            Jeg er der for deg hvis du ønsker å gjøre kjærligheten til hunden din eller hesten din synlig og holde den for alltid. Fordi jeg vet hva det betyr når du sier
            "Det er ikke bare en hund eller en hest". Våre dyr er så mye mer enn det.
          </p>
          <p>
            De er familiemedlemmer, følgesvenn, turvenn, psykolog, treningsvenn, ja alt! I noen øyeblikk er de det som holder deg gående. Jeg har alltid hatt dyr i livet, og kunne aldri
            tenkt meg et liv uten dyr, enten det har vært hest eller hund opp igjennom årene. Noen som drar deg opp om dagen, alltid ser på deg med forventningfulle øyne, og
            lurer på hva det neste eventyret blir. Det finnes ingen ord som kan beskrive disse følelsene og denne forbindelsen. Det er der bilder kommer inn.
          </p>
          <p>
            Det er som de sier, et bilde sier mere en tusen ord, og jeg ønsker å lage slike minner man kan se tilbake på i lang tid, og huske disse uforglemmelige øyeblikkene som dyrene fikk oss til å følge.
          </p>
          <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Kontakt meg for en uforpliktende prat!</button>
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
          <h3 className="mb-6 text-[#21262B]">Mitt Team!</h3>
          <p className="text-[#21262B]">
            For å sikre de beste bildene og maksimere resultatene, samarbeider jeg av og til med min mann Christian for å skape de mest fantastiske bildene av våre hunder. Han er en ekstremt
            dyktig fotograf og har tatt mange av bildene som du har sett i porteføljen min og på Instagram-profilen min. Under en fotoshoot er det mange elementer som må falle på plass, og å
            ha noen som gir veiledning mens andre tar bildene, er uvurderlig.
          </p>
          <p className="text-[#21262B]">
            Resten av teamet vårt inkluderer selvfølgelig våre to inspirasjonskilder, Io og Poppy. Uten dem ville ikke inspirasjonen vært like sterk, og de driver oss til stadig å søke etter
            nye ideer, komposisjoner og vinklinger. Mange kjenner oss sannsynligvis gjennom Instagram-profilen med det samme brukernavnet, der jeg kontinuerlig deler våre opplevelser innen
            fotografering, redigering, hundetrening og på konkurransebanen. Så følg oss gjerne på Instagram for å bli inspirert til nye høyder!
          </p>
          <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Følg oss på Instagram</button>
        </div>
      </div>
      <div className="w-full">
        <img src={IoGreen} alt="Bilde" className="" />
      </div>

      <div className="bg-taupe px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Text column */}
        <div className="w-full lg:w-2/3 p-8">
          <h2 className="text-cream">Min filosofi</h2>
          <h3 className="mb-6 text-cream">Happy dog - Happy life!</h3>
          <p>
            Dyrets velvære kommer alltid først i mine fotoshoots.
          </p>
          <p>
            Dyret ditt får så mye tid og plass som det trenger. Vi jobber uten press eller stress. Det er veldig viktig for meg at du og hunden din føler dere trygge og komfortable. Hunden din
            trenger ikke å ha kontakt med meg hvis den er redd eller usikker, og enhver som ønsker kos blir selvfølgelig mottatt med glede fra meg. Alt er tillatt, men ingenting er påkrevd!
          </p>
          <p>
            Siden jeg er oppvokst med en fantastisk familiehund og mine egne hunder, kan jeg lese hunders kroppsspråk godt og vet hvordan jeg best kan reagere og når det er passende med en
            pause. Hvis du vil se hvordan hverdagen min rundt hundene er, så ta gjerne en titt på mine daglige historier og highlights på Instagram.
          </p>
          <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Vår instagram</button>
        </div>

        {/* Image column */}
        <div className="w-full lg:w-1/3 p-8">
          <img src={Selvportrett} alt="Bilde" className="rounded-md" />
        </div>
      </div>
    </body>


    // <div>
    //   <div className="container mx-auto mb-10 md:px-24 lg:px-48 xl:px-48">
    //     <h1 className="text-6xl my-8">ABOUT</h1>
    //     <div className="flex flex-col md:flex-row">
    //       {/* Left Column */}
    //       <div className="flex-1">
    //         <img
    //           src={NinaMain}
    //           alt="Nina Wiik"
    //           className="w-full h-auto rounded-lg"
    //         />
    //       </div>

    //       {/* Right Column */}
    //       <div className="flex-1 p-4 text-[#CFC8CA]">
    //         <p className="text-4xl font-semibold mb-4">Hei!</p>
    //         <p className="mb-4">
    //           Mitt navn er Nina Wiik, og jeg er 31 år gammel med en stor lidenskap for dyr,
    //           og spesielt da hund og hest! Jeg har, siden jeg kan huske, alltid elsket å
    //           fotografere, så siden jeg var liten har jeg alltid hatt et kamera i hånden,
    //           og Photoshop på “innerlomma”. Sammen med min samboer, Christian, så samarbeider
    //           vi om å fotografere og editere bilder slik at det blir magiske bilder man kan
    //           se tilbake på i mange år. Vi elsker å kapre det ikoniske øyeblikket hos dyret,
    //           eller samspillet mellom dyr og eier!
    //         </p>
    //         <p className="mb-4">
    //           Jeg har hatt både hunder og hester i mitt eie, og disse har fått boltre seg
    //           foran kameraet i alle år. Nå har vi to hunder, med navn io og Poppy. På
    //           fritiden går det mye til turer, hundetrening og å skape innhold til sosiale
    //           medier til min Instagram-kanal.
    //         </p>
    //         <p>
    //           Jeg har en bachelor i markedsføring, og er utdannet frontend utvikler. Sistnevnte
    //           er det jeg arbeider som, og er et yrke jeg digger til det fulleste!
    //         </p>
    //       </div>
    //     </div>
    //   </div>
          
    //   <div className="container mx-auto mb-10 md:px-24 lg:px-48 xl:px-48 text-[#CFC8CA]">
    //     <h2 className="text-2xl md:text-4xl mb-4">Heavenly Revenges Caramel Fudge</h2>
    //     <div className="flex flex-col md:flex-row">
    //       {/* Left Column */}
    //       <div className="flex-1 pr-4">
    //         <p className="mb-4">
    //           .. eller io som han blir kalt til daglig, er en bortskjemt bamse som sjarmerer alle på sin vei,
    //           med sitt vennlige vesen og gode personlighet. Han er en australian shepherd som er født 22.03.2018,
    //           red tricolor av farge.
    //         </p>
    //         <p className="mb-4">
    //           Han kan de fleste triksene i boken, og gjør alt for litt kos og en godis! Han er et arbeidsjern av en hund,
    //           og gir den beste følelsen under trening. Han trenes i lydighet, rally lydighet og spor, men har også trent
    //           endel agility før.
    //         </p>
    //         <p className="mb-4">
    //           io er godheten selv, og er inspirasjonen til hele Instagram-kontoen!
    //         </p>
    //       </div>

    //       {/* Right Column */}
    //       <div className="flex-1">
    //         {/* Replace 'your-image-source.jpg' with your actual image source */}
    //         <img
    //           src={IoMain}
    //           alt="Heavenly Revenges Caramel Fudge"
    //           className="w-full h-auto rounded-lg"
    //         />
    //       </div>
    //     </div>
    //   </div>
          
    //   <div className="container mx-auto mb-10 md:px-24 lg:px-48 xl:px-48 text-[#CFC8CA]">
    //     <h2 className="text-2xl md:text-4xl mb-4">Stargazing Platform9And3Quarters</h2>
    //     <div className="flex flex-col md:flex-row">
    //       {/* Left Column */}
    //       <div className="flex-1">
    //         <img
    //           src={PoppyMain}
    //           alt="Nina Wiik"
    //           className="w-full h-auto rounded-lg"
    //         />
    //       </div>

    //       {/* Right Column */}
    //       <div className="flex-1 pl-4">
    //         <p className="mb-4">
    //           Poppy er nykommeren i flokken, og kom til oss 01.01.22. Hun er samme rase som io, 
    //           av fargen blue merle. Hun er født 01.11.22 og kommer nok alltid til å bli “valpen” og den 
    //           irriterende lillesøstren. 
    //         </p>
    //         <p className="mb-4">
    //           Hun trenes i lydighet og rally lydighet, og har vært på endel utstillinger med gode resultater. 
    //           Hun er en liten diva, som fra første stund visste akuratt hva hun ville, og når hun ville det. 
    //           Og sier man i mot, så får man høre det. Hun er noe mer reservert enn io, men når man blir kjent 
    //           med henne, så overdøver hun deg med hengivelse og susser til man ikke orker mer. 
    //         </p>
    //         <p>
    //           Hun er virkelig noe for seg selv, og en hver dag med Poppy i hus, er aldri en kjedelig dag. Hun skaper liv
    //           og røre i flokken (gjerne mer enn hva som er nødvendig hvis man spørr io) og sier aldri nei
    //           til en tur eller utfordring!
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
