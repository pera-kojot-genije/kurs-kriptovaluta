document.getElementById('lightth').addEventListener('click', function() {
    document.getElementById("nosacd").style.display = "none";
    document.getElementById("nosacl").style.display = "block";
});

document.getElementById('darkth').addEventListener('click', function() {
    document.getElementById("nosacl").style.display = "none";
    document.getElementById("nosacd").style.display = "block";
});
