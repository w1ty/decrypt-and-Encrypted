// هذه الدالة تحول النص إلى شفرة
function convertToCode() {
  // احصل على قيمة حقل الإدخال
  let text = document.getElementById("input").value;
  // حول النص إلى أحرف صغيرة
  text = text.toLowerCase();
  // احصل على قيمة عنصر الاختيار
  let mode = document.getElementById("mode").value;
  // إنشاء متغير فارغ لتخزين الناتج
  let output = "";
  // تحقق من وضع المستخدم
  if (mode == 'تشفير') {
    // تكرار كل حرف في النص
    for (let character of text) {
      // احصل على القيمة الرقمية للحرف
      let number = character.charCodeAt(0) - 96;
      // أضف الرقم إلى الناتج مع فاصلة
      output += number + ",";
    }
    // احذف الفاصلة الأخيرة من الناتج
    output = output.slice(0, -1);
  } else if (mode == 'فك التشفير') {
    // افصل النص عند الفواصل
    let numbers = text.split(",");
    // تكرار كل رقم في الناتج
    for (let number of numbers) {
      // حول الرقم إلى حرف
      let character = String.fromCharCode(Number(number) + 96);
      // أضف الحرف إلى الناتج
      output += character;
    }
  } else {
    // اعرض رسالة خطأ
    output = "الرجاء اختيار وضع صحيح";
  }
  // اعرض الناتج في عنصر p
  document.getElementById("output").innerHTML = output;
}
function copyText() {
  // Get the div element
  var divElement = document.getElementById("output");

  // Create a range object
  var range = document.createRange();

  // Select the contents of the div element
  range.selectNode(divElement);

  // Add the range to the user's selection
  window.getSelection().addRange(range);

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Give a visual feedback to the user that the text has been copied
  alert("Text has been copied!");
}