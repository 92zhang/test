
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/region/region","pages/main/main","pages/index/index","pages/info/info","components/navigation/navigation","pages/timeTable/timeTable","pages/course/course","pages/class/class","js_sdk/u-charts/u-charts/component","pages/my/my","pages/swiper/swiper","pages/formativeTest/formativeTest","pages/doTheTitle/doTheTitle","pages/successfulReception/successfulReception","pages/web/web","pages/courseVideo/courseVideo","pages/echarts_shiyan/echarts_shiyan","pages/bottomShiyan/bottomShiyan","pages/login/login","pages/hk/login","pages/register/register","pages/hk/register","pages/retrievePassword/retrievePassword","pages/hk/retrievePassword","pages/weblb/weblb","pages/readVideo/readVideo","pages/listen/listen","pages/preRea_ReadVideo/preRea_ReadVideo","pages/exercises/exercises","pages/strive/strive","pages/perfect/perfect","pages/historyComment/historyComment","pages/nonMember/nonMember","pages/newReview/newReview","pages/playRules/playRules","pages/workSheet/workSheet","pages/up_course/up_course","pages/up_readVideo/up_readVideo","pages/readingLevelVideo/readingLevelVideo","pages/up_listen/up_listen","pages/up_listen_original/up_listen_original","pages/up_exercises/up_exercises","pages/up_strive/up_strive","pages/up_perfect/up_perfect","pages/companionBook/companionBook","pages/companionBookDetail/companionBookDetail","pages/companionBookResult/companionBookResult","pages/achievement/achievement","pages/exchangeRecord/exchangeRecord","pages/trophy/trophy","pages/sList/sList","pages/activityVideo/activityVideo","pages/recordedBroadcast/recordedBroadcast","pages/room/room","pages/rabcVideo/rabcVideo","pages/sightWords/index","pages/sightWords/part","pages/sightWords/sightWords","pages/monthlyStarList/monthlyStarList","pages/monthlyStarPerson/monthlyStarPerson","pages/selfVsFirst/selfVsFirst","pages/teacherIntroduct/teacherIntroduct","pages/studentSet/studentSet","pages/switchingUsers/switchingUsers","pages/newAdd/newAdd","pages/headmaster/headmaster","pages/dateShiyan/dateShiyan","pages/deleteRenderjs/deleteRenderjs"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"","navigationBarTitleText":"Protostar","backgroundColorTop":"#F4F5F6","backgroundColorBottom":"#F4F5F6","titleView":false,"animationType":"none","background":"000066","bounce":"none"},"networkTimeout":{"request":30000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Protostar","compilerVersion":"3.1.18","entryPagePath":"pages/region/region"};
var __uniRoutes = [{"path":"/pages/region/region","meta":{"isQuit":true},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/main/main","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/index/index","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/info/info","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/components/navigation/navigation","meta":{},"window":{}},{"path":"/pages/timeTable/timeTable","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/course/course","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/class/class","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/js_sdk/u-charts/u-charts/component","meta":{},"window":{}},{"path":"/pages/my/my","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/swiper/swiper","meta":{},"window":{}},{"path":"/pages/formativeTest/formativeTest","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/doTheTitle/doTheTitle","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/successfulReception/successfulReception","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/web/web","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/courseVideo/courseVideo","meta":{},"window":{}},{"path":"/pages/echarts_shiyan/echarts_shiyan","meta":{},"window":{}},{"path":"/pages/bottomShiyan/bottomShiyan","meta":{},"window":{}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/hk/login","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/register/register","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/hk/register","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/retrievePassword/retrievePassword","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/hk/retrievePassword","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/weblb/weblb","meta":{},"window":{}},{"path":"/pages/readVideo/readVideo","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/listen/listen","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/preRea_ReadVideo/preRea_ReadVideo","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/exercises/exercises","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/strive/strive","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/perfect/perfect","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/historyComment/historyComment","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/nonMember/nonMember","meta":{},"window":{}},{"path":"/pages/newReview/newReview","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/playRules/playRules","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/workSheet/workSheet","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/up_course/up_course","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/up_readVideo/up_readVideo","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/readingLevelVideo/readingLevelVideo","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/up_listen/up_listen","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/up_listen_original/up_listen_original","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/up_exercises/up_exercises","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/up_strive/up_strive","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/up_perfect/up_perfect","meta":{},"window":{"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/companionBook/companionBook","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/companionBookDetail/companionBookDetail","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/companionBookResult/companionBookResult","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/achievement/achievement","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/exchangeRecord/exchangeRecord","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/trophy/trophy","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/sList/sList","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/activityVideo/activityVideo","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/recordedBroadcast/recordedBroadcast","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/room/room","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/rabcVideo/rabcVideo","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/sightWords/index","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/sightWords/part","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/sightWords/sightWords","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/monthlyStarList/monthlyStarList","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/monthlyStarPerson/monthlyStarPerson","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/selfVsFirst/selfVsFirst","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/teacherIntroduct/teacherIntroduct","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/studentSet/studentSet","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/switchingUsers/switchingUsers","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/newAdd/newAdd","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/headmaster/headmaster","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/dateShiyan/dateShiyan","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/deleteRenderjs/deleteRenderjs","meta":{},"window":{"navigationStyle":"custom","titleView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});