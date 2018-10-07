(function(){
    var the_s = 28799;//定义剩余时间, 必须用时间戳.单位为秒
    var  d, h, m,f;
    function countTime(){
        /*var date = new Date();
        var now = date.getTime();            //设置截止时间            
        var endDate = new Date("2018/9/26 17:23:23");
        var end = endDate.getTime();
        //时间差
        var leftTime = end-now;
        //定义变量 d,h,m,s保存倒计时的时间
        var d,h,m,s;            
        if (leftTime>=0) { 
            d = Math.floor(leftTime/1000/60/60/24);                
            h = Math.floor(leftTime/1000/60/60%24);                
            m = Math.floor(leftTime/1000/60%60);                
            s = Math.floor(leftTime/1000%60); 
         }*/
         d = Math.floor((the_s / 3600) / 24);
         h = Math.floor((the_s - d * 24 * 3600) / 3600);
         m = Math.floor((the_s - d * 24 * 3600 - h * 3600) / 60);
         f = (the_s - h * 3600) % 60;

         document.getElementById("h").innerHTML = checkNum(h);           
         document.getElementById("m").innerHTML = checkNum(m);            
        //  document.getElementById("s").innerHTML = checkNum(s);

         the_s--;
         //setTimeout(countTime,1000);

    }
    if(the_s < 0){
        the_s = 28800;
    }
    function checkNum(num){
        if(num<10){
           return "0" + num;
        }else{
            return num
        }
    }
    setInterval(countTime,1000)
    
})()