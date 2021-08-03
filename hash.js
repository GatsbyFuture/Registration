// bcrypt dan obj olamiz...
const bcrypt = require('bcrypt');

async function getsolt() {
 const salt = await bcrypt.genSalt();
 const pass = "20010912";
 const pswhash = await bcrypt.hash(pass,salt);
 console.log(salt);
 console.log(pswhash);
}

getsolt();