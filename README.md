# CV Builder

Angular application for building and previewing a CV in real time.  
The project demonstrates working with both Template-Driven and Reactive Forms, including validation, dynamic structures, and component-based architecture.

---

## הערות למורה

בפרויקט זה מימשתי אפליקציית בניית קורות חיים בהתאם להוראות, תוך שימוש בשני סוגי טפסים באנגולר:

-את טופס פרטים אישיים מימשתי באמצעות **Template Driven Form**, מכיוון שמדובר בטופס פשוט יחסית, ללא צורך בלוגיקה מורכבת או מבנה דינאמי.
  
-את טופס ההשכלה מימשתי באמצעות **Reactive Form**, מכיוון שהוא כולל:
  - מספר פריטי השכלה (טפסים דינאמיים)
  - מבנה מקונן (**Nested Forms**)
  - שימוש ב־**FormArray** עבור רשימת קורסים דינאמית בכל השכלה

בנוסף, מימשתי את כל הדרישות הטכניות שהוגדרו:
- שימוש ב־**Data Binding** (כולל Input, Output ו־Interpolation)
- חלוקה נכונה לקומפוננטות (טפסים + קומפוננטת תצוגה)
- עדכון בזמן אמת של תצוגת קורות החיים בהתאם לקלט המשתמש
- ולידציות לשדות כולל הצגת הודעות שגיאה למשתמש
-וכן כפי שאר ההנחיות
---

## הרצת הפרויקט

```bash
npm install
ng serve

ואז לפתוח בדפדפן:

http://localhost:4200

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
