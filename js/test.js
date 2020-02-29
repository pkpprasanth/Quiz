
function views()
{
let con = localStorage.getItem("question");
let x = JSON.parse(con);
for(let i=0; i<x.length;i++)
{
    console.log(x[1].question);
}
}