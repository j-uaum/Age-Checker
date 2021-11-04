alert('Ola! Esse é um site teste, está sujeito a bugs e glitchs ')

function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 14){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 65){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 14){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 65){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    
    }


    }

//TROCAR AS FOTOS DAS PESSOAS PQ TA MT RIDICULO E NÃO CONDIZ
// TBM DAR UM TOQUE NO CSS