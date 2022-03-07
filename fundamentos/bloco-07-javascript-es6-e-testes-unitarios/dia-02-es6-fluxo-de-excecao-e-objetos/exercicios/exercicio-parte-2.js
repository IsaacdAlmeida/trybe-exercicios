const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson
  const customer = order.name
  const customerPhone = order.phoneNumber
  const customerStreet = order.address.street
  const customerNumber = order.address.number
  const customerApartment = order.address.apartment

  console.log(`Olá, ${deliveryPerson}, entrega para: ${customer}, telefone: ${customerPhone}, ${customerStreet}, N° ${customerNumber}, APT: ${customerApartment}.`);

}

customerInfo(order);

const orderModifier = (order) => {;
  const newClient = order.name = 'Luiz silva';
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const newTotal = order.payment.total = 50;

  console.log(`Olá ${newClient}, o total do seu pedido de ${pizzas[0]},${pizzas[1]} e ${drink} é R$ ${newTotal}.`);
}

orderModifier(order);