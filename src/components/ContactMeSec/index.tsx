export default function ContactMeSec(){
  const inputContact = 'border-sm'
  return(
    <div>
      <form method='post' action='contact'>
        <fieldset>
          <legend>Fale Comigo</legend>
            <div className="flex">
              <div>
                <label htmlFor="name">Seu nome:</label>
                <input className='rounded-md' type="text" id="name"  value=''/>
              </div>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input className='input-contact' type="email" id="email"  value=''/>
              </div>
            </div>
            <div className= "flex" >
              <div>
                <label htmlFor="telefone">Telefone:</label>
                <input className='input-contact' type="tel" id="telefone"  value=''/>
              </div>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input className='input-contact' type="email" id="email"  value=''/>
              </div>
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <input type="textarea" id="mensagem"/>
            </div>
        </fieldset>        
      </form>
    </div>
  )
}