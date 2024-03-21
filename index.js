 function writeCards(arrayOfNames, eventName){
      const messages = []
    for(let i = 0; i < arrayOfNames.length; i++){

    messages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages

  }

  function countDown(number) {

    while(number >= 0) {
      console.log(number--)
    }
  }