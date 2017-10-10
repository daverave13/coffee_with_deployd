console.log(window.myTruck.createOrder({email: 'me@goldfinger.com', coffee: 'double mocha'}));
console.log(window.myTruck.createOrder({email: 'dr@no.com', coffee: 'decaf'}));
console.log(window.myTruck.createOrder({email: 'm@bond.com', coffee: 'earl grey'}));
console.log(window.myTruck.printOrders());
console.log(window.myTruck.deliverOrder('dr@no.com'));
console.log(window.myTruck.deliverOrder('m@bond.com'));
console.log(window.myTruck.printOrders());
