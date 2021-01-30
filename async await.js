<html>
<body>

<h2>JavaScript async / await</h2>

<h1 id="demo"></h1>

<script>
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve(" You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
</script>

</body>
</html>
