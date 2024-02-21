let age = 18;
today = new Date().getDay();
// console.log(today);
switch(today){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
     case 6:
        console.log('Saturday');
        break;
    default:
        console.log('No Day');

}