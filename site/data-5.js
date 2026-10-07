// Unit 010 patch: tw-taichung-taiping-taiping-nursery-bald-cypress
(function() {
  const D = window.GUIDE_DATA;
  if (!D) throw new Error("GUIDE_DATA must be loaded before data-5.js");

  D.meta.completed = 10;
  D.meta.next = "太平買菸場";
  D.meta.version = "0.5.1-preview";

  const taiping = D.areas.find(x => x.id === "taiping");
  if (taiping) {
    taiping.intro = "太平區位於臺中盆地東緣，西側是都市、校園與文化設施，向東逐步轉為丘陵、果園、產業道路與山林。目前已整合八個可操作的景點級單元，新增太平苗圃落羽松的季節水景與生態導覽。";
    const exists = (taiping.routes || []).some(r => r.id === "seasonal");
    if (!exists) {
      taiping.routes = taiping.routes || [];
      taiping.routes.push({
        id: "seasonal",
        name: "季節水景・地方記憶線",
        duration: "半日",
        stops: [
          "tw-taichung-taiping-taiping-nursery-bald-cypress",
          "tw-taichung-taiping-taiping-ancient-farmhouse-museum"
        ],
        theme: "以太平苗圃秋冬落羽松、水鏡景觀與古農莊地方生活史串成季節慢遊。"
      });
    }
  }

  const unit = {"id":"tw-taichung-taiping-taiping-nursery-bald-cypress","name":"太平苗圃落羽松","parent":"taiping","aliases":["太平苗圃","太平落羽松","Taiping Nursery Bald Cypress"],"icon":"🍂","sub":"秋冬落羽松・水鏡生態","center":[120.801804,24.11833],"bbox":[120.8009,24.11765,120.80265,24.11905],"camera":{"center":[120.801804,24.11833],"zoom":17.7,"pitch":52,"bearing":25,"duration":2600},"intro":"太平苗圃落羽松位於太平區東汴里、東汴國小附近，是結合水景、生態與季節色彩的小型綠地。官方觀光資料描述池畔約有20多株落羽松，秋冬轉色後倒映水面；建設局近年則以更廣範圍的上百株落羽松林介紹苗圃。園區腹地不大，適合短時間散步、攝影與生態觀察，實際轉色、水位與生物活動皆受年度氣候影響。","checked":"2026-10-07","history":[{"name":"季節景觀","text":"市府近年持續將太平苗圃列為秋冬落羽松景點；池畔水景與小尺度步道形成代表性體驗。"},{"name":"生態背景","text":"場域另有水域與兩棲類教育價值；夜間活動屬季節性或特定活動，不保證全年固定提供。"}],"industry":[{"name":"地方發展","text":"苗圃綠化、季節景觀、攝影取景與低干擾生態教育是主要特色。"}],"food":[{"name":"太平枇杷","text":"3月為太平枇杷主要盛產期；屬區域農產延伸，並非苗圃內固定販售。"}],"transport":"官方地址：臺中市太平區山田路大湖巷17號。中心點目前採鄰近地址公開座標代理；實際前往應由合規GeocoderAdapter重新解析17號地址。公車與停車資訊不硬編碼，請查即時交通與現場標示。","best":"以秋冬入冬後轉色期最具代表性；通常12月至翌年1月可優先觀察，但實際轉色受年度氣溫與天候影響。拍倒影可選風較小、光線柔和的上午或午後。","nodes":[{"id":"nursery-main-entry","name":"苗圃入口導覽點","aliases":["太平苗圃入口"],"kind":"entrance","c":[120.80146,24.11831],"acc":"approximate_guide_anchor","s":"由官方地址與鄰近公開點位推估的內容入口錨點；實際入口、開放方向與臨時管制請依現場標示。"},{"id":"nursery-bald-cypress-core","name":"落羽松核心林","aliases":["落羽松林"],"kind":"forest","c":[120.80176,24.11843],"acc":"approximate_guide_anchor","s":"秋冬由綠轉金、橘紅的主要視覺核心；官方不同頁面對株數描述範圍不同，因此不固定顯示總株數。"},{"id":"nursery-reflection-pond","name":"落羽松倒影生態池","aliases":["倒影池"],"kind":"water_resilience","c":[120.8017,24.11824],"acc":"approximate_guide_anchor","s":"落羽松、水面與天空形成代表性倒影景觀，也是水生植物與小型生物觀察的核心區域。"},{"id":"nursery-stone-loop","name":"池畔石頭環行步道","aliases":["石頭步道"],"kind":"landscape","c":[120.80158,24.11818],"acc":"approximate_guide_anchor","s":"官方觀光資料指出環池石頭步道走一圈只需數分鐘；雨後、落葉季與夜間需留意濕滑、樹根與高低差。"},{"id":"nursery-season-color-zone","name":"秋冬轉色觀景帶","aliases":["金紅落羽松帶"],"kind":"viewpoint","c":[120.80186,24.11849],"acc":"approximate_guide_anchor","s":"以綠、金黃、橘紅漸層為主題的季節觀景段；色彩進度受當年氣溫與天候影響，不能保證固定日期達到最佳狀態。"},{"id":"nursery-photo-axis","name":"水鏡攝影視角","aliases":["倒影攝影點"],"kind":"viewpoint","c":[120.8016,24.11836],"acc":"approximate_guide_anchor","s":"以水面、落羽松列植與遠近層次構圖的3D相機視角；不是指定拍攝站位，也不鼓勵踩入植栽或池岸。"},{"id":"nursery-spring-wetland","name":"湧泉濕地生態觀察區","aliases":["濕地觀察區"],"kind":"ecology","c":[120.80191,24.11817],"acc":"approximate_secondary_anchor","s":"次級報導提及場域原有湧泉與低窪水地條件；此節點只作生態教育內容，不宣稱為官方命名或法定濕地範圍。"},{"id":"nursery-water-plant-zone","name":"水生植物觀察帶","aliases":["水草區"],"kind":"ecology","c":[120.80197,24.11828],"acc":"approximate_secondary_anchor","s":"用來解說水面、池岸植物、昆蟲與兩棲類之間的棲地關係；實際物種需依季節與現場專業辨識。"},{"id":"nursery-frog-education","name":"夜間兩棲教育觀察點","aliases":["賞蛙教育點"],"kind":"ecology","c":[120.80166,24.11808],"acc":"logical_education_anchor","s":"依2026護蛙賞蛙活動建立的教育節點，只代表『此區曾進行夜間生態活動』；不是固定賞蛙設施或保證全年可觀察到蛙類。"},{"id":"nursery-quiet-buffer","name":"鄰接場域安靜緩衝帶","aliases":["安靜區"],"kind":"landscape","c":[120.80153,24.1184],"acc":"logical_etiquette_anchor","s":"苗圃鄰近宗教活動場域，導覽介面在此降低環境音與動畫，提醒遊客尊重鄰近空間、避免大聲喧嘩與阻擋出入口。"}],"routes":[{"id":"nursery-route-water-mirror","name":"水鏡賞松線","duration":"約15–25分鐘","stops":["nursery-main-entry","nursery-bald-cypress-core","nursery-reflection-pond","nursery-photo-axis"],"theme":"以落羽松、水面倒影與短距離攝影構圖為主，適合第一次造訪快速掌握場域。"},{"id":"nursery-route-season-color","name":"秋冬色彩觀察線","duration":"約20–35分鐘","stops":["nursery-bald-cypress-core","nursery-season-color-zone","nursery-stone-loop","nursery-reflection-pond"],"theme":"從樹冠由綠轉金、橘紅的色彩變化，連到水面反射與池畔近距離觀察。"},{"id":"nursery-route-ecology","name":"水域與兩棲生態教育線","duration":"約30–45分鐘","stops":["nursery-spring-wetland","nursery-water-plant-zone","nursery-reflection-pond","nursery-frog-education"],"theme":"把湧泉、低窪水地、水生植物與兩棲類教育串在一起，適合親子與自然觀察。"},{"id":"nursery-route-quiet-stroll","name":"安靜慢行線","duration":"約15–30分鐘","stops":["nursery-main-entry","nursery-quiet-buffer","nursery-stone-loop","nursery-bald-cypress-core"],"theme":"用低音量、低動畫的方式體驗小尺度苗圃，兼顧景觀欣賞與鄰接場域禮節。"}],"sources":[{"title":"臺中觀光旅遊網－宅．在臺中｜太平區","url":"https://travel.taichung.gov.tw/zh-tw/Tourist/Tour/1122/","publisher":"臺中市政府觀光旅遊局","date":"2026-10-07"},{"title":"臺中市政府－秋冬美景正盛！太平苗圃落羽松","url":"https://www.taichung.gov.tw/3165278/post","publisher":"臺中市政府／建設局","date":"2026-10-07"},{"title":"臺中觀光旅遊網－太平苗圃落羽松相簿","url":"https://travel.taichung.gov.tw/zh-tw/multimedia/album/13449","publisher":"臺中市政府觀光旅遊局","date":"2026-10-07"}]};
  if (!D.areas.some(x => x.id === unit.id)) D.areas.push(unit);
})();