import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../nodemailer/sendEmail";

export async function POST(request:Request){
  const data = await request.json();
  
  try{
    await transporter.sendMail({
      ...mailOptions,
      subject: data.name,
      text:"This is test string",
      html:`<h1>${data.assunto}</h1>
      <p>
        ${data.mensagem} <br/>
        nome:${data.name} <br/> 
        e-mail: ${data.email}  
        <br/>telefone:${data.telefone} 
      </p>`
    })
    return NextResponse.json({success: true, status: 200})
  } catch (error:any){
    console.log(error)
    return new NextResponse(JSON.stringify({message:error.message}), {
      status:400,
      headers:{ "Content-Type": "application/json" },
    })
  }
}