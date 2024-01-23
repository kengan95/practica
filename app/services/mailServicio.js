import nodemailer from 'nodemailer' 
import  dotenv from 'dotenv'
dotenv.config()

const transporter=nodemailer.createTransport(
    { 
     host:process.env.JWT__EMAIL__HOST, 
     port:465, 
     secure:true,
     auth:{
             user:process.env.JWT__EMAIL__USER,
            pass:process.env.JWT__EMAIL__PASSWORD 
        }}) 

      export  async function enviarMailVerificacion(){ 

          return  transporter.sendMail({
            from:' moto2@gmail.com',
            to:direccion,
            subject:'verificacion nueva cuenta',
            html:'crearMailVerificacion(token)'

            })

        }  

        async function crearMailVerificacion(token){ 
            return `  
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> 

    <style> 

     html{
        background-color: white;

     } 

      body{
        max-width: 630px;
        font-family: sans-serif;
        margin: auto; 
        background-color: rgb(255, 249, 256);
        padding: 40px;
        border-radius: 4px; 
        margin-top: 10px;
      }



    </style>
</head>
<body>  

    <h1> Punto.json verificar de correo electronico</h1> 
    <p>se a creado una cuenta en Punto.Json con este correo</p>
    <p>si esta cuenta no fue creada por usted desestime este correo</p>
    <p>  si usted creo la cuenta entonces verifique la cuenta, <a href=http://localhost:4000${token} target="_blank"></a></p>
    <p>Ramiro siclia</p>


    
</body>
</html>
            `


            } 



