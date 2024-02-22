export default function Home() {
    return (
      <body>
        <div className="container mx-auto mb-10 md:px-24 lg:px-48 xl:px-72">
          <h1 className="text-6xl my-8">PRICING</h1>
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="sm:flex-1 text-left">
              <h2 className="text-3xl font-bold mb-3">LITEN PAKKE</h2>
              <div className="bg-[#61A6AB] rounded-lg text-lg p-6">
                <ul>
                  <li>• 30-45 min fotografering</li>
                  <li>• 1 hund</li>
                  <li>• 5 editerte bilder til valgfritt* bruk</li>
                  <li>• Pris: 1800,-</li>
                  <li>• 300,- per ekstra bilde</li>
                </ul>
              </div>
            </div>
            <div className="sm:flex-1 text-left">
              <h2 className="text-3xl font-bold text-left mb-3">MEDIUM PAKKE</h2>
              <div className="bg-[#61A6AB] rounded-lg text-lg p-6">
                <ul>
                  <li>• 60 min fotografering</li>
                  <li>• Flere hunder</li>
                  <li>• 10 editerte bilder til valgfritt* bruk</li>
                  <li>• Pris: 2300,-</li>
                  <li>• 300,- per ekstra bilde</li>
                </ul>
              </div>
            </div>
            <div className="sm:flex-1 text-left">
              <h2 className="text-3xl font-bold text-left mb-3">STOR PAKKE</h2>
              <div className="bg-[#61A6AB] rounded-lg text-lg p-6">
                <ul>
                  <li>• 60-90 min fotografering</li>
                  <li>• Flere hunder</li>
                  <li>• 15-17 editerte bilder til valgfritt* bruk</li>
                  <li>• Pris: 2800,-</li>
                  <li>• 300,- per ekstra bilde</li>
                </ul>
              </div>
            </div>
            </div>
                <h2 className="text-3xl font-extrabold text-left mt-10 mb-5">ØVRIGE PRISER</h2>
                <div className="bg-[#61A6AB] rounded-lg text-center py-10 text-xl">
                    <p className="font-extrabold mb-2">Kjøreutgifter utenfor Vestfold: </p>
                    <p>5,- pr/km</p>

                    <p className="mt-8">*Egne priser for bedriftsfoto og bilder som skal brukes til kommersielt bruk. Ta kontakt for prisforespørsel. </p>
                </div>
                
            <h2 className="text-3xl font-extrabold text-left mt-10 mb-5">OM FOTOGRAFERINGEN</h2>
            <div className="bg-[#61A6AB] rounded-lg text-left py-2 text-xl p-8">
                <p className="my-3 pt-4 leading-8">Tidsskjema som er oppført er veiledende, så jeg vil bruke den tiden det tar for at det er nok bilder å arbeide med i ettertid.</p>

                <p className="my-3 pt-4 leading-8">Det er etter fotograferingen at arbeidet begynner, og det er etterbehandlingen av bildene som er en delikat og tidkrevende prosess. Jeg legger mye tid i hvert bilde og gjør mitt ytterste for at du som kunde skal bli fornøyd. Det kan også være at jeg lager flere versjoner av samme bilde, så du kan velge hva du liker best. </p>

                <p className="my-3 pt-4 leading-8">Etter fotograferingen legger jeg bildene inn i et album, og du kan selv gå igjennom hvilke bilder som er dine favoritter. Her er bildene uredigert, så etterbehandlingen vil starte etter dette. </p>

                <p className="my-3 pt-4 leading-8">Hvor lang tid det går fra fotograferingen, til du får de ferdige produktene vil variere, og avhenger av hvor mange bilder du ønsker og hvor mange oppdrag det er samtidig. Men jeg vil jobbe så fort jeg kan for at du skal få de fortest mulig. </p>

                <p className="my-3 pt-4 leading-8">Jeg fotograferer utendørs, og om du har noen forslag til flotte lokaler i nærheten så kan vi avtale dette i forkant. Vi vil også ha et digitalt møte i forkant hvor vi kan snakke om hva du ønsker å få ut av fotograferingen, og hva tankene dine rundt det er.</p>

                <p className="my-3 pt-4 leading-8">Er det noe du lurer på, eller spørsmål rundt dette, så bare ta kontakt, så tar jeg kontakt! </p>
            </div>
        </div>
      </body>
    );
  }
  