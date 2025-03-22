let ears = document.getElementById("ears");
let hair = document.getElementById("hair");
let neck = document.getElementById("neck");
let eyes = document.getElementById("eyes");
let mouth = document.getElementById("mouth");
let leg = document.getElementById("leg");
let acce = document.getElementById("acce");
let background = document.getElementById("background");
let parts = document.getElementById("parts");
let types = document.getElementById("types");

const partsBtn = [
  { class: "btn", value: "hair", content: "Hair" },
  { class: "btn", value: "ears", content: "Ears" },
  { class: "btn", value: "eyes", content: "Eyes" },
  { class: "btn", value: "mouth", content: "Mouth" },
  { class: "btn", value: "neck", content: "Neck" },
  { class: "btn", value: "leg", content: "Leg" },
  { class: "btn", value: "acce", content: "Accessories" },
  { class: "btn", value: "background", content: "Background" },
];

const earBtn = [
  { class: "btn", value: "default", content: "Default" },
  { class: "btn", value: "tilt-backward", content: "Backward" },
  { class: "btn", value: "tilt-forward", content: "Forward" },
];

const hairBtn = [
  { class: "btn", value: "bang", content: "Bang" },
  { class: "btn", value: "curls", content: "Curls" },
  { class: "btn", value: "default", content: "Default" },
  { class: "btn", value: "elegant", content: "Elegant" },
  { class: "btn", value: "fancy", content: "Fancy" },
  { class: "btn", value: "quiff", content: "Quiff" },
  { class: "btn", value: "short", content: "Short" },
];

const acceBtn = [
  { class: "btn", value: "earings", content: "Earings" },
  { class: "btn", value: "flower", content: "Flower" },
  { class: "btn", value: "glasses", content: "Glasses" },
  { class: "btn", value: "headphone", content: "Headphone" },
];

const eyesBtn = [
  { class: "btn", value: "angry", content: "Angry" },
  { class: "btn", value: "default", content: "Default" },
  { class: "btn", value: "naughty", content: "Naughty" },
  { class: "btn", value: "panda", content: "Panda" },
  { class: "btn", value: "smart", content: "Smart" },
  { class: "btn", value: "star", content: "Star" },
];

const backgroundBtn = [
  { class: "btn", value: "blue50", content: "Blue 50" },
  { class: "btn", value: "blue60", content: "Blue 60" },
  { class: "btn", value: "blue70", content: "Blue 70" },
  { class: "btn", value: "darkblue30", content: "Dark Blue 30" },
  { class: "btn", value: "darkblue50", content: "Dark Blue 50" },
  { class: "btn", value: "darkblue70", content: "Dark Blue 70" },
  { class: "btn", value: "green50", content: "Green 50" },
  { class: "btn", value: "green60", content: "Green 60" },
  { class: "btn", value: "green70", content: "Green 70" },
  { class: "btn", value: "grey40", content: "Grey 40" },
  { class: "btn", value: "grey70", content: "Grey 70" },
  { class: "btn", value: "grey80", content: "Grey 80" },
  { class: "btn", value: "red50", content: "Red 50" },
  { class: "btn", value: "red60", content: "Red 60" },
  { class: "btn", value: "red70", content: "Red 70" },
  { class: "btn", value: "yellow50", content: "Yellow 50" },
  { class: "btn", value: "yellow60", content: "Yellow 60" },
  { class: "btn", value: "yellow70", content: "Yellow 70" },
];

const legBtn = [
  { class: "btn", value: "bubble-tea", content: "Bubble Tea" },
  { class: "btn", value: "default", content: "Default" },
  { class: "btn", value: "game-console", content: "Game Console" },
  { class: "btn", value: "tilt-backward", content: "Backward" },
  { class: "btn", value: "tilt-forward", content: "Forward" },
];

const neckBtn = [
  { class: "btn", value: "bend-backward", content: "Backward" },
  { class: "btn", value: "default", content: "Default" },
  { class: "btn", value: "thick", content: "Thick" },
  { class: "btn", value: "bend-forward", content: "Forward" },
];

const mouthBtn = [
  { class: "btn", value: "astonished", content: "Astonished" },
  { class: "btn", value: "default", content: "Default" },
  { class: "btn", value: "eating", content: "Eating" },
  { class: "btn", value: "laugh", content: "Laugh" },
  { class: "btn", value: "tongue", content: "Tongue" },
];

const partHandlers = {
  hair: { options: hairBtn, element: hair, folder: "hair" },
  ears: { options: earBtn, element: ears, folder: "ears" },
  eyes: { options: eyesBtn, element: eyes, folder: "eyes" },
  mouth: { options: mouthBtn, element: mouth, folder: "mouth" },
  neck: { options: neckBtn, element: neck, folder: "neck" },
  leg: { options: legBtn, element: leg, folder: "leg" },
  acce: { options: acceBtn, element: acce, folder: "accessories" },
  background: {
    options: backgroundBtn,
    element: background,
    folder: "backgrounds",
  },
};

partsBtn.forEach((part) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.value = part.value;
  btn.innerText = part.content;
  parts.appendChild(btn);
});

function showOptions(partKey) {
  types.innerHTML = "";
  const { options, element, folder } = partHandlers[partKey];
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.value = opt.value;
    btn.innerText = opt.content;
    btn.onclick = () => {
      element.src = `alpaca/${folder}/${opt.value}.png`;
    };
    types.appendChild(btn);
  });
}

function handleAction(e) {
  const action = e.target.value;
  if (action === "random") {
    Object.keys(partHandlers).forEach((key) => {
      const { options, element, folder } = partHandlers[key];
      const randomIndex = Math.floor(Math.random() * options.length);
      element.src = `alpaca/${folder}/${options[randomIndex].value}.png`;
    });
  } else if (action === "download") {
    html2canvas(document.getElementById("imageContainer")).then((canvas) => {
      const imageURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "alpaca-image.png";
      link.click();
    });
  }
}

const buttons = document.getElementsByClassName("btn");
const actionButtons = document.getElementsByClassName("action-btn");

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const part = e.target.value;
    if (partHandlers[part]) {
      showOptions(part);
    }
  });
});

Array.from(actionButtons).forEach((btn) => {
  btn.addEventListener("click", handleAction);
});
