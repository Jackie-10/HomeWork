
let arr = [3, 5, -7, 4, 10, -6, 1, 8 ,-9, 2];  

// ********** Bubble Sort ********** 
let bubbleSort = (arr) => {
    let n = arr.length; // אורך המערך
    let moerItem;       // משתנה בוליאני 
    let tmpNum = 0;     // משתנה עזר
     do{      
        moerItem = false;  
        // הרעיון במיון הזה לבצע החלפות של איבר גדול בקטן בכל ריצה
        // של לולאת פור   
        // התנאי בלולאת פור מבצע בדיקה בין איבר אחד לבא אחריו 
        // אם נמצא כזה תבוצע החלפה בניהם. יכולים להתבצע מספר החלפות
        // בכל ריצה של הלולאה מתחילתה עד סופה. כך בכל ריצה של הלולאה  
        // .האיברים הקטנים יתקדמו לתחילת המערך והאיברים הגדולים לסוף המערך
        // true לולאת פור תרוץ שוב בלולאת הוואיל כל עוד המשתנה הבוליאני שווה
          for (j = 0; j < n - 1 ; j++){
            if (arr[j] > arr[j + 1]){      
              tmpNum = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = tmpNum;
               moerItem = true;
            }                  
          }                
        } while(moerItem)     
        return arr; 
}
console.log(bubbleSort(arr));