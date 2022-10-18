import luhnAlgorithm from './checkLuhn';

const binkingBrands = {
  visa: {
    pattern: /^4/,
  },
  mastercard: {
    pattern: /^(51|52|53|54|55|22|23|24|25|26|27)/,
  },
  amex: {
    pattern: /^(34|37)/,
  },
  'diners-club': {
    pattern: /^(30|36|38|39)/,
  },
  discover: {
    pattern: /^(60|64|65)/,
  },
  jcb: {
    pattern: /^(18|21|35)/,
  },
  unionpay: {
    pattern: /^(62)/,
  },
  maestro: {
    pattern: /^(49|50|56|59|63|67)/,
  },
  mir: {
    pattern: /^(2200|2201|2202|2203|2204)/,
  },
};

const cardNumberField = document.querySelector('#card_number');
const btn = document.querySelector('#submitform');
const cards = document.querySelectorAll('.card');
const noValid = document.getElementsByClassName('no-valid')[0];

function clearCardClass() {
  [...cards].forEach((card) => {
    if (!card.className.includes('cdisabled')) {
      card.classList.add('cdisabled');
    }
  });
}

function cardChild(cardTitle) {
  clearCardClass();
  let cardName;
  [...cards].forEach((card) => {
    if (card.title.includes(cardTitle)) {
      cardName = card.title;
      card.classList.remove('cdisabled');
    }
  });
  return cardName.toLowerCase();
}

export default function cardFind() {
  cardNumberField.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });
  for (const [key, value] of Object.entries(binkingBrands)) {
    btn.addEventListener('click', () => {
      noValid.classList.remove('cart-valid');
      noValid.classList.remove('cart-novalid');
      if (value.pattern.test(cardNumberField.value)) {
        cardChild(key.toLowerCase());
      }
      if (cardNumberField.value.length === 0) {
        clearCardClass();
      }
      if (cardNumberField.value.length >= 12
        && luhnAlgorithm(cardNumberField.value.toString()) === true) {
        noValid.classList.add('cart-valid');
        noValid.textContent = 'Номер карты введён верно';
      } else if (cardNumberField.value.length >= 12) {
        noValid.classList.add('cart-novalid');
        noValid.textContent = 'Номер карты введён неверно';
      }
    });
  }
}
