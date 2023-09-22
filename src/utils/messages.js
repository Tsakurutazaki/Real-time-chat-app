const myDate = new Date()



const generateMessage = (username, text) => {
  return {
    username, 
    text,
    createdAt: myDate.getTime()    //new Date.getTime()
  }
}

const generateLocationMessage = (username, url ) => {
  return{
    username,
    url,
    createdAt: myDate.getTime()
  }
}

module.exports = {
  generateMessage,
  generateLocationMessage
}