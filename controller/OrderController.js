
import {order_array,orderDetail_array,customer_array,item_array} from "../db/database.js";

$("inputCode1")




$(document).ready(function (){
    setOrderId();

})

function generateNextOrderId(){
   let id =  order_array.length +1;
   return "O0" + id;
}

function setOrderId(){
    $("#inputOrderId").val(generateNextOrderId());
    console.log(generateNextOrderId());
}

$("#inputCustomerTelephone1").on('keypress', function (e){
    if(e.which === 13 ){
        let telephoneNo = $(this).val();
        searchCustomer(telephoneNo);
    }else{
        Alert("Customer not found");
    }
});


function searchCustomer(telephoneNo){

    let customer = customer_array.find(customer => customer._telephone === telephoneNo);

    $("#inputCustomerName2").val(customer._name);

}

export function loadItemCbx(){
    console.log("2");
    $("#inputCode1").empty();
    item_array.map((item, number) => {
        let data = ` <option>${item._code}</option>`

        console.log(data);
            $("#inputCode1").append(data);

    })
}


$("#inputCode1").on('input', function (){
    console.log("selected");
    let id = $(this).val();
    let codeId = item_array.findIndex(item => item._code === id);
    if(codeId !== 'code' ){
        $("#inputDesc1").val(item_array[codeId ]._desc);
        $("#inputQtyOnHand").val(item_array[codeId]._qty);
        $("#inputUnitPrice").val(item_array[codeId]._price);

    }else{
        $("#inputDesc1").val("");
        $("#inputQtyOnHand").val("");
        $("#inputUnitPrice").val("");
    }
})

let cart_array = [];

$("#btn_addCart").on('click', function (){
    let itemId = $("#inputCode1").val();
    let price = +$("#inputUnitPrice").val();
    let qty = +$("#inputOrderQty").val();
    let total = price * qty;

    let qtyOnHand = +$("#inputQtyOnHand").val();
    let orderQty = +$("#inputOrderQty").val();


    if (orderQty < qtyOnHand){
        let cartIndex = cart_array.findIndex(cartItem => cartItem.itemId === itemId);
        if(cartIndex < 0){
            let cart_item = {
                itemId: itemId,
                price: price,
                qty: qty,
                total: total
            }

            cart_array.push(cart_item);
            loadCart();
            setTotalValues();
            clearItemSection();
        }else{
                cart_array[cartIndex].qty = qty;
                cart_array[cartIndex].total = cart_array[cartIndex].qty * price;
                loadCart();
                setTotalValues();
                clearItemSection();

        }
    }else{
        alert("Not enough qty on hand")
    }
});


function loadCart(){
    $("#cartTableBody").empty();
    cart_array.map((cartItem, number) => {
        let data = `<tr>
                                <td>${cartItem.itemId}</td>
                                <td>${cartItem.price}</td>
                                <td>${cartItem.qty}</td>
                                <td>${cartItem.total}</td>
                                <td><button class="cart_remove" data-id="${cartItem.itemId}">Remove</button></td>
                            </tr>`

        $("#cartTableBody").append(data);
    })
}


function setTotalValues(){
    let netTotal = calculateNetValue();
    $("#netTotal").text(`${netTotal}`);


}

function calculateNetValue(){
    let total = 0;
    cart_array.map((cartItem, number)=>{
       total += cartItem.total
    })

    return total;
}

function clearItemSection(){

}






























