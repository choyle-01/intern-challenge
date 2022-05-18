const submissionForm = document.querySelector('.search-form')
const responceArea = document.querySelector('.responses')
const textPrompt = document.querySelector('#prompt')

const handleSubmit = function (e) {
  e.preventDefault();
  
  const searchTerms = textPrompt.value.trim();

  if (searchTerms) {
    getResponce(searchTerms);
  } else {
    alert("Please input valid text into the submission box!")
  }

};

const getResponce = function () {

}



submissionForm.addEventListener('submit', handleSubmit)