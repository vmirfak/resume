let  getTimeDiff = () => {
    var startDate = new Date(2021,08,1), 
    endDate = new Date(), 
    nM = Math.round(((endDate.getTime() - startDate.getTime())/1000)*0.00000038, 1), 
    nY = Math.floor(nM / 12), 
    nRM = nM - (12 * nY), 
    aD = 0;

    //console.log("Months passed: " + nM + ", Years passed: " + nY + ", Remaining months: " + nRM);

    if(nM < 12 && nM > 1){
        document.getElementById('date_since_start').textContent = nM + ' months';
    }else{
        document.getElementById('date_since_start').textContent = '1 month';
    }
    if (nM > 11 && nM < 24) {
        if (nY == 1 && nRM == 0){
            aD = '1 year';
            document.getElementById('date_since_start').textContent = aD;
        }else if(nY == 1  && nRM > 0){
            aD = '1 year and ' + nRM + ' months';
            document.getElementById('date_since_start').textContent = aD;
            if (nRM == 1){
                aD = '1 year and 1 month';
                document.getElementById('date_since_start').textContent = aD;
            }
        }
    }else if(nM > 23){
        if(nRM > 1){
            aD = nY + ' years and ' + nRM + ' months';
            document.getElementById('date_since_start').textContent = aD;
        }
        if (nRM == 1){
            aD = nY + ' years and 1 month';
            document.getElementById('date_since_start').textContent = aD;
        }
        if(nRM == 0){
            aD = nY + ' years';
            document.getElementById('date_since_start').textContent = aD;
        }
    }
}
setInterval(getTimeDiff, 2000);