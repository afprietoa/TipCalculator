
let calcBtn = document.getElementById('calculate-button');
let resMsg = document.getElementById('resume')

let valAcct = document.getElementById('value-account')
let valTip = document.getElementById('value-tip')
let valTot = document.getElementById('value-total')

const formatter = new Intl.NumberFormat( 'en-Us',{
    style: 'currency',
    currency: 'USD',
    minimunFraction: 0,
})

calcBtn.addEventListener('click', (e) =>{
    event.preventDefault(e);

    let acctInp = Number(document.getElementById('account-input').value)
    let tipInp = Number(document.getElementById('tip-input').value) * Math.pow(10,-2)

    valAcct.textContent = formatter.format(acctInp)
    valTip.textContent = "%" + tipInp * Math.pow(10,2)
    valTot.textContent = formatter.format(acctInp * tipInp)

    resMsg.classList.toggle('active');
})


    