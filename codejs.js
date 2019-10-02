var d = new Date();
document.getElementById("date").innerHTML = d

var x = document.getElementById('xem_them')
var y = document.getElementById('more');
var z = document.getElementById('more0')
var b = document.getElementById('cla')
y.addEventListener('click', function() {
    x.style.display = 'inline'
    z.appendChild(x)

})
y.addEventListener('dblclick', function() {
    b.style.display = 'inline'
    x.appendChild(b)

})