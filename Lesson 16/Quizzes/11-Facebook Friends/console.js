var facebookProfile = {
        name :"Rick Barnhill",
        friends  : 1000 ,
        messages : ["Good Morning!!!"],

        postMessage : function(message){
              facebookProfile.messages.push(message);
              return facebookProfile.messages;
        },

        deleteMessage : function(index){
            for (i = index ; i < facebookProfile.messages.length; i++){
                facebookProfile.messages.splice(i,1);
                return facebookProfile.messages;
            }
        },

        addFriend : function(){
            facebookProfile.friends += 1;
            return  facebookProfile.friends;
        },

        removeFriend : function(){
            facebookProfile.friends -= 1;
            return  facebookProfile.friends;
        }
    };
console.log(facebookProfile.postMessage);
