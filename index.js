
const textarea = document.querySelector('textarea');

textarea.addEventListener( 'input', autosize );
             
function autosize(){
  this.style.height = 'auto';
  let applyNow = this.style.offsetHeight;
  this.style.height = this.scrollHeight - 20 + 'px';
}

// check nonable placeholder and input after set display block for button

const button = document.querySelector('.upload-btn');

button.addEventListener('click', ()=>{
    let cloth_name = document.getElementById('name').value;
    let cloth_desc = document.getElementById('desc').value;
    let cloth_count = document.getElementById('count').value;
    let cloth_price = document.getElementById('price').value;

    nonable_inputs = {
        'name-error':cloth_name,
        'desc-error':cloth_desc,
        'count-error':cloth_count,
        'price-error':cloth_price,
    };

    for (let key in nonable_inputs){
        if (nonable_inputs[key] == ''){
            setTimeout( () => {
                document.getElementById(key).style.visibility = 'visible'
              }, 0);
              setTimeout( () => {
                document.getElementById(key).style.visibility = 'hidden'
              }, 1500);
        };
    };
});
