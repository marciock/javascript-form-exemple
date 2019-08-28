const estados=document.getElementById('estados');
const cidades=document.getElementById('cidades');

cidades.innerHTML='<option>Cidades</option>'
// console.log(locais[0].estados)

const JSONEstados=locais[0].estados;

JSONEstados.map((e)=>{
//  console.log(e)
  let opt=`<option value=${e.sigla}>${e.nome}</option>`;

  estados.innerHTML +=opt;
}).join('')

estados.addEventListener('change',(e)=>{
  cidades.innerHTML=''
   let index=e.target.selectedIndex
    let opt=e.target.options[index];
   // console.log(opt.value)
    let getCidade=JSONEstados.find((estado)=>{
      return estado.sigla===opt.value
    })
    
    getCidade.cidades.map((c,id)=>{
      console.log(id)
     
      let optCidades=`<option value=${id}>${c}</option>`
      cidades.innerHTML +=optCidades
    })

   
})