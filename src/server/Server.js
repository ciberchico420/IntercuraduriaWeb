
const path = require('path');
var cors = require("cors");
var express = require('express');
var nodemailer = require('nodemailer');

var xssFilters = require('xss-filters');

const app = express();

const protected = require("./protected.pro");

bodyParser = require("body-parser");
port = 3080;

// place holder for the data

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../build')));

app.get('/api/all', (req, res) => {
    console.log('api/all called!')
    res.json(["ok"])
});

app.post('/api/register', (req, res) => {
  console.log("Nuevo registro");
    const nombre = xssFilters.inHTMLData(req.body.nombre);
    const mail = xssFilters.inHTMLData(req.body.mail);
    const telefono = xssFilters.inHTMLData(req.body.telefono);
    const comentarios = xssFilters.inHTMLData(req.body.comentarios);
    if(nombre !== "" && (mail !== undefined || telefono !== undefined)){
        enviarMail(req.body);
        res.json({status:0,message:req.body});
    }else{
        res.json({status:1,message:"something failed"});
    }
    
});
app.post('/api/contacto', (req, res) => {
  console.log("Nuevo contacto");
    const nombre = xssFilters.inHTMLData(req.body.nombre);
    const mail = xssFilters.inHTMLData(req.body.mail);
    const telefono = xssFilters.inHTMLData(req.body.telefono);
    const comentarios = xssFilters.inHTMLData(req.body.comentarios);
    if(nombre !== "" && (mail !== undefined || telefono !== undefined)){
        enviarMailContacto(req.body);
        res.json({status:0,message:req.body});
    }else{
        res.json({status:1,message:"something failed"});
    }
    
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: protected.mail,
      pass: protected.password
    }
  });
  
var enviarMail = (datos)=>{
    var logo = "<div style='font-size:2rem;font-weight:bold'><span style='color:#4c56ac'>INTER</span>CURADURIA</div>"
    
    var mailToAdmins = {
        from: protected.adminmail,
        to: protected.adminmail,
        subject: 'Nuevo registro en '+datos.curso,
        html: logo+'<div style="background:#4c56ac; color:white; padding:20px; border-radius:10px;font-size:1rem"><h3>¡Hola! una nueva persona se ha registrado en la página.</h3><div ><p>Sus datos son los siguientes:</p><div style="border:1px solid white; border-radius:20px; padding:10px;width:30%;background-color:white;color: black;"><ul><li>Nombre: '+datos.nombre+'</li><li>Correo: '+datos.mail+'</li><li>Telefono: '+datos.telefono+'</li><li>Comentarios: '+datos.comentarios+'</li><li>Nombre del curso: '+datos.curso+'</li></ul></div></div></div>'
      };
      transporter.sendMail(mailToAdmins, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      if(datos.mail !== ""){
        var mailToPeople = {
            from: protected.mail,
            to: datos.mail,
            subject: 'Muchas gracias '+datos.nombre+" por la inscripción a "+datos.curso,
            html: logo+'<div style="background:#4c56ac; color:white; padding:20px; border-radius:10px;font-size:1rem"><h3>¡Hola '+datos.nombre+'!</h3>Muchas gracias por registrarte en el curso <b>'+datos.curso+'</b>, en breve nos pondremos en contacto contigo via este correo o WhatsApp.<br/><br/><small style="font-style:italic">(Puedes responder este mail para seguir la conversación :) )</small></div>'
          };
        transporter.sendMail(mailToPeople, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
      }
}

 
var enviarMailContacto = (datos)=>{
  var logo = "<div style='font-size:2rem;font-weight:bold'><span style='color:#4c56ac'>INTER</span>CURADURIA</div>"
  
  var mailToAdmins = {
      from: protected.adminmail,
      to: protected.adminmail,
      subject: 'Nuevo contacto de'+datos.nombre,
      html: logo+'<div style="background:#4c56ac; color:white; padding:20px; border-radius:10px;font-size:1rem"><h3>¡Hola! una nueva persona ha intentado contactarlas.</h3><div ><p>Sus datos son los siguientes:</p><div style="border:1px solid white; border-radius:20px; padding:10px;width:30%;background-color:white;color: black;"><ul><li>Nombre: '+datos.nombre+'</li><li>Correo: '+datos.mail+'</li><li>Comentarios: '+datos.comentarios+'</li></ul></div></div></div>'
    };


    
    transporter.sendMail(mailToAdmins, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
}