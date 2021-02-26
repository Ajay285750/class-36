class Form{
    constructor(){}

    display(){
        var title=createElement("h1")
        title.position(200,50);
        title.html('car racing game')
        var input=createInput("name")
        input.position(width/2,height/2)
        var button=createButton("play")
        button.position(width/2,height/2+50)

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            console.log(name)
            var playerCount=0;
            playerCount=playerCount+1
            database.ref("player"+playerCount).set({
                name:name
            })
            var greeting=createElement("h2")
            greeting.html("hello"+name)
            greeting.position(300,250);
        })
    }
}