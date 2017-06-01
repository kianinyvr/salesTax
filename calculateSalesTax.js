var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var total = {
  sales: 0,
}


var company = {};

//company[companySalesData[0].name] = total;

console.log(company);

for(var i = 0; i < companySalesData.length; i++){
  //if(contains(companySalesData[i]) === true)
  var name = companySalesData[i].name;
  console.log("company in for loop is: ", name);
  var prov = companySalesData[i].province;
  var sales = sum(companySalesData[i]);
  var taxes = sales * salesTaxRates[prov]

  if(company.hasOwnProperty(name) === true){
    ///company is already in company object
    //update total sales of company
    console.log("WE ARE IN TRUE ");
    company[name]["Total Sales"] += sales;
    company[name]["Total Taxes"] += taxes;





  }

  else{ ///company is not already in company object
        // update company name and also company sales

        company[name] = {
          "Total Sales": sales,
          "Total Taxes": taxes
        };
  }






}

console.log(company);



function sum(array){
  return array.sales.reduce((l, r) => l + r, 0);
}


function taxes(sales, province) {
  return sum(sale * province);
}

