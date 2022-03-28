/*Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, 
bunların hervbirini 1'den başlayarak alt alta yazalım. */
const seriesList = list => {
  
    list.forEach((series, index) => {
      console.log(`${index+1}. ${series}`) 
    });
  };
  
  seriesList(["The 100", "Game of Thrones","Devs"]);

  /* [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array döndürsün.
   Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun */
const newArray = (nums) => {

    const newNums = nums.map(e=>{      
        if(e%2==0){
            return e*2
        }else if(e%2==1){
            return e*3
        }
    });
   return newNums 
}

console.log(newArray([1,2,3,4,5]));
