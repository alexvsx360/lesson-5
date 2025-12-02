// --- 1. הגדרת קבועים ומשתנים ---
// קבוצות תווים כמשתני CONST - ערכים שלא ישתנו
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

// --- 2. פונקציית הליבה ליצירת הסיסמה ---
function generatePassword() {
    // קליטת האורך (parseInt)
    const length = parseInt(lengthInput.value);

    // בניית המחרוזת של התווים הזמינים
    let availableChars = '';

    // שימוש בלוגיקה בוליאנית (checked) כדי לבנות את availableChars
    if (lowerCaseCheck.checked) {
        availableChars += LOWERCASE_CHARS;
    }
    if (upperCaseCheck.checked) {
        availableChars += UPPERCASE_CHARS;
    }
    if (numbersCheck.checked) {
        availableChars += NUMBERS;
    }
    if (symbolsCheck.checked) {
        availableChars += SYMBOLS;
    }

    // וולידציה: אם לא נבחרו תווים
    if (availableChars.length === 0) {
        passwordOutput.value = "⚠️ בחר/י לפחות סוג תו אחד!";
        return;
    }

    let password = '';

    // לולאת FOR ליצירת הסיסמה באורך הנדרש
    for (let i = 0; i < length; i++) {
        // חישוב אינדקס אקראי: Math.floor(Math.random() * length)
        const randomIndex = Math.floor(Math.random() * availableChars.length);

        // הוספת התו הנבחר לסיסמה
        password += availableChars[randomIndex];
    }

    // הצגת התוצאה (מניפולציית DOM)
    passwordOutput.value = password;
}

// --- 3. טיפול באירועים (Event Handling) ---

// אירוע לחיצה על כפתור ה-Generate
generateButton.addEventListener('click', generatePassword);

// אירוע קלט (Input) לעדכון תצוגת האורך באופן מיידי
lengthInput.addEventListener('input', function() {
    // מניפולציית DOM קטנה לעדכון המספר לצד המחוון
    lengthDisplay.textContent = lengthInput.value;
});

// יצירת סיסמה ראשונית בפתיחת הדף (אופציונלי)
generatePassword();