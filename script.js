

const companyData = {
    companyName: "Prime loan",
    amount: "4,500",
    accountNumber: "rdtc@ptaxis",
    customerName: "Customer1",




    day:"7",
    renewalFee:"3,000",
    repaymentAmount:""
};












// timer
(function(){

    let total = 2 * 60 + 31; // 151 seconds
    const el = document.getElementById("timer");

const countdown = setInterval(function () {

    let minutes = Math.floor(total / 60);
    let seconds = total % 60;

    // format 2 digits
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    el.textContent = minutes + " : " + seconds;

    total--;

    if (total < 0) {
        clearInterval(countdown);
        el.textContent = "0 : 00";
    }

}, 1000);

})();

// copy UPI
// document.getElementById('copyBtn').addEventListener('click', 
    function copyValue(){
  var upi = document.getElementById('upi').value;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(upi).then(function(){
      showToast('UPI copied to clipboard');
    }, function(){ fallbackCopy(upi); });
  } else fallbackCopy(upi);
};
function fallbackCopy(text){
  var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t);
  t.select();
  try{ document.execCommand('copy'); showToast('UPI copied to clipboard'); } catch(e){ alert('Copy failed — copy manually'); }
  document.body.removeChild(t);
}
function showToast(msg){
  var t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
  t.style.opacity = '1';
  setTimeout(function(){ t.style.opacity = '0'; },1600);
}

// submit UTR
function submitBtn(){
  var v = document.getElementById('utr').value.trim();
  if(!/^\d{12}$/.test(v)){ alert('Enter valid 12 digit UTR number'); return; }
  // show success modal with animation
  var modal = document.getElementById('modal');
  modal.classList.add('show'); modal.setAttribute('aria-hidden','false');
};

// ok button
function okButton(){
  var modal = document.getElementById('modal');
  modal.classList.remove('show'); modal.setAttribute('aria-hidden','true');
  // redirect back to index
  window.location.href = 'index.html';
};



function copyUPI(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text);
  alert("✅ UPI copied: " + text);
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get('product');
  if (product) {
    document.getElementById('productName').innerText = "Selected Loan: " + product;
  }
};

// open payment page
function pageChange(){
  // ensure relative path works on GitHub Pages
  window.location.href = 'payment.html';
};





// // Home page
function company(name) {
    if(document.getElementById("companyName")){
    document.getElementById("companyName").innerText =
        name.companyName;
    document.getElementById("amounts").innerText =
        name.amount;
    document.getElementById("customerName").innerText =
        name.customerName;
    document.getElementById("day").innerText =
        name.day;
    document.getElementById("renewalFee").innerText =
        name.renewalFee;
   document.getElementById("repaymentAmount").innerText =
        name.repaymentAmount;
    } else{
            document.getElementById("amounts").innerText =
        name.amount;
            document.getElementById("upi").value =
        name.accountNumber;
    }
    
}
company(companyData)



