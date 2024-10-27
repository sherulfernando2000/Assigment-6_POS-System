/*--------------------------------------------customer section----------------------------------------------------------------------*/

$(document).ready(function (){
    $("#inputCustomerId").val(generatedId());
    $("#inputItemId").val(generateItemId());
})

// customer array
let customer_array = [];

let loadCustomerTable = () =>{
    $("#customerTableBody").empty()
    customer_array.map((customer,number) => {
        let data = `<tr>
                           <td class="cus_id_val">${customer.cus_id}</td>
                           <td class="cus_name_val">${customer.cus_name}</td>
                           <td class="cus_address_val">${customer.cus_address}</td>
                           <td class="cus_telephone_val">${customer.cus_Telephone}</td>
                           </tr>`
        $("#customerTableBody").append(data);
    })



}

let generatedId = function generatedId(){
    console.log(customer_array.length + 1)
    let id = customer_array.length + 1;
    return "C0" + id;

}


let setCustomerId = () => {
    $("#inputCustomerId").val(generatedId());
}

/*===btn_save_customer===*/
$("#btn_save_customer").on('click', function (){
    console.log("clicked save customer");
    let cusId = generatedId();
    let cusName = $("#inputCustomerName").val();
    let cusAddress = $("#inputAddress").val();
    let cusTelephone = $("#inputTelephoneNo").val();



    console.log("cusId ", cusId, "cusName", cusName,cusAddress, cusTelephone);
    let customer = {
        cus_id: cusId,
        cus_name: cusName,
        cus_address: cusAddress,
        cus_Telephone: cusTelephone
    }

    customer_array.push(customer);

    loadCustomerTable();

    clearFieldCustomer();
    setCustomerId();

})


/*====details fill when table row clicked====*/
 $("#customerTable").on('click','tr',function (){
     console.log("clicked");
    let id = $(this).find('.cus_id_val').text();
    let name = $(this).find('.cus_name_val').text();
    let address = $(this).find('.cus_address_val').text();
    let telephone = $(this).find('.cus_telephone_val').text();

    console.log("Name: ", name );
    console.log("address ", address);
    console.log("telephone ", telephone);

    $("#inputCustomerId").val(id);
    $("#inputCustomerName").val(name);
    $("#inputAddress").val(address);
    $("#inputTelephoneNo").val(telephone);


     let testindex = $(this).index();
     let testcustomer  = customer_array[testindex];

     console.log("testId:" ,testcustomer);
     console.log("testId:" ,testcustomer.cus_id);
     console.log("testName:" ,testcustomer.cus_name);
     console.log("testAddress:" ,testcustomer.cus_address);


});

 function clearFieldCustomer(){
     $("#inputCustomerName").val("");
     $("#inputAddress").val("");
     $("#inputTelephoneNo").val("");
 }

/*====btn_clear_customer===*/
$("#btn_clear_customer").on('click',function (){
    clearFieldCustomer();

})


/*====update customer=====*/

$("#btn_update_customer").on('click', function (){
    let id = $("#inputCustomerId").val();
    let customer = customer_array.find(customer => customer.cus_id === id);
    console.log(customer);

    customer.cus_name = $("#inputCustomerName").val();
    customer.cus_address = $("#inputAddress").val();
    customer.cus_Telephone= $("#inputTelephoneNo").val();

    loadCustomerTable();
    clearFieldCustomer();
    setCustomerId();
});


/*====delete customer====*/
$("#btn_delete_customer").on('click', function (){
    let id = $("#inputCustomerId").val();
    customer_array = customer_array.filter(customer => customer.cus_id !== id);
    loadCustomerTable();

});

/*====Search Customer====*/
$("#inputCustomerTel").on('keypress', function (e){
    if(e.which === 13 ){
        let telephoneNo = $(this).val();
        searchCustomer(telephoneNo);
    }else{
        loadCustomerTable();
    }
});



function searchCustomer(telephoneNo){

         $("#customerTableBody").empty()
        let customer = customer_array.find(customer => customer.cus_Telephone === telephoneNo);
        let data = `<tr>
                           <td class="cus_id_val">${customer.cus_id}</td>
                           <td class="cus_name_val">${customer.cus_name}</td>
                           <td class="cus_address_val">${customer.cus_address}</td>
                           <td class="cus_telephone_val">${customer.cus_Telephone}</td>
                           </tr>`
         $("#customerTableBody").append(data);

}



/*--------------------------------------------item section----------------------------------------------------------------------*/

//item array
let item_array = [];





// /*===btn_save_item===*/

$("#btn_save_item").on('click',function (){
    let itemId = generateItemId();
    let itemDesc = $("#inputItemDesc").val();
    let itemPrice = $("#inputPrice").val();
    let itemQty = $("#inputQty").val();

    console.log(itemId+ itemDesc+ itemPrice+ itemQty);

    let item = {
        item_id :itemId,
        item_desc :itemDesc,
        item_price : itemPrice,
        item_qty : itemQty
    }

    item_array.push(item);
    loadItemTable();
    $("#inputItemId").val(generateItemId());


});

function loadItemTable(){
    $("#itemTableBody").empty();
    item_array.map((item,number) => {
        let data =  `<tr>
            <td class="item_id_val">${item.item_id}</td>
            <td class="item_desc_val">${item.item_desc}</td>
            <td class="item_price_val">${item.item_price}</td>
            <td class="item_qty_val">${item.item_qty}</td>
          </tr>`

        $("#itemTableBody").append(data);
    })
}

function generateItemId(){
    let nextId = item_array.length+1;
    return "I0" + nextId;
}

/*====details fill when table row clicked in item====*/
$("#itemTable").on('click','tr',function (){
    console.log("item row clicked")
    let id = $(this).find('.item_id_val').text();
    let desc = $(this).find('.item_desc_val').text();
    let price = $(this).find('.item_price_val').text();
    let qty = $(this).find('.item_qty_val').text();

    console.log(id);

    $("#inputItemId").val(id);
    $("#inputItemDesc").val(desc);
    $("#inputPrice").val(price);
    $("#inputQtyo").val(qty);

});

/*====btn_clear_item===*/
function clearField(){
    $("#inputItemDesc").val("");
    $("#inputPrice").val("");
    $("#inputQty ").val("");
}

$("#btn_clear_item").on('click',function (){
    $("#inputItemDesc").val("");
    $("#inputPrice").val("");
    $("#inputQty ").val("");

})

/*====btn_update_item===*/
$("#btn_update_item").on('click', function (){
    let id = $("#inputItemId").val();
    let item = item_array.find(item => item.item_id === id);
    console.log(item);

    item.item_desc = $("#inputItemDesc").val();
    item.item_price = $("#inputPrice").val();
    item.item_qty= $("#inputQty").val();

    loadItemTable();
});


/*====delete item====*/
$("#btn_delete_item").on('click', function (){
    let id = $("#inputItemId").val();
    item_array = item_array.filter(item => item.item_id !== id);
    loadItemTable();

});

/*====Search Customer====*/
$("#inputItemCode").on('keypress', function (e){
    if(e.which === 13 ){
        let iCode = $(this).val();
        searchItem(iCode);
    }else{
       loadItemTable();
    }
});



function searchItem(iCode){

    $("#itemTableBody").empty()
    let item = item_array.find(item => item.item_id === iCode);
    let data = `<tr>
                           <td class="cus_id_val">${item.item_id}</td>
                           <td class="cus_name_val">${item.item_desc}</td>
                           <td class="cus_address_val">${item.item_price}</td>
                           <td class="cus_telephone_val">${item.item_qty}</td>
                           </tr>`
    $("#itemTableBody").append(data);

}













































