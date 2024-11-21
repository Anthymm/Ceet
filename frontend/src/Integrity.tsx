import { useNavigate } from "react-router-dom"

export default function Integrity() {

  const navigate = useNavigate()

  return (
    <section className="w-screen h-screen bg-white flex justify-start items-center flex-col items-center">
      <h1 className="text-xl w-1/2 w-full flex justify-center">Integritetspolicy och GDPR</h1>
      <ul className="text-xl w-1/2">Du som registrerar dig hos CEET godkänner till följande hantering av inlämnade personuppgifter:
        <li>Din mail kommer att användas för att skicka eventuell konto-borttagning eller lösenords-bytes konfirmationer</li>
        <li> Din ålder kommer att användas av evenemangs värdar för att kunna stämma av den ungefära åldern på dem som kommer på träffarna
        </li>
        <li>När man väl är inloggad på CEET så kan man lägga till Registrerings
          Nummer till sin/sina bil/bilar för att kunna visa upp dem på sin profil
          eller för att värdar ska kunna se vilka bilar som kommer.</li>
        <li>Känner du att du inte längre vill använda dig utav CEET eller att
          du inte vill dela med dig av viss information så går följande information
          att ta bort: Ålder och Regristrerings Nummer. Vill du däremot ta bort din
          Mail så måste du antingen ersätta den eller ta bort ditt konto </li>
        <li className="flex items-center justify-center"><button className="m-4 p-2 border-2" onClick={() => navigate('/register')}>Fortsätt med registering</button></li>
      </ul>




    </section >
  )
}
