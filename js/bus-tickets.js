const Sits=document.querySelectorAll(".sits")
for(const sit of Sits){
sit.addEventListener('click',colorMe)
function colorMe() {
      sit.classList.add('bg-[#1DD100]')
    
    const currentSit=getNewScoreValueById('current-sit');
    const leftSit=currentSit -1;
    setNewScoreValueById('current-sit',leftSit);

const currentBookedSit=getNewScoreValueById("booked-sit");
const newBookedSit=currentBookedSit +1;
setNewScoreValueById('booked-sit',newBookedSit);



}
}




