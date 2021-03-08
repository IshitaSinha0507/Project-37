class Contestant{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }
    getCount(){
        var contestantCountRef= database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
           contestantCount = data.val();
        
        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        })

    }
    update(){
        var ContestantIndex = "contestants/contestant"+this.index;
        database.ref(ContestantIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerinfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
            contestant = data.val();
            
        })
    }
}