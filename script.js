function tabuada() {
    let num = document.getElementById('txtn');
    let tabu = document.getElementById('tab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        tabu.innerHTML = '';
        for (let c =1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`
            //adicionar um elemento...
            tabu.appendChild(item);
        }
    }
}