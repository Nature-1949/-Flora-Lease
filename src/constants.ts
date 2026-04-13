import { Plant, Service } from './types';

export const MOCK_PLANTS: Plant[] = [
  {
    id: '1',
    name: '步步高升 · 发财树',
    scientificName: 'Pachira aquatica',
    description: '招财绿植，寓意事业蒸蒸日上。',
    price: 39,
    image: '/images/plant-1-pachira.svg',
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
    image: '/images/plant-2-fiddle.svg',
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
    image: '/images/plant-3-schefflera.svg',
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
    image: '/images/plant-4-orchid.svg',
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
