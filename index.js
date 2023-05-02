let orderPrice=document.getElementById('orderPrice');
let orderDish=document.querySelector('#orderDish')
let tableN=document.getElementById('tableN');

function onFormSubmit(e){
    e.preventDefault();
    const order={
        orderPrice:orderPrice.value,
        orderDish:orderDish.value,
        tableN:tableN.value
    }
console.log(order)
  axios.post(`http://localhost:3000/addData`,order)
  .then(res=>{
   showOrderOnscreen(res.data)
  })
  .catch(err=>console.log(err))  
}


function showOrderOnscreen(obj){
   let tableNumber=document.getElementById(`${obj.tableN}`);
   
    let newitem=`<li id='${obj.id}'>${obj.orderPrice} ${obj.tableN}  ${obj.orderDish}
    <button onClick="deleteItem('${obj.id}')">Delete</button>
    </li>`
    tableNumber.innerHTML=tableNumber.innerHTML+newitem

              document.getElementById('orderPrice').value='';
               document.querySelector('#orderDish').value='';

}

function deleteItem(id){
    axios.delete(`http://localhost:3000/delete/${id}`)
   .then(()=>{
    const li=document.getElementById(id)
    li.parentNode.removeChild(li)
   })
   .catch(err=>console.log(err))
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get(`http://localhost:3000/getdata`)
    .then(res=>{
        res.data.forEach(data=>{
           showOrderOnscreen(data)
        })
    })
    .catch(err=>console.log(err))

})