let userArray = [
    {
      "id":1,
      "name": "Max Power",
      "song":{
        "Song1": "feliz cumpleaños",
        "Song2": "el baile del pollito"
      }
    },
    {
      "id":2,
      "name": "Homero J Simpson",
      "song":{
        "Song1": "payaso plin plin",
        "Song2": "la macarena"
      }
    }
  ];
  
  // Listar nombres de usuarios:
  for(let i = 0; i < userArray.length; i++){
    console.log(userArray[i].name);
  }
  
  //listar las canciones de cada usuario con su nombre en string
  
  for(let i = 0; i < userArray.length; i++){
    console.log("Al usuario " + userArray[i].name + " le gustan las canciones " + userArray[i].song[i] + " y " + userArray[i].song[i+1]);
  }

