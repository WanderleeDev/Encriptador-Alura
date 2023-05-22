//función para encriptar el mensaje
export function encryptMessage(text,keys) {
  let sms = text; 
  //usará un objeto con las llaves
  for (const key of keys) {
    sms =sms.replace(new RegExp(key[0], 'g'),key[1]);
  }
  return sms
}

export function decryptMessage(text,keys) {
  let sms = text; 
  //usará un objeto con las llaves
  for (const key of keys) {
    sms =sms.replace(new RegExp(key[1], 'g'),key[0]);
  }
  return sms
}