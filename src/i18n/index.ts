import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'About',
        services: 'Services',
        team: 'Team',
        partners: 'Partners',
        blog: 'Blog',
        careers: 'Careers',
        contact: 'Contact'
      },
      
      // Hero Section
      hero: {
        ehms: {
          title: 'Electronic Health Management System',
          subtitle: 'Comprehensive healthcare management solution for modern medical facilities',
          cta: 'Request Demo'
        },
        adecare: {
          title: 'AdeCare - Home-Based Healthcare',
          subtitle: 'A New Era of Home-Based Healthcare. Compassionate, convenient care without compromising on professionalism.',
          cta: 'Learn More'
        },
        gpos: {
          title: 'GPOS - Point of Sale System',
          subtitle: 'Complete retail management solution with integrated payment processing',
          cta: 'Get Started'
        }
      },
      
      // Products Section
      products: {
        title: 'Our Products',
        subtitle: 'Innovative locally developed solutions for African businesses',
        ehms: {
          title: 'eHMS - Electronic Health Management System',
          description: 'A locally developed, comprehensive and integrated healthcare management system designed for healthcare facilities looking to enhance the quality of their healthcare services by moving from manual to automated business processes.'
        },
        adecare: {
          title: 'AdeCare - Home-Based Healthcare',
          description: 'A comprehensive digital healthcare ecosystem tailored for individuals seeking compassionate, convenient care without compromising on professionalism. Healthcare no longer needs to be restricted to hospitals.'
        },
        gpos: {
          title: 'GPOS - Point of Sale System',
          description: 'The right point of sale system vital for any retail or wholesale business. With GPOS, management can accomplish controls of business sales, inventory, expenses, and more with greater proficiency.'
        },
        gpesa: {
          title: 'G-Pesa - Digital Payment Solution',
          description: 'Integrated payment system connecting banks and mobile networks with an intuitive business interface built with ERP design for complete business automation.'
        },
        gappointment: {
          title: 'G-Appointment - Electronic Appointment System',
          description: 'State-of-the-art electronic appointment management system allowing patients to request doctor or clinic appointments from their location convenience.'
        },
        gqueue: {
          title: 'G-Queue - Queue Management System',
          description: 'Electronic queue management solution designed specifically for healthcare environments with real-time analytics and multilingual support.'
        },
        gtele: {
          title: 'G-TELE - Telemedicine Solution',
          description: 'Remote diagnosing and treatment platform enabling healthcare professionals to evaluate, diagnose and treat patients at a distance with secure file sharing.'
        }
      },
      
      // About Section
      about: {
        title: 'About GPITG',
        vision: {
          title: 'Our Vision',
          content: 'We are Tanzanians organization with the dream to witness transformation of public and private operations through use of locally made and supported ICT solutions.'
        },
        mission: {
          title: 'Our Mission',
          content: 'To provide Information Technology advisory services & custom software development services from simple to complex and integrated business processes.'
        },
        values: {
          title: 'Our Values',
          content: 'Collectively as company, our clients come first! We carefully listen to their needs, creatively analyze their desires and swiftly act to deliver the required solutions.'
        }
      },
      
      // Services Section
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive ICT solutions and consulting services',
        projectManagement: {
          title: 'Project Management',
          description: 'We have assisted organizational projects in terms of risk management, scheduling management, communications management, leadership, quality management, cost management and much more.'
        },
        systemDesign: {
          title: 'System Design & Development',
          description: 'We design and develop e-Systems that cater for African actual needs and requirements. This concept is pretty vibrant and it is already happening whereby all our clients are plentifully succeeding.'
        },
        systemsIntegration: {
          title: 'Systems Integration',
          description: 'GPITG is equipped with innovative engineers\' team that has lengthy experience and strong knowledge with amazing skills to make various organizational IT systems to "talk to each other".'
        },
        implementation: {
          title: 'Systems Implementation & Support',
          description: 'We deeply understand the importance of quality implementation and support thereafter. Once deployed, we provide clients with the escalation matrix to assist them.'
        }
      },
      
      // Stats Section
      stats: {
        revenue: '300%+ Revenue Increase',
        hospitals: '20+ Hospitals Served',
        years: '5+ Years of Innovation',
        clients: '100+ Happy Clients'
      },
      
      // Contact Section
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch with our team',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          message: 'Message',
          product: 'Product Interest',
          submit: 'Send Message',
          success: 'Message sent successfully!',
          error: 'Please fill in all required fields.'
        },
        support: {
          software: 'Software Support',
          integration: 'Integration Support',
          training: 'Training Support',
          general: 'General Inquiries'
        }
      },
      
      // Footer
      footer: {
        copyright: '© 2025 GPITG. All rights reserved.',
        description: 'Innovative ICT Solutions for Africa'
      },
      
      // Common
      common: {
        learnMore: 'Learn More',
        getStarted: 'Get Started',
        requestDemo: 'Request Demo',
        loading: 'Loading...',
        close: 'Close'
      }
    }
  },
  sw: {
    translation: {
      // Navigation
      nav: {
        home: 'Nyumbani',
        products: 'Bidhaa',
        about: 'Kuhusu',
        services: 'Huduma',
        team: 'Timu',
        partners: 'Washirika',
        blog: 'Blogu',
        careers: 'Kazi',
        contact: 'Mawasiliano'
      },
      
      // Hero Section
      hero: {
        ehms: {
          title: 'Mfumo wa Usimamizi wa Afya Elektroniki',
          subtitle: 'Suluhisho kamili la usimamizi wa huduma za afya kwa vituo vya kisasa vya matibabu',
          cta: 'Omba Mfano'
        },
        adecare: {
          title: 'AdeCare - Huduma za Afya Nyumbani',
          subtitle: 'Enzi Mpya ya Huduma za Afya Nyumbani. Huduma za huruma na urahisi bila kupunguza utaalamu.',
          cta: 'Jifunze Zaidi'
        },
        gpos: {
          title: 'GPOS - Mfumo wa Mauzo',
          subtitle: 'Suluhisho kamili la usimamizi wa biashara na malipo yaliyounganishwa',
          cta: 'Anza Sasa'
        }
      },
      
      // Products Section
      products: {
        title: 'Bidhaa Zetu',
        subtitle: 'Suluhisho za ubunifu zilizotengenezwa ndani ya nchi kwa biashara za Afrika',
        ehms: {
          title: 'eHMS - Mfumo wa Usimamizi wa Afya Elektroniki',
          description: 'Mfumo uliokuzwa ndani ya nchi, kamili na ulioungana wa usimamizi wa huduma za afya uliobuniwa kwa vituo vya afya vinavyotaka kuboresha ubora wa huduma zao za afya kwa kuhamia kutoka kwa mikakati ya miwani hadi ya otomatiki.'
        },
        adecare: {
          title: 'AdeCare - Huduma za Afya Nyumbani',
          description: 'Mfumo kamili wa dijiti wa huduma za afya uliobuniwa kwa watu wanaotafuta huduma za huruma na urahisi bila kupunguza utaalamu. Huduma za afya hazihitaji kuzuiliwa hospitali tu.'
        },
        gpos: {
          title: 'GPOS - Mfumo wa Mauzo',
          description: 'Mfumo sahihi wa mauzo muhimu kwa biashara yoyote ya reja au jumla. Kwa GPOS, menejimenti inaweza kufikia udhibiti wa mauzo ya biashara, hesabu, gharama, na zaidi kwa ujuzi mkuu.'
        },
        gpesa: {
          title: 'G-Pesa - Suluhisho la Malipo ya Dijiti',
          description: 'Mfumo wa malipo ulioungana unaoungana benki na mitandao ya simu na kiolesura cha biashara chenye ubunifu uliojengwa na muundo wa ERP kwa otomatiki kamili ya biashara.'
        },
        gappointment: {
          title: 'G-Appointment - Mfumo wa Miadi Elektroniki',
          description: 'Mfumo wa hali ya juu wa usimamizi wa miadi elektroniki unaoruhusu wagonjwa kuomba miadi ya daktari au kliniki kutoka kwa urahisi wa mahali pao.'
        },
        gqueue: {
          title: 'G-Queue - Mfumo wa Usimamizi wa Foleni',
          description: 'Suluhisho la usimamizi wa foleni elektroniki lililobuniwa kwa mazingira ya afya na uchambuzi wa wakati halisi na msaada wa lugha nyingi.'
        },
        gtele: {
          title: 'G-TELE - Suluhisho la Telemedicine',
          description: 'Jukwaa la utambuzi na matibabu ya mbali linalowapa wataalamu wa afya uweza wa kutathmini, kutambua na kutibu wagonjwa kwa mbali kwa kushiriki faili salama.'
        }
      },
      
      // About Section
      about: {
        title: 'Kuhusu GPITG',
        vision: {
          title: 'Maono Yetu',
          content: 'Sisi ni shirika la Watanzania lenye ndoto ya kushuhudia mabadiliko ya shughuli za umma na za kibinafsi kupitia matumizi ya suluhisho za TEHAMA zilizoundwa na kuungwa mkono ndani ya nchi.'
        },
        mission: {
          title: 'Dhamira Yetu',
          content: 'Kutoa huduma za ushauri wa Teknolojia ya Habari na huduma za ukuzaji wa programu maalum kutoka kwa michakato rahisi hadi ngumu na iliyounganishwa ya biashara.'
        },
        values: {
          title: 'Maadili Yetu',
          content: 'Kwa pamoja kama kampuni, wateja wetu wanakuja kwanza! Tunasikiliza kwa makini mahitaji yao, tunachanganua kwa ubunifu masikiliko yao na tunatenda haraka kutoa suluhisho zinazohitajika.'
        }
      },
      
      // Services Section
      services: {
        title: 'Huduma Zetu',
        subtitle: 'Suluhisho kamili za TEHAMA na huduma za ushauri',
        projectManagement: {
          title: 'Usimamizi wa Mradi',
          description: 'Tumesaidia miradi ya shirika katika usimamizi wa hatari, usimamizi wa ratiba, usimamizi wa mawasiliano, uongozi, usimamizi wa ubora, usimamizi wa gharama na mengi zaidi.'
        },
        systemDesign: {
          title: 'Muundo na Ukuzaji wa Mfumo',
          description: 'Tunamuunda na kukuza mifumo ya e-Systems inayojali mahitaji halisi ya Afrika. Wazo hili ni dhahiri na tayari linafanyika ambapo wateja wetu wote wanafanikiwa vizuri.'
        },
        systemsIntegration: {
          title: 'Ushirikishaji wa Mifumo',
          description: 'GPITG ina timu ya wahandisi wa ubunifu wenye uzoefu mrefu na ujuzi mkuu wa ajabu wa kufanya mifumo mbalimbali ya TEHAMA ya shirika "kuzungumza kwa wao" kupitia teknolojia za ushirikishaji.'
        },
        implementation: {
          title: 'Utekelezaji na Msaada wa Mifumo',
          description: 'Tunaelewa kwa undani umuhimu wa utekelezaji wa ubora na msaada baadaye. Baada ya kupelekwa, tunawapa wateja jedwali la kupandisha ili kuwasaidia kutufikia.'
        }
      },
      
      // Stats Section
      stats: {
        revenue: '300%+ Ongezeko la Mapato',
        hospitals: '20+ Hospitali Zilizotumika',
        years: '5+ Miaka ya Ubunifu',
        clients: '100+ Wateja Wenye Furaha'
      },
      
      // Contact Section
      contact: {
        title: 'Wasiliana Nasi',
        subtitle: 'Ungana na timu yetu',
        form: {
          name: 'Jina Kamili',
          email: 'Anwani ya Barua Pepe',
          message: 'Ujumbe',
          product: 'Bidhaa ya Maslahi',
          submit: 'Tuma Ujumbe',
          success: 'Ujumbe umetumwa kwa ufanisi!',
          error: 'Tafadhali jaza uga zote zinazohitajika.'
        },
        support: {
          software: 'Msaada wa Programu',
          integration: 'Msaada wa Ushirikishaji',
          training: 'Msaada wa Mafunzo',
          general: 'Maswali ya Jumla'
        }
      },
      
      // Footer
      footer: {
        copyright: '© 2025 GPITG. Haki zote zimehifadhiwa.',
        description: 'Suluhisho za TEHAMA za Ubunifu kwa Afrika'
      },
      
      // Common
      common: {
        learnMore: 'Jifunze Zaidi',
        getStarted: 'Anza Sasa',
        requestDemo: 'Omba Mfano',
        loading: 'Inapakia...',
        close: 'Funga'
      }
    }
  }
};

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;