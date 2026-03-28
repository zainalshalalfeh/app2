# بوابة BTEC للتميز

منصة التعليم المهني والتقني الأولى في الأردن.

## تشغيل محلي

```bash
npm install
npm run dev
```

## بناء APK

### تلقائياً (GitHub Actions)
ارفع على GitHub وسيُبنى APK تلقائياً. حمّله من **Actions → btec-app-debug**.

### يدوياً
```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```
ثم في Android Studio: Build → Generate Signed APK.
