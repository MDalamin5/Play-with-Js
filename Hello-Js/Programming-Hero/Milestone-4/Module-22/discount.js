/* 
1. if ticket numbers is less than 100 than per ticket price: 100 taka
2. if ticket numbers is more than 100 but less than 200, first 100 ticket price: 100 taka and rest ticket will be 90 taka
3. if you purches more than 200
    first 100 --> 100tk
    100-200 --> 90 taka
    200+ --> 70 taka
*/

function ticketPriceCalculations(numOfTickets){
    let total_sum = 0;
    if(numOfTickets > 200){
        let moreThan200Ticket = numOfTickets - 200;
        total_sum = (70 * moreThan200Ticket) + 10000 + 9000;
    }
    else if(numOfTickets > 100){
        moreThan100Ticket = numOfTickets - 100;
        total_sum = (90 * moreThan100Ticket) + 10000
    }
    else
        total_sum = numOfTickets * 100

    console.log(total_sum);
}

ticketPriceCalculations(120)