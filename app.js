// Task 1: Total Price Calculation
var itemsArray = [
    {name:"juice", price:50, quantity:3},
    {name:"cookie", price:30, quantity:9}
];
itemsArray.forEach(item => console.log(item.name + ": " + (item.price * item.quantity)));

// Task 2: Check Object Properties
var user = { name: "Amna", age: 18, country: "Pakistan" };
console.log("Age exists:", 'age' in user);
console.log("firstName exists:", 'firstName' in user);

// Task 3: Constructor Function
function Record(name, gender, edu) {
    this.name = name;
    this.gender = gender;
    this.edu = edu;
}

// Task 4: Form Submit & LocalStorage
document.getElementById('recordForm').onsubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let edu = document.getElementById('edu').value;

    let newRecord = new Record(name, gender, edu);
    
    // Save to LocalStorage
    let data = JSON.parse(localStorage.getItem('records') || "[]");
    data.push(newRecord);
    localStorage.setItem('records', JSON.stringify(data));
    
    alert("Record has been saved!");
};