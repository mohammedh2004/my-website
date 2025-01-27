let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let sum = document.getElementById('sum');
let sub = document.getElementById('sub');
let subd = document.getElementById('subd');
let mul = document.getElementById('mul');
let equal = document.getElementById('equal');
let space = document.getElementById('delete');
let numbers = document.querySelectorAll('.num');

// لتخزين الحقل النشط
let activeInput = inp1; // الحقل الافتراضي هو الأول

// تعيين الحقل الأول كحقل افتراضي عند تحميل الصفحة
window.onload = () => {
    inp1.focus();
    activeInput = inp1;
};

// تحديث الحقل النشط عند النقر
inp1.addEventListener('focus', () => {
    activeInput = inp1;
});
inp2.addEventListener('focus', () => {
    activeInput = inp2;
});

// وظيفة لإدخال الأرقام في الحقل النشط
function takenum(num) {
    if (activeInput) {
        activeInput.value += num;
    }
}

// إضافة أرقام عند الضغط على أزرار الأرقام
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        const num = button.title;
        if (num !== undefined) {
            takenum(num);
        }
    });
});

// وظيفة الحذف (إزالة آخر رقم من الحقل النشط)
space.addEventListener('click', () => {
    if (activeInput) {
        activeInput.value = activeInput.value.slice(0, -1);
    }
});

// تعيين العمليات الحسابية عند الضغط على الأزرار
sum.addEventListener('click', () => {
    operation = '+';
    inp2.focus();
});
sub.addEventListener('click', () => {
    operation = '-';
    inp2.focus();
});
subd.addEventListener('click', () => {
    operation = '/';
    inp2.focus();
});
mul.addEventListener('click', () => {
    operation = '*';
    inp2.focus();
});

// تنفيذ العملية عند الضغط على =
equal.addEventListener('click', () => {
    const number1 = parseFloat(inp1.value);
    const number2 = parseFloat(inp2.value);

    if (isNaN(number1) || isNaN(number2)) {
        alert('يرجى إدخال أرقام صحيحة!');
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            if (number2 === 0) {
                alert('لا يمكن القسمة على صفر!');
                return;
            }
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        default:
            alert('يرجى اختيار عملية حسابية!');
            return;
    }

    inp1.value = result; // عرض النتيجة في الحقل الأول
    inp2.value = ''; // تفريغ الحقل الثاني
    inp1.focus(); // إعادة التركيز إلى الحقل الأول
    activeInput = inp1; // إعادة الحقل النشط إلى الأول
    operation = null; // إعادة تعيين العملية
});
