//STATIC VARIABLES
var tense = "present";
// SELECTING INPUT BOXES
var ioBox = document.querySelector(".ioInput");
var tuBox = document.querySelector(".tuInput");
var luiBox = document.querySelector(".luiInput");
var noiBox = document.querySelector(".noiInput");
var voiBox = document.querySelector(".voiInput");
var loroBox = document.querySelector(".loroInput");
var tranlsateBox = document.querySelector(".translateInput");
var answerBoxes = [ioBox, tuBox, luiBox, noiBox, voiBox, loroBox, tranlsateBox]

//SELECTING INPUT BOX VALUES
var inputBoxes = [ioBox.value, tuBox.value, luiBox.value, noiBox.value, voiBox.value, loroBox.value]
var inputs = ["io", "tu", "lui", "noi", "voi", "loro", "translate"];


//EFFECT OF BUTTON CLICK
const verbInsertPlacement = document.querySelector(".verbH3Insert");
const messageAllAnswersCorrect = document.querySelector(".messageAllAnswersCorrect");

//SELECTING THE BUTTON
const showNewVerbBtn = document.querySelector(".showNewVerbBtn");
const checkAnswersBtn = document.querySelector(".checkAnswersBtn");
const resetVerbListBtn = document.querySelector(".resetVerbListBtn");

//OBJECT FOR VERB TENSES
var verbTenses = {
  potere: {
    translate: "can",
    participio_presente: "potente",
    gerundio: "potendo",
    participio_passato: "potuto",
    presente: {
      io: "posso",
      tu: "puoi",
      lui: "può",
      noi: "possiamo",
      voi: "potete",
      loro: "possono",
      reg_o_irr: {
        form: "irregular",
        // irrPlaces: [io_input, tu_input, lui_input, noi_input, loro_input]
      },
      passato_prossimo: {
        ess_o_aver: "avere",
        io: "ho potuto",
        tu: "hai potuto",
        lui: "ha potuto",
        noi: "abbiamo potuto",
        voi: "avete potuto",
        loro: "hanno potuto",
        reg_o_irr: {
          form: "regular",
        },
      }
    },
  },
  essere: {
    translate: "to be",
    participio_presente: "essente",
    gerundio: "essendo",
    participio_passato: "stato",
    presente: {
      io: "sono",
      tu: "sei",
      lui: "è",
      noi: "siamo",
      voi: "siete",
      loro: "sono",
      reg_o_irr: {
        form: "irregular",
        // irrPlaces: [io_input, tu_input, lui_input, noi_input, voi_input, loro_input]
      }
    },
  },
  avere: {
    translate: "to have",
    participio_presente: "avente",
    gerundio: "avendo",
    participio_passato: "avuto",
    presente: {
      io: "ho",
      tu: "hai",
      lui: "ha",
      noi: "abbiamo",
      voi: "avete",
      loro: "hanno",
      reg_o_irr: {
        form: "irregular",
        // irrPlaces: [io_input, tu_input, lui_input, noi_input, voi_input, loro_input]
      }
    },
  },
  salire: {
    translate: "to go up",
    participio_presente: "salente",
    gerundio: "salendo",
    participio_passato: "salito",
    presente: {
      io: "salgo",
      tu: "sali",
      lui: "sale",
      noi: "saliamo",
      voi: "salite",
      loro: "salgono",
      reg_o_irr: {
        form: "irregular",
        // irrPlaces: [io_input, loro_input]
      }
    },
  },
  colpire: {
    translate: "to hit",
    participio_presente: "colpente",
    gerundio: "colpendo",
    participio_passato: "colpito",
    presente: {
      io: "colpisco",
      tu: "colpisci",
      lui: "colpisce",
      noi: "colpiamo",
      voi: "colpite",
      loro: "colpiscono",
      reg_o_irr: {
        form: "irregular",
        // irrPlaces: [io_input, tu_input, lui_input, loro_input]
      },
    },
  },
  andare: {
    translate: "to go",
    participio_presente: "andante",
    gerundio: "andando",
    participio_passato: "andato",
    presente: {
      io: "vado",
      tu: "vai",
      lui: "va",
      noi: "andiamo",
      voi: "andate",
      loro: "vanno",
      reg_o_irr: {
        form: "irregular",
        // irrPlaces: [io_input, tu_input, lui_input, loro_input]
      },
    },
  },
  cenare: {
    translate: "to eat dinner",
    participio_presente: "cenante",
    gerundio: "cenando",
    participio_passato: "cenato",
    presente: {
      io: "ceno",
      tu: "ceni",
      lui: "cena",
      noi: "ceniamo",
      voi: "cenate",
      loro: "cenano",
      reg_o_irr: {
        form: "regular",
      }
    },
  }
};

// VERB ARRAY FOR SELECTION
var verbList = ["potere", "essere", "avere", "salire", "colpire", "andare", "cenare"];
var verbListNotShown = ["potere", "essere", "avere", "salire", "colpire", "andare", "cenare"];
var verbListShown = [];

var verbInserted = "";
var randomVerbIndex = 0;

function getRandomVerb(max) {
  var randomVerbIndex = Math.floor(Math.random() * max);
  verbInserted = verbListNotShown[randomVerbIndex];
  verbListShown.push(verbInserted);
  verbListNotShown.splice(randomVerbIndex, 1);
}

//ACTION FROM BUTTON CLICK
function showNewVerb() {
  if (verbListNotShown.length !== 0) {
    messageAllAnswersCorrect.innerText = "";
    // clearBoxes() - have the call in html but maybe should switch here
    getRandomVerb(verbListNotShown.length);
    verbInsertPlacement.innerText =
      verbInserted.charAt(0).toUpperCase() + verbInserted.slice(1);
  } else {
    verbInsertPlacement.innerText = "Great job, you learned all the verbs! Click the 'RESET VERB LIST' button to study again.";
    showResetButton();
  }
}

function showResetButton() {
  resetVerbListBtn.style.display = "inline";
  checkAnswersBtn.style.display = "inline";
  showNewVerbBtn.style.display = "inline";

}

//CLEAR BOXES WHEN showNewVerb IS CLICKED
function clearBoxes() {
  //?? how can I shorten this?
  document.querySelector('.ioInput').value = "";
  document.querySelector('.ioInput').style.border = "";
  document.querySelector('.tuInput').value = "";
  document.querySelector('.tuInput').style.border = "";
  document.querySelector('.luiInput').value = "";
  document.querySelector('.luiInput').style.border = "";
  document.querySelector('.noiInput').value = "";
  document.querySelector('.noiInput').style.border = "";
  document.querySelector('.voiInput').value = "";
  document.querySelector('.voiInput').style.border = "";
  document.querySelector('.loroInput').value = "";
  document.querySelector('.loroInput').style.border = "";
  document.querySelector('.translateInput').value = "";
  document.querySelector('.translateInput').style.border = "";
}


//ADDING EVENT LISTENER TO BUTTON
showNewVerbBtn.addEventListener("click", showNewVerb);
checkAnswersBtn.addEventListener("click", checkIndividualAnswers);
resetVerbListBtn.addEventListener("click", resetVerbList);



// CHECKING INDIVIDUAL ANSWERS
function checkIndividualAnswers() {
  // Getting the values from boxes
  var io_input = document.querySelector(".ioInput").value;
  io_input = io_input.toLowerCase()
  var tu_input = document.querySelector(".tuInput").value;
  tu_input = tu_input.toLowerCase()
  var lui_input = document.querySelector(".luiInput").value;
  lui_input = lui_input.toLowerCase()
  var noi_input = document.querySelector(".noiInput").value;
  noi_input = noi_input.toLowerCase()
  var voi_input = document.querySelector(".voiInput").value;
  voi_input = voi_input.toLowerCase()
  var loro_input = document.querySelector(".loroInput").value;
  loro_input = loro_input.toLowerCase()
  var tranlsate_input = document.querySelector(".translateInput").value;
  tranlsate_input = tranlsate_input.toLowerCase()

  var inputBoxes = [io_input, tu_input, lui_input, noi_input, voi_input, loro_input, tranlsate_input]
  var inputs = ["io", "tu", "lui", "noi", "voi", "loro", "translate"];

  for (var i = 0; i < inputBoxes.length; i++) {
    if (inputBoxes[i] === tranlsate_input) {
      if (tranlsate_input === verbTenses[verbInserted].translate) {
        document.querySelector(".translateInput").style.border = "4px solid green";
      } else {
        document.querySelector(".translateInput").style.border = "4px solid red";
      }
    } else {
      if (inputBoxes[i] === verbTenses[verbInserted].presente[inputs[i]]) {
        answerBoxes[i].style.border = "4px solid green";
      } else {
        answerBoxes[i].style.border = "4px solid red";
      }
    }
  }
  checkAllAnswersCorr(io_input, tu_input, lui_input, noi_input, voi_input, loro_input, tranlsate_input)
}

function checkAllAnswersCorr(io_input, tu_input, lui_input, noi_input, voi_input, loro_input, tranlsate_input) {
  if (io_input === verbTenses[verbInserted].presente.io
    && tu_input === verbTenses[verbInserted].presente.tu
    && lui_input === verbTenses[verbInserted].presente.lui
    && noi_input === verbTenses[verbInserted].presente.noi
    && voi_input === verbTenses[verbInserted].presente.voi
    && loro_input === verbTenses[verbInserted].presente.loro
    && tranlsate_input === verbTenses[verbInserted].translate) {
    messageAllAnswersCorrect.innerText = "Great job, you got this verb right! Click 'SHOW NEW VERB' to try another!";
  } else {
    messageAllAnswersCorrect.innerText = "";
  }
}

function resetVerbList() {
  verbListShown = []
  verbListNotShown = ["potere", "essere", "avere", "salire", "colpire", "andare", "cenare"];
  showNewVerb()
  resetVerbListBtn.style.display = "none";
}






