// Increment of hearts icon
const heartChilds = document.getElementsByClassName("heart-child");
for (let heartChild of heartChilds ){
    heartChild.addEventListener('click',function(){
        document.getElementById('heart-parents').innerText++
    })
};

// Call Button


const callBtns = document.querySelectorAll('.call-btn');
callBtns.forEach(btn => {
    btn.addEventListener('click', function (){

        let coin = parseInt(document.getElementById('coin').innerText);
        let newCoin = coin - 20;
        document.getElementById('coin').innerText = newCoin;
        if ( newCoin < 0){
            document.getElementById('coin').innerText = 0;
            return alert(" কল করার জন্য আপনার পর্যাপ্ত কয়েন নেই! কল করার জন্য কমপক্ষে ২০টি কয়েন প্রয়োজন")
        }
        const cards = this.closest('.card');
        const childrens = cards.querySelectorAll('.child');
        let allContent = ' '
        childrens.forEach(child =>{
            allContent += child.innerText += " ";
        })
        alert("Calling"+ allContent +"...");

        const parentDiv = this.closest('.parent-div');
        const childDivs = parentDiv.querySelectorAll('.call-history');
        const historyContainer = document.getElementById('history-container');

        const type = childDivs[0].textContent;
        const name = childDivs[1].textContent;

        let now = new Date();
        let currentTime = now.toLocaleTimeString(); 

        const historyItem = document.createElement('div');
        historyItem.innerHTML = `
        
        <div style="display:flex; justify-content:space-between; align-items:center;"> <div><div style="font-weight: 600; font-size:14px;">${type}</div> <div style="font-weight: 500;">${name}</div> </div> ${currentTime}</div>
        
        
        `;
        historyItem.classList.add("bg-[#f2f2f2]","p-3","rounded-md","my-2");
        historyContainer.appendChild(historyItem);

    });

});

    // Clear History Section

let clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', function() {
        document.getElementById('history-container').innerHTML = '';
      
 });
//    Copy Number Button


const copyBtns = document.querySelectorAll('.copy-btn');
copyBtns.forEach( copybtn => {
    copybtn.addEventListener('click',function(){
        document.getElementById('copyIcon').innerText++;
        const cards = this.closest('.card');
        const childNumber = cards.querySelectorAll('.number');
        let content = '';

        childNumber.forEach(child => {
            content += child.innerText;
        })
        alert("নম্বরটি কপি হয়েছে:" + " "+ content);

        
        const tempInput = document.createElement("textarea");
        tempInput.value = content;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    });
    
});



 