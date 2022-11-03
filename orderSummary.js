var tellimus = {  
    "id": 2113,  
    "orderNumber": "E210126001",  
    "createdAt": "2021-01-26 16:04:24",  
    "clientName": "Kalle Tali",  
    "deliveryType": "Omniva smartpost",  
    "deliveryValue": 178,  
    "rows": [  
      {  
        "article_id": 31,  
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W",  
        "product_code": "257549",  
        "price": 49.1666666667,  
        "amount": 1,  
        "vat": 0.2  
      },  
      {  
        "article_id": 23420,  
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk",  
        "product_code": "355836",  
        "price": 5.0666666667,  
        "amount": 2,  
        "vat": 0.2  
      },  
      {  
        "article_id": 23421,  
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk",  
        "product_code": "000000000501267301",  
        "price": 5.825,  
        "amount": 1,  
        "vat": 0.2  
      }  
    ]  
  } 
   
  function orderSummary(tellimus){ 
      const rows = tellimus.rows; 
   
      var kokku = 0; 
       
      rows.forEach((row) => { 
          const name = row.name; 
          const price = row.price; 
          const amount = row.amount; 
   
          const vatted = countPrice(price, amount); 
   
          kokku  += vatted; 
           
          console.log(`${name} (${amount} tk.) - ${vatted.toFixed(2)} EUR`) 
      }) 
      console.log(`${kokku.toFixed(2)} EUR`) 
      function countPrice(price, amount){ 
          const vat =  0.2; 
          const percent = price * vat; 
          return (price + percent) * amount; 
      } 
  } 
   