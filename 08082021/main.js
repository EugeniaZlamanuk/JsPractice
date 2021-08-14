function buttonClick1(){

    let n = 0;

    while (n < 3) {
        alert("номер "+n+"!")
        n++;
    }



}
function buttonClick2(){
    let ans;
    do {
        ans=prompt('Введите число больше 100');
        if (ans<100) {
            if (ans == null) {
                break;
            } else {
                alert(ans + " меньше 100. Введите еще раз");
            }
        }
    } while (ans <= 100);

}
