let url="http://universities.hipolabs.com/search?name=";
// let country = "nepal";
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country =document.querySelector("input").value;
    // console.log(country);
   let colleges = await getcollege(country);
   showdata(colleges);
})
function showdata(colleges)
{ 
    let list = document.querySelector("#list");
    list.innerText="";
    for(col of colleges)
    {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);

    } 
}
async function getcollege(country){
    try{
        let res = await axios.get(url+country);
        // console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log("error 404");
        return []; 
    }
} 