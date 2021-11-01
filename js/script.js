
// Getting UI element

let productlist=document.querySelector('#cart-list');
let pencil=document.querySelector('#pencil');
let pen=document.querySelector('#pen');
let calculator=document.querySelector('#calculator');
let laptop=document.querySelector('#laptop');
let keyboard=document.querySelector('#keyboard');





// Product Class
class Product{
    constructor(id,name,price)
    {
        this.id=id;
        this.name=name;
        this.price=price;
    }
}


// UI Class

class UI{
  

    static addToProductList(product){

        
       // console.log(product);

         let list=document.querySelector('#cart-list'); 
         let row=document.createElement('tr');
        
         row.innerHTML=`
         <td>${product.id}</td>
         <td>${product.name}</td>
         <td>${product.price}</td>
         <td> <a href='#' class="delete" > remove </a> </td>`
         list.appendChild(row);
      //  console.log(row);
 
 
     }


     static showAlert(message,className)
     {
         let div=document.createElement('div');
         div.className=`alert  ${className}`;
         div.appendChild(document.createTextNode(message));
         let container=document.querySelector('.container');
         let table=document.querySelector('#product-list');
       
         container.insertBefore(div,table);
 
         setTimeout(()=>{
             document.querySelector('.alert').remove();
         },3000);
     }



     static deleteFromCart(target){
        if(target.hasAttribute('href')){
        target.parentElement.parentElement.remove();

        Store.removeProduct(target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim());

       // UI.showAlert('Product Removed!', 'success','c');
        }
    }
 
 
 }




 // Local Storage Class

class Store{
    static getProducts()
    {
        let products;
        if(localStorage.getItem('products')===null)
        {
            products=[];
        }
        else {
            products=JSON.parse(localStorage.getItem('products'));
        }

        return products;
    }


    static addProduct(product)
    {
        let products=Store.getProducts();
        products.push(product);

        localStorage.setItem('products',JSON.stringify(products));
    }

    static displayProducts(){
        let products=Store.getProducts();

        products.forEach(product=>{
               UI.addToProductList(product);
        });
    }

    static removeProduct(id)
    {
    
        let products=Store.getProducts();

       products.forEach((product,index)=>{
           console.log(product.id);
              if(product.id===id){
                  products.splice(index,1);
                //  console.log(product);
                
              }
        });
        localStorage.setItem('products',JSON.stringify(products));
    }

}





//Adding Evelnt Listener

pencil.addEventListener('click',addPencil);
pen.addEventListener('click',addPen);
calculator.addEventListener('click',addCalculator);
laptop.addEventListener('click',addLaptop);
keyboard.addEventListener('click',addKeyboard);
productlist.addEventListener('click',removeProduct);
document.addEventListener('DOMContentLoaded',Store.displayProducts());

function addPencil(e)
{
    let product=new Product('#223','Pencil','10.0 tk');
    UI.addToProductList(product);

    UI.showAlert("Product added!", "success");
    Store.addProduct(product);
    e.preventDefault();
}

function addPen(e)
{
    let product=new Product('#224','Pen','5.0 tk');
    UI.addToProductList(product);

    UI.showAlert("Product added!", "success");
    Store.addProduct(product);
    e.preventDefault();
}

function addCalculator(e)
{
    let product=new Product('#225','Calculator','1000.0 tk');
    UI.addToProductList(product);

    UI.showAlert("Product added!", "success");
    Store.addProduct(product);
    e.preventDefault();
}

function addLaptop(e)
{
    let product=new Product('#226','Laptop','120000.0 tk');
    UI.addToProductList(product);

    UI.showAlert("Product added!", "success");
    Store.addProduct(product);
    e.preventDefault();
}

function addKeyboard(e)
{
    let product=new Product('#227','Keyboard','2000.0 tk');
    UI.addToProductList(product);

    UI.showAlert("Product added!", "success");
    Store.addProduct(product);
    e.preventDefault();
}




function removeProduct(e){
    UI.deleteFromCart(e.target);
    e.preventDefault();

    
}

