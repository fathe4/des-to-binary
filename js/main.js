
const result = document.querySelector('#result');
const submit = document.querySelector('#submit');


const binary = (element) => {

  element.preventDefault();

  const number = document.querySelector('#number').value;

  if (number == '') {

    alert('Kuttar bacca number de')

  } else if (number < 0) {

    alert('sotik positive number de')

  } else {
    result.style.visibility = 'visible';
  }

  // converting
  binaryNum = Number(number).toString(2);

  result.innerHTML = binaryNum;

}

submit.addEventListener('click', binary);