// 1 (3 points)
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

// 2 (4 points)
var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    return function ( message ) {
        var num = index
        setTimeout(
            () => container.textContent += message[num]
            ,1000 * velocity * num)
        index++ < message.length -1 ? typeMessage(message) : null
    }
})( 1 )

typeMessage ( `Welcome to the hell` )


// 3 (5 points)
function User ( name ) {
    this.name = name,
        this.id = this.counter()
}

User.prototype.counter = (function(){
    var id = 0
    return function(){
        return typeof this.id === 'number' ? id : id++
    }
})()

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]
