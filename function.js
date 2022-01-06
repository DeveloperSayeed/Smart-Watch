function zero (time) {
    return time <10 ? '0' + time : time
    
}

function week(day) {
    if (day == 0) {
        return "SunDay"
    } else if (day == 1) {
        return "MonDay"
    } else if ( day == 2) {
        return "Tuesday"
    } else if( day == 3) {
        return "Wednesday"
    } else if( day == 4) {
        return " Thuesday"
    } else if (day ==5) {
        return "Friday"
    } else if ( day == 6) {
        return "Satarday"
    }

}

function month(tarik) {
    if(tarik == 0) {
        return "January"
    } else if( tarik == 1) {
        return "February"
    } else if( tarik == 2) {
        return "March"
    } else if( tarik == 3 ){
        return "April"
    } else if( tarik == 4) {
        return"May"
    } else if( tarik == 5) {
        return"June"
    } else if(tarik == 6) {
        return "July"
    } else if( tarik == 7) {
        return "August"
    } else if(tarik == 8) {
        return "September"
    } else if( tarik == 9) {
        return "October"
    } else if( tarik == 10) {
        return "November"
    } else if(tarik == 11) {
        return"December"
    }
      
}

