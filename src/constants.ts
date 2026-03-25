import { Plant, Service } from './types';

export const MOCK_PLANTS: Plant[] = [
  {
    id: '1',
    name: '步步高升 · 发财树',
    scientificName: 'Pachira aquatica',
    description: '招财绿植，寓意事业蒸蒸日上。',
    price: 39,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujke7-HP-V25Vs-8LbgulCx_MitfwYb4Axraj_dsQ9z7S9slFdAKFqIq6GOlmwX6acNy9BKxlqtN7QU49gqgYURsIoUVBBvCQiMiG3N7YQitZakeYs4FsI6lVwv4kI1sAGVWWA-n59A93a9mdyaFTds6NY4-D7z6QLAwPLjP_pmuatBbloZxKTdTbRO5EnrT9nvhiawYTRsHRh-QtC0_ZGsWSaeNQi4fW1v-KLloFpiJER1BpJQ5o6MtnwNvhaE2Q8WRJXAJfR8r0g',
    tags: ['免押金', '包含养护'],
    maintenanceInfo: '喜光耐旱，需充足散射光',
    viewingPeriod: '四季常青，观赏期长',
    story: '发财树作为经典的室内观叶植物，以其独特的编织树干和翠绿的掌状复叶著称。它不仅能净化空气，更被赋予了财源广进的美好寓意。'
  },
  {
    id: '2',
    name: '北欧风情 · 琴叶榕',
    scientificName: 'Ficus lyrata',
    description: '网红绿植，北欧简约风格首选。',
    price: 59,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uitCBS6z6ulI3mrkaA9Qy6YazprsTQuL6KJtzbPPMsnTF6VVov4z7-BqQAv-rzs1oIJushebjHjNIoGzPxu8okQ74x9PNcYrqRsJcys87NjOBbHgCU5t9cbzI77t70QoADqCBDD_KJaPFtoKCqF-t-jH7uBa6gEzfRl0ucr8FAs84cCcWbkBigAFfbJPsi_TdS-BYW1EYpF7xJl9i1Vn_rGgYLW45pzx87LEbnfwl0ck-EthaXworDkLkMnHoBLPeItyeglDE2biRs',
    tags: ['企业租摆', '专业打理'],
    maintenanceInfo: '喜温暖湿润，避免阳光直射',
    viewingPeriod: '叶片硕大，极具雕塑感',
    story: '琴叶榕因叶片形似提琴而得名，是近年来室内设计的宠儿。它那宽大、波浪状的叶片能瞬间提升空间的艺术气息。'
  },
  {
    id: '3',
    name: '岚枝舒袖 · 鸭脚木',
    scientificName: 'Schefflera arboricola',
    description: '禅意之美，大叶伞造型。',
    price: 88,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhAQCEJdnqIwjVnN-AqGnjxSvJNkelQ4R91TWMYo0w6CUB95aNmul9o3m3gkMLHGzM24dZVFjmKi0rmGFsj7UiqcraJSgtG205Dk2Yi7HqpyLNCzoiTE0b_z9WPM_JJ7DpLaj_XD9oCJXqqR0DxOTNmdeuh2blCAiTZuro3-O24gWXdkQvRUXOyKUPWoaTk5EalAFVqGjG4TJWKvosyM4xWJiNFB4n0m5oI32IyxK-qrq9-XayK-YUZD0ibXxBJoaQqvuXRfI7ZrTA',
    tags: ['免押金', '包含养护'],
    maintenanceInfo: '耐阴性强，适应性广',
    viewingPeriod: '姿态优美，层次分明',
    story: '鸭脚木又称鹅掌柴，其叶片如伞状散开，形态飘逸。在东方文化中，它常被用于营造静谧、深邃的禅意空间。'
  },
  {
    id: '4',
    name: '黄蝉兰 · 锦绣年华',
    scientificName: 'Cymbidium hookerianum',
    description: '精致之选，花期持久。',
    price: 129,
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujmMBDPKlD5IvMNEkcpvCSUeTudoqk5b7I1_62NlZ2zV5bh9Zp4_-ytH0r5IqerE06Rj15NIYWLdcV_A48tnlipFz3L8yhoni0MylD81WR0x-LcVs1VLPzDWLsDWvLRGnklQjOj7YTlttXqCwBsi6fVbtxLvdNUrsrJqIOcpDoZNluYrvtMd7ALBaBWq6BbTeQLjTO-gpcac8KKF33XotdYoVgb3iKfjBb7j9bOcHghgn1nI9kMrw0s0bG8XQQJflqKKnRH9StDbW4',
    tags: ['精致之选', '定期更换'],
    maintenanceInfo: '喜凉爽湿润，需充足散射光',
    viewingPeriod: '花期持久，可达40-60天',
    story: '黄蝉兰以其幽长的花序与淡雅的鹅黄，诠释了中式美学的极致静谧。它是高端商务洽谈区与私人书房的最佳伴侣。'
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 's1',
    title: '每周常规巡检',
    assignedTo: '青诚',
    status: 'pending',
    time: '09:30 AM',
    date: '2026-04-12',
    type: 'inspection'
  },
  {
    id: 's2',
    title: '叶片清洁与修剪',
    assignedTo: '系统',
    status: 'completed',
    time: '02:00 PM',
    date: '2026-04-05',
    type: 'cleaning'
  }
];
