window.settings = {
  i18n: {
    defaultlocale: 'en',
    /* Set to 'browser' to use browser locale */
    languages: ['en', 'fr'],
    showLangSwitch: true,
    /* set to true to show the language switcher */
  },
  quicklinks: [
    {
      title: {
        en: 'Request a service',
        fr: 'Demander un service',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
    },
    {
      title: {
        en: 'Make a payment',
        fr: 'Faire un paiement',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
    },
    {
      title: {
        en: 'Update billing',
        fr: 'Mettre a jour ses informations de paiment',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
    },
    {
      title: {
        en: 'Proof of insurance',
        fr: "Certificat d'assurance",
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
    },
    {
      title: {
        en: 'Update your profile',
        fr: 'Mettre a jour votre profil',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
    },
  ],
  billpay: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hidebillpay: false,
  },
  todo: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hideactivity: false,
  },
  homeheroaction: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    pega_userid: '',
    pega_pwd: '',
    extraparam: '',
  },
  users: [
    {
      username: 'joe@pegasystems.com',
      password: 'rules',
      img: 'avatar-1.jpg',
      company_name: '',
      name: '',
      accountID: '',
      contactID: '',
      pega_userid: 'jsmith',
      pega_pwd: 'rules',
      load_by_default: true,
    },
    {
      username: 'mary@pegasystems.com',
      password: 'rules',
      img: 'avatar-2.jpg',
      company_name: '',
      name: '',
      accountID: '',
      contactID: '',
      pega_userid: 'mtaylor',
      pega_pwd: 'rules',
      load_by_default: false,
    },
  ],
  pega_chat: {
    SSAConfigName: '',
    WCBConfigName: '',
    WebChatBotID: '',
    ApplicationName: '',
    MashupURL: '',
    CoBrowseServerURL: '',
    CoBrowseToken: '',
  },
  pega_marketing: {
    Host: '',
    Port: '',
    homePage: {
      containerName: 'TopOffers',
      maxOffers: 3,
    },
    accountPage: {
      containerName: 'TopOffers',
      maxOffers: 1,
    },
    phonePage: {
      containerName: 'TopOffers',
      maxOffers: 1,
    },
  },
};
