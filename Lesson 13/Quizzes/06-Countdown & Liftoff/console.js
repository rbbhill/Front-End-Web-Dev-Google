var secCount = 60;
var message  = "";
while (secCount >= 0){
    switch(secCount){
        case 50:
            message = "Orbiter transfers from ground to internal power";// (T-"+secCount+" seconds)";
            break;
        case 31:
            message = "Ground launch sequencer is go for auto sequence start";// (T-"+secCount+" seconds)";
            break;
        case 16:
            message = "Activate launch pad sound suppression system";// (T-"+secCount+" seconds)";
            break;
        case 10:
            message = "Activate main engine hydrogen burnoff system";// (T-"+secCount+" seconds)";
            break;
        case 6:
            message = "Main engine start";// (T-"+secCount+" seconds)";
            break;
        case 0:
            message = "Solid rocket booster ignition and liftoff!";// (T-"+secCount+" seconds)";
            break;
        default:
            message = "T-"+secCount+" seconds";
    }
    secCount = secCount - 1;
    console.log(message);
}
