let n = 15

//Triangolo Sx
for(let i=1; i<=n; i++)
{
    /*let s = ""
    for(let j=0; j<i; j++)
        s += "*"
    */

    console.log("*".repeat(i))
}

//Traingolo Dx
for(let i=1; i<=n; i++)
{
    console.log(" ".repeat(n-i) + "*".repeat(i))
}

//Clessidra
for(let i=0; i<n; i++)
{
    if(i<n/2)
        console.log(" ".repeat(i) + "*".repeat(n-2*i)) 
    else
        console.log(" ".repeat(n-i-1) + "*".repeat(2*i-n+2)) 
}