function valid(){
    var User = document.f1.user.value;
    var Pass = document.f1.pass.value;

        sp = 0;
        for(i = 0 ; i < User.length ; i++)
        {
            ch = User.charAt(i);
            if(ch == ' ')
            {
                sp = 1;
            }
        }

        alphadigit = 0;
        alpha =/[a-zA-Z]/;
        digit =/[0-9]/;
        if(Pass.match(alpha) && Pass.match(digit))
        {
            alphadigit = 1;
        }
        if(sp == 1)
        {
            alert("Please enter your Username without Space");
            return false;
        }
        else if(User == "")
        {
            alert("Please enter Valid Username");
            return false
        }
        else if(Pass == "")
        {
            alert("Please enter Valid Password");
        }   

        else if(alphadigit == 0)
        {
            alert("Please Enter At least one alphabet and one digit");
            return false;
        }
        else
        {
            alert(User + " Successfully Logged in ...");
            window.location.href = "success.html";
            return true;
        }
        return true;
    
}