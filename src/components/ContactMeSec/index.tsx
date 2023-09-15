export default function ContactMeSec(){
  return(
    <div>
      <form method='post' action='contact'>
        <fieldset>
          <legend>Fale Comigo</legend>
           <div className="flex">
            <div>
              <label htmlFor="name">Seu nome:</label>
              <input type="text" id="name"  value=''/>
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email"  value=''/>
            </div>
           </div>
        </fieldset>        
      </form>
    </div>
  )
}