function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function getNewScoreValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}
function setNewScoreValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
} 