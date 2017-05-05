class Weather
{
    constructor(options){
        console.info("we are a constructor");

        //set default values
        this.weather = {};
        this.latitude = "";
        this.longitude = "";
        this.apiKey = options.apiKey;
        this.init();
    }

    init(){
        console.info("the init function starts things");
        this.getMyLocation();
        this.storeInCache();
        this.getFromcache();
    }

    getMyLocation(){
        var that = this;
        console.info("I'm the location");

        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
            that.latitude = position.coords.latitude;
            that.longitude = position.coords.longitude;
            that.getWeather();
        });
    }

    getWeather(){
        var that = this;
        console.info("I'm the weather");
        // GEt request naar darksky api https://api.darksky.net/forecast/[key]/[latitude],[longitude]

        const call = `https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude}?units=ca`;
        console.log(call);
        // Make the call, saul
        $.ajax({
            method: "GET",
            url: call,
            dataType: "jsonp"
        }).done(function(response){
            console.log(response);
            that.weather = response.currently;
            that.updateUI();
        });
    }

    updateUI(){
        console.log("updatingui");
        var color;
        var icon;
        var expl;
        var sum = this.weather.summary;
        if (sum.includes("Cloudy") == true){
            color = "#D9D9D9";
            icon = "/images/iconCloudy.svg" ;
            expl = "Voorzie genoeg water voor je kiemende worteltjes"+
                " Stilstand van groei door vochtgebrek moet vermeden worden, daar dit zorgt voor voze of gescheurde worteltjes."
        }
        else if (sum.includes("Clear") == true){
            color = "#87CEEB";
            icon = "/images/iconClear.svg" ;
            expl = "Voorzie genoeg water voor je kiemende worteltjes"+
                " een droge bovengrond wil ook niet altijd zeggen dat je plant te weinig water heeft"+
                " Graaf een klein stukje in de grond om te zien of de grond nog vochtig is"+
                " Stilstand van groei door vochtgebrek moet vermeden worden, daar dit zorgt voor voze of gescheurde worteltjes."
        }
        else if (sum.includes("Rain") == true){
            color = "#BDBDBD";
            expl = "Let op dat je wortelen niet te nat staan!" +
                "Dek je perceel of potten bijvoorbeeld af met stro of een dikke laag mulch."+
                "Een te hoge schommeling in de vochtigheid van de bodem kan ervoor zorgen dat de wortel barst."+
                "Probeer te wieden tijdens regendagen en bij veel wind, dan is de wortelvlieg veel minder actief. "
        }
        $("body").css("background-color",color);
        $("#app").append(`<h1>${Math.round(this.weather.temperature)}&deg;</h1>`);
        $("#icon").append(`<img src="${icon}" alt="">`);
        $("#expl").append(`<p>${expl}</p>`);
    }

    storeInCache(){
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var day = weekday[d.getDay()];
        var hour = d.getHours();
        console.log(hour,day);

        localStorage.setItem("time",hour);
        localStorage.setItem("day",day);
    }

    getFromcache(){
        var time = localStorage.getItem("time");
        var day = localStorage.getItem("day");

        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var today = weekday[new Date().getDay()];
        var now  =  new Date().getHours();

        if(time < now && day != today )
        {
            console.log("it's an hour later");
            this.updateUI();
        }
        console.log("it's",time,today);
    }
}

const options = {
    apiKey: "34347ede62e0a963266be2e3085ab815"
};
const App = new Weather(options);
