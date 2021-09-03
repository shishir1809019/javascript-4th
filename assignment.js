//*******problem 1*******
function seerToMon(totalSeer) {
  //input parameter error checking
  if (typeof totalSeer != "number") {
    return "Please enter a number";
  }
  if (totalSeer <= 0) {
    return "Please Enter a positive number greater then 0";
  }
  //convert to mon and return
  const totalMon = totalSeer / 40;
  return totalMon;
}
//check the function
const totalSeer = 80;
const foundedMon = seerToMon(totalSeer);
console.log(foundedMon);

//*******problem 2*******
function totalSales(NoOfShirt, NoOfPent, NoOfShoe) {
  //input parameter error checking
  if (
    typeof NoOfShirt != "number" &&
    typeof NoOfPent != "number" &&
    typeof NoOfShoe != "number"
  ) {
    return "Please enter a number";
  }
  if (NoOfShirt < 0 || NoOfPent < 0 || NoOfShoe < 0) {
    return "Please Enter a positive number";
  }

  // price of all accessories
  const pricePerShirt = 100;
  const pricePerPent = 200;
  const pricePerShoe = 500;

  //sum of all accessories price and return
  const totalPrice =
    pricePerShirt * NoOfShirt +
    pricePerPent * NoOfPent +
    pricePerShoe * NoOfShoe;

  return totalPrice;
}

//check the function
const NoOfShirt = 1;
const NoOfPant = 1;
const NoOfShoe = 1;
const priceHaveToPaid = totalSales(NoOfShirt, NoOfPant, NoOfShoe);
console.log(priceHaveToPaid);

//*******problem 3*******
function deliveryCost(noOfTShirts) {
  //input parameter error checking
  if (typeof noOfTShirts != "number") {
    return "Please enter a number";
  }
  if (noOfTShirts <= 0) {
    return "Please Enter a positive number greater then 0";
  }

  //Terms of delivery cost
  const deliveryConstFirst100 = 100;
  const deliveryConstSecond100 = 80;
  const deliveryConstUpTo200 = 50;

  //when t-shirt number is 0 to 100
  if (noOfTShirts <= 100) {
    const totalDeliveryCost = 100 * noOfTShirts;
    return totalDeliveryCost;
  }
  //when t-shirt number is 0 to 200
  else if (noOfTShirts <= 200) {
    const deliveryCostFirst100 = 100 * deliveryConstFirst100;
    const restTShirts = noOfTShirts - 100;
    const deliveryCostForRest = restTShirts * deliveryConstSecond100;
    const totalDeliveryCost = deliveryCostFirst100 + deliveryCostForRest;
    return totalDeliveryCost;
  }
  //when t-shirt number is 0 to greater then 200
  else {
    const deliveryCostFirst100 = 100 * deliveryConstFirst100;
    const deliveryCostSecond100 = 100 * deliveryConstSecond100;
    const restTShirts = noOfTShirts - 200;
    const deliveryCostForRest = restTShirts * deliveryConstUpTo200;
    const totalDeliveryCost =
      deliveryCostFirst100 + deliveryCostSecond100 + deliveryCostForRest;
    return totalDeliveryCost;
  }
}

//check the function
const noOfTShirts = 201;
const TotalCost = deliveryCost(noOfTShirts);
console.log(TotalCost);

//*****problem 4******
function perfectFriend(friendsName) {
  // loop through into given array
  for (let i = 0; i < friendsName.length; i++) {
    const name = friendsName[i];
    //input parameter error checking
    if (typeof name != "string") {
      return "Please enter a name like 'lolita' ";
    }
    //friends name length check for find perfect friend and return name
    if (name.length == 5) {
      return name;
    }
  }

  return "could not find perfect friend"; // if there is not any perfect friend
}

//check the function
const friendsName = ["jabbar", "smitha", "sakil", "robin"];
const nameOfPerfectFriend = perfectFriend(friendsName);
console.log(nameOfPerfectFriend);
