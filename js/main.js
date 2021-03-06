const database = [
    {
        Symptoms: "انخفاض درجة الحرارة و انتفاخات فى الغدة و طفح جلدى و اوجاع فى المفصل و اوجاع فى العين ",
        disease: "الحصبة الالمانية و يتم التشخيص عن طريق اجراء فحص دم و اجراء فحص ",
        treatment: "ادوية خفض الحرارة و حقنة غلوبولين مناعى"
    },
    {
        Symptoms: "نزيف مهبلى و غثيان شديد و ارتفاع ضغط الدم و تسمم الرحم و كيسات فى المبيض و فقر الدم ",
        disease: "الحمل العنقودى و يتم التشخيص من خلال فحص الدم و فحص مستوى هرمون الغدة الدرقية و فحص تسمم الحمل",
        treatment: "ازالة الحمل و استئصال الرحم"
    },
    {
        Symptoms: "التدفق التلقائى للحليب من الثدى و انخاض الخصوبة و الصداع و الاصابة بمرض تخلخل العظم",
        disease: "ارتفاع هرمون الحليب و يتم التشخيص من خلال فحص مستوى التيستوستيرون و هرمون الملوتن و هرمون برولاكتين و السكر بالدم",
        treatment: "معرفة اسباب الفرط فى الدم و اقراص بروموكريبتين"
    },
    {
        Symptoms: "نزيف مهبلى و آلام فى الرحم و آلام مخاض متكرر",
        disease: "انفصال المشيمة و يتم التشخيص من خلال فحص الدم و فحص الامواج فوق الصوتية",
        treatment: "توليد مهبلى"
    },
    {
        Symptoms: "الشعور بالضغط على الحوض و آلم فى الظهر و وجع فى البطن و نزيف مهبلى",
        disease: "قصور عنق الرحم و يتم التشخيص من خلال التصوير بالرنين و موجات فوق الصوتية و فحص الحوض",
        treatment: "مكملات البروجسترون و تطويق عنق الرحم"
    },
    {
        Symptoms: "زيادة كمية الافرازات المهبلية و كثرة التبول و الم فى الحوض",
        disease: "التهاب عنق الرحم و يتم التشخيص من خلال فحص الحوض و فحص عينة من السائل المهبلى",
        treatment: "المضادات الحيوية و مضادات الفيروسات"
    },
    {
        Symptoms: "نزيف مهبلى احمر فاتح ",
        disease: "المشيمة المنزاحة و يتم التشخيص من خلال موجات فوق الصوتية",
        treatment: "نقل الدم"
    },
    {
        Symptoms: "آلام الحوض و المغص و النزيف و طرد الانسجة و تدفق السوائل عند تمزق الاغشية و الاصابة بالعدوى و عدم انتظام ضربات القلب و انخفاض ضغط الدم و الحمى و الالم و تعفن الدم",
        disease: "الاجهاض الطبيعى و يتم التشخيص من خلال اجراء فحص بدنى و فحص التصوير بالموجات فوق الصوتية و الاختبارات المهملية و الفحص المجهرى و تعداد الدم الكامل و اختبار فصيلة الدم و اختبار المصل الكلى و اختبار السيلاناو الكلاميديا",
        treatment: "الميزوبروستول و الميفيبريتون و الراحة"
    },
    {
        Symptoms: "التقيؤ بما يزيد عن ثلاثة الى اربع مرات فى اليوم و فقدان الوزن بما يزيد عن 5 كيلوجرام بسرعة و الجفاف و العطش الدائم و الشعور بالدوخة و الدوار المستمر",
        disease: "قئ مفرط حملى و يتم التشخيص من خلال اجراء فحص جسدى و اجراء فحوصات الدم و البول و اجراء فحوصات تصويرية",
        treatment: "استخدام رباط المعصم و تناول وجبات صغيرة متكررة و السوايل الوريدية و ادوية مضاد للقئ مثل برومثيازين و ميكليزين و دروبيرليدول"
    },
    {
        Symptoms: "التعب و الدوار و ضيق فى التنفس و تسارع دقات القلب و شحوب الوجه",
        disease: "فقر الدم اثناء الحمل و يتم التشخيص من خلال فحص مستويات الدم عند الحامل",
        treatment: "تناول مكملات الحديد و تناول حمض الفوليك"
    },
    {
        Symptoms: "ارتفاع ضغط الدم و وجود فائض بروتين فى البول بعد الاسبوع العشرين للحمل و صداع شديد جدا و تغيرات فى الرؤية و تشمل فقدان البصر بشكل مؤقت او تشوش الرؤية او حساسية مفرطة للضوء و اوجاع فى البطن تتركز غالبا فى منطقة اسفل اضلاع القفص الصدرى من الجهة اليمين و الغثيان و القئ و الدوار و كثرة التبول و ارتفاع مفاجئ فى الوزن بمعدل يزيد عادة عن كيلوجرام واحد فى الاسبوع و انتفاخ فى منطقة الزجه و اليدين",
        disease: "ارتفاع ضغط الدم للحامل و يتم التشخيص من خلال قياس ضغط الدم و فحوصات البول الاعتيادية ",
        treatment: "التزام الفراش للراحة و الولادة اذا كانت المرأة الحامل معرضة لخطر حصول نوبات صرع او انفصال المشيمة الباكر او نزيف حاد"
    },
    {
        Symptoms: "نزيف متواصل بعد و اثناء الولادة",
        disease: "نزيف ما بعد الولادة",
        treatment: "عقار اوكسايتوسين مباشرة بعد الولادة"
    },
];

function selectElement(selector){
    return document.querySelector(selector);
}

function clearResults(){
    selectElement('.search-results').innerHTML = "";
}

function getResults(){
    const search = selectElement('.searchbar').value;
    clearResults();
    if(search.length > 0){
        for(let i = 0; i < database.length; i++){
            if(
                database[i].Symptoms.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
            ){
                selectElement('.search-results').innerHTML += `
                <table class="table">
                    <thead>
                    <tr>
                    <th class="col-4">الاعراض</th>
                    <th class="col-4">التشخيص</th>
                    <th class="col-4">العلاج</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td class="col-4">${database[i].Symptoms}</td>
                    <td class="col-4">${database[i].disease}</td>
                    <td class="col-4">${database[i].treatment}</td>
                    </tr>
                    </tbody>
                </table>
                `;
            }
    }  
    }
}

selectElement('.searchbar').addEventListener('keyup', getResults);