import { Heart, Calendar, Clock, MapPin, Video, Gift, MessageCircle, FileText, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ShineLogo from "@/components/ShineLogo";
import RavMesserForm from "@/components/RavMesserForm";
import heroBackground from "@/assets/hero-couple.jpg";
import michalPhoto from "@/assets/michal-photo.jpg";

const Index = () => {
  // Updated dates: 23-26 בנובמבר
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 181, 176, 0.7), rgba(232, 213, 209, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 opacity-50">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#ffffff" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="mb-8 flex justify-center">
            <ShineLogo className="w-32 drop-shadow-lg" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-warm-darker leading-tight flex items-center justify-center gap-4">
            לחזור הביתה
            <Heart className="text-warm-dark fill-warm-dark" size={48} />
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 text-warm-dark font-light">
            אתגר 4 ימים לעצור את הריב החוזר<br />
            ולחזור לזוגיות שבחרתם
          </p>
          
          <Card className="inline-block bg-white/95 backdrop-blur p-8 rounded-2xl shadow-[var(--shadow-elevated)] mb-8">
            <div className="space-y-3 text-right">
              <p className="flex items-center gap-3 text-xl text-warm-darker">
                <span><strong>תאריכים:</strong> 23-26 בנובמבר (א׳ ב׳ ג׳ ד׳)</span>
                <Calendar className="text-warm-dark" />
              </p>
              <p className="flex items-center gap-3 text-xl text-warm-darker">
                <span><strong>שעה:</strong> 22:30 בערב</span>
                <Clock className="text-warm-dark" />
              </p>
              <p className="flex items-center gap-3 text-xl text-warm-darker">
                <span><strong>איפה:</strong> זום (מהנוחות של הבית)</span>
                <MapPin className="text-warm-dark" />
              </p>
            </div>
          </Card>
          
          <div className="mb-8">
            <span className="inline-block bg-white text-warm-dark px-8 py-3 rounded-full font-semibold text-xl shadow-[var(--shadow-soft)]">
              ✨ אתגר חינמי לחלוטין ✨
            </span>
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToRegister}
            className="bg-warm-dark hover:bg-warm-darker text-white px-12 py-8 text-2xl rounded-full shadow-[var(--shadow-elevated)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            רוצה להצטרף? לחצי כאן להרשמה
          </Button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-warm-darker">
            זה מוכר לך?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "הריב החוזר",
                text: "לא משנה כמה פעמים תדברו על זה, הוא פשוט חוזר שוב ושוב. על הכלים, על הילדים, על הזמן, על הכסף."
              },
              {
                title: "תחושת בדידות",
                text: "אתם ביחד, אבל זה מרגיש כל כך רחוק. כאילו יש קיר ביניכם שלא יודעים איך לפרוץ."
              },
              {
                title: "שתיקה או צעקות",
                text: "או שיש שתיקה כבדה, או שכל שיחה הופכת לריב. כבר לא יודעים איך לדבר בלי להיפגע."
              },
              {
                title: '"הכל עלי"',
                text: "התחושה שלוקחים אותך כמובן מאליו. שאף אחד לא באמת רואה אותך. תחושת הלבד."
              },
              {
                title: "עייפות",
                text: "המקום שאמור לתת לך אנרגיה - מרוקן אותך. הבית כבר לא מקום שמטעין אותך."
              },
              {
                title: "ניהול, לא חיבור",
                text: "אתם מנהלים בית וילדים ביחד, אבל הקרבה, האהבה, הניצוץ - נעלמו."
              }
            ].map((pain, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-muted border-2 border-transparent hover:border-warm-primary transition-all duration-300 hover:-translate-y-2 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-warm-dark">{pain.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{pain.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gradient-to-br from-muted to-warm-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-warm-darker">
            מה תלמדו באתגר?
          </h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                day: "יום 1: על מה הריב באמת יושב",
                date: "יום ראשון, 23 בנובמבר | 22:30",
                items: [
                  "למה הריב החוזר לא באמת על מה שאתם חושבים",
                  "מה זה פצעי ילדות ואיך הם משפיעים על הזוגיות שלכם",
                  "מה הבקשה הסמויה שאתם מבקשים ולא יודעים",
                  "תרגיל מעשי: לזהות את הפצע שלכם"
                ]
              },
              {
                day: "יום 2: גוף וכעס",
                date: "יום שני, 24 בנובמבר | 22:30",
                items: [
                  "מה קורה בגוף שלכם כשאתם כועסים (וזה לא מה שאתם חושבים)",
                  "הקשר בין תחושות גוף לפצעי ילדות",
                  "למה הגוף הוא המפתח להבנה",
                  "כלי ראשון: איך לשחרר מתח מהגוף",
                  "איך לכעוס פחות ועדיין לעמוד על שלכם"
                ]
              },
              {
                day: "יום 3: תקשורת מחברת",
                date: "יום שלישי, 25 בנובמבר | 22:30",
                items: [
                  "5 כללי הזהב לתקשורת שמחברת (גם כשקשה)",
                  "איך להגיד הכל ולהישאר קרובים",
                  "תרגול מעשי: איך להגיד את הקשה",
                  "הטעויות הנפוצות ביותר בתקשורת זוגית",
                  "איך להתמודד עם פערי רצון"
                ]
              },
              {
                day: "יום 4: הוויות והצעד הבא",
                date: "יום רביעי, 26 בנובמבר | 22:30",
                items: [
                  "מה זה הוויות ואיך הן מנהלות אותנו",
                  "איך לעבוד עם הוויות בצורה שתשרת אתכם",
                  "סיכום האתגר - מה למדנו",
                  "הצעד הבא שלכם בדרך"
                ]
              }
            ].map((day, index) => (
              <Card key={index} className="bg-white p-10 rounded-3xl shadow-[var(--shadow-elevated)] border-r-8 border-warm-dark">
                <h3 className="text-3xl font-bold mb-3 text-warm-dark">{day.day}</h3>
                <p className="text-muted-foreground text-lg mb-6">{day.date}</p>
                <ul className="space-y-3 text-right">
                  {day.items.map((item, i) => (
                    <li key={i} className="pr-8 relative text-foreground/80 leading-relaxed">
                      <span className="absolute right-0 text-xl">💛</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-warm-darker">
            מה תקבלו באתגר?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Video className="w-12 h-12" />, title: "4 מפגשים חיים", text: "בזום, כל ערב 30-40 דקות" },
              { icon: <Gift className="w-12 h-12" />, title: "הקלטות", text: "של כל המפגשים למי שלא יכול להגיע חי" },
              { icon: <MessageCircle className="w-12 h-12" />, title: "קבוצת ווטסאפ", text: "לתמיכה, שאלות ושיתוף" },
              { icon: <FileText className="w-12 h-12" />, title: "תרגילים", text: "מעשיים לעבודה אישית" },
              { icon: <Wrench className="w-12 h-12" />, title: "כלים מעשיים", text: "שאפשר ליישם מיד" },
              { icon: <Heart className="w-12 h-12" />, title: "והכי חשוב", text: "תלמדו איך לעצור את הריב שחוזר על עצמו" }
            ].map((benefit, index) => (
              <Card key={index} className="p-8 text-center bg-muted rounded-2xl">
                <div className="text-warm-dark mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-warm-dark">{benefit.title}</h3>
                <p className="text-foreground/80">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-gradient-to-br from-warm-secondary to-warm-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-warm-darker">
            למי האתגר הזה מתאים?
          </h2>
          
          <Card className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-[var(--shadow-elevated)]">
            <ul className="space-y-4">
              {[
                "יש לכם את \"הריב החוזר\" שלא נפתר",
                "אתם מרגישים לבד בתוך הזוגיות",
                "יש יותר שתיקה מאשר שיחה (או יותר צעקות)",
                "התחושה שלוקחים אתכם כמובן מאליו",
                "רוצים לחזור לקרבה, לחיבור, לאהבה",
                "מוכנים להסתכל פנימה ולעשות עבודה אמיתית",
                "עשיתם כבר התפתחות אישית ומבינים את השפה",
                "מוכנים להשקיע בעצמכם ובזוגיות שלכם"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="pr-12 py-4 bg-muted rounded-xl relative text-lg text-foreground/80"
                >
                  <span className="absolute right-4 text-warm-dark font-bold text-2xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-12 text-center">
              <p className="text-2xl text-warm-dark mb-2">
                <strong>והחלק הכי טוב?</strong>
              </p>
              <p className="text-xl text-foreground/80 leading-relaxed">
                לא צריך את שני בני הזוג!<br />
                מספיק שאחד/ת מכם יגיע.<br />
                <br />
                כי כשאחד משתנה - השני משתנה בעקבותיו. 💛
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
                <img
                  src={michalPhoto}
                  alt="מיכל סלונים"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-3 text-right">
              <h2 className="text-5xl font-bold mb-8 text-warm-darker">
                היי, אני מיכל 💛
              </h2>
              
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                <p>מאמנת אישית וזוגית בשיטת סאטיה.</p>
                
                <p>במשך 11 שנים שאני עובדת בקליניקה, ראיתי כמה קושי זה מביא כשזוגות תקועים באותם ריבים חוזרים, באותם דפוסים שלא משתנים. ראיתי את הבדידות, את הכאב, את התחושה של "אני לבד בתוך הזוגיות שלי".</p>
                
                <p>אבל גם ראיתי משהו אחר - <strong className="text-warm-darker">ראיתי איך אפשר לשנות את זה.</strong></p>
                
                <p>איך כשמבינים מה באמת קורה מתחת לפני השטח, איך כשעובדים על עצמנו ולא רק על הזוג - הכל משתנה. הקרבה חוזרת, החיבור מתחדש, והזוגיות הופכת שוב למקום בטוח, חם ומלא אהבה.</p>
                
                <p className="text-xl">
                  <strong className="text-warm-darker">אחרי שליוויתי זוגות רבים בקליניקה ובקורס הדיגיטלי "מחוברים מחדש"</strong> - אני רוצה להרחיב את מעגל ההשפעה ולהביא את הידע הזה לעוד זוגות.
                </p>
                
                <p>באתגר הזה, אני אראה לכם בדיוק איך לעשות את השינוי הזה - צעד אחר צעד.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-warm-darker">
            שאלות ותשובות
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "האם צריך את שני בני הזוג?",
                a: "<strong>לא!</strong> מספיק שאחד/ת מכם יגיע. כשאחד משתנה - השני משתנה בעקבותיו. (אבל אם שניכם רוצים - מוזמנים!)"
              },
              {
                q: "זה באמת חינמי?",
                a: "<strong>כן!</strong> אין תשלום, אין מחויבות, אין מלכודת. זו מתנה שלי לכם. (אם תרצו להמשיך איתי אחרי האתגר בקורס המלא - נדבר על זה)"
              },
              {
                q: "מה אם אני לא יכול/ה בכל המפגשים?",
                a: "<strong>זה בסדר!</strong> כל מפגש יוקלט ותקבלו לינק להקלטה. אבל מומלץ מאוד להגיע חי - זה הרבה יותר חזק ומשפיע."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white p-8 rounded-2xl shadow-[var(--shadow-soft)]">
                <h3 className="text-2xl font-semibold mb-4 text-warm-dark text-right">
                  {faq.q}
                </h3>
                <p 
                  className="text-foreground/80 leading-relaxed text-right"
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="register"
        className="py-20 bg-gradient-to-br from-warm-primary to-warm-secondary"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 text-warm-darker">
              מוכנים לחזור הביתה?
            </h2>

            <p className="text-2xl mb-8 text-warm-dark">
              הצטרפו עכשיו לאתגר החינמי
            </p>
          </div>

          <RavMesserForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-darker text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <ShineLogo className="w-24 mx-auto text-warm-secondary" />
          </div>
          <p className="mb-2">מיכל סלונים - אימון אישי וזוגי</p>
          <p className="text-warm-secondary">
            <a href="mailto:info@michalslonim.com" className="hover:text-white transition-colors">
              info@michalslonim.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
