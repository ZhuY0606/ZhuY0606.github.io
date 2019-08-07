(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{188:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"android-o行为变更："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-o行为变更：","aria-hidden":"true"}},[t._v("#")]),t._v(" Android O行为变更：")]),t._v(" "),e("p",[t._v("1.后台服务运行的限制：")]),t._v(" "),e("p",[t._v("当应用进入后台状态几分钟后，android系统就会将app视为空闲状态并停止该app的后台服务。所以不能依赖后台service做定时性的任务。")]),t._v(" "),e("p",[t._v("2.前台服务启动的限制：")]),t._v(" "),e("p",[t._v("在 Android 8.0之前，创建前台服务的方式通常是先创建一个后台服务（context.startService()），然后将该服务推到前台(startForeground())。但是android8.0上，系统不允许后台应用创建后台服务。因此，Android 8.0 引入了一种全新的方法，即 Context.startForegroundService()，以在前台启动新服务。在系统创建服务后，应用有五秒的时间来调用服务的 startForeground() 方法以显示新服务的用户可见通知。如果应用在此时间限制用 startForeground()，则系统将停止服务并声明此应用为 ANR。针对这一变动，如果app需要定时地在后台执行一些任务，google建议使用Jobscheduler来实现，但是经测试发现，在国产手机中，Jobscheduler并不能正常工作。")]),t._v(" "),e("p",[t._v("3.广播限制：")]),t._v(" "),e("p",[t._v("如果应用注册接收广播，则在每次发送广播时，应用的接收器都会消耗资源。 如果多个应用注册为接收基于系统事件的广播，这会引发问题；触发广播的系统事件会导致所有应用快速地连续消耗资源，从而降低用户体验。为了缓解这一问题，Android 7.0（API 级别 25）对广播施加了一些限制，Android 8.0 让这些限制更为严格。大多数系统的隐式广播，app将无法再接收到。")]),t._v(" "),e("p",[t._v("除了以下广播\n")]),e("div",{staticClass:"table-wrap"},[e("table",{staticClass:"confluenceTable"},[e("tbody",[e("tr",[e("th",{staticClass:"confluenceTh"},[t._v("广播")]),e("th",{staticClass:"confluenceTh"},[t._v("原因")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_LOCKED_BOOT_COMPLETED、ACTION_BOOT_COMPLETED")]),e("td",{staticClass:"confluenceTd"},[t._v("这些广播只在首次启动时发送一次，并且许多应用都需要接收此广播以便进行作业、闹铃等事项的安排。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[e("p"),t._v(" "),e("p",[t._v("ACTION_USER_INITIALIZE、android.intent.action.USER_ADDED、")]),t._v(" "),e("p",[t._v("android.intent.action.USER_REMOVED\n")])]),e("td",{staticClass:"confluenceTd"},[t._v("这些广播受特权保护，因此大多数正常应用无论如何都无法接收它们。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("android.intent.action.TIME_SET、ACTION_TIMEZONE_CHANGED")]),e("td",{staticClass:"confluenceTd"},[t._v("时钟应用可能需要接收这些广播，以便在时间或时区变化时更新闹铃。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_LOCALE_CHANGED")]),e("td",{staticClass:"confluenceTd"},[t._v("只在语言区域发生变化时发送，并不频繁。 应用可能需要在语言区域发生变化时更新其数据。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[e("p"),t._v(" "),e("p",[t._v("ACTION_USB_ACCESSORY_ATTACHED、ACTION_USB_ACCESSORY_DETACHED、")]),t._v(" "),e("p",[t._v("ACTION_USB_DEVICE_ATTACHED、ACTION_USB_DEVICE_DETACHED\n")])]),e("td",{staticClass:"confluenceTd"},[t._v("如果应用需要了解这些 USB 相关事件的信息，目前尚未找到能够替代注册广播的可行方案。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_HEADSET_PLUG")]),e("td",{staticClass:"confluenceTd"},[t._v("由于此广播只在用户进行插头的物理连接或拔出时发送，因此不太可能会在应用响应此广播时影响用户体验。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_CONNECTION_STATE_CHANGED、ACTION_CONNECTION_STATE_CHANGED")]),e("td",{staticClass:"confluenceTd"},[t._v("与 ACTION_HEADSET_PLUG 类似，应用接收这些蓝牙事件的广播时不太可能会影响用户体验。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[e("p"),t._v(" "),e("p",[t._v("ACTION_CARRIER_CONFIG_CHANGED、 TelephonyIntents.ACTION_*_SUBSCRIPTION_CHANGED")]),t._v(" "),e("p",[t._v("TelephonyIntents.SECRET_CODE_ACTION\n")])]),e("td",{staticClass:"confluenceTd"},[t._v("原始设备制造商 (OEM) 电话应用可能需要接收这些广播。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("LOGIN_ACCOUNTS_CHANGED_ACTION")]),e("td",{staticClass:"confluenceTd"},[t._v("一些应用需要了解登录帐号的变化，以便为新帐号和变化的帐号设置计划操作")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_PACKAGE_DATA_CLEARED")]),e("td",{staticClass:"confluenceTd"},[t._v("只在用户显式地从 Settings 清除其数据时发送，因此广播接收器不太可能严重影响用户体验。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_PACKAGE_FULLY_REMOVED")]),e("td",{staticClass:"confluenceTd"},[t._v("一些应用可能需要在另一软件包被移除时更新其存储的数据；对于这些应用，尚未找到能够替代注册此广播的可行方案。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_NEW_OUTGOING_CALL")]),e("td",{staticClass:"confluenceTd"},[t._v("执行操作来响应用户打电话行为的应用需要接收此广播。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_DEVICE_OWNER_CHANGED")]),e("td",{staticClass:"confluenceTd"},[t._v("此广播发送得不是很频繁；一些应用需要接收它，以便知晓设备的安装状态发生了变化。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("ACTION_EVENT_REMINDER")]),e("td",{staticClass:"confluenceTd"},[t._v("由日历提供程序发送，用于向日历应用发布事件提醒。因为日历提供程序不清楚日历应用是什么，所以此广播必须是隐式广播。 ")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[e("p"),t._v(" "),e("p",[t._v("ACTION_MEDIA_MOUNTED、ACTION_MEDIA_CHECKING、ACTION_MEDIA_UNMOUNTED、")]),t._v(" "),e("p",[t._v("ACTION_MEDIA_EJECT、 ACTION_MEDIA_UNMOUNTABLE、ACTION_MEDIA_REMOVED、ACTION_MEDIA_BAD_REMOVAL\n")])]),e("td",{staticClass:"confluenceTd"},[e("p"),t._v(" "),e("p",[t._v("这些广播是作为用户与设备进行物理交互的结果（安装或移除存储卷）或启动初始化（作为已装载的可用卷）的\n一部分发送的"),e("span",[t._v("，因此它们不是很常见，并且通常是在用户的掌控下。 ")])])])]),e("tr",[e("td",{staticClass:"confluenceTd",attrs:{colspan:"1"}},[t._v("SMS_RECEIVED_ACTION、WAP_PUSH_RECEIVED_ACTION")]),e("td",{staticClass:"confluenceTd",attrs:{colspan:"1"}},[t._v("这些广播依赖于短信接收应用。")])])])])]),t._v(" "),e("p",[t._v("针对被限制的隐式广播，虽然不能在清单文件中进行注册，但是可以在代码中进行动态注册，Context.registerReceiver().")]),t._v(" "),e("p",[t._v("4.后台位置限制：")]),t._v(" "),e("p",[t._v("为降低功耗，无论应用的目标 SDK 版本为何，Android 8.0 都会对后台应用检索用户当前位置的频率进行限制。")]),t._v(" "),e("p",[t._v("如果您的应用在后台运行时依赖实时提醒或运动检测，这一位置检索行为就显得特别重要，必须紧记。")]),t._v(" "),e("p",[t._v("5.通知栏变化：")]),t._v(" "),e("p",[t._v("Android O，对Notification引入了Notification Channel的概念，当app tagrget >=26，发送通知时就必须加入channel id参数，否则通知无法再通知栏显示。")]),t._v(" "),e("p",[t._v("意味着app必须初始化通知渠道，并且对于一个应用来说，通知渠道只能初始化一次，如果想重新加入更多的渠道，用户必须卸载app并重新安装。所以建议在初始化通知渠道的时候，将各个重要性等级的通知渠道都添加。")]),t._v(" "),e("p",[t._v("Starting in Android 8.0 (API level 26), all notifications must be assigned to a channel. For each channel, you can set the visual and auditory behavior that is applied to all notifications in that channel. Then, users can change these settings and decide which notification channels from your app should be intrusive or visible at all.")]),t._v(" "),e("p",[t._v("示例代码：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\nprivate void createNotificationChannel() {\n    // Create the NotificationChannel, but only on API 26+ because\n    // the NotificationChannel class is new and not in the support library\n    if (Build.VERSION.SDK_INT &gt;= Build.VERSION_CODES.O) {\n        CharSequence name = getString(R.string.channel_name);\n        String description = getString(R.string.channel_description);\n        int importance = NotificationManager.IMPORTANCE_DEFAULT;\n        NotificationChannel channel = new NotificationChannel(CHANNEL_ID, name, importance);\n        channel.setDescription(description);\n        // Register the channel with the system; you can't change the importance\n        // or other notification behaviors after this\n        NotificationManager notificationManager = getSystemService(NotificationManager.class);\n        notificationManager.createNotificationChannel(channel);\n    }\n}\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br")])]),e("p",[t._v("chanel的样式一旦指定，后面就不能再更改，除非用户更改。所以可以在app的settings界面，添加一个改动通知样式的入口，代码实例：")]),t._v(" "),e("p",[t._v("Intent intent = new Intent(Settings.ACTION_CHANNEL_NOTIFICATION_SETTINGS);\nintent.putExtra(Settings.EXTRA_APP_PACKAGE, getPackageName());\nintent.putExtra(Settings.EXTRA_CHANNEL_ID, myNotificationChannel.getId());\nstartActivity(intent);")]),t._v(" "),e("p",[t._v("6.Caused by: java.lang.IllegalStateException: Only fullscreen opaque activities can request orientation")]),t._v(" "),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("原因很简单，大概是谷歌爸爸在安卓8.0版本时为了支持全面屏，增加了一个限制：如果是透明的Activity，则不能固定它的方向，因为它的方向其实是依赖其父Activity的（因为透明）。然而这个bug只有在8.0中有，8.1中已经修复。具体crash有两种：")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("1.Activity的风格为透明，在manifest文件中指定了一个方向，则在onCreate中crash")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("2.Activity的风格为透明，如果调用setRequestedOrientation方法固定方向，则crash")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("先看onCreate中的代码：")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        if (getApplicationInfo().targetSdkVersion > O && mActivityInfo.isFixedOrientation()) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            final TypedArray ta = obtainStyledAttributes(com.android.internal.R.styleable.Window);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            final boolean isTranslucentOrFloating = ActivityInfo.isTranslucentOrFloating(ta);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            ta.recycle();")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            if (isTranslucentOrFloating) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                throw new IllegalStateException(")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v('                        "Only fullscreen opaque activities can request orientation");')])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("这个targetVersion有点骚，如果指定android26，还没问题。")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("具体什么是透明，看代码：")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    public static boolean isTranslucentOrFloating(TypedArray attributes) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        final boolean isTranslucent =")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                attributes.getBoolean(com.android.internal.R.styleable.Window_windowIsTranslucent,")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                        false);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        final boolean isSwipeToDismiss = !attributes.hasValue(")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                com.android.internal.R.styleable.Window_windowIsTranslucent)")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                && attributes.getBoolean(")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                        com.android.internal.R.styleable.Window_windowSwipeToDismiss, false);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        final boolean isFloating =")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                attributes.getBoolean(com.android.internal.R.styleable.Window_windowIsFloating,")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                        false);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        return isFloating || isTranslucent || isSwipeToDismiss;")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("大意就是，有上面三种风格就是透明。")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("那么什么是固定呢？再看：")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    public boolean isFixedOrientation() {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        return isFixedOrientationLandscape() || isFixedOrientationPortrait()")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("                || screenOrientation == SCREEN_ORIENTATION_LOCKED;")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("其实就是横竖屏或者锁定就是固定。")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("现在思路其实很明确，我们只要修补一个版。如果进onCreate的时候，如果判断是透明窗口风格，直接把屏幕朝向改为未指定类型即SCREEN_ORIENTATION_UNSPECIFIED就可以了，因为Activity是透明的，所以其方向依赖于父Activity，")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("所以这个改动对结果不会产生任何影响。")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("至于很多透明Activity的代码中调用setRequestedOrientation，更好处理，项目不是有BaseActivity吗，我们直接判断如果是androidO版本，我们不调用它即可，结果也是等效的。")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("首先要做的就是获取当前Activity是不是透明的，上面都有了代码了，只是好多东西都是隐藏的，我们用反射好了。")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("下面这段代码是BaseActivity的成员方法，其中稍难的就是如何获取com.android.internal.R$styleable.Window这个stylable，最开始我R后面写的是“.”，一直不对，后来才发现stylable其实是R的内部类，获取到这个数组，就可以用反射调用")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("ActivityInfo#isTranslucentOrFloating()这个方法了。")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    private boolean isTranslucentOrFloating(){")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        boolean isTranslucentOrFloating = false;")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        try {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v('            int [] styleableRes = (int[]) Class.forName("com.android.internal.R$styleable").getField("Window").get(null);')])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            final TypedArray ta = obtainStyledAttributes(styleableRes);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v('            Method m = ActivityInfo.class.getMethod("isTranslucentOrFloating", TypedArray.class);')])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            m.setAccessible(true);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            isTranslucentOrFloating = (boolean)m.invoke(null, ta);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            m.setAccessible(false);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        } catch (Exception e) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            e.printStackTrace();")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        return isTranslucentOrFloating;")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("在onCreate的时候，先判断，如果透明，直接把方向改为SCREEN_ORIENTATION_UNSPECIFIED：")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    @Override")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    protected void onCreate(Bundle savedInstanceState) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        if (Build.VERSION.SDK_INT == Build.VERSION_CODES.O && isTranslucentOrFloating()) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            boolean result = fixOrientation();")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v('            XLog.i(XLog.BASE, "onCreate fixOrientation when Oreo, result = " + result);')])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        super.onCreate(savedInstanceState);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    private boolean fixOrientation(){")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        try {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v('            Field field = Activity.class.getDeclaredField("mActivityInfo");')])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            field.setAccessible(true);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            ActivityInfo o = (ActivityInfo)field.get(this);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            o.screenOrientation = -1;")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            field.setAccessible(false);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            return true;")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        } catch (Exception e) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            e.printStackTrace();")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        return false;")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("然后在设置方向的时候如果透明，直接不执行：")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    @Override")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    public void setRequestedOrientation(int requestedOrientation) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        if (Build.VERSION.SDK_INT == Build.VERSION_CODES.O && isTranslucentOrFloating()) {")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v('            XLog.i(XLog.BASE, "avoid calling setRequestedOrientation when Oreo.");')])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("            return;")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        }")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("        super.setRequestedOrientation(requestedOrientation);")])]),e("div",{staticStyle:{"margin-left":"30.0px"}},[e("span",{staticStyle:{color:"rgb(62,62,62)"}},[t._v("    }")])]),e("p",[t._v("7.运行时限制：\n在 Android 8.0 之前，如果应用在运行时请求权限并且被授予该权限，系统会错误地将属于同一权限组并且在清单中注册的其他权限也一起授予应用。 \n对于针对 Android 8.0 的应用，此行为已被纠正。系统只会授予应用明确请求的权限。然而，一旦用户为应用授予某个权限，则所有后续对该权限组中权限的请求都将被自动批准。 \n例如，假设某个应用在其清单中列出 READ_EXTERNAL_STORAGE 和 WRITE_EXTERNAL_STORAGE。应用请求 READ_EXTERNAL_STORAGE，并且用户授予了该权限。如果该应用针对的是 API 级别 24 或更低级别，系统还会同时授予 WRITE_EXTERNAL_STORAGE，因为该权限也属于同一 STORAGE 权限组并且也在清单中注册过。如果该应用针对的是 Android 8.0，则系统此时仅会授予 READ_EXTERNAL_STORAGE；不过，如果该应用后来又请求 WRITE_EXTERNAL_STORAGE，则系统会立即授予该权限，而不会提示用户。\n")]),e("p",[t._v("8.悬浮窗适配：\n使用 SYSTEM_ALERT_WINDOW 权限的应用无法再使用以下窗口类型来在其他应用和系统窗口上方显示提醒窗口：")]),t._v(" "),e("p",[t._v("TYPE_PHONE")]),t._v(" "),e("p",[t._v("TYPE_PRIORITY_PHONE")]),t._v(" "),e("p",[t._v("TYPE_SYSTEM_ALERT")]),t._v(" "),e("p",[t._v("TYPE_SYSTEM_OVERLAY")]),t._v(" "),e("p",[t._v("TYPE_SYSTEM_ERROR")]),t._v(" "),e("p",[t._v("相反，应用必须使用名为 TYPE_APPLICATION_OVERLAY 的新窗口类型。")]),t._v(" "),e("p",[t._v("if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { mWindowParams.type = WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY }else { mWindowParams.type = WindowManager.LayoutParams.TYPE_SYSTEM_ALERT }")]),t._v(" "),e("p",[t._v('<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/> <uses-permission android:name="android.permission.SYSTEM_OVERLAY_WINDOW" />')]),t._v(" "),e("p",[t._v("9.安装Apk：\nAndroid 8.0去除了“允许未知来源”选项，所以如果我们的App有安装App的功能（检查更新之类的），那么会无法正常安装。")]),t._v(" "),e("p",[t._v("首先在AndroidManifest文件中添加安装未知来源应用的权限:")]),t._v(" "),e("p",[t._v('<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>')]),t._v(" "),e("p",[t._v("这样系统会自动询问用户完成授权。当然你也可以先使用 canRequestPackageInstalls()查询是否有此权限，如果没有的话使用Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES这个action将用户引导至安装未知应用权限界面去授权。")]),t._v(" "),e("p",[t._v("10.新功能：")]),t._v(" "),e("p",[t._v("10.1全面屏适配。app未进行全面屏适配前，在全面屏手机上底部会有黑色空白。适配方法：\n<application>")]),t._v(" "),e("p",[t._v("……")]),t._v(" "),e("p",[t._v('<meta-data android:name="android.max_aspect" android:value="2.4" />')]),t._v(" "),e("p",[t._v("</application>")]),t._v(" "),e("p",[t._v("10.2、能自动改变大小的textview，可利用support v4中的textviewcompat")]),t._v(" "),e("p",[t._v("10.3、自适应app图标，app图标显示行为能自适应手机系统。")]),t._v(" "),e("p",[t._v("10.4、快捷方式（Shortcut），长按app桌面图标，可以弹出一些快捷入口。")]),t._v(" "),e("p",[t._v("10.5、自动填充框架。帐号创建、登录和信用卡交易需要时间并且容易出错。在使用要求执行此类重复性任务的应用时，用户很容易遭受挫折。")]),t._v(" "),e("p",[t._v("Android 8.0 通过引入自动填充框架，简化了登录和信用卡表单之类表单的填写工作。在用户选择接受自动填充之后，新老应用都可使用自动填充框架。")]),t._v(" "),e("p",[t._v("10.6、画中画模式。")]),t._v(" "),e("p",[t._v("10.7、Contentprovider支持分页。")]),t._v(" "),e("p",[t._v("10.8、JobScheduler 改进。")]),t._v(" "),e("hr"),t._v(" "),e("h1",{attrs:{id:"android-p行为变更："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-p行为变更：","aria-hidden":"true"}},[t._v("#")]),t._v(" Android P行为变更：")]),t._v(" "),e("h1",{attrs:{id:"p-新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#p-新特性","aria-hidden":"true"}},[t._v("#")]),t._v(" P 新特性")]),t._v(" "),e("p",[t._v("Android P 在Google IO2018正式发版，全新的手势操作选项。底部虚拟键将由小白点和一颗返回键取代。通过轻触回到主页、长按呼出语音助手。新的特性主要有：")]),t._v(" "),e("ul",[e("li",[t._v("利用 Wi-Fi RTT 进行室内定位")]),t._v(" "),e("li",[t._v("刘海平API支持")]),t._v(" "),e("li",[t._v("通知栏功能增强")]),t._v(" "),e("li",[t._v("多摄像头支持和摄像头更新")]),t._v(" "),e("li",[t._v("HDR VP9 视频、HEIF 图像压缩和 Media API")])]),t._v(" "),e("p",[t._v("详细可参考"),e("a",{attrs:{href:"https://developer.android.google.cn/preview/features",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google官方文档"),e("OutboundLink")],1),t._v("介绍。")]),t._v(" "),e("h1",{attrs:{id:"p-兼容优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#p-兼容优化","aria-hidden":"true"}},[t._v("#")]),t._v(" P 兼容优化")]),t._v(" "),e("p",[t._v("根据官方的API迁移指南，对应用比较影响的有如下几点：")]),t._v(" "),e("h2",{attrs:{id:"non-sdk接口的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#non-sdk接口的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" non-SDK接口的使用")]),t._v(" "),e("p",[t._v("一般来说，SDK 接口是指在 Android 框架"),e("a",{attrs:{href:"https://developer.android.google.cn/reference/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件包索引"),e("OutboundLink")],1),t._v("中记录的接口。 对非 SDK 接口的处理是 API 抽象化的实现细节；其会随时更改，恕不另行通。")]),t._v(" "),e("p",[t._v("Android P 引入了针对非 SDK 接口的新使用限制，无论是直接使用还是通过反射或 JNI 间接使用。 无论应用是引用非 SDK 接口还是尝试使用反射或 JNI 获取其句柄，均适用这些限制。")]),t._v(" "),e("h3",{attrs:{id:"名单分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名单分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 名单分类")]),t._v(" "),e("ul",[e("li",[t._v("Light grey list: targetSDK>=P时，警告；")]),t._v(" "),e("li",[t._v("Dark grey list: targetSDK<P时，警告；>=p时，不允许调用；")]),t._v(" "),e("li",[t._v("Black list:三方应用不允许调用；")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://android.googlesource.com/platform/frameworks/base/+/master/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("名单查看"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"具体影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体影响","aria-hidden":"true"}},[t._v("#")]),t._v(" 具体影响")]),t._v(" "),e("div",{staticClass:"table-wrap"},[e("table",{staticClass:"confluenceTable"},[e("thead",[e("tr",[e("th",{staticClass:"confluenceTh"},[t._v("访问方式")]),e("th",{staticClass:"confluenceTh"},[t._v("结果")])])]),e("tbody",[e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("Dalvik 指令引用字段")]),e("td",{staticClass:"confluenceTd"},[t._v("引发 NoSuchFieldError")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("Dalvik 指令引用函数")]),e("td",{staticClass:"confluenceTd"},[t._v("引发 NoSuchMethodError")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("通过 Class.getDeclaredField() 或 Class.getField() 反射")]),e("td",{staticClass:"confluenceTd"},[t._v("引发 NoSuchFieldException")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("通过 Class.getDeclaredMethod() 或 Class.getMethod() 反射")]),e("td",{staticClass:"confluenceTd"},[t._v("引发 NoSuchMethodException")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("通过 Class.getDeclaredFields() 或 Class.getFields() 反射")]),e("td",{staticClass:"confluenceTd"},[t._v("结果中未出现非 SDK 成员")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("通过 Class.getDeclaredMethods() 或 Class.getMethods() 反射")]),e("td",{staticClass:"confluenceTd"},[t._v("结果中未出现非 SDK 成员")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("通过 env->GetFieldID() 调用 JNI")]),e("td",{staticClass:"confluenceTd"},[t._v("返回 NULL，引发 NoSuchFieldError")])]),e("tr",[e("td",{staticClass:"confluenceTd"},[t._v("通过 env->GetMethodID() 调用 JNI")]),e("td",{staticClass:"confluenceTd"},[t._v("返回 NULL，引发 NoSuchMethodError")])])])])]),t._v(" "),e("h2",{attrs:{id:"挖孔屏适配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挖孔屏适配","aria-hidden":"true"}},[t._v("#")]),t._v(" 挖孔屏适配")]),t._v(" "),e("p",[t._v("谷歌P版本提供了统一的挖孔屏方案和三方适配挖孔屏方案：")]),t._v(" "),e("ul",[e("li",[t._v("对于有状态栏的页面，不会受到挖孔屏特性的影响；")]),t._v(" "),e("li",[t._v("全屏显示的页面，系统挖孔屏方案会对应用界面做下移避开挖孔区显示；")]),t._v(" "),e("li",[t._v("已经适配的P的应用的全屏页面可以通过谷歌提供的适配方案使用挖孔区，真正做到全屏显示")])]),t._v(" "),e("p",[t._v("总的来说，就是P版本已经坐了兼容，全屏显示和状态栏显示，都会避开挖空区域显示。\n但注意对于沉浸式的显示要注意，避免挖空挡住UI布局，需要做好适配。\n")]),e("div",{staticClass:"image-package"},[e("div",{staticClass:"image-caption"},[t._v("P版本三方适配挖孔屏方案")])]),e("p"),t._v(" "),e("p",[t._v("1、 新增挖孔屏挖孔尺寸和位置接口")]),t._v(" "),e("pre",[e("code",[t._v('<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">WindowInsets</span> {</span>\n<span class="hljs-function">DisplayCutout <span class="hljs-title">getDisplayCutout</span><span class="hljs-params">()</span></span>;\n}\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DisplayCutout</span> {</span>\n<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">getSafeInsetLeft</span><span class="hljs-params">()</span></span>;\n<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">getSafeInsetTop</span><span class="hljs-params">()</span></span>;\n<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">getSafeInsetRight</span><span class="hljs-params">()</span></span>;\n<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">getSafeInsetBottom</span><span class="hljs-params">()</span></span>;\n<span class="hljs-function">Region <span class="hljs-title">getBounds</span><span class="hljs-params">()</span></span>;\n}\n`</pre>\n\n2、新窗口布局模式，允许应用程序请求是否在挖孔区域布局：\n<pre class="hljs java">`<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">WindowManager</span>.<span class="hljs-title">LayoutParams</span> </span>{\n<span class="hljs-keyword">int</span> layoutInDisplayCutoutMode;\n<span class="hljs-keyword">final</span> <span class="hljs-keyword">int</span> LAYOUT_IN_DISPLAY_CUTOUT_MODE_DEFAULT;\n<span class="hljs-keyword">final</span> <span class="hljs-keyword">int</span> LAYOUT_IN_DISPLAY_CUTOUT_MODE_ALWAYS;\n<span class="hljs-keyword">final</span> <span class="hljs-keyword">int</span> LAYOUT_IN_DISPLAY_CUTOUT_MODE_NEVER;\n    }\nlayoutInDisplayCutoutMode值说明：\n\na）LAYOUT_IN_DISPLAY_CUTOUT_MODE_DEFAULT：默认情况下，全屏窗口不会使用到挖孔区域，非全屏窗口可正常使用挖孔区域。\nb）LAYOUT_IN_DISPLAY_CUTOUT_MODE_ALWAYS：窗口声明使用挖孔区域\nc）LAYOUT_IN_DISPLAY_CUTOUT_MODE_NEVER：窗口声明不使用挖孔区域\n`</pre>\n\n## Battery Improvements\n\n谷歌在P版本之前没有一个完整的功耗解决方案，OEM厂商分别开发各自的功耗方案，管控手段都包括了清理应用，功耗得到优化，但是同时也影响了三方应用的一些功能正常使用，谷歌为了解决这个问题在P版本提出了自己的功耗解决方案。\n\n### 主要方案：\n')])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("AAB（Auto Awesome Battery)：")]),t._v(" "),e("p",[t._v("1、通过ML算法将应用进行分类，不同类型的应用功耗管控策略不一样")]),t._v(" "),e("p",[t._v("2、 Firebase Cloud Messaging (FCM):管控三方消息接收的频率")]),t._v(" "),e("p",[t._v("3、谷歌提供了统一的应用的管控方法：Forced App Standby (FAS)，谷歌不会通过清理应用来优化功耗")])]),t._v(" "),e("li",[e("p",[t._v("Extreme Battery Saver（EBS）谷歌超级省电模式；")])]),t._v(" "),e("li",[e("p",[t._v("Smart screen brightness：屏幕亮度调节优化算法。")]),t._v(" "),e("h3",{attrs:{id:"影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响","aria-hidden":"true"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),e("p",[t._v("谷歌功耗方案对三方应用各种管控，存在导致应用后台功能无法正常使用的可能，特别是：IM、邮箱、闹钟、音乐（直播）、地图导航、运动健康、下载、日历等应用影响比较大。目前通过谷歌提供的调试命令验证：所有的应用都有可能会被分到管控的类型，对三方的后台功能是有影响的。")]),t._v(" "),e("h2",{attrs:{id:"不允许共享webview数据目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不允许共享webview数据目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 不允许共享WebView数据目录")]),t._v(" "),e("p",[t._v("应用程序不能再跨进程共享单个WebView数据目录。如果您的应用有多个使用WebView，CookieManager或android.webkit包中的其他API的进程，则当第二个进程调用WebView方法时，您的应用将崩溃。")]),t._v(" "),e("p",[t._v("该特性只影响已经适配P的应用，也就是targetSDK Version>=P。")]),t._v(" "),e("h2",{attrs:{id:"移除对-build-serial-的直接访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除对-build-serial-的直接访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 移除对 Build.serial 的直接访问")]),t._v(" "),e("p",[t._v("现在，需要 Build.serial 标识符的应用必须请求 READ_PHONE_STATE 权限，然后使用 Android P 中新增的新 Build.getSerial() 函数")]),t._v(" "),e("h2",{attrs:{id:"android-p-限制了明文流量的网络请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-p-限制了明文流量的网络请求","aria-hidden":"true"}},[t._v("#")]),t._v(" Android P 限制了明文流量的网络请求")]),t._v(" "),e("p",[t._v("CLEARTEXT communication to "),e("a",{attrs:{href:"http://life.115.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("life.115.com"),e("OutboundLink")],1),t._v(" not permitted by network security policy")]),t._v(" "),e("p",[t._v("问题原因： Android P 限制了明文流量的网络请求，非加密的流量请求都会被系统禁止掉")]),t._v(" "),e("p",[t._v("解决方案：")]),t._v(" "),e("p",[t._v("在资源文件新建xml目录，新建文件\n"),e("pre",{staticClass:"hljs xml"},[t._v("`"),e("span",{staticClass:"php"},[e("span",{staticClass:"hljs-meta"},[t._v("<?")]),t._v("xml version="),e("span",{staticClass:"hljs-string"},[t._v('"1.0"')]),t._v(" encoding="),e("span",{staticClass:"hljs-string"},[t._v('"utf-8"')]),e("span",{staticClass:"hljs-meta"},[t._v("?>")])]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("network-security-config")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("base-config")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("cleartextTrafficPermitted")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" />")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("network-security-config")]),t._v(">")])])])])]),t._v(" "),e("p",[t._v('清单文件配置：android:networkSecurityConfig="@xml/network_security_config"')]),t._v(" "),e("p",[t._v("但还是建议都使用https进行传输")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.android.google.cn/preview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google官方文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://devcenter.huawei.com/consumer/cn/devservice/doc/50115",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android P版本应用兼容性适配技术指导"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://dev.mi.com/console/doc/detail?pId=1696",target:"_blank",rel:"noopener noreferrer"}},[t._v("谷歌强制升级TargetSdkVersion适配指导"),e("OutboundLink")],1),e("span",{staticStyle:{color:"rgb(0,0,0)"}}),e("span",{staticStyle:{color:"rgb(0,0,0)"}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.android.com/about/versions/oreo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android O"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.android.com/about/versions/oreo/android-8.0-samples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android O Demo"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.android.com/about/versions/pie",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android P"),e("OutboundLink")],1)])])},[],!1,null,null,null);a.default=n.exports}}]);