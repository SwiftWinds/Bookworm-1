deepai.setApiKey('28704cbe-4d81-47d5-8aea-f3b3644dd650')

function imageToText(url) {
  console.log("Hello")
  Tesseract.recognize(
    url,
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    linearizeText(text);
  })
}

function linearizeText(text) {
  document.getElementById("words").innerHTML = text
  console.log(text)
  summarize(text)
}

async function summarize(text) {
  res = await deepai.callStandardApi("summarization", {
    text: text
  });
  console.log(res)
  var p = document.getElementById("interpretation")
  p.innerHTML = res.output

  if (!document.querySelector(".loading.hide") && document.querySelector(".loading"))
    document.querySelector(".loading").classList.add("hide");
  if (document.querySelector(".text-area.hide"))
    document.querySelector(".text-area.hide").classList.remove("hide");
}