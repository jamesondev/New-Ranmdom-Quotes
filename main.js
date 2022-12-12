let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  "De mèg pa fri",
  "Kouto pa janm grate manch li.",
  "Ti bout kouto miyò pase zong.",
  "Yon sèl dwèt pa manje kalalou.",
  "Bourik chaje pa kanpe.",
  "Bourik fè pitit pou do li poze.",
  "Bourik toujou rete bourik.",
  "Bourik travay, chwal garyonen.",
  "De kou nan bouda bourik la, de kou nan sakpay la.",
  "Lanmò bourik ranje chen.",
  "Le w nan mitan bourik, ou pote ba.",
  "Mizè fè bourik kouri pase chwal.",
  "Ou fòse bourik janbe dlo, ou pa fòse l bwè dlo.",
  "Ou wè mare chwal, mare bourik pi rèd.",
  "Dyondyon leve kote li vle, menm anba jouk poul.",
  "Granmoun pa rete ak granmoun.",
  "Mwen pa janm ret ak moun.",
  "Se grès kochon-an ki kwit kochon an.",
];

btn.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});
