function bloodcompatible(donor,receiver){
    if(donor == "O+") {
        if (receiver == "O+"||"A+"||"AB+"||"B+")
            console.log("Accepted");
        else{
            console.log("Not Allowed!");
        } 
    } else if(donor == "O-") {
        if (receiver == "O+"||"A+"||"AB+"||"B+"||"A-"||"O-"||"B-"||"AB-") 
            console.log("Accepted");
        else{
            console.log("Not Allowed!");
        } 
    } else if (donor == "A+") {
        if (receiver == "A+"||"AB+")
            console.log("Accepted");
        else{
            console.log("Not Allowed!");
        } 
    } else if (donor == "A-"){
        if (receiver == "A-"||"A+"||"AB+"||"AB-")
            console.log("Accepted");
        else{
            console.log("Not Allowed!");
        } 
    } else if (donor == "B+"){
        if (receiver == "B+"||"AB+")
            console.log("Accepted");
        else{
            console.log("Not Allowed!");
        }
    } else if (donor == "B-"){
        if (receiver == "B-"||"B+"||"AB+"||"AB-")
            console.log("Accepted");
        else{
            console.log("Not Allowed!");
        }
    } else if (donor == "AB+"){
        if (receiver == "AB+")
            console.log("Accpeted");
        else{
            console.log("Not Allowed!");
        }
    } else if (donor == "AB-"){
        if (receiver == "AB-"||"AB+")
            console.log("Accepted");
        else{
            console.log("Not Allowed!");
        }
    } else{
        console.log("False")
    }
}
bloodcompatible("O-", "A+")