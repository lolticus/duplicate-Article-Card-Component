var button = document.querySelectorAll('.share-button');
var tooltip = document.querySelectorAll('.tooltip'); 

button.forEach(btn => { 
    btn.addEventListener("click", e => { 

        btn.classList.toggle("active")

        tooltip.forEach((tt) => {

            tt.classList.toggle("expand")


        })

    })

})




