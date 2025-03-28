// 资源数据
const resources = {
    regulations: [
        {
            title: "Customs Administration DG Management",
            titleZh: "海关总署危险货物管理",
            url: "http://www.customs.gov.cn",
            description: "China Import/Export DG Regulatory Database",
            descriptionZh: "中国进出口危险品监管政策库",
            tags: ["Customs Regulation", "Import/Export"],
            tagsZh: ["海关监管", "进出口"],
            isHot: true,
            isRecommended: true
        },
        {
            title: "GB 12268-2012 Dangerous Goods List",
            titleZh: "GB 12268-2012 危险货物品名表",
            url: "http://openstd.samr.gov.cn",
            description: "China's Core Classification Standard for DG Transport",
            descriptionZh: "中国危险品运输核心分类标准",
            tags: ["China Regulations", "Transport Classification"],
            tagsZh: ["中国法规", "运输分类"]
        },
        {
            title: "MOT Dangerous Goods Transport",
            titleZh: "交通运输部危险货物运输",
            url: "https://www.mot.gov.cn",
            description: "China's Transport Management Regulations for DG",
            descriptionZh: "中国危险品运输管理条例与规定",
            tags: ["Transport Management", "Regulations"],
            tagsZh: ["运输管理", "法规"]
        },
        {
            title: "OSHA Hazard Communication",
            titleZh: "OSHA危险化学品管理",
            url: "https://www.osha.gov/hazcom",
            description: "US Core Regulations for Hazardous Chemicals",
            descriptionZh: "美国危险化学品管理核心法规",
            tags: ["US Regulations", "GHS"],
            tagsZh: ["美国法规", "GHS"]
        },
        {
            title: "EU CLP Regulation",
            titleZh: "欧盟CLP法规",
            url: "https://echa.europa.eu/clp",
            description: "EU Classification, Labelling and Packaging Regulation",
            descriptionZh: "欧盟化学品分类标签核心法规",
            tags: ["EU Regulations", "CLP"],
            tagsZh: ["欧盟法规", "CLP"]
        },
        {
            title: "IMDG Code",
            titleZh: "国际海运危险品规则",
            url: "https://www.imo.org",
            description: "International Maritime Dangerous Goods Code (2024)",
            descriptionZh: "国际海运危险品规则（最新2024版）",
            tags: ["Maritime Transport", "IMO"],
            tagsZh: ["国际海运", "IMO"]
        },
        {
            title: "ADR 2023",
            titleZh: "欧洲陆运危险品协定",
            url: "https://unece.org/transport/dangerous-goods",
            description: "European Agreement on DG Transport by Road",
            descriptionZh: "欧洲陆运危险品协定书",
            tags: ["Road Transport", "ADR"],
            tagsZh: ["国际陆运", "ADR"]
        },
        {
            title: "GB 13690-2009 Chemical Classification",
            titleZh: "GB 13690-2009 化学品分类",
            url: "http://c.gb688.cn",
            description: "China GHS Implementation Standard",
            descriptionZh: "中国GHS实施标准",
            tags: ["China Standards", "GHS"],
            tagsZh: ["中国标准", "GHS"]
        },
        {
            title: "EPA 40 CFR 355",
            titleZh: "美国环保署应急报告法规",
            url: "https://www.epa.gov",
            description: "US Emergency Planning and Notification",
            descriptionZh: "美国危险物质应急报告法规",
            tags: ["US EPA", "Emergency"],
            tagsZh: ["美国环保", "应急"]
        },
        {
            title: "GHS Rev.7",
            titleZh: "GHS第七修订版",
            url: "https://unece.org/ghs-rev7-2017",
            description: "UN Globally Harmonized System of Classification",
            descriptionZh: "联合国全球化学品统一分类",
            tags: ["International Standards", "GHS"],
            tagsZh: ["国际标准", "GHS"]
        }
    ],
    tools: [
        {
            title: "UN Number Query Tool",
            titleZh: "UN号查询工具",
            url: "https://www.dgcheck.com/un-number",
            description: "Quick Query System for DG UN Numbers",
            descriptionZh: "危险品UN编号快速查询系统",
            tags: ["UN Number", "Query Tool"],
            tagsZh: ["UN号", "查询工具"]
        },
        {
            title: "GHS Label Generator",
            titleZh: "GHS标签生成器",
            url: "https://www.chemsafetypro.com/label",
            description: "Multilingual GHS Label Creation Tool",
            descriptionZh: "多语言GHS标签在线制作工具",
            tags: ["GHS Labels", "Multilingual"],
            tagsZh: ["GHS标签", "多语言"]
        },
        {
            title: "ECHA Substance Search",
            titleZh: "ECHA分类查询",
            url: "https://echa.europa.eu/search-for-chemicals",
            description: "EU Official Chemical Database",
            descriptionZh: "欧盟化学品官方数据库",
            tags: ["EU Certification", "Database"],
            tagsZh: ["欧盟认证", "数据库"]
        },
        {
            title: "DG Transport Calculator",
            titleZh: "危险品运输计算器",
            url: "https://www.dangerousgoods.org",
            description: "DG Packaging and Transport Limit Calculator",
            descriptionZh: "危险品包装与运输限量计算",
            tags: ["Transport Calculation", "Limits"],
            tagsZh: ["运输计算", "限量"]
        },
        {
            title: "SDS Online Creator",
            titleZh: "SDS在线制作",
            url: "https://www.msdsonline.com",
            description: "Safety Data Sheet Smart Generation System",
            descriptionZh: "安全数据表智能生成系统",
            tags: ["SDS Creation", "Compliance"],
            tagsZh: ["SDS制作", "合规"]
        },
        {
            title: "IATA DG Regulations",
            titleZh: "IATA危险品查询",
            url: "https://www.iata.org/dgr",
            description: "Air Transport DG Regulations Query",
            descriptionZh: "航空运输危险品规则查询",
            tags: ["Air Transport", "IATA"],
            tagsZh: ["空运规则", "IATA"]
        },
        {
            title: "CAS Number Converter",
            titleZh: "CAS号转换工具",
            url: "https://commonchemistry.cas.org",
            description: "Chemical Substance Identification Conversion System",
            descriptionZh: "化学物质标识转换系统",
            tags: ["CAS Number", "Conversion"],
            tagsZh: ["CAS号", "转换"]
        },
        {
            title: "Chemical Compatibility Checker",
            titleZh: "危险品兼容性检查",
            url: "https://cameochemicals.noaa.gov",
            description: "Chemical Storage Compatibility Analysis",
            descriptionZh: "化学品存储兼容性分析",
            tags: ["Compatibility", "Storage"],
            tagsZh: ["兼容性", "存储"]
        },
        {
            title: "Emergency Response Guide",
            titleZh: "应急响应指南",
            url: "https://www.phmsa.dot.gov",
            description: "DG Incident Emergency Response Guide",
            descriptionZh: "危险品事故应急处置指南",
            tags: ["Emergency Response", "Guide"],
            tagsZh: ["应急响应", "指南"]
        },
        {
            title: "Packaging Performance Testing",
            titleZh: "包装性能测试",
            url: "https://www.sgs.com",
            description: "UN Packaging Test Standards Query",
            descriptionZh: "UN包装测试标准查询",
            tags: ["Packaging Testing", "UN"],
            tagsZh: ["包装测试", "UN"]
        }
    ],
    data: [
        {
            title: "Emergency Management Department Registration",
            titleZh: "应急管理部化学品登记",
            url: "https://www.nrcc.com.cn",
            description: "China Official Hazardous Chemicals Database",
            descriptionZh: "中国官方危险化学品数据库",
            tags: ["Domestic Authority", "Registration"],
            tagsZh: ["国内权威", "登记"]
        },
        {
            title: "China Hazardous Chemicals Forum",
            titleZh: "中国危险化学品论坛",
            url: "http://www.chemhazard.com",
            description: "Professional Hazardous Chemicals Technical Exchange Platform",
            descriptionZh: "专业危化品技术交流平台",
            tags: ["Technical Exchange", "Forum"],
            tagsZh: ["技术交流", "论坛"]
        },
        {
            title: "PubChem Database",
            titleZh: "PubChem数据库",
            url: "https://pubchem.ncbi.nlm.nih.gov",
            description: "NIH Chemical Substance Database",
            descriptionZh: "NIH化学物质数据库",
            tags: ["Research Data", "Open"],
            tagsZh: ["科研数据", "开放"]
        },
        {
            title: "ICSC Safety Cards",
            titleZh: "ICSC安全卡",
            url: "http://www.ilo.org/icsc",
            description: "International Chemical Safety Card Database",
            descriptionZh: "国际化学品安全卡数据库",
            tags: ["Safety Card", "Multilingual"],
            tagsZh: ["安全卡", "多语言"]
        },
        {
            title: "China Hazardous Waste List",
            titleZh: "中国危废名录",
            url: "https://www.mee.gov.cn",
            description: "Hazardous Waste Management Directory Database",
            descriptionZh: "危险废物管理名录数据库",
            tags: ["Waste Management", "Directory"],
            tagsZh: ["危废管理", "名录"]
        }
    ],
    services: [
        {
            title: "DG Manager Alliance",
            titleZh: "危险品管理师联盟",
            url: "http://www.dgm.org.cn",
            description: "Professional DG Management Exchange Platform",
            descriptionZh: "专业危险品管理交流平台",
            tags: ["Career Development", "Exchange"],
            tagsZh: ["职业发展", "交流"]
        },
        {
            title: "DG Training Certification",
            titleZh: "DG培训认证",
            url: "https://www.dgacademy.com",
            description: "IATA/IMO Certified Training Institution",
            descriptionZh: "IATA/IMO认证培训机构",
            tags: ["Training Certification", "Professional"],
            tagsZh: ["培训认证", "专业"]
        },
        {
            title: "Hazardous Goods Compliance Consulting",
            titleZh: "危险品合规咨询",
            url: "https://www.chemadvisor.com",
            description: "Global Chemical Compliance Services",
            descriptionZh: "全球化学品合规服务",
            tags: ["Compliance Consulting", "Global"],
            tagsZh: ["合规咨询", "全球"]
        },
        {
            title: "Packaging Testing Services",
            titleZh: "包装检测服务",
            url: "https://www.sgs.com",
            description: "UN Packaging Certification Testing Services",
            descriptionZh: "UN包装认证检测服务",
            tags: ["Packaging Testing", "Certification"],
            tagsZh: ["包装检测", "认证"]
        },
        {
            title: "Emergency Response Services",
            titleZh: "应急响应服务",
            url: "https://www.dgmsystems.com",
            description: "24/7 DG Emergency Response",
            descriptionZh: "24小时危险品应急处置",
            tags: ["Emergency Services", "Professional"],
            tagsZh: ["应急服务", "专业"]
        }
    ]
};

// 语言配置
const i18n = {
    en: {
        "site.title": "DG Info Navigator",
        "search.placeholder": "Search resources...",
        "search.button": "Search",
        "categories.regulations": "Regulations & Standards",
        "categories.tools": "Professional Tools",
        "categories.data": "Data Platforms",
        "categories.services": "Industry Services",
        "footer.copyright": "© 2025 DG Info Navigator. All rights reserved."
    },
    zh: {
        "site.title": "危险品信息导航",
        "search.placeholder": "搜索资源...",
        "search.button": "搜索",
        "categories.regulations": "法规标准",
        "categories.tools": "专业工具",
        "categories.data": "数据平台",
        "categories.services": "行业服务",
        "footer.copyright": "© 2025 危险品信息导航。保留所有权利。"
    }
};

let currentLang = 'en';

// 修改语言切换函数，移除热门标签相关代码
function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18n[lang][key];
    });

    // 更新占位符文本
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = i18n[lang][key];
    });

    // 重新渲染资源列表
    renderResources();
}

// 渲染资源卡片
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    const title = currentLang === 'en' ? resource.title : resource.titleZh;
    const description = currentLang === 'en' ? resource.description : resource.descriptionZh;
    const tags = currentLang === 'en' ? resource.tags : resource.tagsZh;
    
    // 添加徽章
    let badges = '';
    if (resource.isHot) {
        badges += `<span class="badge badge-hot">${currentLang === 'en' ? 'Hot' : '热门'}</span>`;
    }
    if (resource.isRecommended) {
        badges += `<span class="badge badge-recommend">${currentLang === 'en' ? 'Recommended' : '推荐'}</span>`;
    }
    
    card.innerHTML = `
        ${badges}
        <h3><a href="${resource.url}" target="_blank">${title}</a></h3>
        <p>${description}</p>
        <div class="tags">
            ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    return card;
}

// 渲染所有资源
function renderResources() {
    Object.keys(resources).forEach(category => {
        const container = document.getElementById(category);
        if (container) {
            container.innerHTML = '';
            resources[category].forEach(resource => {
                container.appendChild(createResourceCard(resource));
            });
        }
    });
}

// 搜索功能
function performSearch(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    
    Object.keys(resources).forEach(category => {
        const container = document.getElementById(category);
        if (container) {
            container.innerHTML = '';
            const filteredResources = resources[category].filter(resource => {
                const title = currentLang === 'en' ? resource.title : resource.titleZh;
                const description = currentLang === 'en' ? resource.description : resource.descriptionZh;
                const tags = currentLang === 'en' ? resource.tags : resource.tagsZh;
                
                return title.toLowerCase().includes(searchTerm) || 
                       description.toLowerCase().includes(searchTerm) ||
                       tags.some(tag => tag.toLowerCase().includes(searchTerm));
            });
            
            filteredResources.forEach(resource => {
                container.appendChild(createResourceCard(resource));
            });
        }
    });
}

// 修改页面加载初始化
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
    
    // 添加搜索按钮点击效果
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput && searchInput.value.trim()) {
                // 执行搜索
                performSearch(searchInput.value.trim());
            }
        });
    }
    
    // 添加搜索输入框回车键触发搜索
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim()) {
                performSearch(searchInput.value.trim());
            }
        });
    }
}); 