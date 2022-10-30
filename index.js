// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers,driver){
    // const newCollection = [];
    // for (const user of drivers) {
    //     if (user.toLowerCase() === driver.toLowerCase()) {
            
    //     newCollection.push(user);
    //     }
    //   }
    //   return newCollection;

    const result= drivers.filter(function(user){
        return (user.toLowerCase() === driver.toLowerCase());
    })
    return result;
} 

findMatching(drivers,'Bobby');





function  fuzzyMatch(drivers,str){
   

 const result = drivers.filter(function (num) {
        return (num.startsWith(str));
      });

return result;
}



const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers,user){
    const result= drivers.filter(function(driver){
        return (driver.name=== user);
    })
    return result;
  }





// function fuzzyMatch(array,string){
//     const result=array.filter(function(element){
//         return (element.slice(0,1)===string.slice(0,1));
        
//     });
//     return result;
// }
fuzzyMatch(drivers,'sa');


