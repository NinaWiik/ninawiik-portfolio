import React from 'react';
import NinaMain from '../images/nina.jpg';
import IoMain from '../images/iomain.jpg';
import PoppyMain from '../images/poppymain.jpg';

export default function About() {
  return (
    <div>
      <div className="container mx-auto mb-10 md:px-24 lg:px-48 xl:px-48">
        <h1 className="text-6xl my-8">ABOUT</h1>
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="flex-1">
            {/* Replace 'your-image-source.jpg' with your actual image source */}
            <img
              src={NinaMain}
              alt="Nina Wiik"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 p-4">
            <p className="text-4xl font-semibold mb-4">Hei!</p>
            <p className="mb-4">
              Mitt navn er Nina Wiik, og jeg er 31 år gammel med en stor lidenskap for dyr,
              og spesielt da hund og hest! Jeg har, siden jeg kan huske, alltid elsket å
              fotografere, så siden jeg var liten har jeg alltid hatt et kamera i hånden,
              og Photoshop på “innerlomma”. Sammen med min samboer, Christian, så samarbeider
              vi om å fotografere og editere bilder slik at det blir magiske bilder man kan
              se tilbake på i mange år. Vi elsker å kapre det ikoniske øyeblikket hos dyret,
              eller samspillet mellom dyr og eier!
            </p>
            <p className="mb-4">
              Jeg har hatt både hunder og hester i mitt eie, og disse har fått boltre seg
              foran kameraet i alle år. Nå har vi to hunder, med navn io og Poppy. På
              fritiden går det mye til turer, hundetrening og å skape innhold til sosiale
              medier til min Instagram-kanal.
            </p>
            <p>
              Jeg har en bachelor i markedsføring, og er utdannet frontend utvikler. Sistnevnte
              er det jeg arbeider som, og er et yrke jeg digger til det fulleste!
            </p>
          </div>
        </div>
      </div>
          
      <div className="container mx-auto mb-10 md:px-24 lg:px-48 xl:px-48">
        <h2 className="text-2xl md:text-4xl mb-4">Heavenly Revenges Caramel Fudge</h2>
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="flex-1 pr-4">
            <p className="mb-4">
              .. eller io som han blir kalt til daglig, er en bortskjemt bamse som sjarmerer alle på sin vei,
              med sitt vennlige vesen og gode personlighet. Han er en australian shepherd som er født 22.03.2018,
              red tricolor av farge.
            </p>
            <p className="mb-4">
              Han kan de fleste triksene i boken, og gjør alt for litt kos og en godis! Han er et arbeidsjern av en hund,
              og gir den beste følelsen under trening. Han trenes i lydighet, rally lydighet og spor, men har også trent
              endel agility før.
            </p>
            <p className="mb-4">
              io er godheten selv, og er inspirasjonen til hele Instagram-kontoen!
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            {/* Replace 'your-image-source.jpg' with your actual image source */}
            <img
              src={IoMain}
              alt="Heavenly Revenges Caramel Fudge"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
          
      <div className="container mx-auto mb-10 md:px-24 lg:px-48 xl:px-48">
        <h2 className="text-2xl md:text-4xl mb-4">Stargazing Platform9And3Quarters</h2>
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="flex-1">
            <img
              src={PoppyMain}
              alt="Nina Wiik"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 pl-4">
            <p className="mb-4">
              Poppy er nykommeren i flokken, og kom til oss 01.01.22. Hun er samme rase som io, 
              av fargen blue merle. Hun er født 01.11.22 og kommer nok alltid til å bli “valpen” og den 
              irriterende lillesøstren. 
            </p>
            <p className="mb-4">
              Hun trenes i lydighet og rally lydighet, og har vært på endel utstillinger med gode resultater. 
              Hun er en liten diva, som fra første stund visste akuratt hva hun ville, og når hun ville det. 
              Og sier man i mot, så får man høre det. Hun er noe mer reservert enn io, men når man blir kjent 
              med henne, så overdøver hun deg med hengivelse og susser til man ikke orker mer. 
            </p>
            <p>
              Hun er virkelig noe for seg selv, og en hver dag med Poppy i hus, er aldri en kjedelig dag. Hun skaper liv
              og røre i flokken (gjerne mer enn hva som er nødvendig hvis man spørr io) og sier aldri nei
              til en tur eller utfordring!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
