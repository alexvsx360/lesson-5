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
    //  פתרון:
    const randomIndex = Math.floor(Math.random() * charString.length);
    return charString[randomIndex];
}

// --- 3. פונקציית העזר הראשית - יצירת סיסמה משופרת ---
function generateSecurePassword() {
    const length = parseInt(lengthInput.value);
    
    // שלב א': בניית מערך של הקטגוריות הנבחרות
    let selectedCategories = [];
    let availableChars = '';
    
    if (lowerCaseCheck.checked) {
        //  פתרון:
        selectedCategories.push(LOWERCASE_CHARS);
        availableChars += LOWERCASE_CHARS;
    }
    
    if (upperCaseCheck.checked) {
        //  פתרון:
        selectedCategories.push(UPPERCASE_CHARS);
        availableChars += UPPERCASE_CHARS;
    }
    
    if (numbersCheck.checked) {
        //  פתרון:
        selectedCategories.push(NUMBERS);
        availableChars += NUMBERS;
    }
    
    if (symbolsCheck.checked) {
        //  פתרון:
        selectedCategories.push(SYMBOLS);
        availableChars += SYMBOLS;
    }
    
    // וולידציה: אם לא נבחרו תווים
    if (availableChars.length === 0) {
        passwordOutput.value = " בחר/י לפחות סוג תו אחד!";
        return;
    }
    
    // וולידציה: אורך הסיסמה חייב להיות לפחות כמספר הקטגוריות
    if (length < selectedCategories.length) {
        passwordOutput.value = ` אורך מינימלי: ${selectedCategories.length} תווים`;
        return;
    }
    
    // שלב ב': יצירת סיסמה עם ערבות לתו אחד מכל קטגוריה
    let password = '';
    
    // 1. הוסף תו אחד מכל קטגוריה שנבחרה
    // פתרון:
    for (let i = 0; i < selectedCategories.length; i++) {
        password += getRandomChar(selectedCategories[i]);
    }
    
    // 2. מלא את שאר הסיסמה באופן אקראי מכל התווים הזמינים
    //  פתרון:
    for (let i = password.length; i < length; i++) {
        password += getRandomChar(availableChars);
    }
    
    // שלב ג': ערבוב הסיסמה (Shuffle)
    //  פתרון:
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
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

