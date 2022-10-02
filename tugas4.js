var x=169;
var y=170;
var z=172;

if(x>y&&x>z){
    console.log('x memiliki badan tertinggi');
}else if(y>x&&y>z){
    console.log('x memiliki badan terpendek');
}else if(z>x&&z>y){
    console.log('z memiliki badan tertinggi');
}else{
    console.log('input salah!');
}

console.log('x:'+x+' y:'+y+' z:'+z);