class Form{
    constructor(){
        this.input = createInput("Enter name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3');
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Hurdles");
        title.position(130,0);

        this.input.position(130,160);
        this.button.position(250,200);
        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount + 1;

            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("hello " + player.name + ".Check out the console window for rank");
            this.greeting.position(130,160);
        })
    }
}