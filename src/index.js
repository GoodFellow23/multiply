module.exports = function multiply(first, second) {
  // your solution
    var result='';
    var array=new Array();
    while(array.length<=second.length-1)
    {
      array.push(0);
    }
    for(var i=0;i<first.length;i++)
    {      
      array.push(0);
      for (var j=second.length-1,k=array.length-1;j>=0;j--,k--)
      {
        array[k]+=(parseInt(first[i],10)*parseInt(second[j],10));
      }   
      if(array[0]>=10)
        {
          array.unshift(0);
        }     
      for(var k=array.length-1;k>=0;k--)
      {          
        while(array[k]>=10)
        {
          array[k-1]+=1;
          array[k]=array[k]-10;
        }        
      }      
    }
    for(var i=0;i<array.length;i++)
    {
      result+=array[i].toString();
    }
    while(result.startsWith('0'))
    {
      result=result.slice(1);
    }
    return result;
}

