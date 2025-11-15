# 🎯 دو مسیر توسعه وبسایت آموزشی

---

## 📘 سناریو 1: وبسایت ساده (بدون دیتابیس)

### 🏗️ ساختار فایل‌ها:

```
Web_Academy_Simple/
│
├── 📄 index.html                    # صفحه اصلی
├── 📄 about.html                    # درباره ما
├── 📄 contact.html                  # تماس با ما
├── 📄 courses.html                  # لیست دوره‌ها
│
├── 📁 css/
│   ├── style.css                    # استایل اصلی
│   ├── course.css                   # استایل دوره‌ها
│   └── responsive.css               # ریسپانسیو
│
├── 📁 js/
│   ├── script.js                    # جاوااسکریپت اصلی
│   ├── course-navigation.js         # ناوبری درس‌ها
│   └── code-editor.js               # ادیتور کد (اختیاری)
│
├── 📁 image/
│   ├── logos/
│   ├── courses/
│   └── banners/
│
├── 📁 courses/
│   │
│   ├── 📁 html/
│   │   ├── index.html               # معرفی دوره HTML
│   │   ├── lesson-01.html           # درس 1: مقدمه
│   │   ├── lesson-02.html           # درس 2: تگ‌ها
│   │   ├── lesson-03.html           # درس 3: فرم‌ها
│   │   ├── lesson-04.html           # درس 4: جداول
│   │   ├── lesson-05.html           # درس 5: Semantic
│   │   ├── exercise-01.html         # تمرین 1
│   │   ├── exercise-02.html         # تمرین 2
│   │   └── quiz.html                # آزمون (با JavaScript)
│   │
│   ├── 📁 css/
│   │   ├── index.html
│   │   ├── lesson-01.html
│   │   ├── lesson-02.html
│   │   └── ...
│   │
│   ├── 📁 javascript/
│   │   └── ...
│   │
│   ├── 📁 php/
│   │   └── ...
│   │
│   ├── 📁 python/
│   │   └── ...
│   │
│   └── 📁 [سایر دوره‌ها]/
│
└── 📁 resources/
    ├── cheatsheets/                 # فایل‌های PDF
    ├── examples/                    # نمونه کدها (ZIP)
    └── certificates/                # تمپلیت گواهینامه
```

---

### ✨ قابلیت‌ها:

✅ **صفحات استاتیک HTML**
- درس‌های متنی و کدها
- نمونه‌های عملی
- تمرین‌های تعاملی (با JavaScript)

✅ **آزمون‌های JavaScript**
- سوالات چندگزینه‌ای
- نمایش نمره بدون ذخیره
- فیدبک فوری

✅ **ادیتور کد آنلاین**
- نوشتن و تست کد در مرورگر
- بدون سرور

✅ **LocalStorage**
- ذخیره پیشرفت در مرورگر کاربر
- یادداشت‌های شخصی
- نشانک‌ها

✅ **فرم تماس ساده**
- ارسال به ایمیل با Formspree یا EmailJS

---

### ⚡ مزایا:

✅ **ساده و سریع:** نیازی به سرور و دیتابیس نیست
✅ **رایگان:** هاست رایگان (GitHub Pages, Netlify)
✅ **سبک:** سرعت بارگذاری بالا
✅ **امن:** بدون حفره امنیتی دیتابیس

### ⚠️ محدودیت‌ها:

❌ **بدون حساب کاربری:** هر کاربر فقط روی دستگاه خودش پیشرفت داره
❌ **بدون گواهینامه رسمی:** نمی‌شه اعتبار تایید کرد
❌ **بدون پرداخت:** همه چیز رایگان
❌ **بدون آمار:** نمی‌دونی چند نفر دوره رو دیدن
❌ **بدون کامنت:** کاربران نمی‌تونن سوال بپرسن

---

## 🚀 سناریو 2: پلتفرم حرفه‌ای (با دیتابیس)

### 🏗️ ساختار فایل‌ها:

```
Web_Academy_Pro/
│
├── 📄 index.php                      # صفحه اصلی
├── 📄 about.php
├── 📄 contact.php
├── 📄 courses.php                    # لیست دوره‌ها (از DB)
│
├── 📁 config/
│   ├── database.php                  # اتصال به MySQL
│   ├── config.php                    # تنظیمات
│   └── functions.php                 # توابع کمکی
│
├── 📁 includes/
│   ├── header.php                    # هدر مشترک
│   ├── footer.php                    # فوتر مشترک
│   └── nav.php                       # منو
│
├── 📁 classes/
│   ├── Database.php                  # کلاس دیتابیس
│   ├── User.php                      # مدیریت کاربران
│   ├── Course.php                    # مدیریت دوره‌ها
│   ├── Enrollment.php                # ثبت‌نام
│   ├── Progress.php                  # پیشرفت
│   ├── Quiz.php                      # آزمون
│   ├── Certificate.php               # گواهینامه
│   └── Payment.php                   # پرداخت
│
├── 📁 auth/
│   ├── login.php                     # ورود
│   ├── register.php                  # ثبت‌نام
│   ├── logout.php                    # خروج
│   ├── forgot-password.php           # فراموشی رمز
│   └── verify-email.php              # تایید ایمیل
│
├── 📁 dashboard/
│   ├── index.php                     # داشبورد دانشجو
│   ├── my-courses.php                # دوره‌های من
│   ├── progress.php                  # پیشرفت
│   ├── certificates.php              # گواهینامه‌ها
│   ├── profile.php                   # پروفایل
│   └── settings.php                  # تنظیمات
│
├── 📁 course/
│   ├── view.php?id=1                 # نمایش دوره
│   ├── enroll.php                    # ثبت‌نام در دوره
│   ├── lesson.php?id=1               # نمایش درس (از DB)
│   ├── quiz.php?id=1                 # آزمون (از DB)
│   └── certificate.php?code=XXX      # دانلود گواهینامه
│
├── 📁 admin/
│   ├── index.php                     # پنل ادمین
│   ├── courses/
│   │   ├── list.php                  # لیست دوره‌ها
│   │   ├── add.php                   # افزودن دوره
│   │   ├── edit.php?id=1             # ویرایش دوره
│   │   └── delete.php                # حذف دوره
│   ├── lessons/
│   │   ├── add.php                   # افزودن درس
│   │   └── edit.php                  # ویرایش درس
│   ├── users/
│   │   ├── list.php                  # مدیریت کاربران
│   │   └── permissions.php           # مجوزها
│   ├── quizzes/
│   │   ├── create.php                # ساخت آزمون
│   │   └── questions.php             # مدیریت سوالات
│   ├── payments/
│   │   ├── transactions.php          # تراکنش‌ها
│   │   └── reports.php               # گزارشات مالی
│   └── settings.php                  # تنظیمات سایت
│
├── 📁 api/
│   ├── auth.php                      # API ورود/ثبت‌نام
│   ├── courses.php                   # API دوره‌ها
│   ├── progress.php                  # API پیشرفت
│   ├── quiz.php                      # API آزمون
│   └── payment.php                   # API پرداخت
│
├── 📁 payment/
│   ├── checkout.php                  # صفحه پرداخت
│   ├── verify.php                    # تایید پرداخت
│   └── gateways/
│       ├── zarinpal.php              # درگاه زرین‌پال
│       └── paypal.php                # پی‌پال
│
├── 📁 uploads/
│   ├── courses/                      # تصاویر دوره‌ها
│   ├── videos/                       # ویدیوهای آموزشی
│   ├── avatars/                      # آواتار کاربران
│   └── certificates/                 # فایل‌های گواهینامه
│
├── 📁 css/
│   ├── style.css
│   ├── dashboard.css
│   └── admin.css
│
├── 📁 js/
│   ├── script.js
│   ├── dashboard.js
│   └── admin.js
│
└── 📁 database/
    ├── schema.sql                    # ساختار دیتابیس
    ├── seed.sql                      # داده‌های نمونه
    └── migrations/                   # تغییرات دیتابیس
```

---

### ✨ قابلیت‌ها:

✅ **سیستم کاربری کامل**
- ثبت‌نام و ورود
- تایید ایمیل
- بازیابی رمز عبور
- نقش‌های مختلف (دانشجو، مدرس، ادمین)

✅ **مدیریت دوره‌ها**
- افزودن/ویرایش دوره از پنل ادمین
- دسته‌بندی دوره‌ها
- قیمت‌گذاری و تخفیف

✅ **ثبت‌نام و پیگیری پیشرفت**
- ثبت‌نام در دوره
- ذخیره پیشرفت در دیتابیس
- مشاهده در تمام دستگاه‌ها

✅ **آزمون و نمره‌گذاری**
- ساخت آزمون از پنل ادمین
- ثبت نمرات در دیتابیس
- تلاش‌های متعدد

✅ **گواهینامه خودکار**
- صدور پس از تکمیل دوره
- کد یکتا برای تایید اعتبار
- دانلود PDF

✅ **پرداخت آنلاین**
- اتصال به درگاه (زرین‌پال)
- ثبت تراکنش‌ها
- فاکتور خودکار

✅ **کامنت و پرسش**
- سوال در هر درس
- پاسخ مدرس
- سیستم لایک

✅ **داشبورد شخصی**
- دوره‌های من
- پیشرفت یادگیری
- گواهینامه‌ها

✅ **پنل ادمین قدرتمند**
- مدیریت کامل محتوا
- آمار و گزارشات
- مدیریت کاربران

✅ **SEO و بهینه‌سازی**
- URL دوستانه
- Meta Tags داینامیک
- Sitemap خودکار

---

### 🎨 نمونه کد PHP (نمایش درس):

```php
<?php
// course/lesson.php
require_once '../config/database.php';
require_once '../config/functions.php';
session_start();

// بررسی ورود کاربر
if (!isLoggedIn()) {
    redirect('auth/login.php');
}

$user_id = $_SESSION['user_id'];
$lesson_id = $_GET['id'] ?? 0;

// دریافت اطلاعات درس
$lesson = getLesson($lesson_id);
if (!$lesson) {
    redirect('404.php');
}

// بررسی دسترسی کاربر به این دوره
if (!hasAccessToCourse($user_id, $lesson['course_id'])) {
    redirect('course/enroll.php?id=' . $lesson['course_id']);
}

// ثبت بازدید
recordLessonView($user_id, $lesson_id);

include '../includes/header.php';
?>

<div class="lesson-container">
    <aside class="lesson-sidebar">
        <h3><?php echo $lesson['course_title']; ?></h3>
        <ul>
            <?php
            $lessons = getCourseLessons($lesson['course_id']);
            foreach ($lessons as $l) {
                $completed = isLessonCompleted($user_id, $l['lesson_id']);
                $active = ($l['lesson_id'] == $lesson_id) ? 'active' : '';
                echo "<li class='$active'>";
                echo "<a href='lesson.php?id={$l['lesson_id']}'>";
                if ($completed) echo "<i class='fas fa-check'></i>";
                echo htmlspecialchars($l['lesson_title']);
                echo "</a></li>";
            }
            ?>
        </ul>
        
        <!-- نمایش پیشرفت -->
        <div class="progress-section">
            <p>پیشرفت شما: <?php echo getCourseProgress($user_id, $lesson['course_id']); ?>%</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: <?php echo getCourseProgress($user_id, $lesson['course_id']); ?>%"></div>
            </div>
        </div>
    </aside>

    <main class="lesson-content">
        <h1><?php echo htmlspecialchars($lesson['lesson_title']); ?></h1>

        <?php if ($lesson['video_url']): ?>
        <div class="video-container">
            <video id="lessonVideo" controls>
                <source src="<?php echo htmlspecialchars($lesson['video_url']); ?>" type="video/mp4">
            </video>
        </div>
        <?php endif; ?>

        <div class="lesson-text">
            <?php echo $lesson['lesson_content']; ?>
        </div>

        <?php if ($lesson['code_examples']): ?>
        <div class="code-examples">
            <h3>نمونه کد:</h3>
            <?php
            $examples = json_decode($lesson['code_examples'], true);
            foreach ($examples as $example) {
                echo "<div class='code-block'>";
                echo "<pre><code class='language-{$example['language']}'>";
                echo htmlspecialchars($example['code']);
                echo "</code></pre>";
                echo "<button class='copy-btn'>کپی</button>";
                echo "</div>";
            }
            ?>
        </div>
        <?php endif; ?>

        <!-- دکمه تکمیل درس -->
        <button class="btn-complete" onclick="markComplete(<?php echo $lesson_id; ?>)">
            تکمیل درس
        </button>

        <!-- ناوبری -->
        <div class="lesson-navigation">
            <?php if ($prev = getPreviousLesson($lesson_id)): ?>
            <a href="lesson.php?id=<?php echo $prev['lesson_id']; ?>" class="btn-prev">
                درس قبلی
            </a>
            <?php endif; ?>

            <?php if ($next = getNextLesson($lesson_id)): ?>
            <a href="lesson.php?id=<?php echo $next['lesson_id']; ?>" class="btn-next">
                درس بعدی
            </a>
            <?php endif; ?>
        </div>

        <!-- بخش کامنت‌ها -->
        <div class="comments-section">
            <h3>سوالات و نظرات</h3>
            <?php
            $comments = getLessonComments($lesson_id);
            foreach ($comments as $comment) {
                displayComment($comment);
            }
            ?>
            
            <form method="POST" action="api/add-comment.php">
                <input type="hidden" name="lesson_id" value="<?php echo $lesson_id; ?>">
                <textarea name="comment" placeholder="سوال یا نظر خود را بنویسید..." required></textarea>
                <button type="submit">ارسال</button>
            </form>
        </div>
    </main>
</div>

<script>
// AJAX برای علامت‌گذاری تکمیل
function markComplete(lessonId) {
    fetch('api/mark-complete.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({lesson_id: lessonId})
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert('درس با موفقیت تکمیل شد!');
            location.reload();
        }
    });
}

// ذخیره موقعیت ویدیو
document.getElementById('lessonVideo')?.addEventListener('timeupdate', function() {
    localStorage.setItem('lesson_' + <?php echo $lesson_id; ?>, this.currentTime);
});
</script>

<?php include '../includes/footer.php'; ?>
```

---

### ⚡ مزایا:

✅ **حرفه‌ای:** سیستم کامل آموزشی
✅ **مقیاس‌پذیر:** آماده برای رشد
✅ **درآمدزایی:** امکان فروش دوره
✅ **آمارگیری:** گزارشات دقیق
✅ **تعامل:** کامنت و پرسش
✅ **گواهینامه معتبر:** قابل تایید

### ⚠️ نیازمندی‌ها:

🔧 **هاست:** نیاز به سرور با PHP و MySQL
💰 **هزینه:** هاست و دامنه (حدود $50-100/سال)
⏱️ **زمان توسعه:** 3-6 ماه
📚 **دانش فنی:** PHP, MySQL, JavaScript
🔐 **امنیت:** نیاز به رعایت استانداردهای امنیتی

---

## 📊 جدول مقایسه:

| ویژگی | سناریو 1 (ساده) | سناریو 2 (حرفه‌ای) |
|-------|-----------------|-------------------|
| **هزینه** | رایگان | $50-100/سال |
| **زمان توسعه** | 1-2 ماه | 3-6 ماه |
| **دانش فنی** | HTML/CSS/JS | PHP/MySQL/JS |
| **حساب کاربری** | ❌ | ✅ |
| **ذخیره پیشرفت** | LocalStorage | دیتابیس |
| **گواهینامه** | تمپلیت | خودکار |
| **پرداخت** | ❌ | ✅ |
| **کامنت** | ❌ | ✅ |
| **آمار** | ❌ | ✅ |
| **پنل ادمین** | ❌ | ✅ |
| **مقیاس‌پذیری** | محدود | عالی |
| **SEO** | دستی | خودکار |

---

## 🎯 توصیه من:

### 🥉 **مبتدی هستی؟**
**شروع با سناریو 1** → بعد migration به سناریو 2

### 🥇 **جدی هستی؟**
**مستقیم سناریو 2** → پلتفرم حرفه‌ای از اول

### 💡 **راه میانه:**
شروع با سناریو 1 ولی **طراحی شده برای آینده** → بعداً راحت دیتابیس اضافه کنی

---

**کدوم مسیر رو انتخاب میکنی؟** 🚀