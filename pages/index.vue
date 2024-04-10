<script setup>
import banner from 'assets/images/banner.jpg'
import taipei from 'assets/images/map/组 1147.png'
import kinmen from 'assets/images/map/组 1148.png'
import Keelung from 'assets/images/map/组 1149.png'
import NewTaipei from 'assets/images/map/组 1150.png'
import Taoyuan from 'assets/images/map/组 1151.png'
import Hsinchu from 'assets/images/map/组 1152.png'
import Taichung from 'assets/images/map/组 1153.png'
import Yunlin from 'assets/images/map/组 1154.png'
import Chiayi from 'assets/images/map/组 1155.png'
import Tainan from 'assets/images/map/组 1156.png'
import Miaoli from 'assets/images/map/组 1157.png'
import Pingtung from 'assets/images/map/组 1158.png'
import Hualien from 'assets/images/map/组 1160.png'
import Taitung from 'assets/images/map/组 1159.png'
import Yilan from 'assets/images/map/组 1161.png'
import Kaohsiung from 'assets/images/map/组 1162.png'

const items = ref([
  {
    src: banner
  },
  // {
  //   src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
  // },
  // {
  //   src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
  // },
  // {
  //   src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
  // }
])

import { ref, computed } from 'vue';

const selectedRegion = ref('北');
const selectedCity = ref('臺北市');
const selectedDepartment = ref('術科');
const selectedVenue = ref('臺北市民航局行政大樓術科考場');
const cityOptions = {
  '北': ['臺北市', '新北市', '宜蘭市', '桃園市', '新竹縣', '基隆市'],
  '中': ['台中市', '苗栗縣'],
  '南': ['嘉義市','雲林縣','台南市','屏東縣', '高雄市'],
  '東': ['花蓮縣', '台東縣'],
  '離島': ['金門縣']
};

const cityImageMap = {
  '臺北市': taipei,
  '新北市': NewTaipei,
  '宜蘭市': Yilan,
  '桃園市': Taoyuan,
  '新竹縣': Hsinchu,
  '基隆市': Keelung,
  '台中市': Taichung,
  '苗栗縣': Miaoli,
  '嘉義市': Chiayi,
  '雲林縣': Yunlin,
  '台南市': Tainan,
  '屏東縣': Pingtung,
  '高雄市': Kaohsiung,
  '花蓮縣': Hualien,
  '台東縣': Taitung,
  '金門縣': kinmen
};

const cities = computed(() => {
  return cityOptions[selectedRegion.value] || [];
});

watch(selectedRegion, () => {
  selectedCity.value = cities.value[0];
});

const venueOptions = {
  '臺北市': {
    '學科': ['民航局學科考場', '中國科大學科考場', '臺灣大學學科考場', '華梵大學台北承德中心學科考場'],
    '術科': ['臺北市民航局行政大樓術科考場', '臺北市中國科技大學術科考場']
  },
  '新北市': {
    '學科': ['新北無學科場地'],
    '術科': ['新北市東南科技大學術科考場', '新北市大新店飛行場術科考場','國立臺灣大學生農學院實驗農場安康考場術科考場','華梵大學術科考場']
  },
  '桃園市': {
    '學科': ['桃園無學科場地'],
    '術科': ['桃園市銘傳大學桃園校區術科考場']
  },
  '宜蘭市': {
    '學科': ['宜蘭大學學科考場'],
    '術科': ['宜蘭大學城南校區術科考場']
  },
  '新竹縣': {
    '學科': ['新竹縣中華無人機教育發展交流協會學科考場'],
    '術科': ['新竹縣中華無人機教育發展交流協會術科考場']
  },
  '苗栗縣': {
    '學科': ['苗栗縣育達科技大學學科考場'],
    '術科': ['苗栗縣育達科技大學術科考場']
  },
  '台中市': {
    '學科': ['中科院臺中院區學科考場','台灣發展研究院學科考場'],
    '術科': ['台中無學科場地']
  },
  '雲林縣': {
    '學科': ['台灣福爾摩沙無人飛行器協會學科考場'],
    '術科': ['台灣福爾摩沙無人飛行器協會場地術科考場']
  },
  '嘉義市': {
    '學科': ['嘉義大學學科考場'],
    '術科': ['嘉義大學術科考場']
  },
  '台南市': {
    '學科': ['遠東科大學科考場'],
    '術科': ['遠東科技大學術科考場']
  },
  '高雄市': {
    '學科': ['實踐大學高雄校區學科考場', '高苑科大學科考場'],
    '術科': ['高苑科技大學術科考場', '實踐大學高雄校區術科考場']
  },
  '屏東縣': {
    '學科': ['屏東大學學科考場'],
    '術科': ['竹田飛行場術科考場']
  },
  '花蓮縣': {
    '學科': ['東華大學創新研究園區學科考場'],
    '術科': ['東華大學壽豐校區術科考場']
  },
  '台東縣': {
    '學科': ['鹿鳴學科考場'],
    '術科': ['鹿鳴術科考場']
  },
  '金門縣': {
    '學科': ['銘傳大學金門分部學科考場'],
    '術科': ['銘傳大學金門分部術科考場']
  },
  '基隆市': {
    '學科': ['崇右影藝科技大學學科考場'],
    '術科': ['崇右影藝科技大學術科考場']
  },
};

const venuePhotos = [
    {
      venueOptions: '民航局學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.1806269538383!2d121.54941947605134!3d25.06186633716756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abf1cf9f0e57%3A0x721005047f0b1a0c!2zMTA15Y-w5YyX5biC5p2-5bGx5Y2A5pWm5YyW5YyX6LevMzQw6Jmf!5e0!3m2!1szh-TW!2stw!4v1710398613946!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '新北市大新店飛行場術科考場',
      photoUrl:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3616.9729529424576!2d121.51556507604924!3d24.9670348409835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU4JzAxLjMiTiAxMjHCsDMxJzA1LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1711936861296!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '中國科大學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.043775501422!2d121.5521714760498!3d24.998628439713684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa13bbb77bc5%3A0xd5137b43b9a2b64d!2z5Lit5ZyL56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1710400034977!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '臺灣大學學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4547742936525!2d121.54021807605037!3d25.018636138908732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe636f7457d%3A0x68d7c16d197c9b2f!2z55Sf5qmf57O75LqM6aSoKOmEreaxn-aok-WNl-ajnyk!5e0!3m2!1szh-TW!2stw!4v1710400602758!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '臺灣大學學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4547742936525!2d121.54021807605037!3d25.018636138908732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe636f7457d%3A0x68d7c16d197c9b2f!2z55Sf5qmf57O75LqM6aSoKOmEreaxn-aok-WNl-ajnyk!5e0!3m2!1szh-TW!2stw!4v1710400602758!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '臺灣大學學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4547742936525!2d121.54021807605037!3d25.018636138908732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe636f7457d%3A0x68d7c16d197c9b2f!2z55Sf5qmf57O75LqM6aSoKOmEreaxn-aok-WNl-ajnyk!5e0!3m2!1szh-TW!2stw!4v1710400602758!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '華梵大學台北承德中心學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8665004000413!2d121.51588847605169!3d25.072513536738338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9493d869247%3A0x32c07f09eb39c8ce!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5om_5b636Lev5LiJ5q61MjMw6JmfOeaokw!5e0!3m2!1szh-TW!2stw!4v1710400691721!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '臺北市民航局行政大樓術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.1132344418484!2d121.55458027605127!3d25.064150937075503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abf375f2664d%3A0x431ae6c401d4e96!2zMTA15Y-w5YyX5biC5p2-5bGx5Y2A5pWm5YyW5YyX6LevNDA15be3MTIz5byEMTLomZ8!5e0!3m2!1szh-TW!2stw!4v1710400733352!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '臺北市中國科技大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.043775501422!2d121.5521714760498!3d24.998628439713684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa13bbb77bc5%3A0xd5137b43b9a2b64d!2z5Lit5ZyL56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1710400034977!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '新北市東南科技大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3615.8652644214712!2d121.60128107605003!3d25.00469383946985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAwJzE2LjkiTiAxMjHCsDM2JzEzLjkiRQ!5e0!3m2!1szh-TW!2stw!4v1710402007860!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '國立臺灣大學生農學院實驗農場安康考場術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3617.319712483948!2d121.52037507604882!3d24.955234841457276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU3JzE4LjgiTiAxMjHCsDMxJzIyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1710402063026!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '華梵大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3616.5389936878178!2d121.68745507604953!3d24.98179484039035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU4JzU0LjQiTiAxMjHCsDQxJzI0LjEiRQ!5e0!3m2!1szh-TW!2stw!4v1710402669017!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '新北市東南科技大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3615.8652644214712!2d121.60128107605003!3d25.00469383946985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAwJzE2LjkiTiAxMjHCsDM2JzEzLjkiRQ!5e0!3m2!1szh-TW!2stw!4v1710402007860!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '桃園市銘傳大學桃園校區術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3616.4384079039437!2d121.34057507604952!3d24.985214840252997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU5JzA2LjgiTiAxMjHCsDIwJzM1LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1710402165951!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '宜蘭大學學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3623.43370019655!2d121.7450050760444!3d24.746314849814294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ0JzQ2LjciTiAxMjHCsDQ0JzUxLjMiRQ!5e0!3m2!1szh-TW!2stw!4v1710402212478!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '宜蘭大學城南校區術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3623.672397561419!2d121.75051207604426!3d24.738124850140597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ0JzE3LjIiTiAxMjHCsDQ1JzExLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1710409781191!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '新竹縣中華無人機教育發展交流協會學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.904751414795!2d121.02803507604553!3d24.798714847724256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzU1LjQiTiAxMjHCsDAxJzUwLjIiRQ!5e0!3m2!1szh-TW!2stw!4v1710402295821!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '新竹縣中華無人機教育發展交流協會術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.904751414795!2d121.02803507604553!3d24.798714847724256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzU1LjQiTiAxMjHCsDAxJzUwLjIiRQ!5e0!3m2!1szh-TW!2stw!4v1710402295821!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '苗栗縣育達科技大學學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.1675682501823!2d120.84063707604219!3d24.65235985355182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM5JzA4LjUiTiAxMjDCsDUwJzM1LjYiRQ!5e0!3m2!1szh-TW!2stw!4v1710402345948!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '苗栗縣育達科技大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.1675682501823!2d120.84063707604219!3d24.65235985355182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM5JzA4LjUiTiAxMjDCsDUwJzM1LjYiRQ!5e0!3m2!1szh-TW!2stw!4v1710402345948!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '中科院臺中院區學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3639.5090527557795!2d120.64303507603222!3d24.188944871797844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDExJzIwLjIiTiAxMjDCsDM4JzQ0LjIiRQ!5e0!3m2!1szh-TW!2stw!4v1710402391067!5m2!1szh-TW!2stw"  
    },
    {
      venueOptions: '台灣發展研究院學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3640.271911805483!2d120.6333250760317!3d24.162194872841436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA5JzQzLjkiTiAxMjDCsDM4JzA5LjIiRQ!5e0!3m2!1szh-TW!2stw!4v1710402422076!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '台灣福爾摩沙無人飛行器協會學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3653.0999392010403!2d120.44636507602219!3d23.70812489039674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQyJzI5LjIiTiAxMjDCsDI2JzU2LjIiRQ!5e0!3m2!1szh-TW!2stw!4v1710402596826!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '台灣福爾摩沙無人飛行器協會場地術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3653.3868690722365!2d120.43899507602187!3d23.697874890789517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQxJzUyLjMiTiAxMjDCsDI2JzI5LjciRQ!5e0!3m2!1szh-TW!2stw!4v1710402633849!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '嘉義大學學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3659.7573697123585!2d120.48310507601704!3d23.469214899511833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI4JzA5LjIiTiAxMjDCsDI5JzA4LjUiRQ!5e0!3m2!1szh-TW!2stw!4v1710402731276!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '嘉義大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3660.062639831253!2d120.45379507601695!3d23.45820489992987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI3JzI5LjUiTiAxMjDCsDI3JzIyLjkiRQ!5e0!3m2!1szh-TW!2stw!4v1710402772499!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '遠東科大學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3670.850090376068!2d120.29432007600897!3d23.065956914706547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzU3LjQiTiAxMjDCsDE3JzQ4LjgiRQ!5e0!3m2!1szh-TW!2stw!4v1712022229992!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '遠東科技大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3670.850090376068!2d120.29432007600897!3d23.065956914706547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzU3LjQiTiAxMjDCsDE3JzQ4LjgiRQ!5e0!3m2!1szh-TW!2stw!4v1712022229992!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '實踐大學高雄校區學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3682.8454728189217!2d120.325955076!3d22.62224493114763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM3JzIwLjEiTiAxMjDCsDE5JzQyLjciRQ!5e0!3m2!1szh-TW!2stw!4v1710403041377!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '實踐大學高雄校區術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3675.2099723410024!2d120.46613507600574!3d22.90562492068098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU0JzIwLjIiTiAxMjDCsDI4JzA3LjQiRQ!5e0!3m2!1szh-TW!2stw!4v1710403075227!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '高苑科大學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3676.9860686106413!2d120.26439507600413!3d22.84000492311521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUwJzI0LjAiTiAxMjDCsDE2JzAxLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1710403108809!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '高苑科大術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3676.9860686106413!2d120.26439507600413!3d22.84000492311521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUwJzI0LjAiTiAxMjDCsDE2JzAxLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1710403108809!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '屏東縣屏東科技大學學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3681.882344265327!2d120.50900507600068!3d22.6581749298271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM5JzI5LjQiTiAxMjDCsDMwJzQxLjciRQ!5e0!3m2!1szh-TW!2stw!4v1710403168971!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '屏東縣屏東科技大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3684.122855768648!2d120.54728507599899!3d22.574507932899117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM0JzI4LjIiTiAxMjDCsDMyJzU5LjUiRQ!5e0!3m2!1szh-TW!2stw!4v1710403198731!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '東華大學創新研究園區學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3644.5966933168515!2d121.61510507602841!3d24.010014878758696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDAwJzM2LjAiTiAxMjHCsDM3JzAzLjciRQ!5e0!3m2!1szh-TW!2stw!4v1710403237371!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '東華大學壽豐校區術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3647.6776163213235!2d121.53139607602617!3d23.901047882974925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDU0JzAzLjgiTiAxMjHCsDMyJzAyLjMiRQ!5e0!3m2!1szh-TW!2stw!4v1710403391585!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '銘傳大學金門分部學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3630.535825356389!2d118.39848907603891!3d24.501534859524696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDMwJzA1LjUiTiAxMTjCsDI0JzAzLjgiRQ!5e0!3m2!1szh-TW!2stw!4v1710403575787!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '銘傳大學金門分部術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3630.535825356389!2d118.39848907603891!3d24.501534859524696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDMwJzA1LjUiTiAxMTjCsDI0JzAzLjgiRQ!5e0!3m2!1szh-TW!2stw!4v1710403575787!5m2!1szh-TW!2stw" 
    },
    {
      venueOptions: '崇右影藝科技大學學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.120521264688!2d121.75103617605279!3d25.131615934352528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzUzLjgiTiAxMjHCsDQ1JzEzLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1710404097828!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '崇右影藝科技大學術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.120521264688!2d121.75103617605279!3d25.131615934352528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzUzLjgiTiAxMjHCsDQ1JzEzLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1710404097828!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '鹿鳴學科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3675.453286161595!2d121.10002407600543!3d22.896645921014535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUzJzQ3LjkiTiAxMjHCsDA2JzA5LjQiRQ!5e0!3m2!1szh-TW!2stw!4v1711539235830!5m2!1szh-TW!2stw"
    },
    {
      venueOptions: '鹿鳴術科考場',
      photoUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3675.453286161595!2d121.10002407600543!3d22.896645921014535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUzJzQ3LjkiTiAxMjHCsDA2JzA5LjQiRQ!5e0!3m2!1szh-TW!2stw!4v1711539235830!5m2!1szh-TW!2stw"
    }
  ];

const venues = computed(() => {
  return venueOptions[selectedCity.value]?.[selectedDepartment.value] || [];
});

watch([selectedCity, selectedDepartment], () => {
  selectedVenue.value = venues.value[0];
});

  const selectedVenuePhotoUrl = computed(() => {
  if (selectedVenue.value) {
    const venuePhoto = venuePhotos.find(photo => photo.venueOptions === selectedVenue.value);
    return venuePhoto ? venuePhoto.photoUrl : null;
  }
  return null;
});



const { data: systemDataResponse, error: systemError } = useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetSystemRow/2');
const systemData = systemDataResponse;
console.log(systemData);

const { data: caaDataResponse, error: caaError } = useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetCaaRow/2');
const caaData = caaDataResponse;

const { data: regulaAndDocDataResponse, error: regulaAndDocError } = useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetRegulaAndDocRow/2');
const regulaAndDocData = regulaAndDocDataResponse;

if (systemError.value) {
  console.error('Error fetching system data:', systemError.value);
}
if (caaError.value) {
  console.error('Error fetching CAA data:', caaError.value);
}
if (regulaAndDocError.value) {
  console.error('Error fetching regula and doc data:', regulaAndDocError.value);
}
</script>

<template>
  <div class="container">
    <div class="banner-content d-flex justify-space-around">
      <v-sheet class="title-icon" color="transparent">
        <img src="/assets/images/icon/组 2.png" />
      </v-sheet>
      <v-sheet class="title font-pingfang text-white" color="transparent">
        飛行教育資源平台
      </v-sheet>
      <Nuxt-link to="/login"><v-sheet class="login-icon" color="transparent">
        <img src="/assets/images/icon/组 1147.png" />
      </v-sheet></Nuxt-link>
      
    </div>
    <v-carousel class="carousel" :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-row no-gutters>
      <v-col cols="8" style="background: #f0f0f0">
        <v-sheet class="custom-card-left ml-15 mt-10">
          <div class="">
            <div class="card">
              <div class="card-header font-pingfang">
                <img
                  src="/assets/images/icon/组 1151.png"
                  style="
                    width: 38px;
                    height: 36px;
                    top: 6px;
                    position: relative;
                  "
                  alt="icon"
                />
                最新消息
              </div>
              <div class="card-body">
                <div class="left-content">
                  <h5 class="font-pingfang">系統公告</h5>
                  <div v-for="announcement in systemData.systemAnnouncements" :key="announcement.id">
                    <p class="mt-9 text-subtitle-1">{{ announcement.expirationDate }}</p>
                    <p class="mt-3">{{ announcement.title }}</p>
                    <a :href="'https://maxs-fer.geosat.com.tw/PDF/' + announcement.fileName" download class="mb-5 mt-5">{{ announcement.content }}</a>
                    <!-- <a :href="'https://maxs-fer.geosat.com.tw/PDF/' + announcement.fileName" download>{{ announcement.fileName }}</a> -->
                    <v-divider></v-divider>
                  </div>
                  <div class="button-container">
                    <Nuxt-link to="/systemData" class="btn btn-primary">更多</Nuxt-link>
                  </div>
                </div>
                <div class="right-content">
                  <h5 class="font-pingfang">民航局公告</h5>
                  <div v-if="caaData && caaData.caaAnnouncements">
                    <div v-for="announcement in caaData.caaAnnouncements" :key="announcement.id">
                      <p class="mt-9 text-subtitle-1">{{ announcement.expirationDate }}</p>
                      <p class="mt-3">{{ announcement.title }}</p>
                      <!-- <p class="mb-5 mt-3">{{ announcement.content }}</p> -->
                      <v-divider></v-divider>
                    </div>
                  </div>
                  <div class="button-container">
                    <Nuxt-link to="/caaData" class="btn btn-primary">更多</Nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="4" style="background: #f0f0f0">
        <v-sheet class="custom-card-right mt-10">
          <div class="">
            <div class="card">
              <div class="card-header">
                <img
                  src="/assets/images/icon/组 1154.png"
                  style="
                    width: 38px;
                    height: 36px;
                    top: 6px;
                    position: relative;
                  "
                  alt="icon"
                />法規及文件
              </div>
              <div class="card-body">
                <div class="right-content">
                  <div v-for="announcement in regulaAndDocData.regulationsAndDocuments" :key="announcement.id">
                    <p class="mt-5 text-subtitle-1">{{ announcement.expirationDate }}</p>
                    <a :href="'https://maxs-fer.geosat.com.tw/PDF/' + announcement.content" download class="mt-5 mb-5">{{ announcement.title }}</a>
                    <v-divider></v-divider>
                  </div>
                  <div class="button-container">
                    <Nuxt-link to="/regulaAndDocData" class="btn btn-primary">更多</Nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>


    <div class="subjects-container">
      <div class="subjects" style="width: 830px;">
        <v-row> 
          <v-col cols="4"> 
            <v-select
            label="區域"
            :items="['北', '中', '南', '東', '離島']"
            v-model="selectedRegion"
          ></v-select></v-col>
          <v-col cols="4">
            <v-select
            label="縣市"
            :items="cities"
            v-model="selectedCity"
            :disabled="!selectedRegion"
          ></v-select></v-col>
          <v-col cols="4"> 
            <v-select
            label="科目"
            :items="['學科', '術科']"
            v-model="selectedDepartment"
            :disabled="!selectedCity"
          ></v-select></v-col>
         <v-col cols="12">
              <v-select
              class="venues"
              label="請選擇測驗的場地"
              :items="venues"
              v-model="selectedVenue"
              :disabled="!selectedCity || !selectedDepartment"
            ></v-select>
          </v-col>
        </v-row>
        </div>
        <div class="venue-image">
          <iframe :src="selectedVenuePhotoUrl" width="830" height="430" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="test-map" v-if="selectedDepartment === '術科'">
          <img src="/assets/images/map/组 1163.png">
        </div>
        <div class="taiwan-photo"><img :src="cityImageMap[selectedCity]"  :alt="selectedCity"></div>
    </div>
  </div>
</template>

<style scoped>
.banner-content {
  height: 100px;
  background-color: #153161;
}

.title-icon img {
  margin-top: 20px;
  margin-right: 400px;
}

.title {
  letter-spacing: 0;
  margin-top: 29px;
}

.login-icon {
  margin-top: 25px;
  margin-left: 400px;
  /* margin-right: 100px; */
}

.custom-card-left {
  width: 60vw; /* 70% of the viewport's width */
  height: 60vh; /* 50% of the viewport's height */
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px; /* 添加左边卡片的圆角 */
  margin-bottom: 100px;
}

.custom-card-right {
  width: 33vw; /* 30% of the viewport's width */
  height: 60vh; /* 50% of the viewport's height */
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px
}

.title-container {
  background-color: #153161;
}

.card-header {
  font:
    normal normal bold 30px/42px 'PingFang SC',
    sans-serif;
  padding: 10px;
  text-align: center;
  color: #fff;
  background-color: #153161;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-body {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.left-content,
.right-content {
  flex: 0 0 45%;
  /* margin-bottom: 100px; */
}

h5 {
  text-align: center;
  color: #B34712;
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-thickness: 0.15em;
}

.button-container {
  text-align: center;
}

.btn-primary {
  padding: 5px 14px;
  text-decoration: none;
  color: #fff;
  background-color: #B34712;
  border-radius: 25px;
  display: inline-block;
  margin-top: 15px;
}

.btn-primary:hover {
  background-color: #FFAA00;
}


.subjects-container {
  display: grid;
  grid-template-columns: (2, 1fr);
  grid-template-rows: 0.05fr 1fr 0 0;
}

.subjects {
  margin-left: 150px;
  margin-top: 30px;
  grid-row: 1/2;
  grid-column: 1/2;
} 

.v-select {
  background-color: #153161;
  color: #fcfbfb;
  border-radius: 15px;
  font-weight: bolder;
  height: 52px;
}
.venues {
  background-color: #E6E6E6;
  color: black;
  height: 55px;
  border-radius: 28px;
  grid-row: 2/3;
  grid-column: 1/2;
}

.venue-image {
  margin-left: 170px;
  margin-top: 20px;
  margin-bottom: 40px;
  grid-row: 2/3;
  grid-column: 1/2;
}

.taiwan-photo {
  /* margin-left: 180px; */
  grid-row: 1/3;
  grid-column: 2/3;
}

.test-map {
  grid-row: 2/3;
  grid-column: 1/2;
  margin-top: 490px;
  margin-left: 220px;
}
</style>
