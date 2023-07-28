//Exercise: 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//-------------------------------------------------------------------------------------------------------------

 let guestList: string[] = ["Usman", "Zia Khan", "Afaq"];
 for(let GuestList of guestList){
    let message = `Dear ${GuestList}, we would be honored to have you at our dinner. Your genius and contributions to physics have inspired generations. Please join us for an evening of stimulating conversation and delightful company.
    
    Looking forward to your presence.
    Sincerely,
    Your Host,
    ----------------------------------`
     console.log(message);
    
 }

