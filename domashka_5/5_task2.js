// Виконайте попереднє завдання але використовуючи конструкцію switch/case

let averageGrade = 81;

switch (true) {

case averageGrade < 0:
    console.log ("Та не може такого бути");
break;
case averageGrade >= 0 && averageGrade < 60:
    console.log ("Незадовільно");
break;
case averageGrade >= 60 && averageGrade <=70:
    onsole.log ("Задовільно");
break;
case averageGrade >= 71 && averageGrade <=80:
    console.log ("Добре");
case averageGrade >= 81 && averageGrade <=90:
    console.log ("Дуже добре");
break;
case averageGrade >= 91 && averageGrade <=100:
console.log ("Відмінно");   
}
