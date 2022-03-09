
exports.notifyPatient = async (req,res,next) => {
    const accountSid = 'AC7beeac6ed43a82a751a36e9c07b86478'; 
    const authToken = 'aed803a1c2f36b19e56eb00752131fdc'; 
    const client = require('twilio')(accountSid, authToken); 
 
    client.messages 
      .create({ 
         body: 'You have to call your Family Members at 7 PM!', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+919867843694' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
} 