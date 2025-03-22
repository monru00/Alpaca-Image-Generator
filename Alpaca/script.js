// let ears = document.getElementById("ears");
// let hair = document.getElementById("hair");
// let neck = document.getElementById("neck");
// let eyes = document.getElementById("eyes");
// let mouth = document.getElementById("mouth");
// let leg = document.getElementById("leg");
// let acce = document.getElementById("acce");
// let background = document.getElementById("background");
// let parts = document.getElementById("parts");
// let types = document.getElementById("types");

// const partsBtn = [
//   { class: "btn", value: "hair", content: "Hair" },
//   { class: "btn", value: "ears", content: "Ears" },
//   { class: "btn", value: "eyes", content: "Eyes" },
//   { class: "btn", value: "mouth", content: "Mouth" },
//   { class: "btn", value: "neck", content: "Neck" },
//   { class: "btn", value: "leg", content: "Leg" },
//   { class: "btn", value: "acce", content: "Accessories" },
//   { class: "btn", value: "background", content: "Background" },
// ];

// const earBtn = [
//   { class: "btn", value: "default", content: "Default" },
//   { class: "btn", value: "tilt-backward", content: "Backward" },
//   { class: "btn", value: "tilt-forward", content: "Forward" },
// ];

// const hairBtn = [
//   { class: "btn", value: "bang", content: "Bang" },
//   { class: "btn", value: "curls", content: "Curls" },
//   { class: "btn", value: "default", content: "Default" },
//   { class: "btn", value: "elegant", content: "Elegant" },
//   { class: "btn", value: "fancy", content: "Fancy" },
//   { class: "btn", value: "quiff", content: "Quiff" },
//   { class: "btn", value: "short", content: "Short" },
// ];

// const acceBtn = [
//   { class: "btn", value: "earings", content: "Earings" },
//   { class: "btn", value: "flower", content: "Flower" },
//   { class: "btn", value: "glasses", content: "Glasses" },
//   { class: "btn", value: "headphone", content: "Headphone" },
// ];

// const eyesBtn = [
//   { class: "btn", value: "angry", content: "Angry" },
//   { class: "btn", value: "default", content: "Default" },
//   { class: "btn", value: "naughty", content: "Naughty" },
//   { class: "btn", value: "panda", content: "Panda" },
//   { class: "btn", value: "smart", content: "Smart" },
//   { class: "btn", value: "star", content: "Star" },
// ];

// const backgroundBtn = [
//   { class: "btn", value: "blue50", content: "Blue 50" },
//   { class: "btn", value: "blue60", content: "Blue 60" },
//   { class: "btn", value: "blue70", content: "Blue 70" },
//   { class: "btn", value: "darkblue30", content: "Dark Blue 30" },
//   { class: "btn", value: "darkblue50", content: "Dark Blue 50" },
//   { class: "btn", value: "darkblue70", content: "Dark Blue 70" },
//   { class: "btn", value: "green50", content: "Green 50" },
//   { class: "btn", value: "green60", content: "Green 60" },
//   { class: "btn", value: "green70", content: "Green 70" },
//   { class: "btn", value: "grey40", content: "Grey 40" },
//   { class: "btn", value: "grey70", content: "Grey 70" },
//   { class: "btn", value: "grey80", content: "Grey 80" },
//   { class: "btn", value: "red50", content: "Red 50" },
//   { class: "btn", value: "red60", content: "Red 60" },
//   { class: "btn", value: "red70", content: "Red 70" },
//   { class: "btn", value: "yellow50", content: "Yellow 50" },
//   { class: "btn", value: "yellow60", content: "Yellow 60" },
//   { class: "btn", value: "yellow70", content: "Yellow 70" },
// ];

// const legBtn = [
//   { class: "btn", value: "bubble-tea", content: "Bubble Tea" },
//   { class: "btn", value: "default", content: "Default" },
//   { class: "btn", value: "game-console", content: "Game Console" },
//   { class: "btn", value: "tilt-backward", content: "Backward" },
//   { class: "btn", value: "tilt-forward", content: "Forward" },
// ];

// const neckBtn = [
//   { class: "btn", value: "bend-backward", content: "Backward" },
//   { class: "btn", value: "default", content: "Default" },
//   { class: "btn", value: "thick", content: "Thick" },
//   { class: "btn", value: "bend-forward", content: "Forward" },
// ];

// const mouthBtn = [
//   { class: "btn", value: "astonished", content: "Astonished" },
//   { class: "btn", value: "default", content: "Default" },
//   { class: "btn", value: "eating", content: "Eating" },
//   { class: "btn", value: "laugh", content: "Laugh" },
//   { class: "btn", value: "tongue", content: "Tongue" },
// ];

// function handleHair() {
//   hairBtn.forEach((e) => {
//     const node = document.createElement("button");
//     node.classList.add(e.class);
//     node.value = e.value;
//     node.innerText = e.content;
//     types.appendChild(node);
//   });
//   const btnArray = document.getElementsByClassName("btn");
//   Array.from(btnArray).forEach((e) => {
//     e.addEventListener("click", (ele) => {
//       if (hairBtn.some((btn) => btn.value === ele.target.value)) {
//         hair.src = `alpaca/hair/${ele.target.value}.png`;
//       }
//     });
//   });
// }

// function handleEars() {
//   earBtn.forEach((e) => {
//     const node = document.createElement("button");
//     node.classList.add(e.class);
//     node.value = e.value;
//     node.innerText = e.content;
//     types.appendChild(node);
//   });
//   const btnArray = document.getElementsByClassName("btn");
//   Array.from(btnArray).forEach((e) => {
//     e.addEventListener("click", (ele) => {
//       if (earBtn.some((btn) => btn.value === ele.target.value)) {
//         ears.src = `alpaca/ears/${ele.target.value}.png`;
//       }
//     });
//   });
// }

// function handleEyes() {
//   eyesBtn.forEach((e) => {
//     const node = document.createElement("button");
//     node.classList.add(e.class);
//     node.value = e.value;
//     node.innerText = e.content;
//     types.appendChild(node);
//   });
//   const btnArray = document.getElementsByClassName("btn");
//   Array.from(btnArray).forEach((e) => {
//     e.addEventListener("click", (ele) => {
//       if (eyesBtn.some((btn) => btn.value === ele.target.value)) {
//         eyes.src = `alpaca/eyes/${ele.target.value}.png`;
//       }
//     });
//   });
// }

// function handleMouth() {
//   mouthBtn.forEach((e) => {
//     const node = document.createElement("button");
//     node.classList.add(e.class);
//     node.value = e.value;
//     node.innerText = e.content;
//     types.appendChild(node);
//   });
//   const btnArray = document.getElementsByClassName("btn");
//   Array.from(btnArray).forEach((e) => {
//     e.addEventListener("click", (ele) => {
//       if (mouthBtn.some((btn) => btn.value === ele.target.value)) {
//         mouth.src = `alpaca/mouth/${ele.target.value}.png`;
//       }
//     });
//   });
// }

// function handleNeck() {
//   neckBtn.forEach((e) => {
//     const node = document.createElement("button");
//     node.classList.add(e.class);
//     node.value = e.value;
//     node.innerText = e.content;
//     types.appendChild(node);
//   });
//   const btnArray = document.getElementsByClassName("btn");
//   Array.from(btnArray).forEach((e) => {
//     e.addEventListener("click", (ele) => {
//       if (neckBtn.some((btn) => btn.value === ele.target.value)) {
//         neck.src = `alpaca/neck/${ele.target.value}.png`;
//       }
//     });
//   });
// }

// function handleLeg() {
//   legBtn.forEach((e) => {
//     const node = document.createElement("button");
//     node.classList.add(e.class);
//     node.value = e.value;
//     node.innerText = e.content;
//     types.appendChild(node);
//   });
//   const btnArray = document.getElementsByClassName("btn");
//   Array.from(btnArray).forEach((e) => {
//     e.addEventListener("click", (ele) => {
//       if (legBtn.some((btn) => btn.value === ele.target.value)) {
//         leg.src = `alpaca/leg/${ele.target.value}.png`;
//       }
//     });
//   });
// }

// function handleAcce() {
//   acceBtn.forEach((e) => {
//     const node = document.createElement("button");
//     node.classList.add(e.class);
//     node.value = e.value;
//     node.innerText = e.content;
//     types.appendChild(node);
//   });
//   const btnArray = document.getElementsByClassName("btn");
//   Array.from(btnArray).forEach((e) => {
//     e.addEventListener("click", (ele) => {
//       if (acceBtn.some((btn) => btn.value === ele.target.value)) {
//         acce.src = `alpaca/accessories/${ele.target.value}.png`;
//       }
//     });
//   });
// }

// function handleBackground() {
//   backgroundBtn.forEach((e) => {
//     const node = document.createElement("button");
//     node.classList.add(e.class);
//     node.value = e.value;
//     node.innerText = e.content;
//     types.appendChild(node);
//   });
//   const btnArray = document.getElementsByClassName("btn");
//   Array.from(btnArray).forEach((e) => {
//     e.addEventListener("click", (ele) => {
//       if (backgroundBtn.some((btn) => btn.value === ele.target.value)) {
//         background.src = `alpaca/backgrounds/${ele.target.value}.png`;
//       }
//     });
//   });
// }

// function handleAction(e) {
//   const actionToTakePlace = e.target.value;

//   if (actionToTakePlace === "random") {
//     const hairNumber = Math.floor(Math.random() * hairBtn.length);
//     hair.src = `alpaca/hair/${hairBtn[hairNumber].value}.png`;

//     const acceNumber = Math.floor(Math.random() * acceBtn.length);
//     acce.src = `alpaca/accessories/${acceBtn[acceNumber].value}.png`;

//     const backgroundNumber = Math.floor(Math.random() * backgroundBtn.length);
//     background.src = `alpaca/backgrounds/${backgroundBtn[backgroundNumber].value}.png`;

//     const earsNumber = Math.floor(Math.random() * earBtn.length);
//     ears.src = `alpaca/ears/${earBtn[earsNumber].value}.png`;

//     const eyesNumber = Math.floor(Math.random() * eyesBtn.length);
//     eyes.src = `alpaca/eyes/${eyesBtn[eyesNumber].value}.png`;

//     const legNumber = Math.floor(Math.random() * legBtn.length);
//     leg.src = `alpaca/leg/${legBtn[legNumber].value}.png`;

//     const mouthNumber = Math.floor(Math.random() * mouthBtn.length);
//     mouth.src = `alpaca/mouth/${mouthBtn[mouthNumber].value}.png`;

//     const neckNumber = Math.floor(Math.random() * neckBtn.length);
//     neck.src = `alpaca/neck/${neckBtn[neckNumber].value}.png`;
//   } else if (actionToTakePlace === "download") {
//     const element = document.getElementById("imageContainer");
//     html2canvas(element).then((canvas) => {
//       const imageURL = canvas.toDataURL("image/png");
//       const link = document.createElement("a");
//       link.href = imageURL;
//       link.download = "alpaca-image.png";
//       link.click();
//     });
//   }
// }

// partsBtn.forEach((e) => {
//   const node = document.createElement("button");
//   node.classList.add(e.class);
//   node.value = e.value;
//   node.innerText = e.content;
//   parts.appendChild(node);
// });

// const buttons = document.getElementsByClassName("btn");
// const actionBtn = document.getElementsByClassName("action-btn");

// Array.from(actionBtn).forEach((e) => {
//   e.addEventListener("click", handleAction);
// });

// Array.from(buttons).forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const btnValue = e.target.value;
//     types.innerHTML = ""; // Clear previous options
//     if (btnValue === "hair") handleHair();
//     else if (btnValue === "ears") handleEars();
//     else if (btnValue === "eyes") handleEyes();
//     else if (btnValue === "mouth") handleMouth();
//     else if (btnValue === "neck") handleNeck();
//     else if (btnValue === "leg") handleLeg();
//     else if (btnValue === "acce") handleAcce();
//     else if (btnValue === "background") handleBackground();
//   });
// });

// Element references
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

// Part definitions
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

// Handler map for all parts
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

// Populate parts buttons
partsBtn.forEach((part) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.value = part.value;
  btn.innerText = part.content;
  parts.appendChild(btn);
});

// Populate options for a selected part
function showOptions(partKey) {
  types.innerHTML = ""; // Clear previous options
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

// Handle Random and Download actions
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

// Add event listeners
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
