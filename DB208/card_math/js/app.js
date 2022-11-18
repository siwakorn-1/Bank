class Deck {
  #cards = [];

  constructor() {
    const suites = "spade,heart,clud,diamond".split(",");
    const marks = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
    for (let s of suites) {
      for (let m of marks) {
        this.#cards.push({ mark: m, suite: s });
      }
    }
  }

  reset() {
    this.#cards = [];
    const suites = "spade,heart,clud,diamond".split(",");
    const marks = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
    for (let s of suites) {
      for (let m of marks) {
        this.#cards.push({ mark: m, suite: s });
      }
    }
    return this.deal();
  }

  deal() {
    return this.#cards;
  }

  shuffle() {
    this.#cards.sort((a, b) => Math.random() - 0.5);
    return this.deal();
  }
}
function doDeal() {
  deck_area.innerHTML = "";
  for (let card of deck.shuffle()) {
    deck_area.innerHTML += `<div class="deck-card m${card.mark} ${card.suite}"></div>`;
  }
}

function doReset() {
  deck_area.innerHTML = "";
  for (let card of deck.reset()) {
    deck_area.innerHTML += `<div class="card m${card.mark} ${card.suite}"></div>`;
  }
}
function factorial(num) {
  if (num == 0) {
    return 1n;
  } else {
    return BigInt(num) * factorial(num - 1);
  }
}

function calCombination() {
  const r = combSize.value;
  combSizeLabel.innerHTML = r;
  const amount = factorial(52) / (factorial(52 - r) * factorial(r));
  amountComb.innerHTML = amount.toLocaleString("th-TH");
  combId.setAttribute("max", amount);
  combId.value = amount;
  calPermutation();
  selCombination();
}

function selCombination() {
  const id = combId.value;
  comdIdLabel.innerHTML = id;
}

function selPermutation() {}

function calPermutation() {
  const n = combSize.value;
  permSizeLabel.innerHTML = n;
  max_perm = factorial(n);
  amountPerm.innerHTML = max_perm.toLocaleString("th-TH");
  permId.value = max_perm;
  permIdLabel.innerHTML = max_perm;
}

const deck = new Deck();
let max_perm;
const deck_area = document.getElementById("deck-area");
const combSizeLabel = document.getElementById("comb_size_label");
const combSize = document.getElementById("comb_size");
const amountComb = document.getElementById("amount_comb");
const combId = document.getElementById("comb_id");
const comdIdLabel = document.getElementById("comb_id_label");
const permSizeLabel = document.getElementById("perm_size_label");
const amountPerm = document.getElementById("amount_perm");
const permId = document.getElementById("perm_id");
const permIdLabel = document.getElementById("perm_id_label");
doDeal();
calCombination();
