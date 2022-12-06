
// פונקציית עזר למציאת אות קטנה או גדולה
function getLetterCase(letter ,isCap = true){
    // isCap = true return Lower Letter   
    // isCap = false return Upper Letter   
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  
      for(let i=0 ; i < upperCase.length ; i++){
         if(upperCase[i] == letter || lowerCase[i] == letter){
           return letter = isCap ? upperCase[i] : lowerCase[i]          
         }
      }
}
 
//  ********** Capitalize ********** 
function capitalize(str ,isCap = true){
    // isCap = true  -> return Lower Letter   
    // isCap = false -> return Upper Letter   
    letter = getLetterCase(str[0] ,isCap);  
    //  מקבל אות גדולה מהפונקצה letter     
      for(i=1 ; i < str.length ; i++){
        // הלולאה מתחילה מ 1 
        // לאות הגדולה מתווספים שאר האותיות אחת אחרי השניה
        letter = letter + str[i];
      }      
       return letter;
}

// ********** capitalizeWords **********
function capitalizeWords(str){
    let letters = "" // משתנה לקבלת המחרוזת הסופית
    let firstLetter = false  // משתנה בוליאני לסימון תחילת מילה
  
      for(i = 0 ; i < str.length ; i++){
          if(str[i] != " " && !firstLetter){
            // בדיקה אם זו תחילת מילה ואם כן מפעיל את הפונקציה    
            // ומחזיר אות גדולה של המילה הראשונה             
              letters += getLetterCase(str[i] ,1) // 1 -> return Upper Case
                                                  // 0 -> return Lower Case 
              // אם נמצאה תחילת מילה כדי לקבל אות ראשונה גדולה ולצאת firstLetter = true                        
              firstLetter = true         
          }else if(str[i] == " "){ 
            // בודק אם יש רווחים ולא אותיות
            // מתווסף רק רווח למחרוזת עד לתחילת המילה הבאה  
            // למנוע כניסה לתנאי הראשון אחרת האותיות יחזרו גדולות false מקבל firstLetter 
              firstLetter = false  
              letters += str[i]          
          }else{           
              // שמירת המילים והרווחים במחרוזת ביחד
              letters += str[i]                 
          }        
      }
      return letters
}   

// ********** reverseString **********  
function reverseString(str){  
    str = capitalize(str ,0)  // 0 -> return Lower Case
                              // 1 -> return Upper Case
    // קריאה לפונקציה להפוך אות גדולה לקטנה                          
    tmpS = ""
     for(i = 0 ; i < str.length ; i++){
      //  שמירה של המחרוזת במהופך
       tmpS = str[i] + tmpS;
     }
     return tmpS;
}
  
   // ********** trim **********
  function trim(str){
    let tmpStr = "";   // משתנה עזר  
    let firstWord = true; // תחילת המילה הראשונה
    let lastWord = true;  // תחילת המילה האחרונה
    let start_Word = 0;   // נקודת התחלה של המילה הראשונה
    let end_Word = str.length; // אורך המחרוזת
  
      // מציאת כל הרווחים בתחילת המחרוזת 
      while(firstWord){
         if(str[start_Word] != " "){                   
           firstWord = false
         }
         // מונה שסופר את הרווחים מתחילת המחרוזת עד לתחילת מילה  
         start_Word++        
      }  
      // מציאת כל הרווחים מסוף המחרוזת עד תחילת מילה
      while(lastWord){
        // מונה שסופר את הרווחים מסוף המחרוזת עד לתחילת מילה
        // כל עוד יש רווחים המונה מוריד ב 1 מגודל המחרוזת ההתחלתית 
         end_Word--;    
         if(str[end_Word] != " "){           
           lastWord = false
         }          
      } 
      // שימוש במונים שנתקבלו מלמעלה לקבלת מחרוזת נקייה 
      // .מרווחים מצד ימין ומצד שמאל 
      // הלולאה מתחילה מהמונים ומחברת את כל התוים למחרוזת אחת              
      for(i = start_Word - 1 ; i <= end_Word ; i++){
         tmpStr += str[i]
      }          
    return tmpStr
} 

// ********** capitalizeWords **********
console.log(capitalize("hello world"));  //-> "Hello world"

// ********** capitalizeWords **********
console.log(capitalizeWords("  hey   mom  "));  //-> "Hey Mom"

// ********** reverseString **********
console.log(reverseString("Pizza"));  //-> "azzip" - notice that the capital P is not capitalized

// ********** trim **********  
console.log(trim("     hello world        ")); //-> "hello world"
