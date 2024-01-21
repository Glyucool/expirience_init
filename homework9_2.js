const company = {
    name: 'Main Company',
    type: 'Parent Company',
    platform: 'Ticket Selling Platform',
    sellsSolution: 'Ticket Selling Solution',
    clients: [
      {
        name: 'Client1',
        type: 'subCompany',
        uses: 'Ticket Selling Software',
        sells: 'Ticket Selling Solution',
        partners: [
          {
            name: 'Client1.1',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
          {
            name: 'Client1.2',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
          {
            name: 'Client1.3',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
        ],
      },
      {
        name: 'Client2',
        type: 'subCompany',
        uses: 'Ticket Selling Software',
        sells: 'Ticket Selling Solution',
        partners: [
          {
            name: 'Client2.1',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
          {
            name: 'Client2.2',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
          {
            name: 'Client2.3',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
        ],
      },
      {
        name: 'Client3',
        type: 'subCompany',
        uses: 'Ticket Selling Software',
        sells: 'Ticket Selling Solution',
        partners: [
          {
            name: 'Client3.1',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
          {
            name: 'Client3.2',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
          {
            name: 'Client3.3',
            type: 'subSubCompany',
            uses: 'Ticket Selling Solution',
            sells: 'Ticket Selling Solution',
          },
        ],
      },
    ],
  };
  
  function findValueByKey(companyName, companyObj) {
    if (companyObj.name === companyName) {
      return companyObj;
    }
  
    if (companyObj.clients) {
      for (const client of companyObj.clients) {
        const result = findValueByKey(companyName, client);
        if (result) {
          return result;
        }
      }
    }
  
    return null;
  }
  
  // Приклад виклику функції
  const result = findValueByKey('Client2.2', company);
  console.log(result);
  