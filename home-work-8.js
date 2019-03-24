var clock = document.body.appendChild(
    document.createElement('h3')
)


for(var x = 0; x < 100; x++){
    (function(arg){
        return function(){
            setTimeout(
                () => clock.innerText = new Date().toLocaleString().split(', ')[1],
                1000 * arg
            )
        }
    })(x)()
}