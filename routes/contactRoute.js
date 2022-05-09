const router = require('express').Router();
const nodemailer = require('nodemailer');



router.get('/', (req, res)=>{
 res.send('contacted')
})



router.post('/', (req, res)=>{

     let data = req.body;
  
    // smtp is a protocol for transporting messages  every email providers suport this protocol
    let smtpTransport = nodemailer.createTransport({

      service:'Gmail',
      //   the port of connect
      port:465,
    //   for authenticate
    auth:{
        user:'odkolas@gmail.com',
        pass:'googlaro#21#'
    }



    })



    let mailOptions = {
        from:data.email,
        to:'odkolas@gmail.com',
        subject:`Message from ${data.name}`,
        html: `
         <h3>Informations</h3>
         <ul>
         <li>Name: ${data.name}</li>
         <li>email: ${data.email}</li>
         
         
         </ul>
         <h3>Message</h3>
         <p>${data.message}</p>
        
        
        `
    
    }



    smtpTransport.sendMail(mailOptions, (err, response)=>{

    try {
      
      if(err) return res.status(400).json({msg:err})  

     else{
         return res.status(200).json({msg:`Message was sent`})
     }


    } catch (err) {
         res.status(500).json({msg:err}) 
    }



    })





});













module.exports = router;