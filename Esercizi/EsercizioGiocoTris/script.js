function giocata(row, col)
{
    let grid = document.getElementById('grid')
    let cella = grid.children[row].children[col]
    let footer = document.getElementsByClassName('footer')[0]
    let giocatoreDiTurno = document.getElementsByClassName('header')[0].children[1]
    
    if(chiHaVinto()!=undefined)
        alert('Partita Finita')
    else if(cella.childElementCount==0)
    {
        if( giocatoreDiTurno.innerText=="X")
        {
            cella.innerHTML = '<div class="x">X</div>'
            giocatoreDiTurno.outerHTML = '<div class="o">O</div>'
        }
        else
        {
            cella.innerHTML = '<div class="o">O</div>'
            giocatoreDiTurno.outerHTML = '<div class="x">X</div>'
        }

        let risultato = chiHaVinto()
        /*if(risultato == "x")
            footer.innerText = "Ha vinto X"
        else if(risultato == "o")
            footer.innerText = "Ha vinto O"*/
        if(risultato == 'x' || risultato=='o')
            footer.innerText = `Ha vinto ${risultato.toUpperCase()}`
        else if(risultato == "pari")
            footer.innerText = "Partita Pari"

    }
    else
        alert("Posizione già occupata")
}

function nuovaPartita()
{
    let footer = document.getElementsByClassName('footer')[0]
    let giocatoreDiTurno = document.getElementsByClassName('header')[0].children[1]

    footer.innerHTML=""
    giocatoreDiTurno.outerHTML='<div class="x">X</div>'

    let celle = document.getElementsByClassName('cella')

    for(let i =0; i< celle.length; i++)
        celle[i].innerHTML=""
}
