export default function ContactMeSec(){
  return(
    <div>
      <form method='post' action='contact'>
        <fieldset>
          <legend>Fale Comigo</legend>
           <div>
             <label htmlFor="name">Seu nome:</label>
             <input type="text" id="name"  value=''/>
           </div>
        </fieldset>        
      </form>
    </div>
  )
}