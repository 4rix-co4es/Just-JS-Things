
//break 
for (let i=0;i<=5;i++){
    if(i==3) break
    console.log(i)
   }
   
   //break labeled statement
   //break labelname;
   
   label :while(i==1){
       console.log(i)
       break label
   }
   
   //continue labeled statement
   let x=0
   while(x<10){
       x++;
   
       if(x==5) continue
   
   console.log(x); // 1 2 3 4 6 7 8 9
   }
   
   