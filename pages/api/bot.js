
//  Make ID function, I use this to create random ID
// credit : https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const makeid = (length) => {
var result = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}


export default function handler(req, res) {
  const message = req.body.userMsg;
  if (message == 'image') {

    setTimeout(() => {
      res.status(200).json({
        messages : [
        {
        type: 'botImg',
        imgSrc: `http://unsplash.it/600/600?random=${makeid(5)}`,
        },
        {
        type: 'botMsg',
        text: 'here is your image',
        },
      ]
    });
    } , 1000);
  }
  else{
    setTimeout(() => {
      res.status(200).json({
        messages : [
        {
        type: 'botMsg',
        text: 'This is a Hardcoded response',
        },
        {
        type: 'botMsg',
        text: 'type image to get an image',
        },
      ]
    });
    } , 1000);
  }
}
