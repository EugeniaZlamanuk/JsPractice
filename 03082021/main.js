function buttonClick1(){
let ans=prompt('Какое официальное название JavaScript?');
    if (ans=='ECMAscript') {
        alert('YES!!!');
    } else {
        alert ('Не знаете? ECMAscript');
    }
}
function buttonClick2(){
    let ans=prompt('Введите число');
    if (ans>0) {
        alert('1');
    } else if (ans<0){
        alert ('-1');
    } else if (ans==0){
        alert ('0');
    }

}
function buttonClick3() {
    let ans = prompt('Кто пришел?');
    console.log(ans);
    if (ans != null) {
        if (ans !='админ'){
            alert ('Я вас не знаю!');
        }
        else {
          let pass=prompt('введите пароль');
          if (pass!=null){
              if (pass !='Черный властелин'){
                  alert ('пароль не верен');
              }
              else alert('Добро пожаловать!');
          }
          else {
              alert('Вход отменен!');
          }
        }
    }
    else {
        alert('Вход отменен!');
    }

}