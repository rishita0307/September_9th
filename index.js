/*
document.getElementById("button").addEventListener("click", () => {
    
});
*/
function addToList(){
    alert('Added');
    var guestName = document.getElementById("name").value;
    document.getElementById("list").innerHTML += ('<li>' + guestName + '</li>');
}