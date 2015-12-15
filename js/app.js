/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

var SantaModel = {
  
  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
   init : function(list){
       this.requests = requests;
       console.log("ciao");
   },
  
   /* It moves "current" to the next request */
   next : function (){
        if(num_request < requests.lenght-1){
        return num_request+1;
        }
        else{
        return null;
        }
   },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function (num_request) {
       console.log(requests[num_request].question);
       return requests[num_request].question;
   },  
 
    getCurrentAnswer : function (num_request) {
        console.log(requests[num_request].answer);
        return requests[num_request].answer;
    },
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
   pack : function(item) {
   }      
  
};

//////////////////

var SantaControl = {
    init : function(){
        SantaModel.init();
        SantaView.init(requests); 
    },
    
    next : function(num_request) {
        return SantaModel.next();
    },
    
    getCurrentRequest : function (num_request) {
       return SantaModel.getCurrentRequest(num_request);
   },  
    
    getCurrentAnswer : function (num_request) {
       return SantaModel.getCurrentAnswer(num_request);
   }    
};


//////////////////



var SantaView = {
    init : function(requests){
        var self = this;
        var result = 0;
        console.log(self);
        result += SantaView.renderQuestion(0);
        //result += self.renderQuestion(1);
        //result += self.renderQuestion(2);
        console.log(result);
        //$(".result").append("Il tuo punteggio è: " +result);
    },
    
    renderQuestion : function(num_request){
        
        var tmpl = SantaControl.getCurrentRequest(num_request);
        $(".questions").empty();
        $(".questions").append("<li>"+ tmpl + "<li>");
        //$(".questions").append("<li>" + requests[num_request].question + "</li>");
        
        $(".btn-yes").on("click", function(){
            var choice = "yes";
            console.log("yes");
            var correctAnswer = SantaControl.getCurrentAnswer(num_request);
            if (choice == correctAnswer){
                var result = 1;
                return result;
            }
            else {
                var result = 0;
                return result;
            }
        });
        
        $(".btn-no").on("click", function(){
            var choice = "no";
            console.log("no");
            if (choice == correctAnswer){
                var result = 1;
                return result;
            }
            else {
                var result = 0;
                return result; 
            }
        });
        //return result
    }
};

$(document).ready(function(){
    SantaControl.init();
});
