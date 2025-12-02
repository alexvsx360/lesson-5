// --- 1. הגדרת קבועים ומשתנים ---
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// קבלת הפניות ל-DOM
const lengthInput = document.getElementById('length-range');
const lengthDisplay = document.getElementById('length-display');
const lowerCaseCheck = document.getElementById('include-lower');
const upperCaseCheck = document.getElementById('include-upper');
const numbersCheck = document.getElementById('include-numbers');
const symbolsCheck = document.getElementById('include-symbols');
const generateButton = document.getElementById('generate-btn');
const passwordOutput = document.getElementById('password-output');

// --- 2. פונקציית עזר - בחירת תו אקראי ממחרוזת ---
function getRandomChar(charString) {
    // TODO: השלם - החזר תו אקראי מהמחרוזת charString
    // רמז: השתמש ב-Math.random() ו-Math.floor()
    
    
}

// --- 3. פונקציית העזר הראשית - יצירת סיסמה משופרת ---
function generateSecurePassword() {
    const length = parseInt(lengthInput.value);
    
    // שלב א': בניית מערך של הקטגוריות הנבחרות
    let selectedCategories = [];
    let availableChars = '';
    
    if (lowerCaseCheck.checked) {
        // TODO: הוסף את LOWERCASE_CHARS גם ל-selectedCategories וגם ל-availableChars
        
        
    }
    
    if (upperCaseCheck.checked) {
        // TODO: הוסף את UPPERCASE_CHARS גם ל-selectedCategories וגם ל-availableChars
        
        
    }
    
    if (numbersCheck.checked) {
        // TODO: הוסף את NUMBERS גם ל-selectedCategories וגם ל-availableChars
        
        
    }
    
    if (symbolsCheck.checked) {
        // TODO: הוסף את SYMBOLS גם ל-selectedCategories וגם ל-availableChars
        
        
    }
    
    // וולידציה: אם לא נבחרו תווים
    if (availableChars.length === 0) {
        passwordOutput.value = "⚠️ בחר/י לפחות סוג תו אחד!";
        return;
    }
    
    // וולידציה: אורך הסיסמה חייב להיות לפחות כמספר הקטגוריות
    if (length < selectedCategories.length) {
        passwordOutput.value = `⚠️ אורך מינימלי: ${selectedCategories.length} תווים`;
        return;
    }
    
    // שלב ב': יצירת סיסמה עם ערבות לתו אחד מכל קטגוריה
    let password = '';
    
    // 1. הוסף תו אחד מכל קטגוריה שנבחרה
    // TODO: צור לולאה שעוברת על selectedCategories
    // ובכל איטרציה מוסיפה תו אקראי מהקטגוריה ל-password
    // רמז: השתמש בפונקציה getRandomChar()
    
    
    
    
    
    // 2. מלא את שאר הסיסמה באופן אקראי מכל התווים הזמינים
    // TODO: צור לולאה שרצה (length - password.length) פעמים
    // והוסף בכל פעם תו אקראי מ-availableChars
    
    
    
    
    
    // שלב ג': ערבוב הסיסמה (Shuffle)
    // הסיבה: עכשיו הסיסמה מתחילה תמיד באותו סדר של קטגוריות
    // TODO: המר את password למערך, ערבב אותו, והחזר למחרוזת
    // רמז: 
    // 1. password.split('') - הופך מחרוזת למערך
    // 2. sort עם פונקציה אקראית - מערבב
    // 3. join('') - הופך בחזרה למחרוזת
    
    // דוגמה לפונקציית ערבוב:
    // password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    
    
    // הצגת התוצאה
    passwordOutput.value = password;
}

// --- 4. טיפול באירועים ---
generateButton.addEventListener('click', generateSecurePassword);

lengthInput.addEventListener('input', function() {
    lengthDisplay.textContent = lengthInput.value;
});

// יצירת סיסמה ראשונית
generateSecurePassword();


// ==========================================
//  הסבר נוסף - למה צריך ערבוב?
// ==========================================
// ללא ערבוב, אם בחרנו: אותיות קטנות, גדולות, מספרים וסימנים
// הסיסמה תמיד תתחיל עם: [אות קטנה][אות גדולה][מספר][סימן][...אקראי]
// זה פחות בטוח! לכן אנחנו מערבבים את הסיסמה בסוף.

