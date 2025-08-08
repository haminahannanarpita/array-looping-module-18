const colors =['red','blue','green','yellow','orange']
const reversed = [];
for(let i=0; i<colors.length; i++){
    // console.log(colors[i]);
    reversed.unshift(colors[i])
}
console.log(reversed);