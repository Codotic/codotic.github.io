const wordList = document.getElementById('wordList');

let theChinese, theEnglish = [],
  mainObj ={};

let showObj = function() {
  for (let prop in mainObj) {
    console.log(prop);
    console.log(mainObj [prop]);

  }
}


fetch("questions_can.json")
  .then(res => {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    theChinese = data.question;
    theEnglish = data.choice1;
    mainObj = data;
    showObj();
  });

wordList.innerHTML = data
