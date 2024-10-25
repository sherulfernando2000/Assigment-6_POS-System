/*--------------------------------------------customer section----------------------------------------------------------------------*/

$(document).ready(function (){
    $("#inputCustomerId").val(generatedId());
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

    setCustomerId();

})


/*====details fill when table row clicked====*/
 $("#customerTable").on('click','tr',function (){
    let id = $(this).find('.cus_id_val').text();
    let name = $(this).find('.cus_name_val').text();
    let address = $(this).find('.cus_address_val').text();
    let telephone = $(this).find('.cus_telephone_val').text();

    $("#inputCustomerId").val(id);
    $("#inputCustomerName").val(name);
    $("#inputAddress").val(address);
    $("#inputTelephoneNo").val(telephone);


});

/*====btn_clear_customer===*/
$("#btn_clear_customer").on('click',function (){
    $("#inputCustomerName").val("");
    $("#inputAddress").val("");
    $("#inputTelephoneNo").val("");

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
});


/*====delete customer====*/
$("#btn_delete_customer").on('click', function (){
    let id = $("#inputCustomerId").val();
    customer_array = customer_array.filter(customer => customer.cus_id !== id);
    loadCustomerTable();

});

/*====Search Customer====*/
$("#inputCustomerTel").on('keypress', function (e){
    if(e === 13 ){
        let telephoneNo = $(this).val();
        searchCustomer(telephoneNo);
    }
});



function searchCustomer(telephoneNo){
        let customer = customer_array.find(customer => customer.cus_Telephone === telephoneNo);
}




























































