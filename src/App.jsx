import {
  AppstoreOutlined,
  BuildOutlined,
  CheckCircleFilled,
  CloudServerOutlined,
  ExperimentOutlined,
  GlobalOutlined,
  HomeOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Collapse,
  ConfigProvider,
  Descriptions,
  Drawer,
  Flex,
  Grid,
  Layout,
  List,
  Menu,
  Row,
  Segmented,
  Space,
  Statistic,
  Table,
  Tabs,
  Tag,
  Timeline,
  Typography,
  theme,
} from 'antd';
import { useMemo, useState } from 'react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const navKeys = ['home', 'work', 'solutions', 'products', 'qa', 'about', 'contact'];

const copy = {
  th: {
    nav: {
      home: 'หน้าแรก',
      work: 'งานของเรา',
      solutions: 'โซลูชัน',
      products: 'สินค้า',
      qa: 'ถาม-ตอบ',
      about: 'เกี่ยวกับเรา',
      contact: 'ติดต่อ',
    },
    heroBadge: 'ก่อตั้ง พ.ศ. 2555',
    heroTitle: 'AQUEOUS CHEMPRO CO., LTD.',
    heroSubtitle: 'เคมีบำบัดน้ำอุตสาหกรรม สำหรับ RO, Boiler, Cooling และ Process Water',
    heroBody:
      'บริษัท เอเควียส เคมโปร จำกัด ผลิตและจัดจำหน่ายเคมีภัณฑ์บำบัดน้ำอุตสาหกรรม ทั้งวัตถุดิบและผลิตภัณฑ์สำเร็จรูปพร้อมใช้ ให้กับผู้ให้บริการระบบบำบัดน้ำและโรงงานที่ต้องการคุณภาพน้ำเสถียรในระยะยาว',
    ctaProducts: 'ดูรายการสินค้า',
    ctaContact: 'ติดต่อวิศวกร',
    statFounded: 'ปีที่ก่อตั้ง',
    statSolutions: 'กลุ่มงานหลัก',
    statProducts: 'รายการสินค้า',
    statSupport: 'ช่องทางติดต่อ',
    workTitle: 'งานของเรา',
    workBody:
      'Chempro สนับสนุนระบบน้ำในอุตสาหกรรมที่ต้องพึ่งพา Boiler, Cooling Evaporative Condenser, Chiller และ RO โดยเลือกเคมีให้เหมาะกับคุณภาพน้ำจริง เครื่องจักรรุ่นใหม่ และวัสดุในระบบที่แตกต่างกัน',
    solutionTitle: 'กลุ่มงานบำบัดน้ำของ Chempro',
    solutionBody:
      'Chempro มีผลิตภัณฑ์สำหรับ Water Clarification, Utility/Cooling/Boiler, Reverse Osmosis และการทำให้น้ำดี/น้ำเสียใสขึ้น โดยเลือกใช้เคมีตามปัญหาและคุณภาพน้ำจริง',
    productTitle: 'รายการผลิตภัณฑ์',
    productBody:
      'รายการสินค้าถูกแบ่งตามกลุ่ม Boiler, Cooling, RO และ Clarification พร้อมสรุปหน้าที่ของผลิตภัณฑ์ให้เข้าใจง่ายทั้งฝ่ายวิศวกรรม จัดซื้อ และผู้ให้บริการระบบบำบัดน้ำ',
    qaTitle: 'คำถามที่พบบ่อยจากงานจริง',
    qaBody:
      'คำถามด้าน Conductivity, pH, Boiler, RO Permeate และตะกรันใน Condenser ถูกเรียบเรียงให้ตอบตรงประเด็นและนำไปใช้คุยงานหน้าไซต์ได้ง่าย',
    aboutTitle: 'เกี่ยวกับ AQUEOUS CHEMPRO',
    aboutBody:
      'บริษัทเริ่มต้นในปี 2555 ด้วยการจัดหาเคมีสำหรับอุตสาหกรรมบำบัดน้ำ นำเข้าสินค้าจากผู้ผลิตที่เชื่อถือได้ และพัฒนาสูตรสำเร็จรูปเพื่อให้ลูกค้าใช้งานได้สะดวก',
    contactTitle: 'ติดต่อเรา',
    contactBody:
      'ติดต่อบริษัท เอเควียส เคมโปร จำกัด เพื่อสอบถามผลิตภัณฑ์ เคมีบำบัดน้ำอุตสาหกรรม และการทดสอบเลือกสารเคมีให้เหมาะกับคุณภาพน้ำของไซต์งาน',
    productTabAll: 'ทั้งหมด',
    tableProduct: 'สินค้า',
    tableGroup: 'กลุ่ม',
    tableType: 'ประเภท',
    tableUse: 'การใช้งาน',
    philosophyTitle: 'แนวคิดการทำงาน',
    contactCompany: 'บริษัท',
    contactAddress: 'ที่อยู่',
    contactEmail: 'อีเมล',
    contactPhone: 'โทรศัพท์',
    footerLine: 'Industrial Water Treatment Chemicals | RO | Cooling | Boiler | Process',
  },
  en: {
    nav: {
      home: 'Home',
      work: 'Our Work',
      solutions: 'Solutions',
      products: 'Products',
      qa: 'Q&A',
      about: 'About',
      contact: 'Contact',
    },
    heroBadge: 'Established in 2012',
    heroTitle: 'AQUEOUS CHEMPRO CO., LTD.',
    heroSubtitle: 'Industrial water treatment chemicals for RO, boiler, cooling and process water',
    heroBody:
      'Aqueous Chempro manufactures and distributes industrial water treatment chemicals, including raw materials and ready-to-use finished products, for water treatment service providers and factories that need stable water quality.',
    ctaProducts: 'View Products',
    ctaContact: 'Talk to Engineer',
    statFounded: 'Founded',
    statSolutions: 'Core solutions',
    statProducts: 'Product lines',
    statSupport: 'Contact channels',
    workTitle: 'Our Main Work',
    workBody:
      'Chempro supports industrial water systems such as boilers, cooling evaporative condensers, chillers and RO systems by matching chemical programs to actual water quality, modern machinery and mixed system materials.',
    solutionTitle: 'Chempro Water Treatment Solutions',
    solutionBody:
      'Chempro provides products for water clarification, utility/cooling/boiler water, reverse osmosis and water/wastewater clarification, with chemical selection based on actual water quality and site problems.',
    productTitle: 'Product List',
    productBody:
      'Products are grouped by boiler, cooling, RO and clarification applications, with concise use summaries for engineers, procurement teams and water treatment service providers.',
    qaTitle: 'Practical Q&A',
    qaBody:
      'Questions about conductivity, pH, boiler water, RO permeate and condenser scale are rewritten into direct, useful answers for site discussions.',
    aboutTitle: 'About AQUEOUS CHEMPRO',
    aboutBody:
      'The company started in 2012 to supply chemicals for the water treatment industry, import products from trustworthy manufacturers and process additives into finished products for practical use.',
    contactTitle: 'Contact Us',
    contactBody:
      'Contact Aqueous Chempro for industrial water treatment chemicals, product inquiries and chemical selection tests based on site water quality.',
    productTabAll: 'All',
    tableProduct: 'Product',
    tableGroup: 'Group',
    tableType: 'Type',
    tableUse: 'Use',
    philosophyTitle: 'Working Philosophy',
    contactCompany: 'Company',
    contactAddress: 'Address',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    footerLine: 'Industrial Water Treatment Chemicals | RO | Cooling | Boiler | Process',
  },
};

const groupLabels = {
  boiler: { th: 'Boiler', en: 'Boiler' },
  cooling: { th: 'Cooling', en: 'Cooling' },
  ro: { th: 'RO', en: 'RO' },
  clarify: { th: 'Clarification', en: 'Clarification' },
};

const solutionIcons = {
  clarification: <ExperimentOutlined />,
  utility: <ThunderboltOutlined />,
  ro: <CloudServerOutlined />,
  wastewater: <BuildOutlined />,
};

const solutions = [
  {
    key: 'clarification',
    image: '/assets/solution-wastewater.png',
    th: {
      title: 'Water Clarification System Chemicals',
      summary:
        'เคมีช่วยทำให้น้ำใสขึ้นโดยจัดการความขุ่น สิ่งปนเปื้อน และตะกอนแขวนลอยผ่านการใช้ Coagulant และการทดสอบ Jar Test',
      points: ['สารส้ม, PAC และ ACH สำหรับ Coagulant ชนิดอนินทรีย์', 'Organic Coagulant สำหรับตะกอนขนาดเล็ก', 'เหมาะกับน้ำผิวดิน น้ำเสีย สี อิมัลชัน น้ำมัน และไขมัน'],
      tags: ['Coagulant', 'PAC', 'ACH', 'Organic Coagulant'],
    },
    en: {
      title: 'Water Clarification System Chemicals',
      summary:
        'Chemicals for improving water clarity by handling turbidity, contaminants and suspended solids through coagulant selection and jar testing.',
      points: ['Alum, PAC and ACH as inorganic coagulants', 'Organic coagulants for fine suspended solids', 'Suitable for surface water, wastewater, color, emulsion, oil and grease issues'],
      tags: ['Coagulant', 'PAC', 'ACH', 'Organic Coagulant'],
    },
  },
  {
    key: 'utility',
    image: '/assets/solution-boiler.png',
    th: {
      title: 'Utility, Cooling & Boiler Water Chemicals',
      summary:
        'ระบบ Utility คือเส้นเลือดของโรงงาน เคมีที่เหมาะสมช่วยดูแล Boiler, Cooling Tower, Chiller และ Closed Loop ให้ทำงานต่อเนื่อง',
      points: ['Boiler: ป้องกันตะกรัน ยับยั้งสนิม และปรับสภาพคอนเดนเสต', 'Cooling: ควบคุมการกัดกร่อน ตะกรัน Deposit และจุลินทรีย์', 'ช่วยรักษาประสิทธิภาพการถ่ายเทความร้อนและลดภาระพลังงาน'],
      tags: ['Boiler', 'Cooling Tower', 'Chiller', 'Closed Loop'],
    },
    en: {
      title: 'Utility, Cooling & Boiler Water Chemicals',
      summary:
        'Utility water acts like a factory bloodstream. Proper chemical programs help boilers, cooling towers, chillers and closed loops run reliably.',
      points: ['Boiler: scale control, corrosion inhibition and condensate conditioning', 'Cooling: corrosion, scale, deposit and microbial control', 'Supports heat-transfer efficiency and energy management'],
      tags: ['Boiler', 'Cooling Tower', 'Chiller', 'Closed Loop'],
    },
  },
  {
    key: 'ro',
    image: '/assets/solution-ro.png',
    th: {
      title: 'Reverse Osmosis System Chemicals',
      summary:
        'RO ผลิตน้ำบริสุทธิ์โดยกรองผ่านเมมเบรนละเอียดประมาณ 0.0005 ไมครอน สารเคมีช่วยลด Scaling และ Fouling บนผิวเมมเบรน',
      points: ['ลดโอกาสเกิดตะกรันจากสารละลายเข้มข้นบนผิวเมมเบรน', 'ช่วยควบคุม Fouling จากอนุภาค สารอินทรีย์ และจุลินทรีย์', 'ผลิตภัณฑ์ RO Antiscalant ถูกใช้กับงานกรองน้ำสะอาดจากน้ำเสียรวมในนิคมอุตสาหกรรม'],
      tags: ['RO Antiscalant', 'Biocide', 'Cleaners', 'Membrane Care'],
    },
    en: {
      title: 'Reverse Osmosis System Chemicals',
      summary:
        'RO produces purified water through membranes of about 0.0005 micron. Chemical programs help reduce scaling and fouling on membrane surfaces.',
      points: ['Reduces scale risk from concentrated solutes at the membrane surface', 'Helps control fouling from particles, organics and microorganisms', 'RO antiscalant has been used in water reclamation from industrial-estate wastewater'],
      tags: ['RO Antiscalant', 'Biocide', 'Cleaners', 'Membrane Care'],
    },
  },
  {
    key: 'wastewater',
    image: '/assets/solution-cooling.png',
    th: {
      title: 'Chemical for Water & Wastewater Clarify',
      summary:
        'การเลือกสารเคมีสำหรับน้ำผิวดินและน้ำเสียควรพิจารณาลักษณะสิ่งปนเปื้อน ความขุ่น และผลทดสอบอัตราการใช้สารที่เหมาะสม',
      points: ['กรณีน้ำขุ่นพื้นฐานใช้ความขุ่นเป็นแนวทางตั้งต้น', 'กรณีซับซ้อนต้องทดสอบกับน้ำจริงก่อนเลือกสาร', 'รองรับงานลดสี น้ำมัน ไขมัน และตะกอนละเอียด'],
      tags: ['Jar Test', 'Wastewater', 'Turbidity', 'Sedimentation'],
    },
    en: {
      title: 'Chemical for Water & Wastewater Clarify',
      summary:
        'Chemical selection for surface water and wastewater should consider contaminants, turbidity and dosage testing on actual water samples.',
      points: ['Basic turbidity can guide initial coagulant dosage', 'Complex cases should be tested with real samples before selection', 'Supports color, oil, grease and fine-solid reduction'],
      tags: ['Jar Test', 'Wastewater', 'Turbidity', 'Sedimentation'],
    },
  },
];

const workItems = [
  {
    icon: <ToolOutlined />,
    th: {
      title: 'เลือกเคมีตามคุณภาพน้ำจริง',
      text: 'แหล่งน้ำตั้งต้นและวัสดุในระบบแตกต่างกัน จึงต้องเลือกสารให้เหมาะกับ Boiler, Cooling, Chiller และ RO แต่ละไซต์',
    },
    en: {
      title: 'Match chemicals to real water quality',
      text: 'Source water and system materials vary, so chemical selection should fit each boiler, cooling, chiller and RO site.',
    },
  },
  {
    icon: <SafetyCertificateOutlined />,
    th: {
      title: 'สินค้านำเข้าจากผู้ผลิตที่เชื่อถือได้',
      text: 'บริษัทนำเข้าผลิตภัณฑ์จากผู้ผลิตในเอเชียและยุโรป พร้อมควบคุมคุณภาพให้สม่ำเสมอ',
    },
    en: {
      title: 'Imported from trustworthy manufacturers',
      text: 'The company imports products from Asian and European manufacturers and focuses on consistent quality.',
    },
  },
  {
    icon: <GlobalOutlined />,
    th: {
      title: 'สนับสนุนโรงงานและผู้ให้บริการระบบ',
      text: 'กลุ่มลูกค้าหลักคือ Water Treatment Industry Service Provider และโรงงานที่ใช้ระบบบำบัดน้ำอุตสาหกรรม',
    },
    en: {
      title: 'Support for factories and service providers',
      text: 'Core customers include water treatment service providers and factories using industrial water treatment systems.',
    },
  },
];

const products = [
  {
    name: 'AQUASORB 4200',
    groups: ['cooling'],
    type: { th: 'Additive', en: 'Additive' },
    summary: {
      th: 'โพลิเมอร์กรดโมเลกุลต่ำ ละลายน้ำได้ดี ใช้ควบคุมตะกรันในสภาวะอุณหภูมิสูงและ pH สูง',
      en: 'Low molecular weight polymeric acid, water-miscible, used for scale control under high temperature and high pH conditions.',
    },
  },
  {
    name: 'DEHA 85%',
    groups: ['boiler'],
    type: { th: 'Additive / Oxygen Scavenger', en: 'Additive / Oxygen Scavenger' },
    summary: {
      th: 'Diethylhydroxylamine สำหรับดักจับออกซิเจนในระบบ Boiler ช่วยควบคุมการกัดกร่อน และมีความเป็นพิษต่ำกว่า Hydrazine',
      en: 'Diethylhydroxylamine oxygen scavenger for boiler corrosion control, with lower toxicity than hydrazine hydrate.',
    },
  },
  {
    name: 'AQUASPERSE 1640',
    groups: ['boiler', 'cooling'],
    type: { th: 'Additive / Dispersant', en: 'Additive / Dispersant' },
    summary: {
      th: 'สาร Dispersant ที่มีหมู่ Phosphonic และ Carboxylic ช่วยกระจาย Calcium Carbonate/Phosphate และยับยั้ง Sulfate/Silica Scale',
      en: 'Dispersant with phosphonic and carboxylic groups for calcium carbonate/phosphate dispersion and sulfate/silica scale inhibition.',
    },
  },
  {
    name: 'CHEMPRO KT',
    groups: ['cooling'],
    type: { th: 'Microbiocide', en: 'Microbiocide' },
    summary: {
      th: 'Biocide ประสิทธิภาพสูงแบบ Broad Spectrum ใช้ในระบบน้ำและงาน Preservative ที่ต้องควบคุมจุลินทรีย์',
      en: 'High-performance broad-spectrum biocide for water treatment and preservative applications where microbial control is required.',
    },
  },
  {
    name: 'MEFOS ONE',
    groups: ['cooling'],
    type: { th: 'Microbiocide', en: 'Microbiocide' },
    summary: {
      th: 'สารยับยั้งจุลินทรีย์ที่ละลายน้ำได้ดี มีเสถียรภาพ เก็บได้นาน และออกแบบให้มีพิษตกค้างต่ำ',
      en: 'Water-soluble antimicrobial reagent designed for stability, long storage life and low residual toxicity.',
    },
  },
  {
    name: 'AQUASPERSE 2000',
    groups: ['cooling'],
    type: { th: 'Antiscaling / Corrosion Inhibitor', en: 'Antiscaling / Corrosion Inhibitor' },
    summary: {
      th: 'โคพอลิเมอร์ Acrylic Acid และ AMPS ใช้ยับยั้งตะกรันและช่วยกระจาย Deposit ในระบบน้ำหล่อเย็น',
      en: 'Acrylic acid and AMPS copolymer for scale inhibition and deposit dispersion in cooling water systems.',
    },
  },
  {
    name: 'Phosphonate / PBTC / HEDP',
    groups: ['cooling'],
    type: { th: 'Antiscaling / Corrosion Inhibitor', en: 'Antiscaling / Corrosion Inhibitor' },
    summary: {
      th: 'กลุ่มสาร Phosphonate สำหรับควบคุมตะกรันและการกัดกร่อน โดย PBTC เป็นทางเลือกฟอสฟอรัสต่ำ',
      en: 'Phosphonate chemistry for scale and corrosion control, with PBTC as a lower-phosphorus option.',
    },
  },
  {
    name: 'CHEMPRO 2334',
    groups: ['cooling'],
    type: { th: 'Finished Product', en: 'Finished Product' },
    summary: {
      th: 'สารยับยั้งตะกรันและการกัดกร่อนชนิดน้ำสำหรับระบบ Open Recirculating Cooling Water โดยไม่ใช้โลหะหนัก',
      en: 'Non-heavy-metal liquid scale and corrosion inhibitor for open recirculating cooling water systems.',
    },
  },
  {
    name: 'CHEMPRO CKT',
    groups: ['cooling'],
    type: { th: 'Finished Product / Bactericide', en: 'Finished Product / Bactericide' },
    summary: {
      th: 'Bactericide สูตรน้ำสำหรับ Cooling Tower, Paper Process, Emulsion/Latex และผลิตภัณฑ์สูตรน้ำที่ต้องควบคุม Slime',
      en: 'Water-based bactericide for cooling towers, paper processes, emulsion/latex and other water-based products requiring slime control.',
    },
  },
  {
    name: 'CHEMPRO 1900 and series',
    groups: ['cooling'],
    type: { th: 'Finished Product', en: 'Finished Product' },
    summary: {
      th: 'กลุ่มผลิตภัณฑ์สำหรับควบคุมการเติบโตของจุลินทรีย์ สาหร่าย และ Biofilm ที่ลดประสิทธิภาพระบบหล่อเย็น',
      en: 'Product series for controlling microorganisms, algae and biofilm that reduce cooling system performance.',
    },
  },
  {
    name: 'CHEMPRO 2402',
    groups: ['cooling'],
    type: { th: 'Finished Product', en: 'Finished Product' },
    summary: {
      th: 'สารยับยั้งการกัดกร่อนและ Deposit ในระบบ Closed Loop ช่วยสร้างฟิล์มปกป้องผิวโลหะ Ferrous และ Copper Alloy',
      en: 'Corrosion and deposit inhibitor for closed-loop water, helping form protective films on ferrous and copper-alloy surfaces.',
    },
  },
  {
    name: 'CHEMPRO 2508 / 2518 / 2528',
    groups: ['boiler'],
    type: { th: 'Finished Product / Volatile Amine', en: 'Finished Product / Volatile Amine' },
    summary: {
      th: 'Volatile Amine สำหรับยับยั้งการกัดกร่อนในท่อคอนเดนเสตจากกรดคาร์บอนิก และช่วยปรับ pH',
      en: 'Volatile amines for inhibiting condensate-line corrosion from carbonic acid and adjusting pH.',
    },
  },
  {
    name: 'CHEMPRO 2503 / 2505',
    groups: ['boiler'],
    type: { th: 'Finished Product / Oxygen Scavenger', en: 'Finished Product / Oxygen Scavenger' },
    summary: {
      th: 'Oxygen Scavenger สำหรับ Boiler Corrosion Control มีความเป็นพิษต่ำกว่า Hydrazine และเหมาะกับการควบคุม Blowdown',
      en: 'Oxygen scavenger for boiler corrosion control, less toxic than hydrazine and suitable for blowdown management.',
    },
  },
  {
    name: 'CHEMPRO 2201 / 2203',
    groups: ['boiler'],
    type: { th: 'Finished Product / Antiscalant', en: 'Finished Product / Antiscalant' },
    summary: {
      th: 'สารป้องกันตะกรันสำหรับ Boiler ต่ำกว่า 800 psi ช่วยปรับสภาพ Calcium Scale ให้เป็น Sludge อ่อนและลดการเกาะบนผิวถ่ายเทความร้อน',
      en: 'Antiscalant for boilers below 800 psi, modifying calcium scale into soft sludge and reducing deposits on heat-transfer surfaces.',
    },
  },
  {
    name: 'CHEMPRO 5900 / 5910 / 5520 / 5522',
    groups: ['ro'],
    type: { th: 'RO Antiscalant / Biocide / Cleaners', en: 'RO Antiscalant / Biocide / Cleaners' },
    summary: {
      th: 'กลุ่มผลิตภัณฑ์ RO สำหรับป้องกันตะกรัน ควบคุม Deposit และช่วยดูแลเมมเบรนในระบบที่มีความเสี่ยงจาก Hardness และ Suspended Solids',
      en: 'RO product group for scale prevention, deposit control and membrane care where hardness and suspended solids create risk.',
    },
  },
  {
    name: 'HARDNESS INDICATOR',
    groups: ['clarify'],
    type: { th: 'Indicator', en: 'Indicator' },
    summary: {
      th: 'น้ำยาตรวจความกระด้างรวมจาก Calcium, Magnesium, Iron และโลหะอื่น แสดงสีเพื่อบอกการปนเปื้อนของความกระด้าง',
      en: 'Indicator for total hardness from calcium, magnesium, iron and other metals, using color change to show hardness contamination.',
    },
  },
  {
    name: 'Alum / PAC / ACH',
    groups: ['clarify'],
    type: { th: 'Inorganic Coagulant', en: 'Inorganic Coagulant' },
    summary: {
      th: 'กลุ่มสารตกตะกอนอนินทรีย์สำหรับช่วยทำให้น้ำใส ลดความขุ่น และช่วยแยกตะกอนออกจากน้ำ',
      en: 'Inorganic coagulants for improving water clarity, reducing turbidity and separating solids from water.',
    },
  },
  {
    name: 'Organic Coagulant',
    groups: ['clarify'],
    type: { th: 'Organic Coagulant', en: 'Organic Coagulant' },
    summary: {
      th: 'สารตกตะกอนอินทรีย์สำหรับจัดการตะกอนแขวนลอยขนาดเล็ก สี อิมัลชัน น้ำมัน และไขมันในน้ำ',
      en: 'Organic coagulant for fine suspended solids, color, emulsion, oil and grease issues in water.',
    },
  },
];

const faqItems = [
  {
    key: 'conductivity',
    th: {
      label: 'โรงงานผลิตน้ำดื่มมีน้ำดิบ Conductivity สูง มีสารตกตะกอนที่ไม่เพิ่มค่านี้หรือไม่?',
      children:
        'มีสารตกตะกอนบางชนิดที่ไม่ทำให้ค่าการนำไฟฟ้าเพิ่มขึ้น สามารถยืนยันด้วย Jar Test หลังตกตะกอนแล้วควรไม่มีสารตกค้าง เพราะสารตกค้างอาจทำให้ Conductivity สูงและทำให้รสชาติน้ำเปลี่ยนได้',
    },
    en: {
      label: 'If raw water has high conductivity, is there a coagulant that will not increase it?',
      children:
        'Yes. Some coagulants do not increase conductivity. A jar test can confirm the result, and avoiding residual coagulant also helps prevent taste changes in treated water.',
    },
  },
  {
    key: 'ph',
    th: {
      label: 'pH คืออะไร และสำคัญกับระบบน้ำอย่างไร?',
      children:
        'pH เกี่ยวข้องกับปริมาณไฮโดรเจนไอออนในน้ำ ค่า pH มีผลโดยตรงต่อกลไกการป้องกันสนิมและตะกรันในเครื่องจักรที่สัมผัสกับน้ำ',
    },
    en: {
      label: 'What is pH and why is it important?',
      children:
        'pH relates to the hydrogen ion level in water. It strongly affects corrosion and scale control mechanisms in equipment that contacts water.',
    },
  },
  {
    key: 'boiler-ph',
    th: {
      label: 'น้ำป้อนและน้ำใน Boiler มี pH สูงเกินเกณฑ์ ควรแก้อย่างไร?',
      children:
        'สาเหตุหนึ่งคือแหล่งน้ำมี Total Alkalinity สูง เมื่อได้รับความร้อน pH จะสูงขึ้นเร็ว การเลือกสารเคมีและวิธีป้อนที่เหมาะสมช่วยบรรเทาปัญหาได้',
    },
    en: {
      label: 'How should high pH in boiler feedwater and boiler water be handled?',
      children:
        'One common cause is high total alkalinity in source water. Once heated, pH can rise quickly. Proper chemical selection and feeding methods can reduce the issue.',
    },
  },
  {
    key: 'ro-ph',
    th: {
      label: 'ทำไม RO Permeate มักมี pH ต่ำลง?',
      children:
        'RO ลดไบคาร์บอเนตในน้ำได้ แต่ CO2 ยังผ่านเมมเบรนได้และกลายเป็นกรดคาร์บอนิก จึงทำให้ pH ลดลง Chempro มีเคมี Food Grade สำหรับปรับ pH น้ำ RO ให้เป็นกลาง',
    },
    en: {
      label: 'Why does RO permeate often have lower pH?',
      children:
        'RO reduces bicarbonate, while CO2 can still pass through the membrane and form carbonic acid. This lowers pH. Chempro offers food-grade chemistry for RO pH adjustment.',
    },
  },
  {
    key: 'condenser-scale',
    th: {
      label: 'Condenser มีตะกรันในท่อเล็ก แต่หยุดเครื่องล้างไม่ได้ เคมีช่วยได้ไหม?',
      children:
        'เคมี Cooling และ Boiler บางกลุ่มสามารถยึดเกาะและแทรกซึมตะกรัน ทำให้โครงสร้างผลึกหลวมลง เมื่อใช้อย่างต่อเนื่องประมาณ 2-3 เดือน ตะกรันจะค่อย ๆ หลุดร่อนและการแลกเปลี่ยนความร้อนดีขึ้น',
    },
    en: {
      label: 'Can chemicals reduce scale in condenser tubes when shutdown is not possible?',
      children:
        'Some cooling and boiler treatments can penetrate accumulated scale and loosen the crystal structure. With continuous use for about 2-3 months, scale can gradually flake away and heat exchange can improve.',
    },
  },
];

const timelineItems = {
  th: [
    { color: 'blue', children: '2555: ก่อตั้งบริษัทและเริ่มจัดหาเคมีสำหรับอุตสาหกรรมบำบัดน้ำ' },
    { color: 'cyan', children: 'นำเข้าสินค้าจากผู้ผลิตที่เชื่อถือได้ทั้งในเอเชียและยุโรป' },
    { color: 'green', children: 'พัฒนาวัตถุดิบเป็นผลิตภัณฑ์สำเร็จรูปสำหรับ RO, Cooling, Boiler และ Process' },
    { color: 'gold', children: '2560: RO Anti-scaling Chemical ถูกใช้เป็นส่วนหนึ่งในงาน Water Reclamation จากน้ำเสียในนิคมอุตสาหกรรมภาคตะวันออก' },
  ],
  en: [
    { color: 'blue', children: '2012: Founded to supply chemicals for the water treatment industry' },
    { color: 'cyan', children: 'Imported products from trustworthy manufacturers in Asia and Europe' },
    { color: 'green', children: 'Processed additives into finished products for RO, cooling, boiler and process applications' },
    { color: 'gold', children: '2017: RO anti-scaling chemistry became part of water reclamation work for industrial-estate wastewater in Thailand eastern region' },
  ],
};

const philosophy = {
  th: ['แบ่งปันความรู้จากประสบการณ์จริง', 'จัดหาสินค้าจากผู้ผลิตโดยตรงและดูแลอย่างรับผิดชอบ', 'รักษาคุณภาพให้ใช้งานได้สม่ำเสมอ', 'เลือกแนวทางที่คุ้มค่ากับงบประมาณ'],
  en: ['Share ideas from practical experience', 'Source goods from direct manufacturers with responsible care', 'Sustain workable quality', 'Provide value that is worthy for the budget'],
};

const contact = {
  company: 'AQUEOUS CHEMPRO CO., LTD.',
  address: '71/303 PRUKSA49/1 MOO5, SAO THONG HIN, BANGYAI, NONTHABURI, 11140',
  email: 'pisarns89@gmail.com',
  phones: ['086-888-3859', '066-149-9146'],
};

function scrollToSection(key) {
  document.getElementById(key)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function SectionHeading({ kicker, title, children }) {
  return (
    <div className="section-heading">
      <Text className="section-kicker">{kicker}</Text>
      <Title level={2}>{title}</Title>
      {children ? <Paragraph>{children}</Paragraph> : null}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('th');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productGroup, setProductGroup] = useState('all');
  const screens = useBreakpoint();
  const t = copy[lang];

  const menuItems = navKeys.map((key) => ({
    key,
    label: t.nav[key],
  }));

  const filteredProducts = useMemo(() => {
    if (productGroup === 'all') return products;
    return products.filter((product) => product.groups.includes(productGroup));
  }, [productGroup]);

  const productColumns = [
    {
      title: t.tableProduct,
      dataIndex: 'name',
      key: 'name',
      width: 230,
      render: (name) => <Text strong>{name}</Text>,
    },
    {
      title: t.tableGroup,
      dataIndex: 'groups',
      key: 'groups',
      width: 190,
      render: (groups) => (
        <Flex gap={6} wrap="wrap">
          {groups.map((group) => (
            <Tag color={group === 'ro' ? 'blue' : group === 'boiler' ? 'volcano' : group === 'cooling' ? 'cyan' : 'green'} key={group}>
              {groupLabels[group][lang]}
            </Tag>
          ))}
        </Flex>
      ),
    },
    {
      title: t.tableType,
      dataIndex: 'type',
      key: 'type',
      width: 230,
      render: (type) => type[lang],
    },
    {
      title: t.tableUse,
      dataIndex: 'summary',
      key: 'summary',
      render: (summary) => summary[lang],
    },
  ];

  const menu = (
    <Menu
      mode={screens.lg ? 'horizontal' : 'vertical'}
      selectable={false}
      items={menuItems}
      onClick={({ key }) => {
        scrollToSection(key);
        setDrawerOpen(false);
      }}
    />
  );

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#0d7c8a',
          colorInfo: '#1f9bb4',
          colorSuccess: '#2f855a',
          colorWarning: '#d97706',
          colorText: '#17324d',
          colorTextSecondary: '#5b6b7c',
          colorBgLayout: '#f6f8fb',
          borderRadius: 8,
          fontFamily:
            '"Segoe UI", "Noto Sans Thai", "Leelawadee UI", Tahoma, Arial, sans-serif',
        },
        components: {
          Button: { borderRadius: 8, controlHeight: 42 },
          Card: { borderRadiusLG: 8 },
          Menu: {
            horizontalItemSelectedColor: '#0d7c8a',
            horizontalItemHoverColor: '#0d7c8a',
          },
        },
      }}
    >
      <Layout className="site-layout">
        <Header className="site-header">
          <button className="brand" type="button" onClick={() => scrollToSection('home')} aria-label="CHEMPRO home">
            <span className="brand-mark">CP</span>
            <span className="brand-text">
              <strong>CHEMPRO</strong>
              <small>AQUEOUS CHEMPRO CO., LTD.</small>
            </span>
          </button>

          <nav className="desktop-nav" aria-label="Main navigation">
            {menu}
          </nav>

          <Space className="header-actions" size="small">
            <Segmented
              size="small"
              value={lang}
              onChange={setLang}
              options={[
                { label: 'TH', value: 'th' },
                { label: 'EN', value: 'en' },
              ]}
            />
            <Button type="primary" icon={<PhoneOutlined />} onClick={() => scrollToSection('contact')}>
              {lang === 'th' ? 'โทร' : 'Call'}
            </Button>
            <Button
              className="mobile-menu-button"
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation"
            />
          </Space>
        </Header>

        <Drawer title="CHEMPRO" open={drawerOpen} onClose={() => setDrawerOpen(false)} placement="right">
          {menu}
          <div className="drawer-contact">
            <Text strong>{contact.company}</Text>
            <Button block type="primary" href={`tel:${contact.phones[0].replaceAll('-', '')}`} icon={<PhoneOutlined />}>
              {contact.phones[0]}
            </Button>
          </div>
        </Drawer>

        <Content>
          <section id="home" className="hero-section">
            <div className="container">
              <Row gutter={[32, 32]} align="middle">
                <Col xs={24} lg={13}>
                  <Space direction="vertical" size="large" className="hero-copy">
                    <Tag color="cyan" className="hero-badge">
                      {t.heroBadge}
                    </Tag>
                    <div>
                      <Title>{t.heroTitle}</Title>
                      <Paragraph className="hero-subtitle">{t.heroSubtitle}</Paragraph>
                      <Paragraph className="hero-description">{t.heroBody}</Paragraph>
                    </div>
                    <Space wrap>
                      <Button type="primary" size="large" icon={<AppstoreOutlined />} onClick={() => scrollToSection('products')}>
                        {t.ctaProducts}
                      </Button>
                      <Button size="large" icon={<PhoneOutlined />} onClick={() => scrollToSection('contact')}>
                        {t.ctaContact}
                      </Button>
                    </Space>
                    <Flex gap="small" wrap="wrap">
                      {['RO Antiscalant', 'Cooling', 'Boiler', 'Process Chemicals'].map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Flex>
                  </Space>
                </Col>
                <Col xs={24} lg={11}>
                  <div className="hero-visual">
                    <img src="/assets/hero-water-treatment.png" alt="Industrial water treatment system" />
                    <div className="hero-visual-panel">
                      <Text strong>{lang === 'th' ? 'ผลิตภัณฑ์คุณภาพสม่ำเสมอ' : 'Consistent product quality'}</Text>
                      <Text>{lang === 'th' ? 'สำหรับผู้ให้บริการบำบัดน้ำและโรงงานอุตสาหกรรม' : 'For water treatment service providers and factories'}</Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>

          <section className="trust-band" aria-label="Chempro summary">
            <div className="container">
              <Row gutter={[16, 16]}>
                {[
                  { value: lang === 'th' ? '2555' : '2012', label: t.statFounded, icon: <HomeOutlined /> },
                  { value: '4', label: t.statSolutions, icon: <SettingOutlined /> },
                  { value: products.length, label: t.statProducts, icon: <ExperimentOutlined /> },
                  { value: '2', label: t.statSupport, icon: <PhoneOutlined /> },
                ].map((metric) => (
                  <Col xs={12} lg={6} key={metric.label}>
                    <Card bordered={false} className="metric-card">
                      <Space align="center">
                        <span className="metric-icon">{metric.icon}</span>
                        <Statistic value={metric.value} title={metric.label} />
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          <section id="work" className="page-section">
            <div className="container">
              <SectionHeading kicker={t.nav.work} title={t.workTitle}>
                {t.workBody}
              </SectionHeading>
              <Row gutter={[18, 18]}>
                {workItems.map((item) => (
                  <Col xs={24} md={8} key={item[lang].title}>
                    <Card className="work-card">
                      <Space direction="vertical" size="middle">
                        <span className="feature-icon">{item.icon}</span>
                        <Title level={3}>{item[lang].title}</Title>
                        <Paragraph>{item[lang].text}</Paragraph>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          <section id="solutions" className="page-section section-contrast">
            <div className="container">
              <SectionHeading kicker={t.nav.solutions} title={t.solutionTitle}>
                {t.solutionBody}
              </SectionHeading>
              <Row gutter={[20, 20]}>
                {solutions.map((solution) => (
                  <Col xs={24} md={12} key={solution.key}>
                    <Card className="solution-card" cover={<img src={solution.image} alt={solution[lang].title} />}>
                      <Space direction="vertical" size="middle">
                        <Space align="center">
                          <span className="feature-icon">{solutionIcons[solution.key]}</span>
                          <Title level={3}>{solution[lang].title}</Title>
                        </Space>
                        <Paragraph>{solution[lang].summary}</Paragraph>
                        <List
                          split={false}
                          dataSource={solution[lang].points}
                          renderItem={(point) => (
                            <List.Item>
                              <Space align="start">
                                <CheckCircleFilled className="check-icon" />
                                <Text>{point}</Text>
                              </Space>
                            </List.Item>
                          )}
                        />
                        <Flex gap="small" wrap="wrap">
                          {solution[lang].tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </Flex>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          <section id="products" className="page-section">
            <div className="container">
              <SectionHeading kicker={t.nav.products} title={t.productTitle}>
                {t.productBody}
              </SectionHeading>
              <Tabs
                className="product-tabs"
                activeKey={productGroup}
                onChange={setProductGroup}
                items={[
                  { key: 'all', label: t.productTabAll },
                  { key: 'boiler', label: groupLabels.boiler[lang] },
                  { key: 'cooling', label: groupLabels.cooling[lang] },
                  { key: 'ro', label: groupLabels.ro[lang] },
                  { key: 'clarify', label: groupLabels.clarify[lang] },
                ].map((tab) => ({
                  ...tab,
                  children: (
                    <Table
                      rowKey="name"
                      columns={productColumns}
                      dataSource={filteredProducts}
                      pagination={false}
                      scroll={{ x: 860 }}
                    />
                  ),
                }))}
              />
            </div>
          </section>

          <section id="qa" className="page-section section-contrast">
            <div className="container">
              <SectionHeading kicker={t.nav.qa} title={t.qaTitle}>
                {t.qaBody}
              </SectionHeading>
              <Collapse
                size="large"
                items={faqItems.map((item) => ({
                  key: item.key,
                  label: item[lang].label,
                  children: <Paragraph>{item[lang].children}</Paragraph>,
                }))}
              />
            </div>
          </section>

          <section id="about" className="page-section">
            <div className="container">
              <SectionHeading kicker={t.nav.about} title={t.aboutTitle}>
                {t.aboutBody}
              </SectionHeading>
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <Card className="timeline-card">
                    <Timeline items={timelineItems[lang]} />
                  </Card>
                </Col>
                <Col xs={24} lg={12}>
                  <Card className="philosophy-card">
                    <Space direction="vertical" size="middle">
                      <Title level={3}>{t.philosophyTitle}</Title>
                      <List
                        split={false}
                        dataSource={philosophy[lang]}
                        renderItem={(item) => (
                          <List.Item>
                            <Space align="start">
                              <CheckCircleFilled className="check-icon" />
                              <Text>{item}</Text>
                            </Space>
                          </List.Item>
                        )}
                      />
                    </Space>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>

          <section id="contact" className="page-section contact-section">
            <div className="container">
              <Row gutter={[28, 28]} align="top">
                <Col xs={24} lg={9}>
                  <SectionHeading kicker={t.nav.contact} title={t.contactTitle}>
                    {t.contactBody}
                  </SectionHeading>
                </Col>
                <Col xs={24} lg={15}>
                  <Card className="contact-card">
                    <Descriptions column={1} bordered size="middle">
                      <Descriptions.Item label={t.contactCompany}>{contact.company}</Descriptions.Item>
                      <Descriptions.Item label={t.contactAddress}>
                        <Space align="start">
                          <EnvironmentOutlined />
                          <span>{contact.address}</span>
                        </Space>
                      </Descriptions.Item>
                      <Descriptions.Item label={t.contactEmail}>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </Descriptions.Item>
                      <Descriptions.Item label={t.contactPhone}>
                        <Space wrap>
                          {contact.phones.map((phone) => (
                            <Button key={phone} href={`tel:${phone.replaceAll('-', '')}`} icon={<PhoneOutlined />}>
                              {phone}
                            </Button>
                          ))}
                        </Space>
                      </Descriptions.Item>
                    </Descriptions>
                    <Flex gap="small" wrap="wrap" className="contact-actions">
                      <Button type="primary" href={`mailto:${contact.email}`} icon={<MailOutlined />}>
                        {contact.email}
                      </Button>
                      <Button href={`tel:${contact.phones[1].replaceAll('-', '')}`} icon={<PhoneOutlined />}>
                        {contact.phones[1]}
                      </Button>
                    </Flex>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>
        </Content>

        <Footer className="site-footer">
          <div className="container footer-content">
            <Space direction="vertical" size={2}>
              <Text strong>CHEMPRO</Text>
              <Text>{t.footerLine}</Text>
            </Space>
            <Flex gap="small" wrap="wrap">
              {['RO', 'Cooling', 'Boiler', 'Clarification'].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Flex>
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
